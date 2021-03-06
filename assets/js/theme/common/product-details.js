import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.reveal';
import ImageGallery from '../product/image-gallery';
import modalFactory, { showAlertModal } from '../global/modal';
import _ from 'lodash';
import Wishlist from '../wishlist';
import swal from 'sweetalert2';
import config from '../b2b/config';
import pricesStyle from '../b2b/prices-style';
import AdvQuantityUtil from '../b2b/common/advQuantity';

export default class ProductDetails {
    constructor($scope, context, productAttributesData = {}) {
        this.$overlay = $('[data-cart-item-add] .loadingOverlay');
        this.$scope = $scope;
        this.context = context;
        this.imageGallery = new ImageGallery($('[data-image-gallery]', this.$scope));
        this.imageGallery.init();
        this.listenQuantityChange();
        this.initRadioAttributes();
        Wishlist.load(this.context);
        this.getTabRequests();

        const $form = $('form[data-cart-item-add]', $scope);
        const $productOptionsElement = $('[data-product-option-change]', $form);
        const hasOptions = $productOptionsElement.html().trim().length;
        const hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
        $productOptionsElement.on('change', event => {

            this.productOptionsChanged(event);
            this.setProductVariant();
        });

        this.$productViewPrice = $(".productView-price", $scope);

        //for bundleb2b
        this.$overlay_b2b = $("#b2b_loading_overlay", $scope);
        this.$overlay_product = $("#product_loading_overlay", $scope);
        this.$wishlistContainer = $("[data-wishlist-add]", $scope);
        this.$shoppinglistContainer = $("[data-shoppinglist-add]", $scope);
        this.catalog_products = JSON.parse(sessionStorage.getItem("catalog_products"));
        this.$tierPriceContainer = $("[tier-price-container]", $scope);
        this.gTierPrice = {};
        this.gMasterPrcie;
        this.gPriceSymbol = "$";
        this.bypass_company_id;
        this.gRoleId;

        if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
            this.$wishlistContainer.hide();
            const bundleb2b_user = JSON.parse(sessionStorage.getItem("bundleb2b_user"));
            const $product_sku = $("[data-product-sku]", $scope);
            if ($product_sku.length > 0) {
                const current_sku = $product_sku.text().trim();
                /*const $price = $("[data-product-price-without-tax]", $scope) || $("[data-product-price-with-tax]", $scope);
                const base_price = $price.text().trim();
                const base_price_symbol = base_price.substring(0, 1);
                const base_price_value = base_price.replace("$", "");*/
                const base_price_value = this.getMainProductBasePrice();
                console.log(base_price_value);
                this.updateTierPriceRange(current_sku, base_price_value);
                const tierPriceValue = this.getMainProductTierPrice(current_sku, 1, 1);
                if (tierPriceValue) {
                    this.setProductPriceText(tierPriceValue);
                    this.gMasterPrcie = tierPriceValue;
                    //this.$overlay_product.hide();
                    this.$productViewPrice.css("visibility", "visible");
                }

            }

            this.gRoleId = bundleb2b_user.role_id;
            this.bypass_company_id = bundleb2b_user.company_id;

            this.getLists();

            $form.on('submit', event => {
                this.addProductToCartB2B(event, $form[0]);
            });

            this.initProductListOptionPrice();

        } else {
            this.$wishlistContainer.show();
            //this.$overlay_product.hide();
            this.$productViewPrice.css("visibility", "visible");

            $form.on('submit', event => {
                this.addProductToCartDefault(event, $form[0]);
            });

        }

        //this.advQtyCtrl = new AdvQtyFactory(this.$scope);

        // Update product attributes. Also update the initial view in case items are oos
        // or have default variant properties that change the view
        if ((_.isEmpty(productAttributesData) || hasDefaultOptions) && hasOptions) {
            const $productId = $('[name="product_id"]', $form).val();

            utils.api.productAttributes.optionChange($productId, $form.serialize(), 'products/bulk-discount-rates', (err, response) => {
                const attributesData = response.data || {};
                const attributesContent = response.content || {};
                this.updateProductAttributes(attributesData);
                if (hasDefaultOptions) {
                    this.updateView(attributesData, attributesContent);
                } else {
                    this.updateDefaultAttributesForOOS(attributesData);
                }
                this.initAdvQty(attributesData.sku);
            });
        } else {
            this.updateProductAttributes(productAttributesData);
            this.initAdvQty();
        }

        $productOptionsElement.show();

        this.previewModal = modalFactory('#previewModal')[0];

        //for bundleb2b
        this.$scope.on('click', '[add-to-list]', (event) => {

            const $target = $(event.target);
            //const listData = JSON.parse($target.attr("data-list-data"));
            const listID = $target.attr("data-list-id");
            const listStatus = $target.attr("data-list-status");



            const form = $('form[data-cart-item-add]', this.$scope)[0];
            const formData = this.filterEmptyFilesFromForm(new FormData(form));

            let option_label = {};
            const $textLabel = $("[data-label-name]", this.$scope);
            if ($textLabel.length > 0) {
                $textLabel.each(function() {
                    const $item = $(this);
                    const label_name = $item.attr("data-label-name");
                    let option_value = $item.attr("name");
                    option_value = option_value.replace("[", "").replace("]", "");
                    option_label[option_value] = label_name;
                });
            }

            const options_list = [];
            for (let item of formData) {
                console.log(item);
                if (item[0].indexOf("attribute") != -1 && item[1] != "") {
                    const optionObj = {
                        "option_id": item[0],
                        "option_value": item[1]
                    }

                    /*const label_name = item[0].replace("[", "").replace("]", "");
                    if (option_label[label_name]) {
                        optionObj.option_label = option_label[label_name];
                    }*/

                    options_list.push(optionObj);
                }
            }


            let variant_id;
            const product_id = $("input[name=product_id]", this.$scope).val();
            const product_quantity = $(`input[name="qty[]"`).val();

            const product_variant_sku = $("[data-product-sku]", this.$scope).text().trim();

            const variants = this.catalog_products[product_id] || [];
            for (var i = 0; i < variants.length; i++) {
                if (variants[i].variant_sku.toLowerCase() == product_variant_sku.toLowerCase()) {
                    variant_id = variants[i].variant_id;
                }
            }
            if (!variant_id) {
                alert("This product or option has no variant id");
                return;
            }



            const checkNum = /^[1-9]\d*$/;
            if (!checkNum.test(product_quantity)) {
                alert("Please enter a valid quantity");
                return;
            }

            const bypass_store_hash = `${config.storeHash}`;
            const bypass_email = this.context.customer.email;
            const bypass_customer_id = this.context.customer.id;

            $.ajax({
                type: "GET",
                url: `${config.apiRootUrl}/getRequistionListDetail?store_hash=${bypass_store_hash}&company_id=${this.bypass_company_id}&customer_id=${bypass_customer_id}&id=${listID}`,
                success: function(data) {
                    if (data && data != null) {
                        console.log("shopping list", data);
                        const listData = data;
                        let postData = {
                            "store_hash": listData.store_hash,
                            "company_id": listData.company_id,
                            "customer_id": listData.customer_id,
                            "name": listData.name,
                            "description": listData.description,
                            "status": listData.status,
                            "products": listData.products

                        };

                        //if has duplicated products
                        let isExist = false;
                        //const products_arr = listData.products;
                        const products_arr_new = _.cloneDeep(listData.products) || [];
                        let products_arr = [];
                        for (let i = 0; i < products_arr_new.length; i++) {
                            products_arr.push({
                                "product_id": products_arr_new[i].product_id,
                                "variant_id": products_arr_new[i].variant_id,
                                "qty": products_arr_new[i].qty,
                                "options_list": products_arr_new[i].options_list
                            });
                        }
                        for (let i = 0; i < products_arr.length; i++) {
                            const sameOption = (JSON.stringify(options_list) == JSON.stringify(products_arr[i].options_list));
                            if (products_arr[i].product_id == product_id && products_arr[i].variant_id == variant_id && sameOption) {
                                products_arr[i].qty = parseInt(products_arr[i].qty) + parseInt(product_quantity);
                                isExist = true;
                            }
                        }
                        if (!isExist) {
                            products_arr.push({
                                "product_id": product_id,
                                "variant_id": variant_id,
                                "qty": product_quantity,
                                "options_list": options_list
                            });
                        }

                        postData.products = products_arr;
                        console.log(postData);
                        //return;

                        $.ajax({
                            type: "PUT",
                            url: `${config.apiRootUrl}/requisitionlist?id=${listID}&customer_id=${bypass_customer_id}`,
                            data: JSON.stringify(postData),
                            success: function(data) {

                                swal({
                                    text: "This item has been added to your shopping list",
                                    type: 'success',
                                });
                            },
                            error: function(jqXHR, textStatus, errorThrown) {

                                console.log(JSON.stringify(jqXHR));
                            }
                        });
                    }
                },
                error: function() {


                }
            });


        });



    }

    /**
     * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
     * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
     * @param form: form NodeList
     * @returns FormData object
     */
    filterEmptyFilesFromForm(formData) {
        try {
            for (const [key, val] of formData) {
                if (val instanceof File && !val.name && !val.size) {
                    formData.delete(key);
                }
            }
        } catch (e) {
            console.error(e); // eslint-disable-line no-console
        }

        return formData;
    }
    setProductVariant() {
        const unsatisfiedRequiredFields = [];
        const options = [];

        $.each($('[data-product-attribute]'), (index, value) => {
            const optionLabel = value.children[0].innerText;
            const optionTitle = optionLabel.split(':')[0].trim();
            const required = optionLabel.toLowerCase().includes('required');
            const type = value.getAttribute('data-product-attribute');

            if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
                unsatisfiedRequiredFields.push(value);
            }

            if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
                unsatisfiedRequiredFields.push(value);
            }

            if (type === 'date') {
                const isSatisfied = Array.from(value.querySelectorAll('select')).every((select) => select.selectedIndex !== 0);

                if (isSatisfied) {
                    const dateString = Array.from(value.querySelectorAll('select')).map((x) => x.value).join('-');
                    options.push(`${optionTitle}:${dateString}`);

                    return;
                }

                if (required) {
                    unsatisfiedRequiredFields.push(value);
                }
            }

            if (type === 'set-select') {
                const select = value.querySelector('select');
                const selectedIndex = select.selectedIndex;

                if (selectedIndex !== 0) {
                    options.push(`${optionTitle}:${select.options[selectedIndex].innerText}`);

                    return;
                }

                if (required) {
                    unsatisfiedRequiredFields.push(value);
                }
            }

            if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
                const checked = value.querySelector(':checked');
                if (checked) {
                    if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
                        const label = checked.labels[0].innerText;
                        if (label) {
                            options.push(`${optionTitle}:${label}`);
                        }
                    }

                    if (type === 'swatch') {
                        const label = checked.labels[0].children[0];
                        if (label) {
                            options.push(`${optionTitle}:${label.title}`);
                        }
                    }

                    if (type === 'input-checkbox') {
                        options.push(`${optionTitle}:Yes`);
                    }

                    return;
                }

                if (type === 'input-checkbox') {
                    options.push(`${optionTitle}:No`);
                }

                if (required) {
                    unsatisfiedRequiredFields.push(value);
                }
            }
        });

        let productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
        const view = $('.productView');

        if (productVariant) {
            productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
            if (view.attr('data-event-type')) {
                view.attr('data-product-variant', productVariant);
            } else {
                const productName = view.find('.productView-title')[0].innerText;
                const card = $(`[data-name="${productName}"]`);
                card.attr('data-product-variant', productVariant);
            }
        }
    }
    //for bundleb2b
    getLists() {
        const bypass_store_hash = `${config.storeHash}`;
        const bypass_email = this.context.customer.email;
        const bypass_customer_id = this.context.customer.id;

        if (!bypass_customer_id) {
            //this.$overlay_product.hide();

            return;

        }

        this.$shoppinglistContainer.find(">.button").addClass("loading disabled").attr("disabled", true);
        /*
                $.ajax({
                    type: "GET",
                    url: `${config.apiRootUrl}/company?store_hash=${bypass_store_hash}&customer_id=${bypass_customer_id}`,
                    success: (data) => {
                        console.log(data);
                        if (data && data.customers) {
                            const bypass_company_id = data.id;
                            const userList = data.customers;
                            let gRoleId = -1;
                            for (let i = 0; i < userList.length; i++) {
                                if (userList[i].id == bypass_customer_id) {
                                    gRoleId = userList[i].role;
                                }
                            }

                            if (gRoleId == -1) {
                                //this.$overlay_product.hide();
                                this.$shoppinglistContainer.find(">.button").removeClass("disabled loading").removeAttr("disabled");
                                return;
                            }*/

        this.$shoppinglistContainer.show();

        $.ajax({
            type: "GET",
            url: `${config.apiRootUrl}/getListRequistionListNew?store_hash=${bypass_store_hash}&company_id=${this.bypass_company_id}&customer_id=${bypass_customer_id}`,
            success: (data) => {
                console.log(data);
                const $shoppinglistDropdown = this.$shoppinglistContainer.find("#shoppinglist-dropdown");

                if (data) {
                    if (data.length > 0) {
                        const listsData = data;
                        for (let i = 0; i < listsData.length; i++) {
                            const listData = listsData[i];
                            /*if (gRoleId == 0 && listData.status == "30") {
                                $shoppinglistDropdown.append(`<li><button type="button" class="button" add-to-list data-list-id="${listData.id}" data-list-status="${listData.status}" data-list-data='${JSON.stringify(listData)}'>Add to ${listData.name}</button></li>`);
                            }
                            if (gRoleId != 0 && listData.status == "0") {
                                $shoppinglistDropdown.append(`<li><button type="button" class="button" add-to-list data-list-id="${listData.id}" data-list-status="${listData.status}" data-list-data='${JSON.stringify(listData)}'>Add to ${listData.name}</button></li>`);
                            }*/
                            if (this.gRoleId == 0) {
                                // junior buyer
                                if (listData.status == "30") {
                                    $shoppinglistDropdown.append(`<li><button type="button" class="button" add-to-list data-list-id="${listData.id}" data-list-status="${listData.status}" >Add to ${listData.name}</button></li>`);
                                }

                            } else if (this.gRoleId == 10) {
                                // salerep
                                if (listData.status == "0" && listData.customer_id == bypass_customer_id) {
                                    $shoppinglistDropdown.append(`<li><button type="button" class="button" add-to-list data-list-id="${listData.id}" data-list-status="${listData.status}" >Add to ${listData.name}</button></li>`);
                                }
                            } else if (this.gRoleId == 1 || this.gRoleId == 2) {
                                // admin and Senior buyer
                                if (listData.status == "0") {
                                    $shoppinglistDropdown.append(`<li><button type="button" class="button" add-to-list data-list-id="${listData.id}" data-list-status="${listData.status}" >Add to ${listData.name}</button></li>`);
                                }
                            }


                        }

                    }

                    $shoppinglistDropdown.append(`<li data-list-id><a href="/shopping-lists/" class="button">Create a new list</a></li>`);
                    //this.$overlay_product.hide();
                    this.$shoppinglistContainer.find(">.button").removeClass("disabled loading").removeAttr("disabled");
                }

            },
            error: (jqXHR, textStatus, errorThrown) => {
                //this.$overlay_product.hide();
                this.$shoppinglistContainer.find(">.button").removeClass("disabled loading").removeAttr("disabled");
                console.log(JSON.stringify(jqXHR));
            }
        });


        /*} else {
                    this.$wishlistContainer.show();
                    //this.$overlay_product.hide();
                    this.$shoppinglistContainer.find(">.button").removeClass("disabled loading").removeAttr("disabled");
                }
            },
            error: (jqXHR, textStatus, errorThrown) => {
                //this.$overlay_product.hide();
                this.$shoppinglistContainer.find(">.button").removeClass("disabled loading").removeClass.removeAttr("disabled");
                console.log(JSON.stringify(jqXHR));
            }
        });*/



    }



    // for bundleb2b
    handlePickListOptions(cartItemObj, cb) {
        const cartItemId = cartItemObj.item_id;
        const product_id = cartItemObj.product_id;
        const variant_id = cartItemObj.variant_id;

        utils.api.productAttributes.configureInCart(cartItemId, {
            template: 'b2b/configure-product-data',
        }, (err, response) => {
            console.log(response.data);

            let selectedPickListOptins = [];

            if (response.data && response.data.options) {
                const options = response.data.options;



                for (let i = 0; i < options.length; i++) {
                    const option = options[i];

                    if (option.partial == "product-list") {
                        const optionValues = option.values;

                        for (let j = 0; j < optionValues.length; j++) {
                            const optionValue = optionValues[j];

                            if (optionValue.selected) {
                                selectedPickListOptins.push({
                                    "option_id": option.id,
                                    "option_value": optionValue.id,
                                    "option_data": optionValue.data
                                });

                            }
                        }
                    }
                }

                console.log(selectedPickListOptins);
            }

            if (selectedPickListOptins) {
                $.ajax({
                    type: "GET",
                    url: `${config.apiRootUrl}/productvariants?store_hash=${config.storeHash}&product_id=${product_id}&variant_id=${variant_id}`,
                    success: (data) => {
                        console.log(data);
                        let extras_list = [];


                        for (let k = 0; k < selectedPickListOptins.length; k++) {
                            let showCustomPrice = true;

                            if (data && data.option_list) {
                                const options = data.option_list;


                                for (let j = 0; j < options.length; j++) {
                                    const optionId = options[j].option_id;
                                    const optionValue = options[j].option_value;

                                    if (optionId == selectedPickListOptins[k].option_id && optionValue == selectedPickListOptins[k].option_value) {
                                        showCustomPrice = false;


                                    }



                                }

                                if (showCustomPrice) {
                                    const extra_product_id = selectedPickListOptins[k].option_data;
                                    const extra_variant_id = this.getVariantIdByProductId(extra_product_id);
                                    if (extra_variant_id) {
                                        extras_list.push({
                                            "extra_product_id": extra_product_id,
                                            "extra_variant_id": extra_variant_id
                                        });
                                    } else {
                                        extras_list.push({
                                            "extra_product_id": extra_product_id
                                        });
                                    }

                                }
                            }

                        }

                        if (extras_list) {
                            cartItemObj.extras_list = _.cloneDeep(extras_list);
                        }

                        if (cb) {
                            cb();
                        }


                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log("error", JSON.stringify(jqXHR));
                    }
                });
            } else {
                if (cb) {
                    cb();
                }

            }


        });

    }

    //for bundleb2b
    updateCatalogPrice(cartItemsArr, cartId, responseHtml) {
        const bypass_store_hash = `${config.storeHash}`;
        const cartItemObj = cartItemsArr[cartItemsArr.length - 1];
        delete cartItemObj.option_text;
        console.log("putdata", JSON.stringify(cartItemObj));

        this.handlePickListOptions(cartItemObj, () => {
            console.log("putdata2", JSON.stringify(cartItemObj));
            $.ajax({
                type: "PUT",
                url: `${config.apiRootUrl}/cart?store_hash=${bypass_store_hash}&cart_id=${cartId}`,
                data: JSON.stringify(cartItemObj),
                success: (data) => {
                    console.log("update catalog price", data);

                    cartItemsArr.pop();
                    if (cartItemsArr.length == 0) {
                        console.log("update price done.");
                        let catalog_priceValue;
                        const cartItems = data.data.line_items.physical_items;
                        for (let j = 0; j < cartItems.length; j++) {
                            const product_id = cartItems[j].product_id;
                            if (product_id == $("input[name=product_id]", this.scope).val()) {
                                catalog_priceValue = cartItems[j].sale_price;
                            }
                        }

                        // Open preview modal and update content

                        if (this.previewModal) {

                            //this.updateCartContent(this.previewModal);
                            this.getCartContent("", (err, response) => {
                                this.$overlay_b2b.hide();

                                if (err) {
                                    console.log(err);
                                    return swal({
                                        type: 'error',
                                        text: 'There has some error, please try again.'
                                    });
                                }


                                this.previewModal.open();
                                this.previewModal.updateContent(response);
                                $("#previewModal").find(".productView").html(responseHtml);
                                const productPrice = $("#previewModal").find(".productView .productView-price").text();
                                const productPriceArr = productPrice.split(" × ");
                                $("#previewModal").find(".productView .productView-price").html(`${productPriceArr[0]} × $${catalog_priceValue}`);

                                // Update cart counter
                                const $body = $('body');
                                const $cartQuantity = $('[data-cart-quantity]', modal.$content);
                                const $cartCounter = $('.navUser-action .cart-count');
                                const quantity = $cartQuantity.data('cartQuantity') || 0;

                                $cartCounter.addClass('cart-count--positive');
                                $body.trigger('cart-quantity-update', quantity);
                            });
                        } else {
                            // if no modal, redirect to the cart page
                            this.redirectTo(response.data.cart_item.cart_url || this.context.urls.cart);
                        }

                    } else {
                        this.updateCatalogPrice(cartItemsArr, cartId, responseHtml);
                    }
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    this.$overlay_b2b.hide();
                    alert("update catalog price error");
                }
            });
        });



    }

    //for bundleb2b
    //replace cart contents with new items
    replaceCart(cartItemArr, itemArr) {
        const cartitem = cartItemArr[cartItemArr.length - 1];
        console.log("delete cartitem...", cartitem);

        this.$overlay_b2b.show();

        utils.api.cart.itemRemove(cartitem.id, (err, response) => {
            if (response.data.status === 'succeed') {
                cartItemArr.pop();

                if (cartItemArr.length > 0) {
                    this.replaceCart(cartItemArr, itemArr);
                } else {
                    console.log("cart items removed, adding new items");
                    this.addProductToCartBundleb2b(itemArr);
                }
            } else {
                this.$overlay_b2b.hide();
                swal({
                    text: response.data.errors.join('\n'),
                    type: 'error',
                });
            }

        });

    }

    //for bundleb2b
    addProductToCartBundleb2b(itemArr) {
        const $addToCartBtn = $("#form-action-addToCart", this.scope);
        const form = $("[data-cart-item-add]", this.scope)[0];
        const originalBtnVal = $addToCartBtn.val();
        const waitMessage = $addToCartBtn.data('waitMessage');
        $addToCartBtn
            .val(waitMessage)
            .prop('disabled', true);


        const item = itemArr[itemArr.length - 1];

        console.log("add item to cart", item);

        utils.api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), (err, response) => {
            const errorMessage = err || response.data.error;

            $addToCartBtn
                .val(originalBtnVal)
                .prop('disabled', false);

            // Guard statement
            if (errorMessage) {
                this.$overlay_b2b.hide();

                // Strip the HTML from the error message
                const tmp = document.createElement('DIV');
                tmp.innerHTML = errorMessage;


                return swal({
                    text: tmp.textContent || tmp.innerText,
                    type: 'error',
                });
            }

            // Open preview modal and update content
            console.log(response);
            const cartItemHash = response.data.cart_item.hash;


            this.getCartContent(cartItemHash, (err, response) => {
                if (err) {
                    this.$overlay_b2b.hide();
                    return swal({
                        type: 'error',
                        text: 'There has some error, please try again.'
                    });
                }

                const responseHtml = $(response).find(".productView");
                console.log(responseHtml);


                const options = {
                    template: {
                        content: 'b2b/cart-content-data',
                        totals: 'cart/totals',
                        pageTitle: 'cart/page-title',
                        statusMessages: 'cart/status-messages',
                    },
                };
                utils.api.cart.getContent(options, (err, response) => {
                    //console.log(response.content);
                    const divEle = document.createElement("div");
                    $(divEle).html(response.content);
                    const $items = $(divEle).find(".item");
                    if ($items.length > 0) {

                        let cartItemsArr = [];
                        let cartItemsObj = {};
                        let cartQuantity = 0;
                        const gCatalogId = sessionStorage.getItem("catalog_id");

                        $.each($items, (index, item) => {
                            //console.log(item);
                            const $cartItem = $(item);
                            const itemId = $cartItem.attr("data-item-id");
                            const itemSku = $cartItem.attr("data-item-sku");
                            const itemProductId = $cartItem.attr("data-item-productId");
                            const itemQty = parseInt($cartItem.attr("data-item-quantity"));
                            const itemOptions = $cartItem.attr("data-item-options");

                            let itemVariantId;
                            const variants = this.catalog_products[itemProductId];
                            if (variants && variants.length > 0) {
                                for (let i = 0; i < variants.length; i++) {
                                    const variant_sku = variants[i].variant_sku;
                                    if (variant_sku.toLowerCase() == itemSku.toLowerCase()) {
                                        itemVariantId = variants[i].variant_id;
                                    }
                                }

                            }

                            cartQuantity += parseInt(itemQty);
                            //const itemCatalogPrice = catalog_products[itemProductId] || cartItem.salePrice;

                            if (cartItemsObj[`${itemProductId}-${itemVariantId}`]) {
                                for (let j = 0; j < cartItemsArr.length; j++) {
                                    if (cartItemsArr[j].product_id == itemProductId && cartItemsArr[j].variant_id == itemVariantId && cartItemsArr[j].option_text == itemOptions) {
                                        cartItemsArr[j].quantity += parseInt(itemQty);
                                    }
                                }
                            } else {
                                cartItemsObj[`${itemProductId}-${itemVariantId}`] = "true";
                            }


                            const cartItemObj = {
                                "item_id": itemId,
                                "product_id": itemProductId,
                                "variant_id": itemVariantId,
                                "quantity": itemQty,
                                "catalog_id": gCatalogId,
                                "option_text": itemOptions
                            };

                            cartItemsArr.push(cartItemObj);

                        });

                        //update cart counter
                        const $body = $('body');
                        const $cartCounter = $('.navUser-action .cart-count');

                        $cartCounter.addClass('cart-count--positive');
                        $body.trigger('cart-quantity-update', cartQuantity);
                        console.log("cartItems", cartItemsArr);

                        //$overlay.hide();

                        let cartId;
                        $.ajax({
                            type: "GET",
                            url: "../api/storefront/carts",
                            contentType: "application/json",
                            accept: "application/json",
                            async: false,
                            success: function(data) {

                                if (data && data.length > 0) {
                                    cartId = data[0].id;

                                }
                            }
                        });
                        this.updateCatalogPrice(cartItemsArr, cartId, responseHtml);
                    }

                });


                /*$.ajax({
                    type: "GET",
                    url: "/api/storefront/carts",
                    contentType: "application/json",
                    accept: "application/json",
                    success: (data) => {
                        console.log("get cart", data);
                        if (data && data.length > 0) {
                            const cartId = data[0].id;
                            console.log("cartId", cartId);


                            let cartItemsArr = [];
                            let cartItemsObj = {};

                            const product_id = $("input[name=product_id]", this.$scope).val();
                            const product_quantity = $(`input[name="qty[]"`).val();
                            const cartItems = data[0].lineItems.physicalItems;
                            for (let i = 0; i < cartItems.length; i++) {
                                const cartItem = cartItems[i];
                                const itemId = cartItem.id;
                                const itemProductId = cartItem.productId;
                                const itemVariantId = cartItem.variantId;
                                const itemQty = cartItem.quantity;

                                //const itemCatalogPrice = catalog_products[itemProductId] || cartItem.salePrice;

                                if (cartItemsObj[`${itemProductId}-${itemVariantId}`]) {
                                    for (let j = 0; j < cartItemsArr.length; j++) {
                                        if (cartItemsArr[j].product_id == itemProductId && cartItemsArr[j].variant_id == itemVariantId) {
                                            cartItemsArr[j].quantity += itemQty;
                                        }
                                    }
                                } else {
                                    cartItemsObj[`${itemProductId}-${itemVariantId}`] = "true";

                                }


                                const gCatalogId = sessionStorage.getItem("catalog_id");
                                const cartItemObj = {
                                    "item_id": itemId,
                                    "product_id": itemProductId,
                                    "variant_id": itemVariantId,
                                    "quantity": itemQty,
                                    "catalog_id": gCatalogId
                                };

                                cartItemsArr.push(cartItemObj);

                            }
                            console.log(cartItemsArr);

                            //$overlay_b2b.hide();
                            this.updateCatalogPrice(cartItemsArr, cartId, responseHtml);

                        } else {
                            this.$overlay_b2b.hide();
                        }
                    },
                    error: (jqXHR, textStatus, errorThrown) => {
                        this.$overlay_b2b.hide();

                        swal({
                            type: "error",
                            text: "There has some error, please try again"
                        });
                        console.log("error", JSON.stringify(jqXHR));
                    }
                });*/
            });



        });
    }



    /**
     * Since $productView can be dynamically inserted using render_with,
     * We have to retrieve the respective elements
     *
     * @param $scope
     */
    getViewModel($scope) {
        return {
            $priceWithTax: $('[data-product-price-with-tax]', $scope),
            $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
            rrpWithTax: {
                $div: $('.rrp-price--withTax', $scope),
                $span: $('[data-product-rrp-with-tax]', $scope),
            },
            rrpWithoutTax: {
                $div: $('.rrp-price--withoutTax', $scope),
                $span: $('[data-product-rrp-price-without-tax]', $scope),
            },
            nonSaleWithTax: {
                $div: $('.non-sale-price--withTax', $scope),
                $span: $('[data-product-non-sale-price-with-tax]', $scope),
            },
            nonSaleWithoutTax: {
                $div: $('.non-sale-price--withoutTax', $scope),
                $span: $('[data-product-non-sale-price-without-tax]', $scope),
            },
            priceSaved: {
                $div: $('.price-section--saving', $scope),
                $span: $('[data-product-price-saved]', $scope),
            },
            priceNowLabel: {
                $span: $('.price-now-label', $scope),
            },
            priceLabel: {
                $span: $('.price-label', $scope),
            },
            $weight: $('.productView-info [data-product-weight]', $scope),
            $increments: $('.form-field--increments :input', $scope),
            $addToCart: $('#form-action-addToCart', $scope),
            $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
            stock: {
                $container: $('.form-field--stock', $scope),
                $input: $('[data-product-stock]', $scope),
            },
            $sku: $('[data-product-sku]'),
            $upc: $('[data-product-upc]'),
            quantity: {
                $text: $('.incrementTotal', $scope),
                $input: $('[name=qty\\[\\]]', $scope),
            },
            $bulkPricing: $('.productView-info-bulkPricing', $scope),
        };
    }



    /**
     * Checks if the current window is being run inside an iframe
     * @returns {boolean}
     */
    isRunningInIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    /**
     *
     * Handle product options changes
     *
     */
    productOptionsChanged(event) {
        const $changedOption = $(event.target);
        const $form = $changedOption.parents('form');
        const productId = $('[name="product_id"]', $form).val();

        // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
        if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
            return;
        }

        // for bundleb2b
        this.$shoppinglistContainer.find(">.button").addClass("disabled").attr("disabled", true);

        utils.api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', (err, response) => {
            const productAttributesData = response.data || {};
            const productAttributesContent = response.content || {};
            this.updateProductAttributes(productAttributesData);
            this.updateView(productAttributesData, productAttributesContent);
            this.initAdvQty(productAttributesData.sku, true);
        });
    }

    showProductImage(image) {
        if (_.isPlainObject(image)) {
            const zoomImageUrl = utils.tools.image.getSrc(
                image.data,
                this.context.themeSettings.zoom_size,
            );

            const mainImageUrl = utils.tools.image.getSrc(
                image.data,
                this.context.themeSettings.product_size,
            );

            this.imageGallery.setAlternateImage({
                mainImageUrl,
                zoomImageUrl,
            });
        } else {
            this.imageGallery.restoreImage();
        }
    }

    /**
     *
     * Handle action when the shopper clicks on + / - for quantity
     *
     */
    listenQuantityChange() {
        const onQuantityChange = _.debounce((event) => {
            AdvQuantityUtil.handlePDPQuantityChange(event, this.$scope);

            const viewModel = this.getViewModel(this.$scope);
            const $input = viewModel.quantity.$input;

            let qty = parseInt($input.val(), 10) || 1;
            // update hidden input
            viewModel.quantity.$input.val(qty);
            // update text
            viewModel.quantity.$text.text(qty);

            if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
                const $product_sku = $("[data-product-sku]", this.$scope);
                if ($product_sku.length > 0) {
                    const current_sku = $product_sku.text().trim();
                    const base_price_value = this.getMainProductBasePrice();
                    this.updateTierPriceRange(current_sku, base_price_value);
                    const tierPriceValue = this.getMainProductTierPrice(current_sku, qty, 2);
                    if (tierPriceValue) {
                        this.setProductPriceText(tierPriceValue);
                        this.gMasterPrcie = tierPriceValue;
                        this.$productViewPrice.css("visibility", "visible");
                    }
                }
            }
        }, 100);

        $('input[name="qty[]"]', this.$scope).on("change", event => {
            onQuantityChange(event);
        });

        $('input[name="qty[]"]', this.$scope).on("keyup", event => {
            const $input = $(event.currentTarget);
            const $submitBtn = $("#form-action-addToCart", this.$scope);
            AdvQuantityUtil.validateAdvQty($input, $submitBtn);
        });

        this.$scope.on('click', '[data-quantity-change] button', event => {
            event.preventDefault();
            onQuantityChange(event);
        });
    }

    /**
     *
     * Add a product to cart
     *
     */
    addProductToCartB2B(event, form) {
        // Do not do AJAX if browser doesn't support FormData
        if (window.FormData === undefined) {
            return;
        }

        console.log("add to cart");

        // Prevent default
        event.preventDefault();

        let itemArr = [];
        const productObj = {};
        productObj.product_id = $(form).find("input[name='product_id']").val();
        productObj.quantity = $(form).find("input[name='qty[]']").val();
        itemArr.push(productObj);
        console.log(itemArr);



        let variant_id;
        const product_id = $(form).find("input[name='product_id']").val();

        const product_variant_sku = $("[data-product-sku]", this.$scope).text().trim();

        const variants = this.catalog_products[product_id] || [];
        for (var i = 0; i < variants.length; i++) {
            if (variants[i].variant_sku.toLowerCase() == product_variant_sku.toLowerCase()) {
                variant_id = variants[i].variant_id;
            }
        }
        if (!variant_id) {
            alert("This product or option has no variant id");
            return;
        }


        this.$overlay_b2b.show();
        let cartItemIDs = [];
        let cartId;

        $.ajax({
            type: "GET",
            url: "/api/storefront/carts",
            contentType: "application/json",
            accept: "application/json",
            async: true,
            success: (data) => {
                if (data && data.length > 0) {
                    cartId = data[0].id;
                    //cartItemIDs = data[0].lineItems.physicalItems;
                    const cartItemIDs_all = data[0].lineItems.physicalItems;
                    cartItemIDs = cartItemIDs_all.filter(function(item) {
                        return item.parentId == null;
                    });
                }

                console.log(cartItemIDs);

                console.log("number of items in cart: ", cartItemIDs.length);
                if (cartItemIDs.length > 0) { //if there are items in cart notify user
                    this.$overlay_b2b.hide();
                    swal({
                        title: "The shopping cart isn't empty",
                        html: "<div class='nonempty-cart'><p>You have items in your shopping cart. Would you like to merge items in this order with items of this shopping cart or replace them?</p>" +
                            "<p>Select Cancel to stay on the current page.</p></div>",
                        showCancelButton: true,
                        confirmButtonText: 'Merge',
                        cancelButtonText: 'Cancel'
                    });
                    $(".swal2-confirm.button").after('<button type="button" class="button replace-button">Replace</button>');
                } else {
                    this.$overlay_b2b.show();
                    this.addProductToCartBundleb2b(itemArr);
                }
                $(".swal2-confirm.button").unbind().bind("click", () => {
                    this.$overlay_b2b.show();
                    this.addProductToCartBundleb2b(itemArr);
                });
                $(".replace-button").unbind().bind("click", () => {
                    swal.close();
                    this.$overlay_b2b.show();
                    this.replaceCart(cartItemIDs, itemArr);
                    //this.replaceCart(cartItemIDs, cartId, itemArr);
                });
            },
            error: (jqXHR, textStatus, errorThrown) => {
                this.$overlay_b2b.hide();

                swal({
                    type: "error",
                    text: "There has some error, please try again"
                });
                console.log("error", JSON.stringify(jqXHR));
            }
        });

    }

    addProductToCartDefault(event, form) {
        const $addToCartBtn = $('#form-action-addToCart', $(event.target));
        const originalBtnVal = $addToCartBtn.val();
        const waitMessage = $addToCartBtn.data('waitMessage');

        // Do not do AJAX if browser doesn't support FormData
        if (window.FormData === undefined) {
            return;
        }

        // Prevent default
        event.preventDefault();

        $addToCartBtn
            .val(waitMessage)
            .prop('disabled', true);

        this.$overlay_b2b.show();

        // Add item to cart
        utils.api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), (err, response) => {
            const errorMessage = err || response.data.error;

            $addToCartBtn
                .val(originalBtnVal)
                .prop('disabled', false);

            this.$overlay_b2b.hide();

            // Guard statement
            if (errorMessage) {
                // Strip the HTML from the error message
                const tmp = document.createElement('DIV');
                tmp.innerHTML = errorMessage;

                return swal({
                    text: tmp.textContent || tmp.innerText,
                    type: 'error',
                });
            }

            // Open preview modal and update content
            if (this.previewModal) {
                this.previewModal.open();

                this.updateCartContent(this.previewModal, response.data.cart_item.hash);
            } else {
                this.$overlay_b2b.show();
                // if no modal, redirect to the cart page
                this.redirectTo(response.data.cart_item.cart_url || this.context.urls.cart);
            }
        });
    }

    /**
     * Get cart contents
     *
     * @param {String} cartItemHash
     * @param {Function} onComplete
     */
    getCartContent(cartItemHash, onComplete) {
        const options = {
            template: 'cart/preview',
            params: {
                suggest: cartItemHash,
            },
            config: {
                cart: {
                    suggestions: {
                        limit: 4,
                    },
                },
            },
        };

        utils.api.cart.getContent(options, onComplete);
    }

    /**
     * Redirect to url
     *
     * @param {String} url
     */
    redirectTo(url) {
        if (this.isRunningInIframe() && !window.iframeSdk) {
            window.top.location = url;
        } else {
            window.location = url;
        }
    }

    /**
     * Update cart content
     *
     * @param {Modal} modal
     * @param {String} cartItemHash
     * @param {Function} onComplete
     */
    updateCartContent(modal, cartItemHash, onComplete) {
        this.getCartContent(cartItemHash, (err, response) => {
            if (err) {
                return;
            }

            modal.updateContent(response);

            // Update cart counter
            const $body = $('body');
            const $cartQuantity = $('[data-cart-quantity]', modal.$content);
            const $cartCounter = $('.navUser-action .cart-count');
            const quantity = $cartQuantity.data('cartQuantity') || 0;

            $cartCounter.addClass('cart-count--positive');
            $body.trigger('cart-quantity-update', quantity);

            if (onComplete) {
                onComplete(response);
            }
        });
    }

    /**
     * Show an message box if a message is passed
     * Hide the box if the message is empty
     * @param  {String} message
     */
    showMessageBox(message) {
        const $messageBox = $('.productAttributes-message');

        if (message) {
            $('.alertBox-message', $messageBox).text(message);
            $messageBox.show();
        } else {
            $messageBox.hide();
        }
    }

    /**
     * Hide the pricing elements that will show up only when the price exists in API
     * @param viewModel
     */
    clearPricingNotFound(viewModel) {
        viewModel.rrpWithTax.$div.hide();
        viewModel.rrpWithoutTax.$div.hide();
        viewModel.nonSaleWithTax.$div.hide();
        viewModel.nonSaleWithoutTax.$div.hide();
        viewModel.priceSaved.$div.hide();
        viewModel.priceNowLabel.$span.hide();
        viewModel.priceLabel.$span.hide();
    }

    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    updatePriceView(viewModel, price) {
        this.clearPricingNotFound(viewModel);

        if (price.with_tax) {
            viewModel.priceLabel.$span.show();
            viewModel.$priceWithTax.html(price.with_tax.formatted);
        }

        if (price.without_tax) {
            viewModel.priceLabel.$span.show();
            viewModel.$priceWithoutTax.html(price.without_tax.formatted);
        }

        if (price.rrp_with_tax) {
            viewModel.rrpWithTax.$div.show();
            viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
        }

        if (price.rrp_without_tax) {
            viewModel.rrpWithoutTax.$div.show();
            viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
        }

        if (price.saved) {
            viewModel.priceSaved.$div.show();
            viewModel.priceSaved.$span.html(price.saved.formatted);
        }

        if (price.non_sale_price_with_tax) {
            viewModel.priceLabel.$span.hide();
            viewModel.nonSaleWithTax.$div.show();
            viewModel.priceNowLabel.$span.show();
            viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
        }

        if (price.non_sale_price_without_tax) {
            viewModel.priceLabel.$span.hide();
            viewModel.nonSaleWithoutTax.$div.show();
            viewModel.priceNowLabel.$span.show();
            viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
        }
    }

    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    updateView(data, content = null) {

        const viewModel = this.getViewModel(this.$scope);

        this.showMessageBox(data.stock_message || data.purchasing_message);

        /*if (_.isObject(data.price)) {
            this.updatePriceView(viewModel, data.price);
        }*/

        if (_.isObject(data.weight)) {
            viewModel.$weight.html(data.weight.formatted);
        }

        // Set variation_id if it exists for adding to wishlist
        if (data.variantId) {
            viewModel.$wishlistVariation.val(data.variantId);
        }

        // If SKU is available
        if (data.sku) {
            viewModel.$sku.text(data.sku);
        }

        // If UPC is available
        if (data.upc) {
            viewModel.$upc.text(data.upc);
        }

        // if stock view is on (CP settings)
        if (viewModel.stock.$container.length && _.isNumber(data.stock)) {
            // if the stock container is hidden, show
            viewModel.stock.$container.removeClass('u-hiddenVisually');

            viewModel.stock.$input.text(data.stock);
        } else {
            viewModel.stock.$container.addClass('u-hiddenVisually');
            viewModel.stock.$input.text(data.stock);
        }

        this.updateDefaultAttributesForOOS(data);

        // If Bulk Pricing rendered HTML is available
        if (data.bulk_discount_rates && content) {
            viewModel.$bulkPricing.html(content);
        } else if (typeof (data.bulk_discount_rates) !== 'undefined') {
            viewModel.$bulkPricing.html('');
        }

        //for bundleb2b
        this.$shoppinglistContainer.find(">.button").removeClass("disabled").removeAttr("disabled");
        if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
            if (data.sku) {
                const current_sku = data.sku;
                const priceObj = data.price.without_tax || data.price.with_tax; //formatted
                const base_price_value = priceObj.value;
                const base_price_symbol = (priceObj.formatted).substring(0, 1);

                /*if (data.variantId || data.v3_variant_id) {
                    this.updateTierPriceRange(current_sku, base_price_value, base_price_symbol);
                    this.setTierPriceByQty(current_sku, 1);
                } else {
                    this.$tierPriceContainer.hide();
                }*/

                const $form = $('form[data-cart-item-add]', this.$scope);
                const product_id = $('[name="product_id"]', $form).val();
                let variant_id;
                const variants = this.catalog_products[product_id] || [];
                for (var i = 0; i < variants.length; i++) {
                    if (variants[i].variant_sku.toLowerCase() == current_sku.toLowerCase()) {
                        variant_id = variants[i].variant_id;
                    }
                }
                if (variant_id) {

                    this.updateTierPriceRange(current_sku, base_price_value);
                    const viewModel = this.getViewModel(this.$scope);
                    const $input = viewModel.quantity.$input;
                    let qty = parseInt($input.val(), 10);
                    const tierPriceValue = this.getMainProductTierPrice(current_sku, qty, 2);
                    if (tierPriceValue) {
                        this.gMasterPrcie = tierPriceValue;
                    }

                    const $selectPickListOption = $('[data-product-attribute="product-list"] input.form-radio:checked', $form)
                    if ($selectPickListOption.length > 0) {
                        let pickListArr = [];
                        $.each($selectPickListOption, (index, picklist) => {
                            const pickedOptionId = $(picklist).attr("name").replace("attribute[", "").replace("]", "");
                            const pickedOptionValue = $(picklist).attr("value");
                            const pickedProductId = $(picklist).attr("data-product-id");
                            pickListArr.push({
                                "pickedOptionId": pickedOptionId,
                                "pickedOptionValue": pickedOptionValue,
                                "pickedProductId": pickedProductId
                            });

                        });

                        this.getVariantOptions(product_id, variant_id, pickListArr);
                    } else {

                        if (tierPriceValue) {
                            this.setProductPriceText(tierPriceValue);

                        }
                    }
                } else {
                    if (_.isObject(data.price)) {
                        this.updatePriceView(viewModel, data.price);
                    }
                }
            } else {
                if (_.isObject(data.price)) {
                    this.updatePriceView(viewModel, data.price);
                }
            }


        } else {
            if (_.isObject(data.price)) {
                this.updatePriceView(viewModel, data.price);
            }
        }
    }

    updateDefaultAttributesForOOS(data) {
        const viewModel = this.getViewModel(this.$scope);
        if (!data.purchasable || !data.instock) {
            viewModel.$addToCart.prop('disabled', true);
            viewModel.$increments.prop('disabled', true);
        } else {
            viewModel.$addToCart.prop('disabled', false);
            viewModel.$increments.prop('disabled', false);
        }
    }

    /**
     * Hide or mark as unavailable out of stock attributes if enabled
     * @param  {Object} data Product attribute data
     */
    updateProductAttributes(data) {
        const behavior = data.out_of_stock_behavior;
        const inStockIds = data.in_stock_attributes;
        const outOfStockMessage = ` (${data.out_of_stock_message})`;

        this.showProductImage(data.image);

        if (behavior !== 'hide_option' && behavior !== 'label_option') {
            return;
        }

        $('[data-product-attribute-value]', this.$scope).each((i, attribute) => {
            const $attribute = $(attribute);
            const attrId = parseInt($attribute.data('productAttributeValue'), 10);


            if (inStockIds.indexOf(attrId) !== -1) {
                this.enableAttribute($attribute, behavior, outOfStockMessage);
            } else {
                this.disableAttribute($attribute, behavior, outOfStockMessage);
            }
        });
    }

    disableAttribute($attribute, behavior, outOfStockMessage) {
        if (this.getAttributeType($attribute) === 'set-select') {
            return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.hide();
        } else {
            $attribute.addClass('unavailable');
        }
    }

    disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        const $select = $attribute.parent();

        if (behavior === 'hide_option') {
            $attribute.toggleOption(false);
            // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
            if ($select.val() === $attribute.attr('value')) {
                $select[0].selectedIndex = 0;
            }
        } else {
            $attribute.attr('disabled', 'disabled');
            $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
        }
    }

    enableAttribute($attribute, behavior, outOfStockMessage) {
        if (this.getAttributeType($attribute) === 'set-select') {
            return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.show();
        } else {
            $attribute.removeClass('unavailable');
        }
    }

    enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        if (behavior === 'hide_option') {
            $attribute.toggleOption(true);
        } else {
            $attribute.prop('disabled', false);
            $attribute.html($attribute.html().replace(outOfStockMessage, ''));
        }
    }

    getAttributeType($attribute) {
        const $parent = $attribute.closest('[data-product-attribute]');

        return $parent ? $parent.data('productAttribute') : null;
    }

    /**
     * Allow radio buttons to get deselected
     */
    initRadioAttributes() {
        $('[data-product-attribute] input[type="radio"]', this.$scope).each((i, radio) => {
            const $radio = $(radio);

            // Only bind to click once
            if ($radio.attr('data-state') !== undefined) {
                $radio.on('click', () => {
                    if ($radio.data('state') === true) {
                        $radio.prop('checked', false);
                        $radio.data('state', false);

                        $radio.trigger('change');
                    } else {
                        $radio.data('state', true);
                    }

                    this.initRadioAttributes();
                });
            }

            $radio.attr('data-state', $radio.prop('checked'));
        });
    }

    /**
     * Check for fragment identifier in URL requesting a specific tab
     */
    getTabRequests() {
        if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
            const $activeTab = $('.tabs').has(`[href='${window.location.hash}']`);
            const $tabContent = $(`${window.location.hash}`);

            if ($activeTab.length > 0) {
                $activeTab.find('.tab')
                    .removeClass('is-active')
                    .has(`[href='${window.location.hash}']`)
                    .addClass('is-active');

                $tabContent.addClass('is-active')
                    .siblings()
                    .removeClass('is-active');
            }
        }
    }

    //for bundleb2b
    updateTierPriceRange(sku, base_price) {
        const current_sku = sku;
        const product_id = $("input[name='product_id']", this.$scope).val();
        let hasTierPrice = false;
        if (this.catalog_products && this.catalog_products[product_id]) {
            const variants = this.catalog_products[product_id];

            for (let i = 0; i < variants.length; i++) {
                const variant_sku = variants[i].variant_sku;
                if (variant_sku.toLowerCase() == current_sku.toLowerCase()) {
                    hasTierPrice = true;
                    const tier_price = variants[i].tier_price;
                    let lis = "";

                    if (tier_price.length == 1 && tier_price[0].qty == "1") {
                        this.$tierPriceContainer.hide();
                        return;
                    }

                    for (let j = 0; j < tier_price.length; j++) {
                        const price = tier_price[j].price;
                        let startQty = tier_price[j].qty;
                        let endQty;

                        let priceSavedText = "";
                        if (tier_price[j].type == "fixed") {
                            priceSavedText = `pay only ${this.gPriceSymbol}${parseFloat(price).toFixed(2)} each`;

                        } else {

                            //priceSavedText = `get ${price}% off`;
                            const priceValue = base_price - base_price * price / 100;
                            priceSavedText = `pay only ${this.gPriceSymbol}${parseFloat(priceValue).toFixed(2)} each`;

                        }

                        if (tier_price[j + 1]) {
                            endQty = tier_price[j + 1].qty;
                        }
                        if (endQty) {
                            if (startQty == (endQty - 1)) {
                                lis += `<li>Buy ${startQty} and ${priceSavedText}</li>`;

                            } else {
                                lis += `<li>Buy ${startQty} - ${endQty} and ${priceSavedText}</li>`;
                            }
                        } else {
                            lis += `<li>Buy ${startQty} or above and ${priceSavedText}</li>`;
                        }
                    }

                    this.$tierPriceContainer.find("ul").html(lis);
                }
            }

        }
        if (hasTierPrice) {
            this.$tierPriceContainer.show();
        } else {
            this.$tierPriceContainer.hide();
        }

    }

    //for bundleb2b
    // not used
    setTierPriceByQty(variantSku, qty) {

        if (!variantSku) {
            return;
        }

        const productId = $('[name="product_id"]', this.$scope).val();

        if (this.catalog_products && this.catalog_products[productId]) {
            /*const $price = $("[data-product-price-without-tax]", this.$scope) || $("[data-product-price-with-tax]", this.$scope);
            const base_price = $price.text().trim();
            const base_price_symbol = base_price.substring(0, 1);
            const base_price_value = base_price.replace("$", "");*/
            const base_price_value = this.getMainProductBasePrice();
            console.log(base_price_value);

            const variantSkus = this.catalog_products[productId];
            let tier_price_array = [];
            for (let i = 0; i < variantSkus.length; i++) {
                if (variantSkus[i].variant_sku == variantSku) {
                    tier_price_array = variantSkus[i].tier_price;
                }
            }

            let tier_price;
            for (let j = 0; j < tier_price_array.length; j++) {
                const price_type = tier_price_array[j].type;
                const tier_qty = tier_price_array[j].qty;
                const price = tier_price_array[j].price;

                if (qty >= tier_qty) {
                    if (price_type == "fixed") {
                        tier_price = price;

                    } else {
                        tier_price = base_price_value - base_price_value * price / 100;
                    }
                }
            }

            if (tier_price) {
                tier_price = parseFloat(tier_price).toFixed(2);
                this.setProductPriceText(tier_price);
                this.gMasterPrcie = tier_price;

            }
        }
    }

    // for bundleb2b
    getMainProductTierPrice(variantSku, qty, type) {
        let tier_price;

        if (!variantSku) {
            return false;
        }

        const productId = $('[name="product_id"]', this.$scope).val();

        if (this.catalog_products && this.catalog_products[productId]) {
            debugger
            /*const $price = $("[data-product-price-without-tax]", this.$scope) || $("[data-product-price-with-tax]", this.$scope);
            const base_price = $price.text().trim();
            const base_price_symbol = base_price.substring(0, 1);
            const base_price_value = base_price.replace("$", "");*/
            const base_price_value = this.getMainProductBasePrice();
            console.log(base_price_value);
            const variantSkus = this.catalog_products[productId];
            let tier_price_array = [];
            for (let i = 0; i < variantSkus.length; i++) {
                if(type == 1) {
                    for(let j in variantSkus[i].tier_price) {
                        if(variantSkus[i].tier_price[j].qty == 1) {
                            if(variantSkus[i].tier_price[j].new_price) {
                                tier_price_array.push(variantSkus[i].tier_price[j].new_price);
                            }
                        }
                    }
                } else {
                    if (variantSkus[i].variant_sku == variantSku) {
                        tier_price_array = variantSkus[i].tier_price;
                    }
                }
            }

            if(type == 1) {
                tier_price = Math.min(...tier_price_array);
            } else {
                for (let j = 0; j < tier_price_array.length; j++) {
                    const tier_qty = tier_price_array[j].qty;
                    if (qty >= tier_qty) {
                        tier_price = tier_price_array[j].new_price;
                    }
                }
            }

            if(tier_price == "Infinity" || tier_price == "undefined") {
                variantSkus && variantSkus.forEach( d => {
                    tier_price = d.variant_price;
                });
            }

            if (tier_price) {
                tier_price = parseFloat(tier_price).toFixed(2);
            }
        }

        console.log("tier price", tier_price);

        return tier_price;
    }

    // for bundleb2b
    getVariantOptions(product_id, variant_id, pickListArr) {
        const bypass_store_hash = `${config.storeHash}`;

        $.ajax({
            type: "GET",
            url: `${config.apiRootUrl}/productvariants?store_hash=${bypass_store_hash}&product_id=${product_id}&variant_id=${variant_id}`,
            success: (data) => {
                console.log("sku options", data);
                console.log(pickListArr);
                let hasCustomPrice = true;

                let productPrice = parseFloat(this.gMasterPrcie).toFixed(2);
                console.log(this.gTierPrice);
                console.log("price start -------");
                console.log(productPrice);

                if (data && data.option_list) {
                    const options = data.option_list;

                    for (let i = 0; i < pickListArr.length; i++) {
                        const pickedOptionId = pickListArr[i].pickedOptionId;
                        const pickedOptionValue = pickListArr[i].pickedOptionValue;
                        const pickedProductId = pickListArr[i].pickedProductId;

                        let showCustomPrice = true;

                        for (let j = 0; j < options.length; j++) {
                            const optionId = options[j].option_id;
                            const optionValue = options[j].option_value;

                            if (pickedOptionId == optionId && pickedOptionValue == optionValue) {
                                showCustomPrice = false;
                                hasCustomPrice = false;
                            }
                        }

                        if (showCustomPrice) {
                            productPrice = parseFloat(parseFloat(productPrice) + parseFloat(this.gTierPrice[pickedProductId] || 0)).toFixed(2);
                            console.log("+" + this.gTierPrice[pickedProductId] || 0);
                        }
                    }


                }

                // call back function
                if (hasCustomPrice) {
                    this.$tierPriceContainer.hide();
                }
                productPrice = parseFloat(productPrice).toFixed(2);
                this.setProductPriceText(productPrice);
                console.log(productPrice);
                console.log("price end-------");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("error", JSON.stringify(jqXHR));
            }
        });
    }

    // for bundleb2b
    // for simple products
    getTierPriceByProductId(productId, qty) {
        if (!productId) {
            return;
        }

        if (this.gTierPrice[productId]) {
            return;
        }

        $.ajax({
            type: "GET",
            url: `${config.apiRootUrl}/getCatalogproduct?store_hash=${config.storeHash}&id=${productId}`,
            success: (data) => {
                if (!data) {
                    return;
                }
                let tier_price;
                const base_price = data.price;

                if (this.catalog_products && this.catalog_products[productId]) {
                    const variantSkus = this.catalog_products[productId];
                    const tier_price_array = variantSkus[0].tier_price;
                    const base_price_value = base_price;

                    for (let j = 0; j < tier_price_array.length; j++) {
                        const price_type = tier_price_array[j].type;
                        const tier_qty = tier_price_array[j].qty;
                        const price = tier_price_array[j].price;

                        if (qty >= tier_qty) {
                            if (price_type == "fixed") {
                                tier_price = price;

                            } else {

                                if (base_price_value) {
                                    tier_price = base_price_value - base_price_value * price / 100;
                                } else {
                                    tier_price = new_price;
                                }
                            }
                        }
                    }

                    if (tier_price) {
                        tier_price = parseFloat(tier_price).toFixed(2);
                    }
                } else {
                    tier_price = base_price;
                }

                this.gTierPrice[productId] = tier_price;
                //console.log(this.gTierPrice);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("error", JSON.stringify(jqXHR));
            }
        });

    }

    // for bundleb2b
    initProductListOptionPrice() {
        const $form = $('form[data-cart-item-add]', this.$scope);
        const $pickListOptions = $('.form-field[data-product-attribute="product-list"]');
        if ($pickListOptions.length > 0) {
            $.each($pickListOptions, (index, option) => {
                const $formRadios = $(option).find("input.form-radio");
                $.each($formRadios, (i, radio) => {
                    const productId = $(radio).attr("data-product-id");
                    //console.log(productId);
                    this.getTierPriceByProductId(productId, 1);

                });

            });
        }
    }

    // for bundleb2b
    setProductPriceText(priceValue) {
        priceValue = pricesStyle(priceValue, 2)
        const $price = $("[data-product-price-without-tax]", this.$scope) || $("[data-product-price-with-tax]", this.$scope);
        $price.text(`${this.gPriceSymbol}${priceValue}`);
        console.log("this is priceValue" + priceValue)

    }

    // for bundleb2b
    getMainProductBasePrice() {
        /*const $price = $("[data-product-price-without-tax]", this.$scope) || $("[data-product-price-with-tax]", this.$scope);
        const base_price = $price.text().trim();
        const base_price_symbol = base_price.substring(0, 1);
        const base_price_value = base_price.replace("$", "").replace(",", "");
        return base_price_value;*/

        const gBasePrice = $("[b2b-product-base-price]", this.$scope).attr("b2b-product-base-price");
        return gBasePrice;
    }

    // for bundleb2b -- simple products
    getVariantIdByProductId(productId) {
        let variantId;

        if (this.catalog_products && this.catalog_products[productId]) {
            const variantSkus = this.catalog_products[productId];
            variantId = variantSkus[0].variant_id;
        }
        return variantId;
    }

    initAdvQty(sku, resetQty) {
        const baseSku = $("[data-product-sku]", this.$scope).text().trim();
        const variantSku = sku || baseSku;

        let skus = [];
        skus.push(variantSku);

        const $input = $(".form-input--incrementTotal", this.$scope);
        $input.attr("data-advqty-sku", variantSku);
        AdvQuantityUtil.setUpAdvQtyMulti($input, {
            bindInputEvents: false,
            bindButtonEvents: false,
            resetQty: resetQty || false
        }, () => {
            $input.change();
        });

    }

}
