import $ from 'jquery';
import _ from 'lodash';
import swal from 'sweetalert2';
import config from '../config';
import b2bCart from './b2bCart';

const apiRootUrl = config.apiRootUrl;
const bypass_store_hash = config.storeHash;

if ($("#b2b_loading_overlay_cart").length == 0) {
    $("body").append(`<div class="b2b-loading-overlay-cart" id="b2b_loading_overlay_cart">
    </div>`);
}
const $overlay = $("#b2b_loading_overlay_cart");


// get advance quantity state - if advance quantity is enabled for the store
function getAdvQtyState() {
    return new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: `${apiRootUrl}/getAdvQtyStatus?store_hash=${bypass_store_hash}`,
            success: (data) => {
                if (data.code == '200' && data.response.is_enable == "True") {
                    console.log("AdvQtyActive Enabled");
                    res();
                } else {
                    rej(data);
                }

            },
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(JSON.stringify(jqXHR));
            }
        });
    });
}

// get advance quantity by multi skus
// skus: array
function getAdvQtyBySkus(skus_arr) {
    return new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: `${apiRootUrl}/getAdvQtyList?store_hash=${bypass_store_hash}&variant_skus=${skus_arr.join(",")}`,
            success: (data) => {
                console.log("AdvQtyActive Lists", data);
                if (data.code == '200') {
                    res(data.response.productQuantityList);
                } else {
                    rej(data);
                }
            },
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(JSON.stringify(jqXHR));
            }
        });
    });
}

function validateAdvQty($input, $submitBtn) {
    const $messageContainer = $input.attr("adv-message-tip") == "true" ? $("#adv_tip") : $input.parent();
    const qty = parseInt($input.val()) || 1;
    const minQty = parseInt($input.attr("data-adv-min-qty"), 10) || 1;
    const incrementQty = parseInt($input.attr("data-adv-increment-qty"), 10) || 1;
    const $cartBtn = $input.siblings("[advqty-card-addtocart]");
    const $listUpdate = $("#update_list_items");
    const $listAddToCart = $("#add_to_cart");
    const $listAddToList = $("#add_items_to_list");

    const $minQtyMsg = $messageContainer.find("[data-min-qty-msg]");
    const $incrementQtyMsg = $messageContainer.find("[data-increment-qty-msg]");

    let invalidCount = 0;
    if (qty < minQty) {
        $minQtyMsg.addClass("not-valid-advqty");
        $input.addClass("not-valid-min");
        invalidCount++;
    } else {
        $minQtyMsg.removeClass("not-valid-advqty");
        $input.removeClass("not-valid-min");

    }
    if ((qty % incrementQty) !== 0) {
        $incrementQtyMsg.addClass("not-valid-advqty");
        $input.addClass("not-valid-inc");
        invalidCount++;
    } else {
        $incrementQtyMsg.removeClass("not-valid-advqty");
        $input.removeClass("not-valid-inc");
    }

    if (invalidCount > 0) {
        //$input.siblings("button[data-action]").prop("disabled", true);
        $cartBtn.prop("disabled", true);
        if ($submitBtn && $submitBtn.length > 0) {
            $submitBtn.prop("disabled", true);
        }

    } else {
        //$input.siblings("button[data-action]").prop("disabled", false);
        $cartBtn.prop("disabled", false);
        if ($submitBtn && $submitBtn.length > 0) {
            $submitBtn.prop("disabled", false);
        }

    }

    if ($("#shopping_list_table").find("input.qty").hasClass("not-valid-inc") || $("#shopping_list_table").find("input.qty").hasClass("not-valid-min") || $("#shopping_list_table").find("input.qty").hasClass("invalidAdvQty")) {
        $listUpdate.attr("disabled", true);
        $listAddToCart.attr("disabled", true);
    } else {
        $listUpdate.removeAttr("disabled");
        $listAddToCart.removeAttr("disabled");
    }

    if ($("[product-search-result-table]").find("input.qty").hasClass("not-valid-inc") || $("#shopping_list_table").find("input.qty").hasClass("not-valid-min") || $("#shopping_list_table").find("input.qty").hasClass("invalidAdvQty")) {
        $listUpdate.attr("disabled", true);
        $listAddToCart.attr("disabled", true);
    } else {
        $listUpdate.removeAttr("disabled");
        $listAddToCart.removeAttr("disabled");
    }

    return invalidCount;
}

function showMultiValideMessage($inputs, message) {
    let invalidCount = 0;
    $inputs.toArray().forEach(input => {
        const $input = $(input);
        const qty = Number($input.val());
        const minQty = parseInt($input.attr("data-adv-min-qty"), 10) || 1;
        const incrementQty = parseInt($input.attr("data-adv-increment-qty"), 10) || 1;
        // check interval qty
        if (qty < minQty || (qty % incrementQty) !== 0) {
            invalidCount++;
            $input.addClass("invalidAdvQty");
        }
    });

    // alert customer
    if (invalidCount !== 0) {
        swal({
            text: message || `Please review your cart, one or more items have an invalid quantity.`,
            type: 'error',
        });
    }
}

/**
 * handle quantity changes
 * 文本框触发change事件，或者点击加减按钮的时候调用，
 *     验证当前quantity, 如果不符合规则，弹窗提示并修正数量
 * params:
 *    event: event/null, event: 如果是事件触发的, null: 如果是直接调用的
 *    $_input: 如果是直接调用的， 传相关的input元素
 *    hideAlert: true/false, 是否隐藏弹框提示信息 （页面初始化的时候有的地方会用到这个方法修正数量， 直接弹框不友好， 所以不弹窗）
 */
function handleQuantityChange(event, $_input, hideAlert) {
    const $target = event == null ? $_input : $(event.currentTarget);
    const $input = $target.parent().find("input");
    let quantityMin = parseInt($input.data('quantityMin'), 10) || 1;
    const quantityMax = parseInt($input.data('quantityMax'), 10) || 0;
    const advQuantityMIn = parseInt($input.attr('data-adv-min-qty'), 10) || 1;
    const advQuantityIncrement = parseInt($input.attr('data-adv-increment-qty'), 10) || 1;

    let qty = parseInt($input.val(), 10) || 1;
    let invalidCount;


    // get min qty by advQuantityMIn and advQuantityIncrement
    quantityMin = getMinQty(advQuantityMIn, advQuantityIncrement);

    const $incrementOverlay = $input.siblings("[data-advqty-increment-overlay]");

    // if user clicked a button, increment or decrement the qty
    if ($target.hasClass('button')) {
        /*if ($input.hasClass("not-valid-inc") || $input.hasClass("not-valid-min")) {
            return;
        }*/
        qty = $target.data('action') === 'inc' ?
            qty + advQuantityIncrement :
            qty - advQuantityIncrement;
    }

    // check min/max qty
    if (qty < quantityMin) {
        qty = quantityMin;

        //$input.val(qty); // apply correct quantity to the input
        //invalidCount = validateAdvQty($input);


        /*if (!hideAlert) {
            return swal({
                text: `The minimum purchasable quantity is ${quantityMin}`,
                type: 'error',
            });

            return;
        }*/

    } else if (qty > quantityMax && quantityMax !== 0) {
        qty = quantityMax;

        //$input.val(qty); // apply correct quantity to the input
        //invalidCount = validateAdvQty($input);

        /*if (!hideAlert) {
            return swal({
                text: `The maximum purchasable quantity is ${quantityMax}`,
                type: 'error',
            });

            return;
        }*/

    }

    // check interval qty
    if ((qty % advQuantityIncrement) !== 0) {
        qty = qty + (advQuantityIncrement - (qty % advQuantityIncrement)); // correct the quantity for the user

        //$input.val(qty); // apply correct quantity to the input
        // validateAdvQty($input);

        /*if (!hideAlert) {
            return swal({
                text: `Please enter increments of ${advQuantityIncrement}.`,
                type: 'error',
            });

            return;
        }*/
    }

    $input.val(qty); // apply quantity to the input
    invalidCount = validateAdvQty($input);
    return;

}

function handleQuantityKeyup(event) {
    const $input = $(event.currentTarget);
    $input.val($input.val().replace(/[^\d]/g, ''));
    const invalidCount = validateAdvQty($input);
}

function getMinQty(min_order, increment) {
    let minQty;
    if (min_order == 0 || increment == 0) {
        minQty = min_order || increment;
    } else {
        minQty = min_order % increment === 0 ? min_order : (parseInt(min_order / increment) + 1) * increment;
    }
    //console.log(min_order, increment, minQty);
    return minQty;
}

const onQuantityChange = _.debounce((event) => {
    handleQuantityChange(event)
}, 100);


function bindInputEvents($input) {
    $input.on('change', event => onQuantityChange(event));
    $input.on('keyup', event => handleQuantityKeyup(event));
}

function bindButtonEvents($input) {
    const $button = $input.siblings("button[data-action]");
    $button.on('click', event => onQuantityChange(event));
}

function clearAdvQty($input) {
    const $qtyContainer = $input.parent();
    $qtyContainer.find(".advqty_message").remove();
    $qtyContainer.find("input").removeAttr("data-adv-min-qty").removeAttr("data-adv-increment-qty");
}

function hoverShow($input) {
    const $advTip = $("#adv_tip");

    $input.on('mouseenter', (event) => {
        const $target = $(event.currentTarget);
        const $message = $target.siblings(".advqty_message");
        if ($message.length > 0) {
            $advTip.html($message.clone()).fadeIn();
            validateAdvQty($target);
        }


    }).on('mouseleave', (event) => {
        const $target = $(event.currentTarget);
        const $tipbox = $target.siblings(".advqty_message");
        $advTip.fadeOut();

    }).on('mousemove', (event) => {
        const $target = $(event.currentTarget);
        const $tipbox = $target.siblings(".advqty_message");
        var top = event.pageY + 10;
        var left = event.pageX + 10;
        $advTip.css({
            'position': 'absolute',
            'top': top + 'px',
            'left': left + 'px'
        });

    })
}

function getCartId() {
    return new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: "../api/storefront/carts",
            contentType: "application/json",
            accept: "application/json",
            success: (data) => {
                if (data && data.length > 0) {
                    res(data[0].id);
                }
            },
            error: (err) => {
                console.log(JSON.stringify(err));
            }
        });
    });
}

function getCartAdvQtyCheckState(cartId) {

    return new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: `${apiRootUrl}/checkCartQtyLimit?store_hash=${bypass_store_hash}&cart_id=${cartId}`,
            contentType: "application/json",
            success: (data) => {
                if (data && data.code == 200) {
                    res(data.response.is_allowed);
                } else {
                    res(false);
                }
            },
            error: (err) => {
                console.log(JSON.stringify(err));
            }
        });
    });

}

async function checkIsValidCart(event) {
    const cartId = await getCartId();
    console.log(cartId);
    const passedCheck = await getCartAdvQtyCheckState(cartId);
    console.log(passedCheck);

    if (passedCheck) {
        const $target = $(event.currentTarget);
        window.location.href = $target.attr("href") || "/checkout.php";
    } else {
        $overlay.hide();
        return swal({
            text: `Please review your cart, one or more items have an invalid quantity.`,
            type: 'error',
        });
    }
}

function initListingCardAction() {
    const $normalCardAddtoCardBtns = $("[no-advqty-card-addToCart]");
    const $advQtyCardIncrement = $("[advqty-card-actions]");

    getAdvQtyState().then(() => {
        $normalCardAddtoCardBtns.hide();
        $advQtyCardIncrement.show();
    }, (data) => {
        console.log(data);
        $normalCardAddtoCardBtns.show();
        $advQtyCardIncrement.hide();
    });
}

function clearCardAdvqty($input) {
    const $normalCardAddtoCardBtns = $input.parents(".card").find("[no-advqty-card-addToCart]");
    const $advQtyCardIncrement = $input.parents(".card").find("[advqty-card-actions]");
    $normalCardAddtoCardBtns.show();
    $advQtyCardIncrement.remove();
}

const advQuantity = {
    checkAllAdvQty: ($inputs) => {
        $inputs.each((idx, input) => {
            const $input = $(input);
            const qty = $(input).val();
            const advMinQty = $input.attr("data-adv-min-qty");
            const advIncrementQty = $input.attr("data-adv-increment-qty");

            validateAdvQty($input);

        })

    },
    initListingCardAction: () => {
        initListingCardAction();
    },
    globalInit: () => {
        initListingCardAction();

        // add to cart
        $("body").on('click', '[advqty-card-actions] [advqty-card-addToCart]', (event) => {
            const $addToCartButton = $(event.currentTarget);
            const qty = $addToCartButton.siblings("[advqty-card-input]").val();
            const productId = $addToCartButton.attr("data-product-id");
            const variantId = b2bCart.getVariantIdByProductId(productId);

            if (b2bCart.isB2bUser()) {
                const itemArr = [{
                    product_id: productId,
                    variant_id: variantId,
                    quantity: qty
                }];

                b2bCart.addToCart(itemArr);

            } else {
                //b2c user
                const addHref = `${$addToCartButton.attr("data-href")}&qty[]=${qty}`;
                window.location.href = addHref;
            }

        });
        // qty change
        $("body").on('change', '[advqty-card-actions ][advqty-card-input]', (event) => AdvQuantityUtil.handleQuantityChange(event));
        // qty desc/inc
        /*$("body").on('click', '[advqty-card-actions] button[data-action]', (event) => {
            event.preventDefault();
            handleQuantityChange(event)
        });*/

    },
    clearAdvQty: ($input) => {
        clearAdvQty($input);
    },
    getMinQty: (min_order, increment) => {
        return getMinQty(min_order, increment);
    },
    validateAdvQty: ($input, $submitBtn) => {
        return validateAdvQty($input, $submitBtn);
    },
    handleQuantityChange: (event, $_input, hideAlert) => {
        handleQuantityChange(event, $_input, hideAlert)
    },
    handleQuantityKeyup: (event) => {
        handleQuantityKeyup(event);
    },
    handlePDPQuantityChange(event, $scope) {
        /**
         * handle quantity changes
         */
        const $target = $(event.currentTarget);
        const $input = $('.form-input--incrementTotal', $scope);
        let quantityMin = parseInt($input.data('quantityMin'), 10) || 1;
        const quantityMax = parseInt($input.data('quantityMax'), 10) || 0;
        const advQuantityMIn = parseInt($input.attr('data-adv-min-qty'), 10) || 1;
        const advQuantityIncrement = parseInt($input.attr('data-adv-increment-qty'), 10) || 1;

        const $addToCartBtn = $("#form-action-addToCart", $scope);

        let qty = parseInt($input.val(), 10) || 1;

        // handles very first button click to get quantity in line with the interval
        /*if (qty === 1 && this.interval !== 1) {
            qty = 0;
        }*/

        // set min to interval so user can't go to 0
        //if (this.getMinQty(quantityMin, quantityIncrement)) {
        quantityMin = getMinQty(advQuantityMIn, advQuantityIncrement);

        const $incrementOverlay = $input.siblings("[data-advqty-increment-overlay]", $scope);
        //}

        // if user clicked a button, increment or decrement the qty
        if ($target.hasClass('button')) {
            qty = $target.data('action') === 'inc' ?
                qty + advQuantityIncrement :
                qty - advQuantityIncrement;
        }

        // check min/max qty
        if (qty < quantityMin) {
            qty = quantityMin;

            //$input.val(qty); // apply correct quantity to the input
            //validateAdvQty($input, $addToCartBtn);


            /*return swal({
                text: `The minimum purchasable quantity is ${quantityMin}`,
                type: 'error',
            });*/
            /*$overlayBlank.show();
            setTimeout(function() {
                $overlayBlank.hide();
            }, 600);*/

        } else if (qty > quantityMax && quantityMax !== 0) {
            qty = quantityMax;
            //$input.val(qty); // apply correct quantity to the input
            //validateAdvQty($input, $addToCartBtn);

            /*return swal({
                text: `The maximum purchasable quantity is ${quantityMax}`,
                type: 'error',
            });*/
            /*$overlayBlank.show();
            setTimeout(function() {
                $overlayBlank.hide();
            }, 600);*/

        }

        // check interval qty
        if ((qty % advQuantityIncrement) !== 0) {
            qty = qty + (advQuantityIncrement - (qty % advQuantityIncrement)); // correct the quantity for the user

            //$input.val(qty); // apply correct quantity to the input
            //validateAdvQty($input, $addToCartBtn);

            /*return swal({
                text: `Please enter increments of ${advQuantityIncrement}.`,
                type: 'error',
            });*/
            /*$overlayBlank.show();
            setTimeout(function() {
                $overlayBlank.hide();
            }, 600);*/

        }

        $input.val(qty); // apply quantity to the input
        validateAdvQty($input, $addToCartBtn);

    },

    csvProductsQtyCheck: (itemArr, _passcheckCb, _notpasscheckCb) => {

        /* itemArr:
         *   [{sku: "SKU074", qty: "1"}
         *   {sku: "SKU077", qty: "2"}
         *   {sku: "SKU-9BB3516E", qty: "4"}
         *   {sku: "SKU-B829C968", qty: "1"}]
         */

        const skus_arr = itemArr.map((item) => {
            return item.sku
        });
        const qty_arr = itemArr.map((item) => {
            return item.qty
        });

        getAdvQtyState().then(() => {
            return getAdvQtyBySkus(skus_arr);
        }, () => {
            if (_passcheckCb) {
                _passcheckCb();
            }
            return [];

        }).then((res) => {
            //console.log(res);

            let invalideQtyCount = 0;
            skus_arr.forEach((sku, idx) => {
                const match = res.filter(row => row.variant_sku == sku);
                if (match.length === 0) return;
                const qtyInfo = match[0];
                const qty = parseInt(qty_arr[idx]) || 0;
                const qtyMin = getMinQty(qtyInfo.min_order_qty, qtyInfo.qty_increment);

                const qtyIncrement = parseInt(qtyInfo.qty_increment) || 1;

                if (qty < qtyMin || (qty % qtyIncrement) !== 0) {
                    invalideQtyCount++;
                }
            });

            if (invalideQtyCount > 0) {
                if (_notpasscheckCb) {
                    _notpasscheckCb();
                }
            } else {
                if (_passcheckCb) {
                    _passcheckCb();
                }
            }

        }, () => {
            if (_passcheckCb) {
                _passcheckCb();
            }
        }).catch();

    },
    setUpAdvQtyMulti: ($inputs, c_options, _cb) => {
        /*params:
            bindInputEvents: true,    //绑定input的 change and keyup 事件
            bindButtonEvents: true,   //绑定加减数量按钮的点击事件
            tips: false,              // true: 鼠标在input框移动时出现数量规则信息，false: 直接显示数量规则信息
            multiCheck: false,        // 多个input的验证提示信息只提示一次
            multiCheckMsg:            // 多个input的验证信息
        */

        const options = $.extend({}, {
            bindInputEvents: true,
            bindButtonEvents: true,
            tips: false,
            resetQty: false,
            multiCheck: false,
            multiCheckMsg: "Please review your items, one or more items have an invalid quantity."
        }, c_options);

        let skus = [];
        $inputs.toArray().forEach((input) => {
            const $input = $(input);
            const sku = $input.attr("data-advqty-sku");
            if (sku != "" && (typeof sku != 'undefined')) {
                skus.push(sku);
            }

            clearAdvQty($input);
        });

        if (skus.length === 0) return;

        getAdvQtyState().then(() => {
            return getAdvQtyBySkus(skus);
        }, (data) => {
            console.log(data);
            return [];
        }).then((res) => {
            console.log(res);

            $inputs.toArray().forEach((input) => {
                const $input = $(input);
                const $qtyContainer = $input.parent();
                const sku = $input.attr("data-advqty-sku");
                const match = res.filter(row => row.variant_sku === sku);
                if (match.length === 0) {
                    if (options.bindInputEvents) {
                        bindInputEvents($input);
                    }

                    if (options.bindButtonEvents) {
                        bindButtonEvents($input);
                    }

                    clearCardAdvqty($input);

                    return;
                }

                const qtyInfo = match[0];

                $input.attr("data-adv-min-qty", qtyInfo.min_order_qty).attr("data-adv-increment-qty", qtyInfo.qty_increment);
                $qtyContainer.append(`<div class="advqty_message"></div>`);
                if (qtyInfo.min_order_qty && qtyInfo.min_order_qty != 0) {
                    $qtyContainer.find(".advqty_message").append(`<div data-min-qty-msg >Min Order Qty is ${qtyInfo.min_order_qty}</div>`);

                }
                if (qtyInfo.qty_increment && qtyInfo.qty_increment != 0) {
                    $qtyContainer.find(".advqty_message").append(`<div data-increment-qty-msg >Order in Multiples of ${qtyInfo.qty_increment}</div>`);

                }

                if (options.bindInputEvents) {
                    bindInputEvents($input);
                }

                if (options.bindButtonEvents) {
                    bindButtonEvents($input);
                }
                if (options.tips) {
                    $input.attr("adv-message-tip", true);
                    hoverShow($input);
                } else {
                    $input.removeAttr("adv-message-tip");
                }

                if (options.resetQty) {
                    const newQty = getMinQty(qtyInfo.min_order_qty, qtyInfo.qty_increment);
                    $input.val(newQty || 1);
                }

                //$input.change();
                validateAdvQty($input);

                if (_cb) {
                    _cb();
                }


            });

            if (options.multiCheck) {
                showMultiValideMessage($inputs, options.multiCheckMsg);
            }


        }, (data) => {
            console.log(data);
        }).catch();


    },
    checkCartAdvQty: (event) => {
        event.preventDefault();
        $overlay.show();
        checkIsValidCart(event);
    }


}

export default advQuantity;