(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _b2b_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./b2b/config */ "./assets/js/theme/b2b/config.js");









function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }









var Cart =
/*#__PURE__*/
function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);

  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Cart.prototype;

  _proto.onReady = function onReady() {
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.bindEvents();
  };

  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;

    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1; // Does not quality for min/max quantity

    if (newQty < minQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: maxError,
        type: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0; // this.refreshContent(remove);
        //for bundleb2b

        if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
          _this.updateCatalogPrice(itemId);
        } else {
          _this.refreshContent(remove);
        }
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };

  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;

    if (preVal === void 0) {
      preVal = null;
    }

    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.attr('value')), 10);
    var invalidEntry; // Does not quality for min/max quantity

    if (!newQty) {
      invalidEntry = $el.attr('value');
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: invalidEntry + " is not a valid entry",
        type: 'error'
      });
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: maxError,
        type: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };

  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };

  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this4 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_12__["defaultModal"])();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);

      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].hooks.on('product-option-change', function (event, option) {
      var $changedOption = $(option);
      var $form = $changedOption.parents('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      var item = $('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};

        if (err) {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
            text: err,
            type: 'error'
          });
          return false;
        }

        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }

        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };

  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;

    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show(); // Remove last item from cart? Reload

    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);

      _this5.$cartTotals.html(response.totals);

      _this5.$cartMessages.html(response.statusMessages);

      $cartPageTitle.replaceWith(response.pageTitle);

      _this5.bindEvents();

      _this5.$overlay.hide();

      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
    });
  };

  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;

    var debounceTimeout = 400;

    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_7___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(this.cartUpdate, debounceTimeout), this);

    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_7___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);

    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_7___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(this.cartRemoveItem, debounceTimeout), this);

    var preVal; // cart update

    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdate($target);
    }); // cart qty manually updates

    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: string,
        type: 'warning',
        showCancelButton: true
      }).then(function () {
        // remove item from cart
        cartRemoveItem(itemId);
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      event.preventDefault(); // edit item in cart

      _this6.cartEditOptions(itemId);
    });
  };

  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;

    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault(); // Empty code

      if (!code) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          text: $codeInput.data('error'),
          type: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;

    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();

      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_9__["default"])(code)) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          text: $certInput.data('error'),
          type: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
            text: resp.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_12__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);

        _this9.bindGiftWrappingForm();
      });
    });
  };

  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');

      if (!id) {
        return;
      }

      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();

      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');

    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');

      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }

    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };

  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents(); // initiate shipping estimator module

    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_11__["default"]($('[data-shipping-estimator]'));
  } // for bundleb2b
  ;

  _proto.handlePickListOptions = function handlePickListOptions(cartItemObj, cb) {
    var _this10 = this;

    var cartItemId = cartItemObj.item_id;
    var product_id = cartItemObj.product_id;
    var variant_id = cartItemObj.variant_id;
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.productAttributes.configureInCart(cartItemId, {
      template: 'b2b/configure-product-data'
    }, function (err, response) {
      console.log(response.data);
      var selectedPickListOptins = [];

      if (response.data && response.data.options) {
        var options = response.data.options;

        for (var i = 0; i < options.length; i++) {
          var option = options[i];

          if (option.partial == "product-list") {
            var optionValues = option.values;

            for (var j = 0; j < optionValues.length; j++) {
              var optionValue = optionValues[j];

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
          url: _b2b_config__WEBPACK_IMPORTED_MODULE_14__["default"].apiRootUrl + "/productvariants?store_hash=" + _b2b_config__WEBPACK_IMPORTED_MODULE_14__["default"].storeHash + "&product_id=" + product_id + "&variant_id=" + variant_id,
          success: function success(data) {
            console.log(data);
            var extras_list = [];

            for (var k = 0; k < selectedPickListOptins.length; k++) {
              var showCustomPrice = true;

              if (data && data.option_list) {
                var _options = data.option_list;

                for (var _j = 0; _j < _options.length; _j++) {
                  var optionId = _options[_j].option_id;
                  var _optionValue = _options[_j].option_value;

                  if (optionId == selectedPickListOptins[k].option_id && _optionValue == selectedPickListOptins[k].option_value) {
                    showCustomPrice = false;
                  }
                }

                if (showCustomPrice) {
                  var extra_product_id = selectedPickListOptins[k].option_data;

                  var extra_variant_id = _this10.getVariantIdByProductId(extra_product_id);

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
              cartItemObj.extras_list = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(extras_list);
            }

            if (cb) {
              cb();
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            console.log("error", JSON.stringify(jqXHR));
          }
        });
      } else {
        if (cb) {
          cb();
        }
      }
    });
  } //for bundleb2b
  ;

  _proto.updateCatalogPrice = function updateCatalogPrice(cartItemId, cb) {
    var _this11 = this;

    this.$overlay.show();
    $.ajax({
      type: "GET",
      url: "../api/storefront/carts",
      contentType: "application/json",
      accept: "application/json",
      success: function success(data) {
        console.log("cart", data);

        if (data && data.length > 0) {
          (function () {
            var cartId = data[0].id;
            console.log("cartId", cartId); //const cartItems = data[0].lineItems.physicalItems;

            var cartItems_all = data[0].lineItems.physicalItems;
            var cartItems = cartItems_all.filter(function (item) {
              return item.parentId == null;
            });

            for (var i = 0; i < cartItems.length; i++) {
              var cartItem = cartItems[i];
              var itemId = cartItem.id;

              if (cartItemId == itemId) {
                (function () {
                  var itemProductId = cartItem.productId;
                  var itemVariantId = cartItem.variantId;
                  var itemQty = cartItem.quantity;
                  var gCatalogId = sessionStorage.getItem("catalog_id");
                  var cartItemObj = {
                    "item_id": itemId,
                    "product_id": itemProductId,
                    "variant_id": itemVariantId,
                    "quantity": itemQty,
                    "catalog_id": gCatalogId
                  };
                  console.log("putdata", JSON.stringify(cartItemObj));

                  _this11.handlePickListOptions(cartItemObj, function () {
                    console.log("putdata2", JSON.stringify(cartItemObj));
                    var bypass_store_hash = "" + _b2b_config__WEBPACK_IMPORTED_MODULE_14__["default"].storeHash;
                    $.ajax({
                      type: "PUT",
                      url: _b2b_config__WEBPACK_IMPORTED_MODULE_14__["default"].apiRootUrl + "/cart?store_hash=" + bypass_store_hash + "&cart_id=" + cartId,
                      data: JSON.stringify(cartItemObj),
                      success: function success(data) {
                        console.log("update price done.");
                        window.location.reload();
                      },
                      error: function error(jqXHR, textStatus, errorThrown) {
                        _this11.$overlay.hide();

                        alert("update catalog price error");
                      }
                    });
                  });
                })();
              }
            }
          })();
        } else {
          _this11.$overlay.hide();
        }
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        _this11.$overlay.hide();

        console.log("error", JSON.stringify(jqXHR));
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          type: "error",
          text: "There has some error, please try again."
        });
      }
    });
  };

  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_8__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");









var ShippingEstimator =
/*#__PURE__*/
function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }

  var _proto = ShippingEstimator.prototype;

  _proto.initFormValidation = function initFormValidation() {
    var _this = this;

    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }

      if (_this.shippingValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };

  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };

  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;

    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");

        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }

        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }
  /**
   * Toggle between default shipping and ups shipping rates
   */
  ;

  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };

  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;

    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"])({
          text: err,
          type: 'error'
        });
        throw new Error(err);
      }

      var $field = $(field);

      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }

      if ($last) {
        _this3.shippingValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;

        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].cleanUpStateValidation(field);
      } // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us


      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };

  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content); // bind the select button

        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      $('.shipping-estimate-hide').show();
    });
    $('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      $('.shipping-estimate-show').show();
      $('.shipping-estimate-hide').hide();
    });
  };

  return ShippingEstimator;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  } // Add any custom gift certificate validation logic here


  return true;
});

/***/ }),

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
 // Set defaults for sweetalert2 popup boxes

sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
  buttonsStyling: false,
  confirmButtonClass: 'button',
  cancelButtonClass: 'button'
}); // Re-export

/* harmony default export */ __webpack_exports__["default"] = (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL3N3ZWV0LWFsZXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJvblJlYWR5IiwiJGNhcnRDb250ZW50IiwiJCIsIiRjYXJ0TWVzc2FnZXMiLCIkY2FydFRvdGFscyIsIiRvdmVybGF5IiwiaGlkZSIsImJpbmRFdmVudHMiLCJjYXJ0VXBkYXRlIiwiJHRhcmdldCIsIml0ZW1JZCIsImRhdGEiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzd2FsIiwidGV4dCIsInR5cGUiLCJzaG93IiwidXRpbHMiLCJhcGkiLCJjYXJ0IiwiaXRlbVVwZGF0ZSIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVtb3ZlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidXBkYXRlQ2F0YWxvZ1ByaWNlIiwicmVmcmVzaENvbnRlbnQiLCJlcnJvcnMiLCJqb2luIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJOdW1iZXIiLCJhdHRyIiwiaW52YWxpZEVudHJ5IiwiY2FydFJlbW92ZUl0ZW0iLCJpdGVtUmVtb3ZlIiwiY2FydEVkaXRPcHRpb25zIiwibW9kYWwiLCJkZWZhdWx0TW9kYWwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJvcGVuIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJ1cGRhdGVDb250ZW50IiwiY29udGVudCIsImJpbmRHaWZ0V3JhcHBpbmdGb3JtIiwiaG9va3MiLCJvbiIsImV2ZW50Iiwib3B0aW9uIiwiJGNoYW5nZWRPcHRpb24iLCIkZm9ybSIsInBhcmVudHMiLCIkc3VibWl0IiwiJG1lc3NhZ2VCb3giLCJpdGVtIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwicmVzdWx0IiwicHVyY2hhc2luZ19tZXNzYWdlIiwicHJvcCIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsIiRjYXJ0SXRlbXNSb3dzIiwiJGNhcnRQYWdlVGl0bGUiLCJ0b3RhbHMiLCJwYWdlVGl0bGUiLCJzdGF0dXNNZXNzYWdlcyIsImxlbmd0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0Q29udGVudCIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInF1YW50aXR5IiwidHJpZ2dlciIsImJpbmRDYXJ0RXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwiY3VycmVudFRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwib25RdHlGb2N1cyIsInZhbHVlIiwiY2hhbmdlIiwic3RyaW5nIiwic2hvd0NhbmNlbEJ1dHRvbiIsInRoZW4iLCJiaW5kUHJvbW9Db2RlRXZlbnRzIiwiJGNvdXBvbkNvbnRhaW5lciIsIiRjb3Vwb25Gb3JtIiwiJGNvZGVJbnB1dCIsImNvZGUiLCJhcHBseUNvZGUiLCJiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzIiwiJGNlcnRDb250YWluZXIiLCIkY2VydEZvcm0iLCIkY2VydElucHV0IiwidG9nZ2xlIiwiZ2lmdENlcnRDaGVjayIsImFwcGx5R2lmdENlcnRpZmljYXRlIiwicmVzcCIsImJpbmRHaWZ0V3JhcHBpbmdFdmVudHMiLCJnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyIsIiRzZWxlY3QiLCJpZCIsImluZGV4IiwiYWxsb3dNZXNzYWdlIiwiZmluZCIsInRvZ2dsZVZpZXdzIiwiJHNpbmdsZUZvcm0iLCIkbXVsdGlGb3JtIiwic2hpcHBpbmdFc3RpbWF0b3IiLCJTaGlwcGluZ0VzdGltYXRvciIsImhhbmRsZVBpY2tMaXN0T3B0aW9ucyIsImNhcnRJdGVtT2JqIiwiY2IiLCJjYXJ0SXRlbUlkIiwiaXRlbV9pZCIsInByb2R1Y3RfaWQiLCJ2YXJpYW50X2lkIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkUGlja0xpc3RPcHRpbnMiLCJpIiwicGFydGlhbCIsIm9wdGlvblZhbHVlcyIsInZhbHVlcyIsImoiLCJvcHRpb25WYWx1ZSIsInNlbGVjdGVkIiwicHVzaCIsImFqYXgiLCJ1cmwiLCJjb25maWciLCJhcGlSb290VXJsIiwic3RvcmVIYXNoIiwic3VjY2VzcyIsImV4dHJhc19saXN0IiwiayIsInNob3dDdXN0b21QcmljZSIsIm9wdGlvbl9saXN0Iiwib3B0aW9uSWQiLCJvcHRpb25faWQiLCJvcHRpb25fdmFsdWUiLCJleHRyYV9wcm9kdWN0X2lkIiwib3B0aW9uX2RhdGEiLCJleHRyYV92YXJpYW50X2lkIiwiZ2V0VmFyaWFudElkQnlQcm9kdWN0SWQiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnRUeXBlIiwiYWNjZXB0IiwiY2FydElkIiwiY2FydEl0ZW1zX2FsbCIsImxpbmVJdGVtcyIsInBoeXNpY2FsSXRlbXMiLCJjYXJ0SXRlbXMiLCJmaWx0ZXIiLCJwYXJlbnRJZCIsImNhcnRJdGVtIiwiaXRlbVByb2R1Y3RJZCIsInByb2R1Y3RJZCIsIml0ZW1WYXJpYW50SWQiLCJ2YXJpYW50SWQiLCJpdGVtUXR5IiwiZ0NhdGFsb2dJZCIsImJ5cGFzc19zdG9yZV9oYXNoIiwiYWxlcnQiLCJQYWdlTWFuYWdlciIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ1ZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJpbmRWYWxpZGF0aW9uIiwiYmluZFN0YXRlVmFsaWRhdGlvbiIsImJpbmRVUFNSYXRlcyIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjb3VudHJ5SWQiLCJpc05hTiIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiY29udGV4dCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsImlzIiwiVmFsaWRhdG9ycyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiYWRkQ2xhc3MiLCJjZXJ0Iiwic3dlZXRBbGVydCIsInNldERlZmF1bHRzIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uQ2xhc3MiLCJjYW5jZWxCdXR0b25DbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSTs7Ozs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtBQUNOLFNBQUtDLFlBQUwsR0FBb0JDLENBQUMsQ0FBQyxxQkFBRCxDQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJELENBQUMsQ0FBQyxvQkFBRCxDQUF0QjtBQUNBLFNBQUtFLFdBQUwsR0FBbUJGLENBQUMsQ0FBQyxvQkFBRCxDQUFwQjtBQUNBLFNBQUtHLFFBQUwsR0FBZ0JILENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQ1hJLElBRFcsRUFBaEIsQ0FKTSxDQUtPOztBQUViLFNBQUtDLFVBQUw7QUFDSCxHOztTQUVEQyxVLEdBQUEsb0JBQVdDLE9BQVgsRUFBb0I7QUFBQTs7QUFDaEIsUUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLElBQVIsQ0FBYSxZQUFiLENBQWY7QUFDQSxRQUFNQyxHQUFHLEdBQUdWLENBQUMsV0FBU1EsTUFBVCxDQUFiO0FBQ0EsUUFBTUcsTUFBTSxHQUFHQyxRQUFRLENBQUNGLEdBQUcsQ0FBQ0csR0FBSixFQUFELEVBQVksRUFBWixDQUF2QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRixHQUFHLENBQUNELElBQUosQ0FBUyxhQUFULENBQUQsRUFBMEIsRUFBMUIsQ0FBdkI7QUFDQSxRQUFNTSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0YsR0FBRyxDQUFDRCxJQUFKLENBQVMsYUFBVCxDQUFELEVBQTBCLEVBQTFCLENBQXZCO0FBQ0EsUUFBTU8sUUFBUSxHQUFHTixHQUFHLENBQUNELElBQUosQ0FBUyxrQkFBVCxDQUFqQjtBQUNBLFFBQU1RLFFBQVEsR0FBR1AsR0FBRyxDQUFDRCxJQUFKLENBQVMsa0JBQVQsQ0FBakI7QUFDQSxRQUFNUyxNQUFNLEdBQUdYLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFFBQWIsTUFBMkIsS0FBM0IsR0FBbUNFLE1BQU0sR0FBRyxDQUE1QyxHQUFnREEsTUFBTSxHQUFHLENBQXhFLENBUmdCLENBU2hCOztBQUNBLFFBQUlPLE1BQU0sR0FBR0gsTUFBYixFQUFxQjtBQUNqQixhQUFPSSxvRUFBSSxDQUFDO0FBQ1JDLFlBQUksRUFBRUosUUFERTtBQUVSSyxZQUFJLEVBQUU7QUFGRSxPQUFELENBQVg7QUFJSCxLQUxELE1BS08sSUFBSVAsTUFBTSxHQUFHLENBQVQsSUFBY0ksTUFBTSxHQUFHSixNQUEzQixFQUFtQztBQUN0QyxhQUFPSyxvRUFBSSxDQUFDO0FBQ1JDLFlBQUksRUFBRUgsUUFERTtBQUVSSSxZQUFJLEVBQUU7QUFGRSxPQUFELENBQVg7QUFJSDs7QUFFRCxTQUFLbEIsUUFBTCxDQUFjbUIsSUFBZDtBQUVBQyx1RUFBSyxDQUFDQyxHQUFOLENBQVVDLElBQVYsQ0FBZUMsVUFBZixDQUEwQmxCLE1BQTFCLEVBQWtDVSxNQUFsQyxFQUEwQyxVQUFDUyxHQUFELEVBQU1DLFFBQU4sRUFBbUI7QUFDekQsV0FBSSxDQUFDekIsUUFBTCxDQUFjQyxJQUFkOztBQUVBLFVBQUl3QixRQUFRLENBQUNuQixJQUFULENBQWNvQixNQUFkLEtBQXlCLFNBQTdCLEVBQXdDO0FBQ3BDO0FBQ0EsWUFBTUMsTUFBTSxHQUFJWixNQUFNLEtBQUssQ0FBM0IsQ0FGb0MsQ0FJcEM7QUFDQTs7QUFDQSxZQUFJYSxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsZ0JBQXZCLEtBQTRDRCxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsZ0JBQXZCLEtBQTRDLE1BQTVGLEVBQW9HO0FBQ2hHLGVBQUksQ0FBQ0Msa0JBQUwsQ0FBd0J6QixNQUF4QjtBQUNILFNBRkQsTUFFTztBQUNILGVBQUksQ0FBQzBCLGNBQUwsQ0FBb0JKLE1BQXBCO0FBQ0g7QUFDSixPQVhELE1BV087QUFDSHBCLFdBQUcsQ0FBQ0csR0FBSixDQUFRRixNQUFSO0FBQ0FRLDRFQUFJLENBQUM7QUFDREMsY0FBSSxFQUFFUSxRQUFRLENBQUNuQixJQUFULENBQWMwQixNQUFkLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQURMO0FBRURmLGNBQUksRUFBRTtBQUZMLFNBQUQsQ0FBSjtBQUlIO0FBQ0osS0FyQkQ7QUFzQkgsRzs7U0FFRGdCLHVCLEdBQUEsaUNBQXdCOUIsT0FBeEIsRUFBaUMrQixNQUFqQyxFQUFnRDtBQUFBOztBQUFBLFFBQWZBLE1BQWU7QUFBZkEsWUFBZSxHQUFOLElBQU07QUFBQTs7QUFDNUMsUUFBTTlCLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxJQUFSLENBQWEsWUFBYixDQUFmO0FBQ0EsUUFBTUMsR0FBRyxHQUFHVixDQUFDLFdBQVNRLE1BQVQsQ0FBYjtBQUNBLFFBQU1NLE1BQU0sR0FBR0YsUUFBUSxDQUFDRixHQUFHLENBQUNELElBQUosQ0FBUyxhQUFULENBQUQsRUFBMEIsRUFBMUIsQ0FBdkI7QUFDQSxRQUFNTSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0YsR0FBRyxDQUFDRCxJQUFKLENBQVMsYUFBVCxDQUFELEVBQTBCLEVBQTFCLENBQXZCO0FBQ0EsUUFBTUUsTUFBTSxHQUFHMkIsTUFBTSxLQUFLLElBQVgsR0FBa0JBLE1BQWxCLEdBQTJCdkIsTUFBMUM7QUFDQSxRQUFNQyxRQUFRLEdBQUdOLEdBQUcsQ0FBQ0QsSUFBSixDQUFTLGtCQUFULENBQWpCO0FBQ0EsUUFBTVEsUUFBUSxHQUFHUCxHQUFHLENBQUNELElBQUosQ0FBUyxrQkFBVCxDQUFqQjtBQUNBLFFBQU1TLE1BQU0sR0FBR04sUUFBUSxDQUFDMkIsTUFBTSxDQUFDN0IsR0FBRyxDQUFDOEIsSUFBSixDQUFTLE9BQVQsQ0FBRCxDQUFQLEVBQTRCLEVBQTVCLENBQXZCO0FBQ0EsUUFBSUMsWUFBSixDQVQ0QyxDQVU1Qzs7QUFDQSxRQUFJLENBQUN2QixNQUFMLEVBQWE7QUFDVHVCLGtCQUFZLEdBQUcvQixHQUFHLENBQUM4QixJQUFKLENBQVMsT0FBVCxDQUFmO0FBQ0E5QixTQUFHLENBQUNHLEdBQUosQ0FBUUYsTUFBUjtBQUNBLGFBQU9RLG9FQUFJLENBQUM7QUFDUkMsWUFBSSxFQUFLcUIsWUFBTCwwQkFESTtBQUVScEIsWUFBSSxFQUFFO0FBRkUsT0FBRCxDQUFYO0FBSUgsS0FQRCxNQU9PLElBQUlILE1BQU0sR0FBR0gsTUFBYixFQUFxQjtBQUN4QkwsU0FBRyxDQUFDRyxHQUFKLENBQVFGLE1BQVI7QUFDQSxhQUFPUSxvRUFBSSxDQUFDO0FBQ1JDLFlBQUksRUFBRUosUUFERTtBQUVSSyxZQUFJLEVBQUU7QUFGRSxPQUFELENBQVg7QUFJSCxLQU5NLE1BTUEsSUFBSVAsTUFBTSxHQUFHLENBQVQsSUFBY0ksTUFBTSxHQUFHSixNQUEzQixFQUFtQztBQUN0Q0osU0FBRyxDQUFDRyxHQUFKLENBQVFGLE1BQVI7QUFDQSxhQUFPUSxvRUFBSSxDQUFDO0FBQ1JDLFlBQUksRUFBRUgsUUFERTtBQUVSSSxZQUFJLEVBQUU7QUFGRSxPQUFELENBQVg7QUFJSDs7QUFFRCxTQUFLbEIsUUFBTCxDQUFjbUIsSUFBZDtBQUNBQyx1RUFBSyxDQUFDQyxHQUFOLENBQVVDLElBQVYsQ0FBZUMsVUFBZixDQUEwQmxCLE1BQTFCLEVBQWtDVSxNQUFsQyxFQUEwQyxVQUFDUyxHQUFELEVBQU1DLFFBQU4sRUFBbUI7QUFDekQsWUFBSSxDQUFDekIsUUFBTCxDQUFjQyxJQUFkOztBQUVBLFVBQUl3QixRQUFRLENBQUNuQixJQUFULENBQWNvQixNQUFkLEtBQXlCLFNBQTdCLEVBQXdDO0FBQ3BDO0FBQ0EsWUFBTUMsTUFBTSxHQUFJWixNQUFNLEtBQUssQ0FBM0I7O0FBRUEsY0FBSSxDQUFDZ0IsY0FBTCxDQUFvQkosTUFBcEI7QUFDSCxPQUxELE1BS087QUFDSHBCLFdBQUcsQ0FBQ0csR0FBSixDQUFRRixNQUFSO0FBQ0FRLDRFQUFJLENBQUM7QUFDREMsY0FBSSxFQUFFUSxRQUFRLENBQUNuQixJQUFULENBQWMwQixNQUFkLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQURMO0FBRURmLGNBQUksRUFBRTtBQUZMLFNBQUQsQ0FBSjtBQUlIO0FBQ0osS0FmRDtBQWdCSCxHOztTQUVEcUIsYyxHQUFBLHdCQUFlbEMsTUFBZixFQUF1QjtBQUFBOztBQUNuQixTQUFLTCxRQUFMLENBQWNtQixJQUFkO0FBQ0FDLHVFQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBVixDQUFla0IsVUFBZixDQUEwQm5DLE1BQTFCLEVBQWtDLFVBQUNtQixHQUFELEVBQU1DLFFBQU4sRUFBbUI7QUFDakQsVUFBSUEsUUFBUSxDQUFDbkIsSUFBVCxDQUFjb0IsTUFBZCxLQUF5QixTQUE3QixFQUF3QztBQUNwQyxjQUFJLENBQUNLLGNBQUwsQ0FBb0IsSUFBcEI7QUFDSCxPQUZELE1BRU87QUFDSGYsNEVBQUksQ0FBQztBQUNEQyxjQUFJLEVBQUVRLFFBQVEsQ0FBQ25CLElBQVQsQ0FBYzBCLE1BQWQsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBREw7QUFFRGYsY0FBSSxFQUFFO0FBRkwsU0FBRCxDQUFKO0FBSUg7QUFDSixLQVREO0FBVUgsRzs7U0FFRHVCLGUsR0FBQSx5QkFBZ0JwQyxNQUFoQixFQUF3QjtBQUFBOztBQUNwQixRQUFNcUMsS0FBSyxHQUFHQyxtRUFBWSxFQUExQjtBQUNBLFFBQU1DLE9BQU8sR0FBRztBQUNaQyxjQUFRLEVBQUU7QUFERSxLQUFoQjtBQUlBSCxTQUFLLENBQUNJLElBQU47QUFFQTFCLHVFQUFLLENBQUNDLEdBQU4sQ0FBVTBCLGlCQUFWLENBQTRCQyxlQUE1QixDQUE0QzNDLE1BQTVDLEVBQW9EdUMsT0FBcEQsRUFBNkQsVUFBQ3BCLEdBQUQsRUFBTUMsUUFBTixFQUFtQjtBQUM1RWlCLFdBQUssQ0FBQ08sYUFBTixDQUFvQnhCLFFBQVEsQ0FBQ3lCLE9BQTdCOztBQUVBLFlBQUksQ0FBQ0Msb0JBQUw7QUFDSCxLQUpEO0FBTUEvQix1RUFBSyxDQUFDZ0MsS0FBTixDQUFZQyxFQUFaLENBQWUsdUJBQWYsRUFBd0MsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3ZELFVBQU1DLGNBQWMsR0FBRzNELENBQUMsQ0FBQzBELE1BQUQsQ0FBeEI7QUFDQSxVQUFNRSxLQUFLLEdBQUdELGNBQWMsQ0FBQ0UsT0FBZixDQUF1QixNQUF2QixDQUFkO0FBQ0EsVUFBTUMsT0FBTyxHQUFHOUQsQ0FBQyxDQUFDLGNBQUQsRUFBaUI0RCxLQUFqQixDQUFqQjtBQUNBLFVBQU1HLFdBQVcsR0FBRy9ELENBQUMsQ0FBQyxrQkFBRCxDQUFyQjtBQUNBLFVBQU1nRSxJQUFJLEdBQUdoRSxDQUFDLENBQUMsa0JBQUQsRUFBcUI0RCxLQUFyQixDQUFELENBQTZCcEIsSUFBN0IsQ0FBa0MsT0FBbEMsQ0FBYjtBQUVBakIseUVBQUssQ0FBQ0MsR0FBTixDQUFVMEIsaUJBQVYsQ0FBNEJlLFlBQTVCLENBQXlDRCxJQUF6QyxFQUErQ0osS0FBSyxDQUFDTSxTQUFOLEVBQS9DLEVBQWtFLFVBQUN2QyxHQUFELEVBQU13QyxNQUFOLEVBQWlCO0FBQy9FLFlBQU0xRCxJQUFJLEdBQUcwRCxNQUFNLENBQUMxRCxJQUFQLElBQWUsRUFBNUI7O0FBRUEsWUFBSWtCLEdBQUosRUFBUztBQUNMUiw4RUFBSSxDQUFDO0FBQ0RDLGdCQUFJLEVBQUVPLEdBREw7QUFFRE4sZ0JBQUksRUFBRTtBQUZMLFdBQUQsQ0FBSjtBQUlBLGlCQUFPLEtBQVA7QUFDSDs7QUFFRCxZQUFJWixJQUFJLENBQUMyRCxrQkFBVCxFQUE2QjtBQUN6QnBFLFdBQUMsQ0FBQyxvQkFBRCxFQUF1QitELFdBQXZCLENBQUQsQ0FBcUMzQyxJQUFyQyxDQUEwQ1gsSUFBSSxDQUFDMkQsa0JBQS9DO0FBQ0FOLGlCQUFPLENBQUNPLElBQVIsQ0FBYSxVQUFiLEVBQXlCLElBQXpCO0FBQ0FOLHFCQUFXLENBQUN6QyxJQUFaO0FBQ0gsU0FKRCxNQUlPO0FBQ0h3QyxpQkFBTyxDQUFDTyxJQUFSLENBQWEsVUFBYixFQUF5QixLQUF6QjtBQUNBTixxQkFBVyxDQUFDM0QsSUFBWjtBQUNIOztBQUVELFlBQUksQ0FBQ0ssSUFBSSxDQUFDNkQsV0FBTixJQUFxQixDQUFDN0QsSUFBSSxDQUFDOEQsT0FBL0IsRUFBd0M7QUFDcENULGlCQUFPLENBQUNPLElBQVIsQ0FBYSxVQUFiLEVBQXlCLElBQXpCO0FBQ0gsU0FGRCxNQUVPO0FBQ0hQLGlCQUFPLENBQUNPLElBQVIsQ0FBYSxVQUFiLEVBQXlCLEtBQXpCO0FBQ0g7QUFDSixPQXpCRDtBQTBCSCxLQWpDRDtBQWtDSCxHOztTQUVEbkMsYyxHQUFBLHdCQUFlSixNQUFmLEVBQXVCO0FBQUE7O0FBQ25CLFFBQU0wQyxjQUFjLEdBQUd4RSxDQUFDLENBQUMsaUJBQUQsRUFBb0IsS0FBS0QsWUFBekIsQ0FBeEI7QUFDQSxRQUFNMEUsY0FBYyxHQUFHekUsQ0FBQyxDQUFDLHdCQUFELENBQXhCO0FBQ0EsUUFBTStDLE9BQU8sR0FBRztBQUNaQyxjQUFRLEVBQUU7QUFDTkssZUFBTyxFQUFFLGNBREg7QUFFTnFCLGNBQU0sRUFBRSxhQUZGO0FBR05DLGlCQUFTLEVBQUUsaUJBSEw7QUFJTkMsc0JBQWMsRUFBRTtBQUpWO0FBREUsS0FBaEI7QUFTQSxTQUFLekUsUUFBTCxDQUFjbUIsSUFBZCxHQVptQixDQWNuQjs7QUFDQSxRQUFJUSxNQUFNLElBQUkwQyxjQUFjLENBQUNLLE1BQWYsS0FBMEIsQ0FBeEMsRUFBMkM7QUFDdkMsYUFBT0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixFQUFQO0FBQ0g7O0FBRUR6RCx1RUFBSyxDQUFDQyxHQUFOLENBQVVDLElBQVYsQ0FBZXdELFVBQWYsQ0FBMEJsQyxPQUExQixFQUFtQyxVQUFDcEIsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQ2xELFlBQUksQ0FBQzdCLFlBQUwsQ0FBa0JtRixJQUFsQixDQUF1QnRELFFBQVEsQ0FBQ3lCLE9BQWhDOztBQUNBLFlBQUksQ0FBQ25ELFdBQUwsQ0FBaUJnRixJQUFqQixDQUFzQnRELFFBQVEsQ0FBQzhDLE1BQS9COztBQUNBLFlBQUksQ0FBQ3pFLGFBQUwsQ0FBbUJpRixJQUFuQixDQUF3QnRELFFBQVEsQ0FBQ2dELGNBQWpDOztBQUVBSCxvQkFBYyxDQUFDVSxXQUFmLENBQTJCdkQsUUFBUSxDQUFDK0MsU0FBcEM7O0FBQ0EsWUFBSSxDQUFDdEUsVUFBTDs7QUFDQSxZQUFJLENBQUNGLFFBQUwsQ0FBY0MsSUFBZDs7QUFFQSxVQUFNZ0YsUUFBUSxHQUFHcEYsQ0FBQyxDQUFDLHNCQUFELEVBQXlCLE1BQUksQ0FBQ0QsWUFBOUIsQ0FBRCxDQUE2Q1UsSUFBN0MsQ0FBa0QsY0FBbEQsS0FBcUUsQ0FBdEY7QUFFQVQsT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVcUYsT0FBVixDQUFrQixzQkFBbEIsRUFBMENELFFBQTFDO0FBQ0gsS0FaRDtBQWFILEc7O1NBRURFLGMsR0FBQSwwQkFBaUI7QUFBQTs7QUFDYixRQUFNQyxlQUFlLEdBQUcsR0FBeEI7O0FBQ0EsUUFBTWpGLFVBQVUsR0FBRyxtREFBTyx1REFBVyxLQUFLQSxVQUFoQixFQUE0QmlGLGVBQTVCLENBQVAsRUFBcUQsSUFBckQsQ0FBbkI7O0FBQ0EsUUFBTWxELHVCQUF1QixHQUFHLG1EQUFPLHVEQUFXLEtBQUtBLHVCQUFoQixFQUF5Q2tELGVBQXpDLENBQVAsRUFBa0UsSUFBbEUsQ0FBaEM7O0FBQ0EsUUFBTTdDLGNBQWMsR0FBRyxtREFBTyx1REFBVyxLQUFLQSxjQUFoQixFQUFnQzZDLGVBQWhDLENBQVAsRUFBeUQsSUFBekQsQ0FBdkI7O0FBQ0EsUUFBSWpELE1BQUosQ0FMYSxDQU9iOztBQUNBdEMsS0FBQyxDQUFDLG9CQUFELEVBQXVCLEtBQUtELFlBQTVCLENBQUQsQ0FBMkN5RCxFQUEzQyxDQUE4QyxPQUE5QyxFQUF1RCxVQUFBQyxLQUFLLEVBQUk7QUFDNUQsVUFBTWxELE9BQU8sR0FBR1AsQ0FBQyxDQUFDeUQsS0FBSyxDQUFDK0IsYUFBUCxDQUFqQjtBQUVBL0IsV0FBSyxDQUFDZ0MsY0FBTixHQUg0RCxDQUs1RDs7QUFDQW5GLGdCQUFVLENBQUNDLE9BQUQsQ0FBVjtBQUNILEtBUEQsRUFSYSxDQWlCYjs7QUFDQVAsS0FBQyxDQUFDLHNCQUFELEVBQXlCLEtBQUtELFlBQTlCLENBQUQsQ0FBNkN5RCxFQUE3QyxDQUFnRCxPQUFoRCxFQUF5RCxTQUFTa0MsVUFBVCxHQUFzQjtBQUMzRXBELFlBQU0sR0FBRyxLQUFLcUQsS0FBZDtBQUNILEtBRkQsRUFFR0MsTUFGSCxDQUVVLFVBQUFuQyxLQUFLLEVBQUk7QUFDZixVQUFNbEQsT0FBTyxHQUFHUCxDQUFDLENBQUN5RCxLQUFLLENBQUMrQixhQUFQLENBQWpCO0FBQ0EvQixXQUFLLENBQUNnQyxjQUFOLEdBRmUsQ0FJZjs7QUFDQXBELDZCQUF1QixDQUFDOUIsT0FBRCxFQUFVK0IsTUFBVixDQUF2QjtBQUNILEtBUkQ7QUFVQXRDLEtBQUMsQ0FBQyxjQUFELEVBQWlCLEtBQUtELFlBQXRCLENBQUQsQ0FBcUN5RCxFQUFyQyxDQUF3QyxPQUF4QyxFQUFpRCxVQUFBQyxLQUFLLEVBQUk7QUFDdEQsVUFBTWpELE1BQU0sR0FBR1IsQ0FBQyxDQUFDeUQsS0FBSyxDQUFDK0IsYUFBUCxDQUFELENBQXVCL0UsSUFBdkIsQ0FBNEIsWUFBNUIsQ0FBZjtBQUNBLFVBQU1vRixNQUFNLEdBQUc3RixDQUFDLENBQUN5RCxLQUFLLENBQUMrQixhQUFQLENBQUQsQ0FBdUIvRSxJQUF2QixDQUE0QixlQUE1QixDQUFmO0FBQ0FVLDBFQUFJLENBQUM7QUFDREMsWUFBSSxFQUFFeUUsTUFETDtBQUVEeEUsWUFBSSxFQUFFLFNBRkw7QUFHRHlFLHdCQUFnQixFQUFFO0FBSGpCLE9BQUQsQ0FBSixDQUlHQyxJQUpILENBSVEsWUFBTTtBQUNWO0FBQ0FyRCxzQkFBYyxDQUFDbEMsTUFBRCxDQUFkO0FBQ0gsT0FQRDtBQVFBaUQsV0FBSyxDQUFDZ0MsY0FBTjtBQUNILEtBWkQ7QUFjQXpGLEtBQUMsQ0FBQyxrQkFBRCxFQUFxQixLQUFLRCxZQUExQixDQUFELENBQXlDeUQsRUFBekMsQ0FBNEMsT0FBNUMsRUFBcUQsVUFBQUMsS0FBSyxFQUFJO0FBQzFELFVBQU1qRCxNQUFNLEdBQUdSLENBQUMsQ0FBQ3lELEtBQUssQ0FBQytCLGFBQVAsQ0FBRCxDQUF1Qi9FLElBQXZCLENBQTRCLFVBQTVCLENBQWY7QUFFQWdELFdBQUssQ0FBQ2dDLGNBQU4sR0FIMEQsQ0FJMUQ7O0FBQ0EsWUFBSSxDQUFDN0MsZUFBTCxDQUFxQnBDLE1BQXJCO0FBQ0gsS0FORDtBQU9ILEc7O1NBRUR3RixtQixHQUFBLCtCQUFzQjtBQUFBOztBQUNsQixRQUFNQyxnQkFBZ0IsR0FBR2pHLENBQUMsQ0FBQyxjQUFELENBQTFCO0FBQ0EsUUFBTWtHLFdBQVcsR0FBR2xHLENBQUMsQ0FBQyxjQUFELENBQXJCO0FBQ0EsUUFBTW1HLFVBQVUsR0FBR25HLENBQUMsQ0FBQyxxQkFBRCxFQUF3QmtHLFdBQXhCLENBQXBCO0FBRUFsRyxLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQndELEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDLFVBQUFDLEtBQUssRUFBSTtBQUN2Q0EsV0FBSyxDQUFDZ0MsY0FBTjtBQUVBekYsT0FBQyxDQUFDeUQsS0FBSyxDQUFDK0IsYUFBUCxDQUFELENBQXVCcEYsSUFBdkI7QUFDQTZGLHNCQUFnQixDQUFDM0UsSUFBakI7QUFDQXRCLE9BQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCc0IsSUFBekI7QUFDQTZFLGdCQUFVLENBQUNkLE9BQVgsQ0FBbUIsT0FBbkI7QUFDSCxLQVBEO0FBU0FyRixLQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QndELEVBQXpCLENBQTRCLE9BQTVCLEVBQXFDLFVBQUFDLEtBQUssRUFBSTtBQUMxQ0EsV0FBSyxDQUFDZ0MsY0FBTjtBQUVBUSxzQkFBZ0IsQ0FBQzdGLElBQWpCO0FBQ0FKLE9BQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCSSxJQUF6QjtBQUNBSixPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQnNCLElBQXRCO0FBQ0gsS0FORDtBQVFBNEUsZUFBVyxDQUFDMUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsVUFBQUMsS0FBSyxFQUFJO0FBQzlCLFVBQU0yQyxJQUFJLEdBQUdELFVBQVUsQ0FBQ3RGLEdBQVgsRUFBYjtBQUVBNEMsV0FBSyxDQUFDZ0MsY0FBTixHQUg4QixDQUs5Qjs7QUFDQSxVQUFJLENBQUNXLElBQUwsRUFBVztBQUNQLGVBQU9qRixvRUFBSSxDQUFDO0FBQ1JDLGNBQUksRUFBRStFLFVBQVUsQ0FBQzFGLElBQVgsQ0FBZ0IsT0FBaEIsQ0FERTtBQUVSWSxjQUFJLEVBQUU7QUFGRSxTQUFELENBQVg7QUFJSDs7QUFFREUseUVBQUssQ0FBQ0MsR0FBTixDQUFVQyxJQUFWLENBQWU0RSxTQUFmLENBQXlCRCxJQUF6QixFQUErQixVQUFDekUsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQzlDLFlBQUlBLFFBQVEsQ0FBQ25CLElBQVQsQ0FBY29CLE1BQWQsS0FBeUIsU0FBN0IsRUFBd0M7QUFDcEMsZ0JBQUksQ0FBQ0ssY0FBTDtBQUNILFNBRkQsTUFFTztBQUNIZiw4RUFBSSxDQUFDO0FBQ0RDLGdCQUFJLEVBQUVRLFFBQVEsQ0FBQ25CLElBQVQsQ0FBYzBCLE1BQWQsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBREw7QUFFRGYsZ0JBQUksRUFBRTtBQUZMLFdBQUQsQ0FBSjtBQUlIO0FBQ0osT0FURDtBQVVILEtBdkJEO0FBd0JILEc7O1NBRURpRix5QixHQUFBLHFDQUE0QjtBQUFBOztBQUN4QixRQUFNQyxjQUFjLEdBQUd2RyxDQUFDLENBQUMsd0JBQUQsQ0FBeEI7QUFDQSxRQUFNd0csU0FBUyxHQUFHeEcsQ0FBQyxDQUFDLDZCQUFELENBQW5CO0FBQ0EsUUFBTXlHLFVBQVUsR0FBR3pHLENBQUMsQ0FBQyxtQkFBRCxFQUFzQndHLFNBQXRCLENBQXBCO0FBRUF4RyxLQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQndELEVBQTNCLENBQThCLE9BQTlCLEVBQXVDLFVBQUFDLEtBQUssRUFBSTtBQUM1Q0EsV0FBSyxDQUFDZ0MsY0FBTjtBQUNBekYsT0FBQyxDQUFDeUQsS0FBSyxDQUFDK0IsYUFBUCxDQUFELENBQXVCa0IsTUFBdkI7QUFDQUgsb0JBQWMsQ0FBQ0csTUFBZjtBQUNBMUcsT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEIwRyxNQUE5QjtBQUNILEtBTEQ7QUFPQTFHLEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCd0QsRUFBOUIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBQUMsS0FBSyxFQUFJO0FBQy9DQSxXQUFLLENBQUNnQyxjQUFOO0FBQ0FjLG9CQUFjLENBQUNHLE1BQWY7QUFDQTFHLE9BQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCMEcsTUFBM0I7QUFDQTFHLE9BQUMsQ0FBQywwQkFBRCxDQUFELENBQThCMEcsTUFBOUI7QUFDSCxLQUxEO0FBT0FGLGFBQVMsQ0FBQ2hELEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQUFDLEtBQUssRUFBSTtBQUM1QixVQUFNMkMsSUFBSSxHQUFHSyxVQUFVLENBQUM1RixHQUFYLEVBQWI7QUFFQTRDLFdBQUssQ0FBQ2dDLGNBQU47O0FBRUEsVUFBSSxDQUFDa0Isa0ZBQWEsQ0FBQ1AsSUFBRCxDQUFsQixFQUEwQjtBQUN0QixlQUFPakYsb0VBQUksQ0FBQztBQUNSQyxjQUFJLEVBQUVxRixVQUFVLENBQUNoRyxJQUFYLENBQWdCLE9BQWhCLENBREU7QUFFUlksY0FBSSxFQUFFO0FBRkUsU0FBRCxDQUFYO0FBSUg7O0FBRURFLHlFQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBVixDQUFlbUYsb0JBQWYsQ0FBb0NSLElBQXBDLEVBQTBDLFVBQUN6RSxHQUFELEVBQU1rRixJQUFOLEVBQWU7QUFDckQsWUFBSUEsSUFBSSxDQUFDcEcsSUFBTCxDQUFVb0IsTUFBVixLQUFxQixTQUF6QixFQUFvQztBQUNoQyxnQkFBSSxDQUFDSyxjQUFMO0FBQ0gsU0FGRCxNQUVPO0FBQ0hmLDhFQUFJLENBQUM7QUFDREMsZ0JBQUksRUFBRXlGLElBQUksQ0FBQ3BHLElBQUwsQ0FBVTBCLE1BQVYsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBREw7QUFFRGYsZ0JBQUksRUFBRTtBQUZMLFdBQUQsQ0FBSjtBQUlIO0FBQ0osT0FURDtBQVVILEtBdEJEO0FBdUJILEc7O1NBRUR5RixzQixHQUFBLGtDQUF5QjtBQUFBOztBQUNyQixRQUFNakUsS0FBSyxHQUFHQyxtRUFBWSxFQUExQjtBQUVBOUMsS0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJ3RCxFQUExQixDQUE2QixPQUE3QixFQUFzQyxVQUFBQyxLQUFLLEVBQUk7QUFDM0MsVUFBTWpELE1BQU0sR0FBR1IsQ0FBQyxDQUFDeUQsS0FBSyxDQUFDK0IsYUFBUCxDQUFELENBQXVCL0UsSUFBdkIsQ0FBNEIsY0FBNUIsQ0FBZjtBQUNBLFVBQU1zQyxPQUFPLEdBQUc7QUFDWkMsZ0JBQVEsRUFBRTtBQURFLE9BQWhCO0FBSUFTLFdBQUssQ0FBQ2dDLGNBQU47QUFFQTVDLFdBQUssQ0FBQ0ksSUFBTjtBQUVBMUIseUVBQUssQ0FBQ0MsR0FBTixDQUFVQyxJQUFWLENBQWVzRiwwQkFBZixDQUEwQ3ZHLE1BQTFDLEVBQWtEdUMsT0FBbEQsRUFBMkQsVUFBQ3BCLEdBQUQsRUFBTUMsUUFBTixFQUFtQjtBQUMxRWlCLGFBQUssQ0FBQ08sYUFBTixDQUFvQnhCLFFBQVEsQ0FBQ3lCLE9BQTdCOztBQUVBLGNBQUksQ0FBQ0Msb0JBQUw7QUFDSCxPQUpEO0FBS0gsS0FmRDtBQWdCSCxHOztTQUVEQSxvQixHQUFBLGdDQUF1QjtBQUNuQnRELEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCd0QsRUFBMUIsQ0FBNkIsUUFBN0IsRUFBdUMsVUFBQUMsS0FBSyxFQUFJO0FBQzVDLFVBQU11RCxPQUFPLEdBQUdoSCxDQUFDLENBQUN5RCxLQUFLLENBQUMrQixhQUFQLENBQWpCO0FBQ0EsVUFBTXlCLEVBQUUsR0FBR0QsT0FBTyxDQUFDbkcsR0FBUixFQUFYO0FBQ0EsVUFBTXFHLEtBQUssR0FBR0YsT0FBTyxDQUFDdkcsSUFBUixDQUFhLE9BQWIsQ0FBZDs7QUFFQSxVQUFJLENBQUN3RyxFQUFMLEVBQVM7QUFDTDtBQUNIOztBQUVELFVBQU1FLFlBQVksR0FBR0gsT0FBTyxDQUFDSSxJQUFSLG1CQUE2QkgsRUFBN0IsUUFBb0N4RyxJQUFwQyxDQUF5QyxjQUF6QyxDQUFyQjtBQUVBVCxPQUFDLDBCQUF3QmtILEtBQXhCLENBQUQsQ0FBa0M5RyxJQUFsQztBQUNBSixPQUFDLDBCQUF3QmtILEtBQXhCLFNBQWlDRCxFQUFqQyxDQUFELENBQXdDM0YsSUFBeEM7O0FBRUEsVUFBSTZGLFlBQUosRUFBa0I7QUFDZG5ILFNBQUMsNEJBQTBCa0gsS0FBMUIsQ0FBRCxDQUFvQzVGLElBQXBDO0FBQ0gsT0FGRCxNQUVPO0FBQ0h0QixTQUFDLDRCQUEwQmtILEtBQTFCLENBQUQsQ0FBb0M5RyxJQUFwQztBQUNIO0FBQ0osS0FuQkQ7QUFxQkFKLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCcUYsT0FBMUIsQ0FBa0MsUUFBbEM7O0FBRUEsYUFBU2dDLFdBQVQsR0FBdUI7QUFDbkIsVUFBTTFCLEtBQUssR0FBRzNGLENBQUMsQ0FBQywyQ0FBRCxDQUFELENBQStDYSxHQUEvQyxFQUFkO0FBQ0EsVUFBTXlHLFdBQVcsR0FBR3RILENBQUMsQ0FBQyxzQkFBRCxDQUFyQjtBQUNBLFVBQU11SCxVQUFVLEdBQUd2SCxDQUFDLENBQUMsd0JBQUQsQ0FBcEI7O0FBRUEsVUFBSTJGLEtBQUssS0FBSyxNQUFkLEVBQXNCO0FBQ2xCMkIsbUJBQVcsQ0FBQ2hHLElBQVo7QUFDQWlHLGtCQUFVLENBQUNuSCxJQUFYO0FBQ0gsT0FIRCxNQUdPO0FBQ0hrSCxtQkFBVyxDQUFDbEgsSUFBWjtBQUNBbUgsa0JBQVUsQ0FBQ2pHLElBQVg7QUFDSDtBQUNKOztBQUVEdEIsS0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJ3RCxFQUEzQixDQUE4QixPQUE5QixFQUF1QzZELFdBQXZDO0FBRUFBLGVBQVc7QUFDZCxHOztTQUVEaEgsVSxHQUFBLHNCQUFhO0FBQ1QsU0FBS2lGLGNBQUw7QUFDQSxTQUFLVSxtQkFBTDtBQUNBLFNBQUtjLHNCQUFMO0FBQ0EsU0FBS1IseUJBQUwsR0FKUyxDQU1UOztBQUNBLFNBQUtrQixpQkFBTCxHQUF5QixJQUFJQyxpRUFBSixDQUFzQnpILENBQUMsQ0FBQywyQkFBRCxDQUF2QixDQUF6QjtBQUNILEcsQ0FFRDs7O1NBQ0EwSCxxQixHQUFBLCtCQUFzQkMsV0FBdEIsRUFBbUNDLEVBQW5DLEVBQXVDO0FBQUE7O0FBQ25DLFFBQU1DLFVBQVUsR0FBR0YsV0FBVyxDQUFDRyxPQUEvQjtBQUNBLFFBQU1DLFVBQVUsR0FBR0osV0FBVyxDQUFDSSxVQUEvQjtBQUNBLFFBQU1DLFVBQVUsR0FBR0wsV0FBVyxDQUFDSyxVQUEvQjtBQUVBekcsdUVBQUssQ0FBQ0MsR0FBTixDQUFVMEIsaUJBQVYsQ0FBNEJDLGVBQTVCLENBQTRDMEUsVUFBNUMsRUFBd0Q7QUFDcEQ3RSxjQUFRLEVBQUU7QUFEMEMsS0FBeEQsRUFFRyxVQUFDckIsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQ2xCcUcsYUFBTyxDQUFDQyxHQUFSLENBQVl0RyxRQUFRLENBQUNuQixJQUFyQjtBQUVBLFVBQUkwSCxzQkFBc0IsR0FBRyxFQUE3Qjs7QUFFQSxVQUFJdkcsUUFBUSxDQUFDbkIsSUFBVCxJQUFpQm1CLFFBQVEsQ0FBQ25CLElBQVQsQ0FBY3NDLE9BQW5DLEVBQTRDO0FBQ3hDLFlBQU1BLE9BQU8sR0FBR25CLFFBQVEsQ0FBQ25CLElBQVQsQ0FBY3NDLE9BQTlCOztBQUlBLGFBQUssSUFBSXFGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdyRixPQUFPLENBQUM4QixNQUE1QixFQUFvQ3VELENBQUMsRUFBckMsRUFBeUM7QUFDckMsY0FBTTFFLE1BQU0sR0FBR1gsT0FBTyxDQUFDcUYsQ0FBRCxDQUF0Qjs7QUFFQSxjQUFJMUUsTUFBTSxDQUFDMkUsT0FBUCxJQUFrQixjQUF0QixFQUFzQztBQUNsQyxnQkFBTUMsWUFBWSxHQUFHNUUsTUFBTSxDQUFDNkUsTUFBNUI7O0FBRUEsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsWUFBWSxDQUFDekQsTUFBakMsRUFBeUMyRCxDQUFDLEVBQTFDLEVBQThDO0FBQzFDLGtCQUFNQyxXQUFXLEdBQUdILFlBQVksQ0FBQ0UsQ0FBRCxDQUFoQzs7QUFFQSxrQkFBSUMsV0FBVyxDQUFDQyxRQUFoQixFQUEwQjtBQUN0QlAsc0NBQXNCLENBQUNRLElBQXZCLENBQTRCO0FBQ3hCLCtCQUFhakYsTUFBTSxDQUFDdUQsRUFESTtBQUV4QixrQ0FBZ0J3QixXQUFXLENBQUN4QixFQUZKO0FBR3hCLGlDQUFld0IsV0FBVyxDQUFDaEk7QUFISCxpQkFBNUI7QUFNSDtBQUNKO0FBQ0o7QUFDSjs7QUFFRHdILGVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxzQkFBWjtBQUNIOztBQUVELFVBQUlBLHNCQUFKLEVBQTRCO0FBQ3hCbkksU0FBQyxDQUFDNEksSUFBRixDQUFPO0FBQ0h2SCxjQUFJLEVBQUUsS0FESDtBQUVId0gsYUFBRyxFQUFLQyxvREFBTSxDQUFDQyxVQUFaLG9DQUFxREQsb0RBQU0sQ0FBQ0UsU0FBNUQsb0JBQW9GakIsVUFBcEYsb0JBQTZHQyxVQUY3RztBQUdIaUIsaUJBQU8sRUFBRSxpQkFBQ3hJLElBQUQsRUFBVTtBQUNmd0gsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZekgsSUFBWjtBQUNBLGdCQUFJeUksV0FBVyxHQUFHLEVBQWxCOztBQUdBLGlCQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdoQixzQkFBc0IsQ0FBQ3RELE1BQTNDLEVBQW1Ec0UsQ0FBQyxFQUFwRCxFQUF3RDtBQUNwRCxrQkFBSUMsZUFBZSxHQUFHLElBQXRCOztBQUVBLGtCQUFJM0ksSUFBSSxJQUFJQSxJQUFJLENBQUM0SSxXQUFqQixFQUE4QjtBQUMxQixvQkFBTXRHLFFBQU8sR0FBR3RDLElBQUksQ0FBQzRJLFdBQXJCOztBQUdBLHFCQUFLLElBQUliLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUd6RixRQUFPLENBQUM4QixNQUE1QixFQUFvQzJELEVBQUMsRUFBckMsRUFBeUM7QUFDckMsc0JBQU1jLFFBQVEsR0FBR3ZHLFFBQU8sQ0FBQ3lGLEVBQUQsQ0FBUCxDQUFXZSxTQUE1QjtBQUNBLHNCQUFNZCxZQUFXLEdBQUcxRixRQUFPLENBQUN5RixFQUFELENBQVAsQ0FBV2dCLFlBQS9COztBQUVBLHNCQUFJRixRQUFRLElBQUluQixzQkFBc0IsQ0FBQ2dCLENBQUQsQ0FBdEIsQ0FBMEJJLFNBQXRDLElBQW1EZCxZQUFXLElBQUlOLHNCQUFzQixDQUFDZ0IsQ0FBRCxDQUF0QixDQUEwQkssWUFBaEcsRUFBOEc7QUFDMUdKLG1DQUFlLEdBQUcsS0FBbEI7QUFHSDtBQUlKOztBQUVELG9CQUFJQSxlQUFKLEVBQXFCO0FBQ2pCLHNCQUFNSyxnQkFBZ0IsR0FBR3RCLHNCQUFzQixDQUFDZ0IsQ0FBRCxDQUF0QixDQUEwQk8sV0FBbkQ7O0FBQ0Esc0JBQU1DLGdCQUFnQixHQUFHLE9BQUksQ0FBQ0MsdUJBQUwsQ0FBNkJILGdCQUE3QixDQUF6Qjs7QUFDQSxzQkFBSUUsZ0JBQUosRUFBc0I7QUFDbEJULCtCQUFXLENBQUNQLElBQVosQ0FBaUI7QUFDYiwwQ0FBb0JjLGdCQURQO0FBRWIsMENBQW9CRTtBQUZQLHFCQUFqQjtBQUlILG1CQUxELE1BS087QUFDSFQsK0JBQVcsQ0FBQ1AsSUFBWixDQUFpQjtBQUNiLDBDQUFvQmM7QUFEUCxxQkFBakI7QUFHSDtBQUVKO0FBQ0o7QUFFSjs7QUFFRCxnQkFBSVAsV0FBSixFQUFpQjtBQUNidkIseUJBQVcsQ0FBQ3VCLFdBQVosR0FBMEIsd0RBQVlBLFdBQVosQ0FBMUI7QUFDSDs7QUFFRCxnQkFBSXRCLEVBQUosRUFBUTtBQUNKQSxnQkFBRTtBQUNMO0FBR0osV0F6REU7QUEwREhpQyxlQUFLLEVBQUUsZUFBU0MsS0FBVCxFQUFnQkMsVUFBaEIsRUFBNEJDLFdBQTVCLEVBQXlDO0FBQzVDL0IsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUIrQixJQUFJLENBQUNDLFNBQUwsQ0FBZUosS0FBZixDQUFyQjtBQUNIO0FBNURFLFNBQVA7QUE4REgsT0EvREQsTUErRE87QUFDSCxZQUFJbEMsRUFBSixFQUFRO0FBQ0pBLFlBQUU7QUFDTDtBQUVKO0FBR0osS0EzR0Q7QUE2R0gsRyxDQUVEOzs7U0FDQTNGLGtCLEdBQUEsNEJBQW1CNEYsVUFBbkIsRUFBK0JELEVBQS9CLEVBQW1DO0FBQUE7O0FBQy9CLFNBQUt6SCxRQUFMLENBQWNtQixJQUFkO0FBQ0F0QixLQUFDLENBQUM0SSxJQUFGLENBQU87QUFDSHZILFVBQUksRUFBRSxLQURIO0FBRUh3SCxTQUFHLEVBQUUseUJBRkY7QUFHSHNCLGlCQUFXLEVBQUUsa0JBSFY7QUFJSEMsWUFBTSxFQUFFLGtCQUpMO0FBS0huQixhQUFPLEVBQUUsaUJBQUN4SSxJQUFELEVBQVU7QUFDZndILGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0J6SCxJQUFwQjs7QUFDQSxZQUFJQSxJQUFJLElBQUlBLElBQUksQ0FBQ29FLE1BQUwsR0FBYyxDQUExQixFQUE2QjtBQUFBO0FBQ3pCLGdCQUFNd0YsTUFBTSxHQUFHNUosSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRd0csRUFBdkI7QUFDQWdCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCbUMsTUFBdEIsRUFGeUIsQ0FHekI7O0FBQ0EsZ0JBQU1DLGFBQWEsR0FBRzdKLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUThKLFNBQVIsQ0FBa0JDLGFBQXhDO0FBQ0EsZ0JBQU1DLFNBQVMsR0FBR0gsYUFBYSxDQUFDSSxNQUFkLENBQXFCLFVBQVMxRyxJQUFULEVBQWU7QUFDbEQscUJBQU9BLElBQUksQ0FBQzJHLFFBQUwsSUFBaUIsSUFBeEI7QUFDSCxhQUZpQixDQUFsQjs7QUFJQSxpQkFBSyxJQUFJdkMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FDLFNBQVMsQ0FBQzVGLE1BQTlCLEVBQXNDdUQsQ0FBQyxFQUF2QyxFQUEyQztBQUV2QyxrQkFBTXdDLFFBQVEsR0FBR0gsU0FBUyxDQUFDckMsQ0FBRCxDQUExQjtBQUNBLGtCQUFNNUgsTUFBTSxHQUFHb0ssUUFBUSxDQUFDM0QsRUFBeEI7O0FBR0Esa0JBQUlZLFVBQVUsSUFBSXJILE1BQWxCLEVBQTBCO0FBQUE7QUFDdEIsc0JBQU1xSyxhQUFhLEdBQUdELFFBQVEsQ0FBQ0UsU0FBL0I7QUFDQSxzQkFBTUMsYUFBYSxHQUFHSCxRQUFRLENBQUNJLFNBQS9CO0FBQ0Esc0JBQU1DLE9BQU8sR0FBR0wsUUFBUSxDQUFDeEYsUUFBekI7QUFDQSxzQkFBTThGLFVBQVUsR0FBR25KLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixZQUF2QixDQUFuQjtBQUVBLHNCQUFNMkYsV0FBVyxHQUFHO0FBQ2hCLCtCQUFXbkgsTUFESztBQUVoQixrQ0FBY3FLLGFBRkU7QUFHaEIsa0NBQWNFLGFBSEU7QUFJaEIsZ0NBQVlFLE9BSkk7QUFLaEIsa0NBQWNDO0FBTEUsbUJBQXBCO0FBUUFqRCx5QkFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QitCLElBQUksQ0FBQ0MsU0FBTCxDQUFldkMsV0FBZixDQUF2Qjs7QUFFQSx5QkFBSSxDQUFDRCxxQkFBTCxDQUEyQkMsV0FBM0IsRUFBd0MsWUFBTTtBQUMxQ00sMkJBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0IrQixJQUFJLENBQUNDLFNBQUwsQ0FBZXZDLFdBQWYsQ0FBeEI7QUFFQSx3QkFBTXdELGlCQUFpQixRQUFNckMsb0RBQU0sQ0FBQ0UsU0FBcEM7QUFFQWhKLHFCQUFDLENBQUM0SSxJQUFGLENBQU87QUFDSHZILDBCQUFJLEVBQUUsS0FESDtBQUVId0gseUJBQUcsRUFBS0Msb0RBQU0sQ0FBQ0MsVUFBWix5QkFBMENvQyxpQkFBMUMsaUJBQXVFZCxNQUZ2RTtBQUdINUosMEJBQUksRUFBRXdKLElBQUksQ0FBQ0MsU0FBTCxDQUFldkMsV0FBZixDQUhIO0FBSUhzQiw2QkFBTyxFQUFFLGlCQUFDeEksSUFBRCxFQUFVO0FBQ2Z3SCwrQkFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQXBELDhCQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0gsdUJBUEU7QUFRSDZFLDJCQUFLLEVBQUUsZUFBQ0MsS0FBRCxFQUFRQyxVQUFSLEVBQW9CQyxXQUFwQixFQUFvQztBQUN2QywrQkFBSSxDQUFDN0osUUFBTCxDQUFjQyxJQUFkOztBQUNBZ0wsNkJBQUssQ0FBQyw0QkFBRCxDQUFMO0FBQ0g7QUFYRSxxQkFBUDtBQWFILG1CQWxCRDtBQWhCc0I7QUFvQ3pCO0FBRUo7QUFyRHdCO0FBdUQ1QixTQXZERCxNQXVETztBQUNILGlCQUFJLENBQUNqTCxRQUFMLENBQWNDLElBQWQ7QUFDSDtBQUNKLE9BakVFO0FBa0VIeUosV0FBSyxFQUFFLGVBQUNDLEtBQUQsRUFBUUMsVUFBUixFQUFvQkMsV0FBcEIsRUFBb0M7QUFDdkMsZUFBSSxDQUFDN0osUUFBTCxDQUFjQyxJQUFkOztBQUNBNkgsZUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQitCLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixLQUFmLENBQXJCO0FBQ0EzSSw0RUFBSSxDQUFDO0FBQ0RFLGNBQUksRUFBRSxPQURMO0FBRURELGNBQUksRUFBRTtBQUZMLFNBQUQsQ0FBSjtBQUlIO0FBekVFLEtBQVA7QUE0RUgsRzs7O0VBN21CNkJpSyxxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQjVELGlCOzs7QUFDakIsNkJBQVk2RCxRQUFaLEVBQXNCO0FBQ2xCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBRUEsU0FBS0MsTUFBTCxHQUFjdkwsQ0FBQyxDQUFDLDJCQUFELEVBQThCLEtBQUtzTCxRQUFuQyxDQUFmO0FBQ0EsU0FBS0Usa0JBQUw7QUFDQSxTQUFLQyxzQkFBTDtBQUNBLFNBQUtDLG1CQUFMO0FBQ0g7Ozs7U0FFREYsa0IsR0FBQSw4QkFBcUI7QUFBQTs7QUFDakIsU0FBS2hFLGlCQUFMLEdBQXlCLCtCQUF6QjtBQUNBLFNBQUttRSxpQkFBTCxHQUF5QkMsMkRBQUcsQ0FBQztBQUN6QkMsWUFBTSxFQUFLLEtBQUtyRSxpQkFBVjtBQURtQixLQUFELENBQTVCO0FBSUF4SCxLQUFDLENBQUMsMkJBQUQsRUFBOEIsS0FBS3NMLFFBQW5DLENBQUQsQ0FBOEM5SCxFQUE5QyxDQUFpRCxPQUFqRCxFQUEwRCxVQUFBQyxLQUFLLEVBQUk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsVUFBSXpELENBQUMsQ0FBSSxLQUFJLENBQUN3SCxpQkFBVCx3Q0FBRCxDQUErRDNHLEdBQS9ELEVBQUosRUFBMEU7QUFDdEUsYUFBSSxDQUFDOEssaUJBQUwsQ0FBdUJHLFlBQXZCO0FBQ0g7O0FBRUQsVUFBSSxLQUFJLENBQUNILGlCQUFMLENBQXVCSSxNQUF2QixDQUE4QixPQUE5QixDQUFKLEVBQTRDO0FBQ3hDO0FBQ0g7O0FBRUR0SSxXQUFLLENBQUNnQyxjQUFOO0FBQ0gsS0FiRDtBQWVBLFNBQUt1RyxjQUFMO0FBQ0EsU0FBS0MsbUJBQUw7QUFDQSxTQUFLQyxZQUFMO0FBQ0gsRzs7U0FFREYsYyxHQUFBLDBCQUFpQjtBQUNiLFNBQUtMLGlCQUFMLENBQXVCUSxHQUF2QixDQUEyQixDQUN2QjtBQUNJQyxjQUFRLEVBQUssS0FBSzVFLGlCQUFWLHVDQURaO0FBRUk2RSxjQUFRLEVBQUUsa0JBQUN6RSxFQUFELEVBQUsvRyxHQUFMLEVBQWE7QUFDbkIsWUFBTXlMLFNBQVMsR0FBRy9KLE1BQU0sQ0FBQzFCLEdBQUQsQ0FBeEI7QUFDQSxZQUFNc0QsTUFBTSxHQUFHbUksU0FBUyxLQUFLLENBQWQsSUFBbUIsQ0FBQy9KLE1BQU0sQ0FBQ2dLLEtBQVAsQ0FBYUQsU0FBYixDQUFuQztBQUVBMUUsVUFBRSxDQUFDekQsTUFBRCxDQUFGO0FBQ0gsT0FQTDtBQVFJcUksa0JBQVksRUFBRTtBQVJsQixLQUR1QixDQUEzQjtBQVlILEc7O1NBRURQLG1CLEdBQUEsK0JBQXNCO0FBQUE7O0FBQ2xCLFNBQUtOLGlCQUFMLENBQXVCUSxHQUF2QixDQUEyQixDQUN2QjtBQUNJQyxjQUFRLEVBQUVwTSxDQUFDLENBQUksS0FBS3dILGlCQUFULHNDQURmO0FBRUk2RSxjQUFRLEVBQUUsa0JBQUN6RSxFQUFELEVBQVE7QUFDZCxZQUFJekQsTUFBSjtBQUVBLFlBQU1zSSxJQUFJLEdBQUd6TSxDQUFDLENBQUksTUFBSSxDQUFDd0gsaUJBQVQsc0NBQWQ7O0FBRUEsWUFBSWlGLElBQUksQ0FBQzVILE1BQVQsRUFBaUI7QUFDYixjQUFNNkgsTUFBTSxHQUFHRCxJQUFJLENBQUM1TCxHQUFMLEVBQWY7QUFFQXNELGdCQUFNLEdBQUd1SSxNQUFNLElBQUlBLE1BQU0sQ0FBQzdILE1BQWpCLElBQTJCNkgsTUFBTSxLQUFLLGdCQUEvQztBQUNIOztBQUVEOUUsVUFBRSxDQUFDekQsTUFBRCxDQUFGO0FBQ0gsT0FkTDtBQWVJcUksa0JBQVksRUFBRTtBQWZsQixLQUR1QixDQUEzQjtBQW1CSDtBQUVEOzs7OztTQUdBTixZLEdBQUEsd0JBQWU7QUFDWCxRQUFNUyxhQUFhLEdBQUcsK0JBQXRCO0FBRUEzTSxLQUFDLENBQUMsTUFBRCxDQUFELENBQVV3RCxFQUFWLENBQWEsT0FBYixFQUFzQm1KLGFBQXRCLEVBQXFDLFVBQUNsSixLQUFELEVBQVc7QUFDNUMsVUFBTW1KLGlCQUFpQixHQUFHNU0sQ0FBQyxDQUFDLHNCQUFELENBQTNCO0FBQ0EsVUFBTTZNLHFCQUFxQixHQUFHN00sQ0FBQyxDQUFDLDBCQUFELENBQS9CO0FBRUF5RCxXQUFLLENBQUNnQyxjQUFOO0FBRUFtSCx1QkFBaUIsQ0FBQ0UsV0FBbEIsQ0FBOEIsa0JBQTlCO0FBQ0FELDJCQUFxQixDQUFDQyxXQUF0QixDQUFrQyxrQkFBbEM7QUFDSCxLQVJEO0FBU0gsRzs7U0FFRHJCLHNCLEdBQUEsa0NBQXlCO0FBQUE7O0FBQ3JCLFFBQUlzQixLQUFKLENBRHFCLENBR3JCOztBQUNBQyx5RUFBWSxDQUFDLEtBQUt6QixNQUFOLEVBQWMsS0FBSzBCLE9BQW5CLEVBQTRCO0FBQUVDLG9CQUFjLEVBQUU7QUFBbEIsS0FBNUIsRUFBc0QsVUFBQ3ZMLEdBQUQsRUFBTXdMLEtBQU4sRUFBZ0I7QUFDOUUsVUFBSXhMLEdBQUosRUFBUztBQUNMUiwyRUFBSSxDQUFDO0FBQ0RDLGNBQUksRUFBRU8sR0FETDtBQUVETixjQUFJLEVBQUU7QUFGTCxTQUFELENBQUo7QUFLQSxjQUFNLElBQUkrTCxLQUFKLENBQVV6TCxHQUFWLENBQU47QUFDSDs7QUFFRCxVQUFNMEwsTUFBTSxHQUFHck4sQ0FBQyxDQUFDbU4sS0FBRCxDQUFoQjs7QUFFQSxVQUFJLE1BQUksQ0FBQ3hCLGlCQUFMLENBQXVCMkIsU0FBdkIsQ0FBaUMsTUFBSSxDQUFDL0IsTUFBdEMsTUFBa0QsV0FBdEQsRUFBbUU7QUFDL0QsY0FBSSxDQUFDSSxpQkFBTCxDQUF1QjdKLE1BQXZCLENBQThCLE1BQUksQ0FBQ3lKLE1BQW5DO0FBQ0g7O0FBRUQsVUFBSXdCLEtBQUosRUFBVztBQUNQLGNBQUksQ0FBQ3BCLGlCQUFMLENBQXVCN0osTUFBdkIsQ0FBOEJpTCxLQUE5QjtBQUNIOztBQUVELFVBQUlNLE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLFFBQVYsQ0FBSixFQUF5QjtBQUNyQlIsYUFBSyxHQUFHSSxLQUFSOztBQUNBLGNBQUksQ0FBQ2xCLG1CQUFMO0FBQ0gsT0FIRCxNQUdPO0FBQ0hvQixjQUFNLENBQUM3SyxJQUFQLENBQVksYUFBWixFQUEyQixnQkFBM0I7QUFDQWdMLHFFQUFVLENBQUNDLHNCQUFYLENBQWtDTixLQUFsQztBQUNILE9BMUI2RSxDQTRCOUU7QUFDQTtBQUNBOzs7QUFDQW5OLE9BQUMsQ0FBQyxNQUFJLENBQUN3SCxpQkFBTixDQUFELENBQTBCSixJQUExQixDQUErQixzQkFBL0IsRUFBdURzRyxXQUF2RCxDQUFtRSxxQkFBbkU7QUFDSCxLQWhDVyxDQUFaO0FBaUNILEc7O1NBRURoQyxtQixHQUFBLCtCQUFzQjtBQUNsQixRQUFNaUMsbUJBQW1CLEdBQUczTixDQUFDLENBQUMscUJBQUQsQ0FBN0I7QUFDQSxRQUFNNE4sY0FBYyxHQUFHNU4sQ0FBQyxDQUFDLGlCQUFELENBQXhCO0FBRUE0TixrQkFBYyxDQUFDcEssRUFBZixDQUFrQixRQUFsQixFQUE0QixVQUFBQyxLQUFLLEVBQUk7QUFDakMsVUFBTW9LLE1BQU0sR0FBRztBQUNYQyxrQkFBVSxFQUFFOU4sQ0FBQyxDQUFDLDJCQUFELEVBQThCNE4sY0FBOUIsQ0FBRCxDQUErQy9NLEdBQS9DLEVBREQ7QUFFWGtOLGdCQUFRLEVBQUUvTixDQUFDLENBQUMseUJBQUQsRUFBNEI0TixjQUE1QixDQUFELENBQTZDL00sR0FBN0MsRUFGQztBQUdYbU4sWUFBSSxFQUFFaE8sQ0FBQyxDQUFDLHdCQUFELEVBQTJCNE4sY0FBM0IsQ0FBRCxDQUE0Qy9NLEdBQTVDLEVBSEs7QUFJWG9OLGdCQUFRLEVBQUVqTyxDQUFDLENBQUMsdUJBQUQsRUFBMEI0TixjQUExQixDQUFELENBQTJDL00sR0FBM0M7QUFKQyxPQUFmO0FBT0E0QyxXQUFLLENBQUNnQyxjQUFOO0FBRUFsRSx3RUFBSyxDQUFDQyxHQUFOLENBQVVDLElBQVYsQ0FBZXlNLGlCQUFmLENBQWlDTCxNQUFqQyxFQUF5QyxzQkFBekMsRUFBaUUsVUFBQ2xNLEdBQUQsRUFBTUMsUUFBTixFQUFtQjtBQUNoRjVCLFNBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCa0YsSUFBdEIsQ0FBMkJ0RCxRQUFRLENBQUN5QixPQUFwQyxFQURnRixDQUdoRjs7QUFDQXJELFNBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCd0QsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBQTJLLFVBQVUsRUFBSTtBQUNsRCxjQUFNQyxPQUFPLEdBQUdwTyxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QmEsR0FBN0IsRUFBaEI7QUFFQXNOLG9CQUFVLENBQUMxSSxjQUFYO0FBRUFsRSw0RUFBSyxDQUFDQyxHQUFOLENBQVVDLElBQVYsQ0FBZTRNLG1CQUFmLENBQW1DRCxPQUFuQyxFQUE0QyxZQUFNO0FBQzlDdEosa0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDSCxXQUZEO0FBR0gsU0FSRDtBQVNILE9BYkQ7QUFjSCxLQXhCRDtBQTBCQWhGLEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCd0QsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQUMsS0FBSyxFQUFJO0FBQzlDQSxXQUFLLENBQUNnQyxjQUFOO0FBRUF6RixPQUFDLENBQUN5RCxLQUFLLENBQUMrQixhQUFQLENBQUQsQ0FBdUJwRixJQUF2QjtBQUNBdU4seUJBQW1CLENBQUNELFdBQXBCLENBQWdDLGtCQUFoQztBQUNBMU4sT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJzQixJQUE3QjtBQUNILEtBTkQ7QUFTQXRCLEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCd0QsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQUMsS0FBSyxFQUFJO0FBQzlDQSxXQUFLLENBQUNnQyxjQUFOO0FBRUFrSSx5QkFBbUIsQ0FBQ1csUUFBcEIsQ0FBNkIsa0JBQTdCO0FBQ0F0TyxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QnNCLElBQTdCO0FBQ0F0QixPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkksSUFBN0I7QUFDSCxLQU5EO0FBT0gsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckxMO0FBQWUseUVBQVVtTyxJQUFWLEVBQWdCO0FBQzNCLE1BQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixXQUFPLEtBQVA7QUFDSCxHQUgwQixDQUszQjs7O0FBQ0EsU0FBTyxJQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDUEQ7QUFBQTtBQUFBO0NBRUE7O0FBQ0FDLGtEQUFVLENBQUNDLFdBQVgsQ0FBdUI7QUFDbkJDLGdCQUFjLEVBQUUsS0FERztBQUVuQkMsb0JBQWtCLEVBQUUsUUFGRDtBQUduQkMsbUJBQWlCLEVBQUU7QUFIQSxDQUF2QixFLENBTUE7O0FBQ2VKLGlIQUFmLEUiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBnaWZ0Q2VydENoZWNrIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgU2hpcHBpbmdFc3RpbWF0b3IgZnJvbSAnLi9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vYjJiL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0XSAubG9hZGluZ092ZXJsYXknKVxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICAgICAgLy9mb3IgYnVuZGxlYjJiXG4gICAgICAgICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikgIT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYXRhbG9nUHJpY2UoaXRlbUlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwcmVWYWwgIT09IG51bGwgPyBwcmVWYWwgOiBtaW5RdHk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChOdW1iZXIoJGVsLmF0dHIoJ3ZhbHVlJykpLCAxMCk7XG4gICAgICAgIGxldCBpbnZhbGlkRW50cnk7XG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKCFuZXdRdHkpIHtcbiAgICAgICAgICAgIGludmFsaWRFbnRyeSA9ICRlbC5hdHRyKCd2YWx1ZScpO1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGAke2ludmFsaWRFbnRyeX0gaXMgbm90IGEgdmFsaWQgZW50cnlgLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCkge1xuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5jb25maWd1cmVJbkNhcnQoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChvcHRpb24pO1xuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgICAgICBjb25zdCAkc3VibWl0ID0gJCgnaW5wdXQuYnV0dG9uJywgJGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcuYWxlcnRNZXNzYWdlQm94Jyk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gJCgnW25hbWU9XCJpdGVtX2lkXCJdJywgJGZvcm0pLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoaXRlbSwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdwLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaENvbnRlbnQocmVtb3ZlKSB7XG4gICAgICAgIGNvbnN0ICRjYXJ0SXRlbXNSb3dzID0gJCgnW2RhdGEtaXRlbS1yb3ddJywgdGhpcy4kY2FydENvbnRlbnQpO1xuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXG4gICAgICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2NhcnQvcGFnZS10aXRsZScsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcbiAgICAgICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZENhcnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGRlYm91bmNlVGltZW91dCA9IDQwMDtcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0UmVtb3ZlSXRlbSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGxldCBwcmVWYWw7XG5cbiAgICAgICAgLy8gY2FydCB1cGRhdGVcbiAgICAgICAgJCgnW2RhdGEtY2FydC11cGRhdGVdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxuICAgICAgICAgICAgY2FydFVwZGF0ZSgkdGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2FydCBxdHkgbWFudWFsbHkgdXBkYXRlc1xuICAgICAgICAkKCcuY2FydC1pdGVtLXF0eS1pbnB1dCcsIHRoaXMuJGNhcnRDb250ZW50KS5vbignZm9jdXMnLCBmdW5jdGlvbiBvblF0eUZvY3VzKCkge1xuICAgICAgICAgICAgcHJlVmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSkuY2hhbmdlKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9ICQoJy5jb3Vwb24tY29kZScpO1xuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9ICQoJy5jb3Vwb24tZm9ybScpO1xuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKTtcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY29kZUlucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFnaWZ0Q2VydENoZWNrKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2hpcHBpbmcgZXN0aW1hdG9yIG1vZHVsZVxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSk7XG4gICAgfVxuXG4gICAgLy8gZm9yIGJ1bmRsZWIyYlxuICAgIGhhbmRsZVBpY2tMaXN0T3B0aW9ucyhjYXJ0SXRlbU9iaiwgY2IpIHtcbiAgICAgICAgY29uc3QgY2FydEl0ZW1JZCA9IGNhcnRJdGVtT2JqLml0ZW1faWQ7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RfaWQgPSBjYXJ0SXRlbU9iai5wcm9kdWN0X2lkO1xuICAgICAgICBjb25zdCB2YXJpYW50X2lkID0gY2FydEl0ZW1PYmoudmFyaWFudF9pZDtcblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGNhcnRJdGVtSWQsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYjJiL2NvbmZpZ3VyZS1wcm9kdWN0LWRhdGEnLFxuICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFBpY2tMaXN0T3B0aW5zID0gW107XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSByZXNwb25zZS5kYXRhLm9wdGlvbnM7XG5cblxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5wYXJ0aWFsID09IFwicHJvZHVjdC1saXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IG9wdGlvbi52YWx1ZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0aW9uVmFsdWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZXNbal07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uVmFsdWUuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQaWNrTGlzdE9wdGlucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uX2lkXCI6IG9wdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uX3ZhbHVlXCI6IG9wdGlvblZhbHVlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25fZGF0YVwiOiBvcHRpb25WYWx1ZS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRQaWNrTGlzdE9wdGlucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFBpY2tMaXN0T3B0aW5zKSB7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtjb25maWcuYXBpUm9vdFVybH0vcHJvZHVjdHZhcmlhbnRzP3N0b3JlX2hhc2g9JHtjb25maWcuc3RvcmVIYXNofSZwcm9kdWN0X2lkPSR7cHJvZHVjdF9pZH0mdmFyaWFudF9pZD0ke3ZhcmlhbnRfaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4dHJhc19saXN0ID0gW107XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzZWxlY3RlZFBpY2tMaXN0T3B0aW5zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dDdXN0b21QcmljZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLm9wdGlvbl9saXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkYXRhLm9wdGlvbl9saXN0O1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvcHRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25JZCA9IG9wdGlvbnNbal0ub3B0aW9uX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb25zW2pdLm9wdGlvbl92YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbklkID09IHNlbGVjdGVkUGlja0xpc3RPcHRpbnNba10ub3B0aW9uX2lkICYmIG9wdGlvblZhbHVlID09IHNlbGVjdGVkUGlja0xpc3RPcHRpbnNba10ub3B0aW9uX3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0N1c3RvbVByaWNlID0gZmFsc2U7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dDdXN0b21QcmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0cmFfcHJvZHVjdF9pZCA9IHNlbGVjdGVkUGlja0xpc3RPcHRpbnNba10ub3B0aW9uX2RhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRyYV92YXJpYW50X2lkID0gdGhpcy5nZXRWYXJpYW50SWRCeVByb2R1Y3RJZChleHRyYV9wcm9kdWN0X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRyYV92YXJpYW50X2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFzX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXh0cmFfcHJvZHVjdF9pZFwiOiBleHRyYV9wcm9kdWN0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4dHJhX3ZhcmlhbnRfaWRcIjogZXh0cmFfdmFyaWFudF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYXNfbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHRyYV9wcm9kdWN0X2lkXCI6IGV4dHJhX3Byb2R1Y3RfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRyYXNfbGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtT2JqLmV4dHJhc19saXN0ID0gXy5jbG9uZURlZXAoZXh0cmFzX2xpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBKU09OLnN0cmluZ2lmeShqcVhIUikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvL2ZvciBidW5kbGViMmJcbiAgICB1cGRhdGVDYXRhbG9nUHJpY2UoY2FydEl0ZW1JZCwgY2IpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiBcIi4uL2FwaS9zdG9yZWZyb250L2NhcnRzXCIsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhcnRcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJZCA9IGRhdGFbMF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FydElkXCIsIGNhcnRJZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgY2FydEl0ZW1zID0gZGF0YVswXS5saW5lSXRlbXMucGh5c2ljYWxJdGVtcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FydEl0ZW1zX2FsbCA9IGRhdGFbMF0ubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGNhcnRJdGVtc19hbGwuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnBhcmVudElkID09IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtID0gY2FydEl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gY2FydEl0ZW0uaWQ7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnRJdGVtSWQgPT0gaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVByb2R1Y3RJZCA9IGNhcnRJdGVtLnByb2R1Y3RJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtVmFyaWFudElkID0gY2FydEl0ZW0udmFyaWFudElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1RdHkgPSBjYXJ0SXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnQ2F0YWxvZ0lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhdGFsb2dfaWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SXRlbU9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtX2lkXCI6IGl0ZW1JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0X2lkXCI6IGl0ZW1Qcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFyaWFudF9pZFwiOiBpdGVtVmFyaWFudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IGl0ZW1RdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2F0YWxvZ19pZFwiOiBnQ2F0YWxvZ0lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHV0ZGF0YVwiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbU9iaikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWNrTGlzdE9wdGlvbnMoY2FydEl0ZW1PYmosICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwdXRkYXRhMlwiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbU9iaikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ5cGFzc19zdG9yZV9oYXNoID0gYCR7Y29uZmlnLnN0b3JlSGFzaH1gO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtjb25maWcuYXBpUm9vdFVybH0vY2FydD9zdG9yZV9oYXNoPSR7YnlwYXNzX3N0b3JlX2hhc2h9JmNhcnRfaWQ9JHtjYXJ0SWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtT2JqKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGUgcHJpY2UgZG9uZS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJ1cGRhdGUgY2F0YWxvZyBwcmljZSBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIEpTT04uc3RyaW5naWZ5KGpxWEhSKSk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJUaGVyZSBoYXMgc29tZSBlcnJvciwgcGxlYXNlIHRyeSBhZ2Fpbi5cIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbn1cbiIsImltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdFc3RpbWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5iaW5kRXN0aW1hdG9yRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IC5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXRgLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBjb3VudHJpZXMsIHRoZSBzdGF0ZS9yZWdpb24gaXMgZHluYW1pY1xuICAgICAgICAgICAgLy8gT25seSBwZXJmb3JtIGEgY2hlY2sgZm9yIGFsbCBmaWVsZHMgd2hlbiBjb3VudHJ5IGhhcyBhIHZhbHVlXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYXJlQWxsKCd2YWxpZCcpIHdpbGwgY2hlY2sgY291bnRyeSBmb3IgdmFsaWRpdHlcbiAgICAgICAgICAgIGlmICgkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWApLnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRVUFNSYXRlcygpO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlJZCA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudHJ5SWQgIT09IDAgJiYgIU51bWJlci5pc05hTihjb3VudHJ5SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnQ291bnRyeVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCksXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZVZhbCAmJiBlbGVWYWwubGVuZ3RoICYmIGVsZVZhbCAhPT0gJ1N0YXRlL3Byb3ZpbmNlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuZ2V0U3RhdHVzKHRoaXMuJHN0YXRlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZmllbGQuYXR0cigncGxhY2Vob2xkZXInLCAnU3RhdGUvcHJvdmluY2UnKTtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIHlvdSBjaGFuZ2UgYSBjb3VudHJ5LCB5b3Ugc3dhcCB0aGUgc3RhdGUvcHJvdmluY2UgYmV0d2VlbiBhbiBpbnB1dCBhbmQgYSBzZWxlY3QgZHJvcGRvd25cbiAgICAgICAgICAgIC8vIE5vdCBhbGwgY291bnRyaWVzIHJlcXVpcmUgdGhlIHByb3ZpbmNlIHRvIGJlIGZpbGxlZFxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZW1vdmUgdGhpcyBjbGFzcyB3aGVuIHdlIHN3YXAgc2luY2Ugbm9kIHZhbGlkYXRpb24gZG9lc24ndCBjbGVhbnVwIGZvciB1c1xuICAgICAgICAgICAgJCh0aGlzLnNoaXBwaW5nRXN0aW1hdG9yKS5maW5kKCcuZm9ybS1maWVsZC0tc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1zdWNjZXNzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFc3RpbWF0b3JFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XG5cbiAgICAgICAgJGVzdGltYXRvckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgc3RhdGVfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctc3RhdGVcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgY2l0eTogJCgnW25hbWU9XCJzaGlwcGluZy1jaXR5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIHppcF9jb2RlOiAkKCdbbmFtZT1cInNoaXBwaW5nLXppcFwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldFNoaXBwaW5nUXVvdGVzKHBhcmFtcywgJ2NhcnQvc2hpcHBpbmctcXVvdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuc2hpcHBpbmctcXVvdGVzJykuaHRtbChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGJpbmQgdGhlIHNlbGVjdCBidXR0b25cbiAgICAgICAgICAgICAgICAkKCcuc2VsZWN0LXNoaXBwaW5nLXF1b3RlJykub24oJ2NsaWNrJywgY2xpY2tFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlSWQgPSAkKCcuc2hpcHBpbmctcXVvdGU6Y2hlY2tlZCcpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5zdWJtaXRTaGlwcGluZ1F1b3RlKHF1b3RlSWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuc2hvdygpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHN3ZWV0QWxlcnQgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vLyBTZXQgZGVmYXVsdHMgZm9yIHN3ZWV0YWxlcnQyIHBvcHVwIGJveGVzXG5zd2VldEFsZXJ0LnNldERlZmF1bHRzKHtcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgY29uZmlybUJ1dHRvbkNsYXNzOiAnYnV0dG9uJyxcbiAgICBjYW5jZWxCdXR0b25DbGFzczogJ2J1dHRvbicsXG59KTtcblxuLy8gUmUtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBzd2VldEFsZXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==