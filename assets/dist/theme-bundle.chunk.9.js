(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _b2b_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./b2b/config */ "./assets/js/theme/b2b/config.js");
/* harmony import */ var _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./b2b/common/advQuantity */ "./assets/js/theme/b2b/common/advQuantity.js");








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
    this.$cartContent = jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-cart-content]');
    this.$cartMessages = jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-cart-status]');
    this.$cartTotals = jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-cart-totals]');
    this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.bindEvents(); // adv quantity

    this.initAdvQuantity();
  };

  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;

    var itemId = $target.data('cartItemid');
    var $el = jquery__WEBPACK_IMPORTED_MODULE_8___default()("#qty-" + itemId);
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
  } // add adv quantity
  ;

  _proto.cartUpdate = function cartUpdate($target) {
    var _this2 = this;

    var itemId = $target.data('cartItemid');
    var $el = jquery__WEBPACK_IMPORTED_MODULE_8___default()("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var advQuantityMIn = parseInt($el.attr('data-adv-min-qty'), 10) || 1;
    var advQuantityIncrement = parseInt($el.attr('data-adv-increment-qty'), 10) || 1;
    var newQty = oldQty;

    if ($target.hasClass('button')) {
      newQty = $target.data('action') === 'inc' ? oldQty + advQuantityIncrement : oldQty - advQuantityIncrement;
    }

    newQty = newQty < 0 ? 0 : newQty;
    minQty = _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_15__["default"].getMinQty(advQuantityMIn, advQuantityIncrement); // Does not quality for min/max quantity

    if (newQty !== 0 && newQty < minQty) {
      /*return swal({
          text: minError,
          type: 'error',
      });*/
      newQty = minQty;
      /*swal({
          text: `The minimum purchasable quantity is ${minQty}`,
          type: 'error',
      });*/
    } else if (maxQty > 0 && newQty > maxQty) {
      newQty = maxQty;
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: maxError,
        type: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0; //this.refreshContent(remove);
        //for bundleb2b

        if (!remove && sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
          _this2.updateCatalogPrice(itemId);
        } else {
          _this2.refreshContent(remove);
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
      var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_8___default()(option);
      var $form = $changedOption.parents('form');
      var $submit = jquery__WEBPACK_IMPORTED_MODULE_8___default()('input.button', $form);
      var $messageBox = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.alertMessageBox');
      var item = jquery__WEBPACK_IMPORTED_MODULE_8___default()('[name="item_id"]', $form).attr('value');
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
          jquery__WEBPACK_IMPORTED_MODULE_8___default()('p.alertBox-message', $messageBox).text(data.purchasing_message);
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

    var $cartItemsRows = jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-item-row]', this.$cartContent);
    var $cartPageTitle = jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-cart-page-title]');
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

      var quantity = jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('body').trigger('cart-quantity-update', quantity);

      _this5.initAdvQuantity();
    });
  };

  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;

    var debounceTimeout = 400;

    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_6___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(this.cartUpdate, debounceTimeout), this);

    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_6___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(this.cartRemoveItem, debounceTimeout), this);
    /**
     * qty input change
     */


    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.form-input--incrementTotal', this.$cartContext).on('change', function (event) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_8___default()(event.currentTarget);
      cartUpdate($target); // update cart quantity
    }).on("keyup", function (event) {
      var $input = jquery__WEBPACK_IMPORTED_MODULE_8___default()(event.currentTarget);
      _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_15__["default"].validateAdvQty($input);
    }); // cart update

    jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_8___default()(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdate($target);
    });
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_8___default()(event.currentTarget).data('cartItemid');
      var string = jquery__WEBPACK_IMPORTED_MODULE_8___default()(event.currentTarget).data('confirmDelete');
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
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_8___default()(event.currentTarget).data('itemEdit');
      event.preventDefault(); // edit item in cart

      _this6.cartEditOptions(itemId);
    });
  };

  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;

    var $couponContainer = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.coupon-code');
    var $couponForm = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.coupon-form');
    var $codeInput = jquery__WEBPACK_IMPORTED_MODULE_8___default()('[name="couponcode"]', $couponForm);
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_8___default()(event.currentTarget).hide();
      $couponContainer.show();
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('.coupon-code-cancel').hide();
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('.coupon-code-add').show();
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

    var $certContainer = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.gift-certificate-code');
    var $certForm = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.cart-gift-certificate-form');
    var $certInput = jquery__WEBPACK_IMPORTED_MODULE_8___default()('[name="certcode"]', $certForm);
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_8___default()(event.currentTarget).toggle();
      $certContainer.toggle();
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('.gift-certificate-cancel').toggle();
    });
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('.gift-certificate-add').toggle();
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('.gift-certificate-cancel').toggle();
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
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-item-giftwrap]').on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_8___default()(event.currentTarget).data('itemGiftwrap');
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
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.giftWrapping-select').on('change', function (event) {
      var $select = jquery__WEBPACK_IMPORTED_MODULE_8___default()(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');

      if (!id) {
        return;
      }

      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      jquery__WEBPACK_IMPORTED_MODULE_8___default()(".giftWrapping-image-" + index).hide();
      jquery__WEBPACK_IMPORTED_MODULE_8___default()("#giftWrapping-image-" + index + "-" + id).show();

      if (allowMessage) {
        jquery__WEBPACK_IMPORTED_MODULE_8___default()("#giftWrapping-message-" + index).show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_8___default()("#giftWrapping-message-" + index).hide();
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_8___default()('.giftWrapping-select').trigger('change');

    function toggleViews() {
      var value = jquery__WEBPACK_IMPORTED_MODULE_8___default()('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.giftWrapping-single');
      var $multiForm = jquery__WEBPACK_IMPORTED_MODULE_8___default()('.giftWrapping-multiple');

      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }

    jquery__WEBPACK_IMPORTED_MODULE_8___default()('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };

  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents(); // initiate shipping estimator module

    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_11__["default"](jquery__WEBPACK_IMPORTED_MODULE_8___default()('[data-shipping-estimator]'));
    /**
     * check advqty before checkout
     */

    /*$('.cart-actions .button').on('click', e => {
        if ($('.cart-item .invalidAdvQty').length) {
            e.preventDefault();
            return swal({
                text: `Please review your cart, one or more items have an invalid quantity.`,
                type: 'error',
            });
        }
    });*/
  } // for bundleb2b
  // for simple products
  ;

  _proto.getVariantIdByProductId = function getVariantIdByProductId(productId) {
    var variantId;

    if (this.catalog_products && this.catalog_products[productId]) {
      var variantSkus = this.catalog_products[productId];
      variantId = variantSkus[0].variant_id;
    }

    return variantId;
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
        jquery__WEBPACK_IMPORTED_MODULE_8___default.a.ajax({
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
              cartItemObj.extras_list = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(extras_list);
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
    jquery__WEBPACK_IMPORTED_MODULE_8___default.a.ajax({
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
                    jquery__WEBPACK_IMPORTED_MODULE_8___default.a.ajax({
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

  _proto.initAdvQuantity = function initAdvQuantity() {
    var $cartInputs = jquery__WEBPACK_IMPORTED_MODULE_8___default()(".cart-item .form-input--incrementTotal");
    _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_15__["default"].setUpAdvQtyMulti($cartInputs, {
      bindInputEvents: false,
      bindButtonEvents: false,
      multiCheck: false,
      multiCheckMsg: "Please review your cart, one or more items have an invalid quantity."
    });
  };

  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_7__["default"]);



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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJDYXJ0Iiwib25SZWFkeSIsIiRjYXJ0Q29udGVudCIsIiQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkb3ZlcmxheSIsImhpZGUiLCJiaW5kRXZlbnRzIiwiaW5pdEFkdlF1YW50aXR5IiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJpdGVtSWQiLCJkYXRhIiwiJGVsIiwib2xkUXR5IiwicGFyc2VJbnQiLCJ2YWwiLCJtYXhRdHkiLCJtaW5RdHkiLCJtaW5FcnJvciIsIm1heEVycm9yIiwibmV3UXR5Iiwic3dhbCIsInRleHQiLCJ0eXBlIiwic2hvdyIsInV0aWxzIiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInVwZGF0ZUNhdGFsb2dQcmljZSIsInJlZnJlc2hDb250ZW50IiwiZXJyb3JzIiwiam9pbiIsImFkdlF1YW50aXR5TUluIiwiYXR0ciIsImFkdlF1YW50aXR5SW5jcmVtZW50IiwiaGFzQ2xhc3MiLCJBZHZRdWFudGl0eVV0aWwiLCJnZXRNaW5RdHkiLCJjYXJ0UmVtb3ZlSXRlbSIsIml0ZW1SZW1vdmUiLCJjYXJ0RWRpdE9wdGlvbnMiLCJtb2RhbCIsImRlZmF1bHRNb2RhbCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIm9wZW4iLCJwcm9kdWN0QXR0cmlidXRlcyIsImNvbmZpZ3VyZUluQ2FydCIsInVwZGF0ZUNvbnRlbnQiLCJjb250ZW50IiwiYmluZEdpZnRXcmFwcGluZ0Zvcm0iLCJob29rcyIsIm9uIiwiZXZlbnQiLCJvcHRpb24iLCIkY2hhbmdlZE9wdGlvbiIsIiRmb3JtIiwicGFyZW50cyIsIiRzdWJtaXQiLCIkbWVzc2FnZUJveCIsIml0ZW0iLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJyZXN1bHQiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJwcm9wIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJGNhcnRJdGVtc1Jvd3MiLCIkY2FydFBhZ2VUaXRsZSIsInRvdGFscyIsInBhZ2VUaXRsZSIsInN0YXR1c01lc3NhZ2VzIiwibGVuZ3RoIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRDb250ZW50IiwiaHRtbCIsInJlcGxhY2VXaXRoIiwicXVhbnRpdHkiLCJ0cmlnZ2VyIiwiYmluZENhcnRFdmVudHMiLCJkZWJvdW5jZVRpbWVvdXQiLCIkY2FydENvbnRleHQiLCJjdXJyZW50VGFyZ2V0IiwiJGlucHV0IiwidmFsaWRhdGVBZHZRdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0cmluZyIsInNob3dDYW5jZWxCdXR0b24iLCJ0aGVuIiwiYmluZFByb21vQ29kZUV2ZW50cyIsIiRjb3Vwb25Db250YWluZXIiLCIkY291cG9uRm9ybSIsIiRjb2RlSW5wdXQiLCJjb2RlIiwiYXBwbHlDb2RlIiwiYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cyIsIiRjZXJ0Q29udGFpbmVyIiwiJGNlcnRGb3JtIiwiJGNlcnRJbnB1dCIsInRvZ2dsZSIsImdpZnRDZXJ0Q2hlY2siLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsInJlc3AiLCJiaW5kR2lmdFdyYXBwaW5nRXZlbnRzIiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCIkc2VsZWN0IiwiaWQiLCJpbmRleCIsImFsbG93TWVzc2FnZSIsImZpbmQiLCJ0b2dnbGVWaWV3cyIsInZhbHVlIiwiJHNpbmdsZUZvcm0iLCIkbXVsdGlGb3JtIiwic2hpcHBpbmdFc3RpbWF0b3IiLCJTaGlwcGluZ0VzdGltYXRvciIsImdldFZhcmlhbnRJZEJ5UHJvZHVjdElkIiwicHJvZHVjdElkIiwidmFyaWFudElkIiwiY2F0YWxvZ19wcm9kdWN0cyIsInZhcmlhbnRTa3VzIiwidmFyaWFudF9pZCIsImhhbmRsZVBpY2tMaXN0T3B0aW9ucyIsImNhcnRJdGVtT2JqIiwiY2IiLCJjYXJ0SXRlbUlkIiwiaXRlbV9pZCIsInByb2R1Y3RfaWQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRQaWNrTGlzdE9wdGlucyIsImkiLCJwYXJ0aWFsIiwib3B0aW9uVmFsdWVzIiwidmFsdWVzIiwiaiIsIm9wdGlvblZhbHVlIiwic2VsZWN0ZWQiLCJwdXNoIiwiYWpheCIsInVybCIsImNvbmZpZyIsImFwaVJvb3RVcmwiLCJzdG9yZUhhc2giLCJzdWNjZXNzIiwiZXh0cmFzX2xpc3QiLCJrIiwic2hvd0N1c3RvbVByaWNlIiwib3B0aW9uX2xpc3QiLCJvcHRpb25JZCIsIm9wdGlvbl9pZCIsIm9wdGlvbl92YWx1ZSIsImV4dHJhX3Byb2R1Y3RfaWQiLCJvcHRpb25fZGF0YSIsImV4dHJhX3ZhcmlhbnRfaWQiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnRUeXBlIiwiYWNjZXB0IiwiY2FydElkIiwiY2FydEl0ZW1zX2FsbCIsImxpbmVJdGVtcyIsInBoeXNpY2FsSXRlbXMiLCJjYXJ0SXRlbXMiLCJmaWx0ZXIiLCJwYXJlbnRJZCIsImNhcnRJdGVtIiwiaXRlbVByb2R1Y3RJZCIsIml0ZW1WYXJpYW50SWQiLCJpdGVtUXR5IiwiZ0NhdGFsb2dJZCIsImJ5cGFzc19zdG9yZV9oYXNoIiwiYWxlcnQiLCIkY2FydElucHV0cyIsInNldFVwQWR2UXR5TXVsdGkiLCJiaW5kSW5wdXRFdmVudHMiLCJiaW5kQnV0dG9uRXZlbnRzIiwibXVsdGlDaGVjayIsIm11bHRpQ2hlY2tNc2ciLCJQYWdlTWFuYWdlciIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ1ZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJpbmRWYWxpZGF0aW9uIiwiYmluZFN0YXRlVmFsaWRhdGlvbiIsImJpbmRVUFNSYXRlcyIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjb3VudHJ5SWQiLCJOdW1iZXIiLCJpc05hTiIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiY29udGV4dCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsImlzIiwiVmFsaWRhdG9ycyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiYWRkQ2xhc3MiLCJjZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSTs7Ozs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtBQUNOLFNBQUtDLFlBQUwsR0FBb0JDLDZDQUFDLENBQUMscUJBQUQsQ0FBckI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCRCw2Q0FBQyxDQUFDLG9CQUFELENBQXRCO0FBQ0EsU0FBS0UsV0FBTCxHQUFtQkYsNkNBQUMsQ0FBQyxvQkFBRCxD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TDtBQUFlLHlFQUFVK08sSUFBVixFQUFnQjtBQUMzQixNQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsV0FBTyxLQUFQO0FBQ0gsR0FIMEIsQ0FLM0I7OztBQUNBLFNBQU8sSUFBUDtBQUNILEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ2lmdENlcnRDaGVjayBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFNoaXBwaW5nRXN0aW1hdG9yIGZyb20gJy4vY2FydC9zaGlwcGluZy1lc3RpbWF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2IyYi9jb25maWcnO1xuaW1wb3J0IEFkdlF1YW50aXR5VXRpbCBmcm9tICcuL2IyYi9jb21tb24vYWR2UXVhbnRpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50ID0gJCgnW2RhdGEtY2FydC1jb250ZW50XScpO1xuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nKTtcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscyA9ICQoJ1tkYXRhLWNhcnQtdG90YWxzXScpO1xuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JylcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gYWR2IHF1YW50aXR5XG4gICAgICAgIHRoaXMuaW5pdEFkdlF1YW50aXR5KCk7XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZSgkdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnID8gb2xkUXR5ICsgMSA6IG9sZFF0eSAtIDE7XG5cbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICAgICAgLy9mb3IgYnVuZGxlYjJiXG4gICAgICAgICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikgIT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYXRhbG9nUHJpY2UoaXRlbUlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBhZGQgYWR2IHF1YW50aXR5XG4gICAgY2FydFVwZGF0ZSgkdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgbGV0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuXG5cbiAgICAgICAgY29uc3QgYWR2UXVhbnRpdHlNSW4gPSBwYXJzZUludCgkZWwuYXR0cignZGF0YS1hZHYtbWluLXF0eScpLCAxMCkgfHwgMTtcbiAgICAgICAgY29uc3QgYWR2UXVhbnRpdHlJbmNyZW1lbnQgPSBwYXJzZUludCgkZWwuYXR0cignZGF0YS1hZHYtaW5jcmVtZW50LXF0eScpLCAxMCkgfHwgMTtcblxuICAgICAgICBsZXQgbmV3UXR5ID0gb2xkUXR5O1xuXG4gICAgICAgIGlmICgkdGFyZ2V0Lmhhc0NsYXNzKCdidXR0b24nKSkge1xuICAgICAgICAgICAgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyBhZHZRdWFudGl0eUluY3JlbWVudCA6IG9sZFF0eSAtIGFkdlF1YW50aXR5SW5jcmVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3UXR5ID0gbmV3UXR5IDwgMCA/IDAgOiBuZXdRdHk7XG5cblxuICAgICAgICBtaW5RdHkgPSBBZHZRdWFudGl0eVV0aWwuZ2V0TWluUXR5KGFkdlF1YW50aXR5TUluLCBhZHZRdWFudGl0eUluY3JlbWVudCk7XG5cblxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmIChuZXdRdHkgIT09IDAgJiYgbmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICAvKnJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7Ki9cblxuICAgICAgICAgICAgbmV3UXR5ID0gbWluUXR5O1xuICAgICAgICAgICAgLypzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBgVGhlIG1pbmltdW0gcHVyY2hhc2FibGUgcXVhbnRpdHkgaXMgJHttaW5RdHl9YCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7Ki9cblxuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICBuZXdRdHkgPSBtYXhRdHk7XG4gICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcblxuXG4gICAgICAgICAgICAgICAgLy9mb3IgYnVuZGxlYjJiXG4gICAgICAgICAgICAgICAgaWYgKCFyZW1vdmUgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhdGFsb2dQcmljZShpdGVtSWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCkge1xuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5jb25maWd1cmVJbkNhcnQoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChvcHRpb24pO1xuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgICAgICBjb25zdCAkc3VibWl0ID0gJCgnaW5wdXQuYnV0dG9uJywgJGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcuYWxlcnRNZXNzYWdlQm94Jyk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gJCgnW25hbWU9XCJpdGVtX2lkXCJdJywgJGZvcm0pLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoaXRlbSwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdwLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaENvbnRlbnQocmVtb3ZlKSB7XG4gICAgICAgIGNvbnN0ICRjYXJ0SXRlbXNSb3dzID0gJCgnW2RhdGEtaXRlbS1yb3ddJywgdGhpcy4kY2FydENvbnRlbnQpO1xuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXG4gICAgICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2NhcnQvcGFnZS10aXRsZScsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcbiAgICAgICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgdGhpcy5pbml0QWR2UXVhbnRpdHkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZENhcnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGRlYm91bmNlVGltZW91dCA9IDQwMDtcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0UmVtb3ZlSXRlbSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogcXR5IGlucHV0IGNoYW5nZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJywgdGhpcy4kY2FydENvbnRleHQpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7IC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgIH0pLm9uKFwia2V5dXBcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIEFkdlF1YW50aXR5VXRpbC52YWxpZGF0ZUFkdlF0eSgkaW5wdXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9ICQoJy5jb3Vwb24tY29kZScpO1xuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9ICQoJy5jb3Vwb24tZm9ybScpO1xuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKTtcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY29kZUlucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFnaWZ0Q2VydENoZWNrKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2hpcHBpbmcgZXN0aW1hdG9yIG1vZHVsZVxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSk7XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogY2hlY2sgYWR2cXR5IGJlZm9yZSBjaGVja291dFxuICAgICAgICAgKi9cbiAgICAgICAgLyokKCcuY2FydC1hY3Rpb25zIC5idXR0b24nKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGlmICgkKCcuY2FydC1pdGVtIC5pbnZhbGlkQWR2UXR5JykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFBsZWFzZSByZXZpZXcgeW91ciBjYXJ0LCBvbmUgb3IgbW9yZSBpdGVtcyBoYXZlIGFuIGludmFsaWQgcXVhbnRpdHkuYCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7Ki9cbiAgICB9XG5cbiAgICAvLyBmb3IgYnVuZGxlYjJiXG4gICAgLy8gZm9yIHNpbXBsZSBwcm9kdWN0c1xuICAgIGdldFZhcmlhbnRJZEJ5UHJvZHVjdElkKHByb2R1Y3RJZCkge1xuICAgICAgICBsZXQgdmFyaWFudElkO1xuXG4gICAgICAgIGlmICh0aGlzLmNhdGFsb2dfcHJvZHVjdHMgJiYgdGhpcy5jYXRhbG9nX3Byb2R1Y3RzW3Byb2R1Y3RJZF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRTa3VzID0gdGhpcy5jYXRhbG9nX3Byb2R1Y3RzW3Byb2R1Y3RJZF07XG4gICAgICAgICAgICB2YXJpYW50SWQgPSB2YXJpYW50U2t1c1swXS52YXJpYW50X2lkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YXJpYW50SWQ7XG4gICAgfVxuXG4gICAgLy8gZm9yIGJ1bmRsZWIyYlxuICAgIGhhbmRsZVBpY2tMaXN0T3B0aW9ucyhjYXJ0SXRlbU9iaiwgY2IpIHtcbiAgICAgICAgY29uc3QgY2FydEl0ZW1JZCA9IGNhcnRJdGVtT2JqLml0ZW1faWQ7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RfaWQgPSBjYXJ0SXRlbU9iai5wcm9kdWN0X2lkO1xuICAgICAgICBjb25zdCB2YXJpYW50X2lkID0gY2FydEl0ZW1PYmoudmFyaWFudF9pZDtcblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGNhcnRJdGVtSWQsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYjJiL2NvbmZpZ3VyZS1wcm9kdWN0LWRhdGEnLFxuICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFBpY2tMaXN0T3B0aW5zID0gW107XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSByZXNwb25zZS5kYXRhLm9wdGlvbnM7XG5cblxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5wYXJ0aWFsID09IFwicHJvZHVjdC1saXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IG9wdGlvbi52YWx1ZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0aW9uVmFsdWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZXNbal07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uVmFsdWUuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQaWNrTGlzdE9wdGlucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uX2lkXCI6IG9wdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uX3ZhbHVlXCI6IG9wdGlvblZhbHVlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25fZGF0YVwiOiBvcHRpb25WYWx1ZS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRQaWNrTGlzdE9wdGlucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFBpY2tMaXN0T3B0aW5zKSB7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtjb25maWcuYXBpUm9vdFVybH0vcHJvZHVjdHZhcmlhbnRzP3N0b3JlX2hhc2g9JHtjb25maWcuc3RvcmVIYXNofSZwcm9kdWN0X2lkPSR7cHJvZHVjdF9pZH0mdmFyaWFudF9pZD0ke3ZhcmlhbnRfaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4dHJhc19saXN0ID0gW107XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzZWxlY3RlZFBpY2tMaXN0T3B0aW5zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dDdXN0b21QcmljZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLm9wdGlvbl9saXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkYXRhLm9wdGlvbl9saXN0O1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvcHRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25JZCA9IG9wdGlvbnNbal0ub3B0aW9uX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb25zW2pdLm9wdGlvbl92YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbklkID09IHNlbGVjdGVkUGlja0xpc3RPcHRpbnNba10ub3B0aW9uX2lkICYmIG9wdGlvblZhbHVlID09IHNlbGVjdGVkUGlja0xpc3RPcHRpbnNba10ub3B0aW9uX3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0N1c3RvbVByaWNlID0gZmFsc2U7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dDdXN0b21QcmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0cmFfcHJvZHVjdF9pZCA9IHNlbGVjdGVkUGlja0xpc3RPcHRpbnNba10ub3B0aW9uX2RhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRyYV92YXJpYW50X2lkID0gdGhpcy5nZXRWYXJpYW50SWRCeVByb2R1Y3RJZChleHRyYV9wcm9kdWN0X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRyYV92YXJpYW50X2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFzX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXh0cmFfcHJvZHVjdF9pZFwiOiBleHRyYV9wcm9kdWN0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4dHJhX3ZhcmlhbnRfaWRcIjogZXh0cmFfdmFyaWFudF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYXNfbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHRyYV9wcm9kdWN0X2lkXCI6IGV4dHJhX3Byb2R1Y3RfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRyYXNfbGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRJdGVtT2JqLmV4dHJhc19saXN0ID0gXy5jbG9uZURlZXAoZXh0cmFzX2xpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBKU09OLnN0cmluZ2lmeShqcVhIUikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvL2ZvciBidW5kbGViMmJcbiAgICB1cGRhdGVDYXRhbG9nUHJpY2UoY2FydEl0ZW1JZCwgY2IpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiBcIi4uL2FwaS9zdG9yZWZyb250L2NhcnRzXCIsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhcnRcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJZCA9IGRhdGFbMF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FydElkXCIsIGNhcnRJZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgY2FydEl0ZW1zID0gZGF0YVswXS5saW5lSXRlbXMucGh5c2ljYWxJdGVtcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FydEl0ZW1zX2FsbCA9IGRhdGFbMF0ubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGNhcnRJdGVtc19hbGwuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnBhcmVudElkID09IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtID0gY2FydEl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gY2FydEl0ZW0uaWQ7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnRJdGVtSWQgPT0gaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVByb2R1Y3RJZCA9IGNhcnRJdGVtLnByb2R1Y3RJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtVmFyaWFudElkID0gY2FydEl0ZW0udmFyaWFudElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1RdHkgPSBjYXJ0SXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnQ2F0YWxvZ0lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhdGFsb2dfaWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SXRlbU9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtX2lkXCI6IGl0ZW1JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0X2lkXCI6IGl0ZW1Qcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFyaWFudF9pZFwiOiBpdGVtVmFyaWFudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IGl0ZW1RdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2F0YWxvZ19pZFwiOiBnQ2F0YWxvZ0lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHV0ZGF0YVwiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbU9iaikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWNrTGlzdE9wdGlvbnMoY2FydEl0ZW1PYmosICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwdXRkYXRhMlwiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbU9iaikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ5cGFzc19zdG9yZV9oYXNoID0gYCR7Y29uZmlnLnN0b3JlSGFzaH1gO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtjb25maWcuYXBpUm9vdFVybH0vY2FydD9zdG9yZV9oYXNoPSR7YnlwYXNzX3N0b3JlX2hhc2h9JmNhcnRfaWQ9JHtjYXJ0SWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtT2JqKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGUgcHJpY2UgZG9uZS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJ1cGRhdGUgY2F0YWxvZyBwcmljZSBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIEpTT04uc3RyaW5naWZ5KGpxWEhSKSk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJUaGVyZSBoYXMgc29tZSBlcnJvciwgcGxlYXNlIHRyeSBhZ2Fpbi5cIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGluaXRBZHZRdWFudGl0eSgpIHtcbiAgICAgICAgY29uc3QgJGNhcnRJbnB1dHMgPSAkKFwiLmNhcnQtaXRlbSAuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWxcIik7XG4gICAgICAgIEFkdlF1YW50aXR5VXRpbC5zZXRVcEFkdlF0eU11bHRpKCRjYXJ0SW5wdXRzLCB7XG4gICAgICAgICAgICBiaW5kSW5wdXRFdmVudHM6IGZhbHNlLFxuICAgICAgICAgICAgYmluZEJ1dHRvbkV2ZW50czogZmFsc2UsXG4gICAgICAgICAgICBtdWx0aUNoZWNrOiBmYWxzZSxcbiAgICAgICAgICAgIG11bHRpQ2hlY2tNc2c6IFwiUGxlYXNlIHJldmlldyB5b3VyIGNhcnQsIG9uZSBvciBtb3JlIGl0ZW1zIGhhdmUgYW4gaW52YWxpZCBxdWFudGl0eS5cIlxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuLi9jb21tb24vZm9ybS11dGlscyc7XG5pbXBvcnQgc3dhbCBmcm9tICcuLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJywgdGhpcy4kZWxlbWVudCk7XG4gICAgICAgIHRoaXMuaW5pdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xuICAgICAgICB0aGlzLmJpbmRFc3RpbWF0b3JFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSAnZm9ybVtkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nO1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdGAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXQnLCB0aGlzLiRlbGVtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIGNvdW50cmllcywgdGhlIHN0YXRlL3JlZ2lvbiBpcyBkeW5hbWljXG4gICAgICAgICAgICAvLyBPbmx5IHBlcmZvcm0gYSBjaGVjayBmb3IgYWxsIGZpZWxkcyB3aGVuIGNvdW50cnkgaGFzIGEgdmFsdWVcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcmVBbGwoJ3ZhbGlkJykgd2lsbCBjaGVjayBjb3VudHJ5IGZvciB2YWxpZGl0eVxuICAgICAgICAgICAgaWYgKCQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCkudmFsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFVQU1JhdGVzKCk7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlkID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50cnlJZCAhPT0gMCAmJiAhTnVtYmVyLmlzTmFOKGNvdW50cnlJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdDb3VudHJ5XFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsZSA9ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlVmFsID0gJGVsZS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBiZXR3ZWVuIGRlZmF1bHQgc2hpcHBpbmcgYW5kIHVwcyBzaGlwcGluZyByYXRlc1xuICAgICAqL1xuICAgIGJpbmRVUFNSYXRlcygpIHtcbiAgICAgICAgY29uc3QgVVBTUmF0ZVRvZ2dsZSA9ICcuZXN0aW1hdG9yLWZvcm0tdG9nZ2xlVVBTUmF0ZSc7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIFVQU1JhdGVUb2dnbGUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1VcHMgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLXVwcycpO1xuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1EZWZhdWx0ID0gJCgnLmVzdGltYXRvci1mb3JtLS1kZWZhdWx0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtVXBzLnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybURlZmF1bHQudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpIHtcbiAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KHRoaXMuJHN0YXRlLCB0aGlzLmNvbnRleHQsIHsgdXNlSWRGb3JTdGF0ZXM6IHRydWUgfSwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckNvbnRhaW5lciA9ICQoJy5zaGlwcGluZy1lc3RpbWF0b3InKTtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcblxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLnNob3coKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VydCkge1xuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbnkgY3VzdG9tIGdpZnQgY2VydGlmaWNhdGUgdmFsaWRhdGlvbiBsb2dpYyBoZXJlXG4gICAgcmV0dXJuIHRydWU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9