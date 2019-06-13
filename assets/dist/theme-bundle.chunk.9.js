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
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _b2b_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./b2b/config */ "./assets/js/theme/b2b/config.js");
/* harmony import */ var _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./b2b/common/advQuantity */ "./assets/js/theme/b2b/common/advQuantity.js");









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
    this.$cartContent = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-cart-content]');
    this.$cartMessages = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-cart-status]');
    this.$cartTotals = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-cart-totals]');
    this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.bindEvents(); // adv quantity

    this.initAdvQuantity();
  } // add adv quantity
  ;

  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;

    var itemId = $target.data('cartItemid');
    var $el = jquery__WEBPACK_IMPORTED_MODULE_9___default()("#qty-" + itemId);
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
    minQty = _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_16__["default"].getMinQty(advQuantityMIn, advQuantityIncrement); // Does not quality for min/max quantity

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
      sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
        text: maxError,
        type: 'error'
      });
    } // check interval qty


    if (newQty % advQuantityIncrement !== 0) {
      newQty = newQty + (advQuantityIncrement - newQty % advQuantityIncrement); // correct the quantity for the user

      /*swal({
          text: `Please enter increments of ${advQuantityIncrement}.`,
          type: 'error',
      });*/
    }

    console.log(newQty);
    _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_16__["default"].validateAdvQty($el);
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0; //this.refreshContent(remove);
        //for bundleb2b

        if (!remove && sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
          _this.updateCatalogPrice(itemId);
        } else {
          _this.refreshContent(remove);
        }
      } else {
        $el.val(oldQty);
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
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
    var $el = jquery__WEBPACK_IMPORTED_MODULE_9___default()("#qty-" + itemId);
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
      return sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
        text: invalidEntry + " is not a valid entry",
        type: 'error'
      });
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
        text: maxError,
        type: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };

  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };

  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this4 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_13__["defaultModal"])();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);

      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].hooks.on('product-option-change', function (event, option) {
      var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_9___default()(option);
      var $form = $changedOption.parents('form');
      var $submit = jquery__WEBPACK_IMPORTED_MODULE_9___default()('input.button', $form);
      var $messageBox = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.alertMessageBox');
      var item = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};

        if (err) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
            text: err,
            type: 'error'
          });
          return false;
        }

        if (data.purchasing_message) {
          jquery__WEBPACK_IMPORTED_MODULE_9___default()('p.alertBox-message', $messageBox).text(data.purchasing_message);
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

    var $cartItemsRows = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-item-row]', this.$cartContent);
    var $cartPageTitle = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-cart-page-title]');
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

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);

      _this5.$cartTotals.html(response.totals);

      _this5.$cartMessages.html(response.statusMessages);

      $cartPageTitle.replaceWith(response.pageTitle);

      _this5.bindEvents();

      _this5.$overlay.hide();

      var quantity = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      jquery__WEBPACK_IMPORTED_MODULE_9___default()('body').trigger('cart-quantity-update', quantity);

      _this5.initAdvQuantity();
    });
  };

  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;

    var debounceTimeout = 400;

    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_7___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(this.cartUpdate, debounceTimeout), this);

    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_7___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);

    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_7___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(this.cartRemoveItem, debounceTimeout), this);

    var preVal; // cart update

    jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_9___default()(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdate($target);
    }); // cart qty manually updates

    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_9___default()(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdateQtyTextChange($target, preVal);
    });
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_9___default()(event.currentTarget).data('cartItemid');
      var string = jquery__WEBPACK_IMPORTED_MODULE_9___default()(event.currentTarget).data('confirmDelete');
      sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
        text: string,
        type: 'warning',
        showCancelButton: true
      }).then(function () {
        // remove item from cart
        cartRemoveItem(itemId);
      });
      event.preventDefault();
    });
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_9___default()(event.currentTarget).data('itemEdit');
      event.preventDefault(); // edit item in cart

      _this6.cartEditOptions(itemId);
    });
  };

  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;

    var $couponContainer = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.coupon-code');
    var $couponForm = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.coupon-form');
    var $codeInput = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[name="couponcode"]', $couponForm);
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_9___default()(event.currentTarget).hide();
      $couponContainer.show();
      jquery__WEBPACK_IMPORTED_MODULE_9___default()('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      jquery__WEBPACK_IMPORTED_MODULE_9___default()('.coupon-code-cancel').hide();
      jquery__WEBPACK_IMPORTED_MODULE_9___default()('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault(); // Empty code

      if (!code) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
          text: $codeInput.data('error'),
          type: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;

    var $certContainer = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.gift-certificate-code');
    var $certForm = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.cart-gift-certificate-form');
    var $certInput = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[name="certcode"]', $certForm);
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_9___default()(event.currentTarget).toggle();
      $certContainer.toggle();
      jquery__WEBPACK_IMPORTED_MODULE_9___default()('.gift-certificate-cancel').toggle();
    });
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      jquery__WEBPACK_IMPORTED_MODULE_9___default()('.gift-certificate-add').toggle();
      jquery__WEBPACK_IMPORTED_MODULE_9___default()('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();

      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_10__["default"])(code)) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
          text: $certInput.data('error'),
          type: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
            text: resp.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_13__["defaultModal"])();
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-item-giftwrap]').on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_9___default()(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);

        _this9.bindGiftWrappingForm();
      });
    });
  };

  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.giftWrapping-select').on('change', function (event) {
      var $select = jquery__WEBPACK_IMPORTED_MODULE_9___default()(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');

      if (!id) {
        return;
      }

      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      jquery__WEBPACK_IMPORTED_MODULE_9___default()(".giftWrapping-image-" + index).hide();
      jquery__WEBPACK_IMPORTED_MODULE_9___default()("#giftWrapping-image-" + index + "-" + id).show();

      if (allowMessage) {
        jquery__WEBPACK_IMPORTED_MODULE_9___default()("#giftWrapping-message-" + index).show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_9___default()("#giftWrapping-message-" + index).hide();
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.giftWrapping-select').trigger('change');

    function toggleViews() {
      var value = jquery__WEBPACK_IMPORTED_MODULE_9___default()('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.giftWrapping-single');
      var $multiForm = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.giftWrapping-multiple');

      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }

    jquery__WEBPACK_IMPORTED_MODULE_9___default()('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };

  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents(); // initiate shipping estimator module

    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_12__["default"](jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-shipping-estimator]'));
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
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["default"].api.productAttributes.configureInCart(cartItemId, {
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
        jquery__WEBPACK_IMPORTED_MODULE_9___default.a.ajax({
          type: "GET",
          url: _b2b_config__WEBPACK_IMPORTED_MODULE_15__["default"].apiRootUrl + "/productvariants?store_hash=" + _b2b_config__WEBPACK_IMPORTED_MODULE_15__["default"].storeHash + "&product_id=" + product_id + "&variant_id=" + variant_id,
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
    jquery__WEBPACK_IMPORTED_MODULE_9___default.a.ajax({
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
                    var bypass_store_hash = "" + _b2b_config__WEBPACK_IMPORTED_MODULE_15__["default"].storeHash;
                    jquery__WEBPACK_IMPORTED_MODULE_9___default.a.ajax({
                      type: "PUT",
                      url: _b2b_config__WEBPACK_IMPORTED_MODULE_15__["default"].apiRootUrl + "/cart?store_hash=" + bypass_store_hash + "&cart_id=" + cartId,
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()({
          type: "error",
          text: "There has some error, please try again."
        });
      }
    });
  };

  _proto.initAdvQuantity = function initAdvQuantity() {
    var $cartInputs = jquery__WEBPACK_IMPORTED_MODULE_9___default()(".cart-item .form-input--incrementTotal");
    _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_16__["default"].setUpAdvQtyMulti($cartInputs, {
      bindInputEvents: false,
      bindButtonEvents: false,
      multiCheck: false,
      multiCheckMsg: "Please review your cart, one or more items have an invalid quantity."
    });
  };

  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_8__["default"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJDYXJ0Iiwib25SZWFkeSIsIiRjYXJ0Q29udGVudCIsIiQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkb3ZlcmxheSIsImhpZGUiLCJiaW5kRXZlbnRzIiwiaW5pdEFkdlF1YW50aXR5IiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJpdGVtSWQiLCJkYXRhIiwiJGVsIiwib2xkUXR5IiwicGFyc2VJbnQiLCJ2YWwiLCJtYXhRdHkiLCJtaW5RdHkiLCJtaW5FcnJvciIsIm1heEVycm9yIiwiYWR2UXVhbnRpdHlNSW4iLCJhdHRyIiwiYWR2UXVhbnRpdHlJbmNyZW1lbnQiLCJuZXdRdHkiLCJoYXNDbGFzcyIsIkFkdlF1YW50aXR5VXRpbCIsImdldE1pblF0eSIsInN3YWwiLCJ0ZXh0IiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZUFkdlF0eSIsInNob3ciLCJ1dGlscyIsImFwaSIsImNhcnQiLCJpdGVtVXBkYXRlIiwiZXJyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZW1vdmUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ1cGRhdGVDYXRhbG9nUHJpY2UiLCJyZWZyZXNoQ29udGVudCIsImVycm9ycyIsImpvaW4iLCJjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSIsInByZVZhbCIsIk51bWJlciIsImludmFsaWRFbnRyeSIsImNhcnRSZW1vdmVJdGVtIiwiaXRlbVJlbW92ZSIsImNhcnRFZGl0T3B0aW9ucyIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwib3B0aW9ucyIsInRlbXBsYXRlIiwib3BlbiIsInByb2R1Y3RBdHRyaWJ1dGVzIiwiY29uZmlndXJlSW5DYXJ0IiwidXBkYXRlQ29udGVudCIsImNvbnRlbnQiLCJiaW5kR2lmdFdyYXBwaW5nRm9ybSIsImhvb2tzIiwib24iLCJldmVudCIsIm9wdGlvbiIsIiRjaGFuZ2VkT3B0aW9uIiwiJGZvcm0iLCJwYXJlbnRzIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94IiwiaXRlbSIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJsZW5ndGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldENvbnRlbnQiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJiaW5kQ2FydEV2ZW50cyIsImRlYm91bmNlVGltZW91dCIsImN1cnJlbnRUYXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uUXR5Rm9jdXMiLCJ2YWx1ZSIsImNoYW5nZSIsInN0cmluZyIsInNob3dDYW5jZWxCdXR0b24iLCJ0aGVuIiwiYmluZFByb21vQ29kZUV2ZW50cyIsIiRjb3Vwb25Db250YWluZXIiLCIkY291cG9uRm9ybSIsIiRjb2RlSW5wdXQiLCJjb2RlIiwiYXBwbHlDb2RlIiwiYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cyIsIiRjZXJ0Q29udGFpbmVyIiwiJGNlcnRGb3JtIiwiJGNlcnRJbnB1dCIsInRvZ2dsZSIsImdpZnRDZXJ0Q2hlY2siLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsInJlc3AiLCJiaW5kR2lmdFdyYXBwaW5nRXZlbnRzIiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCIkc2VsZWN0IiwiaWQiLCJpbmRleCIsImFsbG93TWVzc2FnZSIsImZpbmQiLCJ0b2dnbGVWaWV3cyIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsInNoaXBwaW5nRXN0aW1hdG9yIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJnZXRWYXJpYW50SWRCeVByb2R1Y3RJZCIsInByb2R1Y3RJZCIsInZhcmlhbnRJZCIsImNhdGFsb2dfcHJvZHVjdHMiLCJ2YXJpYW50U2t1cyIsInZhcmlhbnRfaWQiLCJoYW5kbGVQaWNrTGlzdE9wdGlvbnMiLCJjYXJ0SXRlbU9iaiIsImNiIiwiY2FydEl0ZW1JZCIsIml0ZW1faWQiLCJwcm9kdWN0X2lkIiwic2VsZWN0ZWRQaWNrTGlzdE9wdGlucyIsImkiLCJwYXJ0aWFsIiwib3B0aW9uVmFsdWVzIiwidmFsdWVzIiwiaiIsIm9wdGlvblZhbHVlIiwic2VsZWN0ZWQiLCJwdXNoIiwiYWpheCIsInVybCIsImNvbmZpZyIsImFwaVJvb3RVcmwiLCJzdG9yZUhhc2giLCJzdWNjZXNzIiwiZXh0cmFzX2xpc3QiLCJrIiwic2hvd0N1c3RvbVByaWNlIiwib3B0aW9uX2xpc3QiLCJvcHRpb25JZCIsIm9wdGlvbl9pZCIsIm9wdGlvbl92YWx1ZSIsImV4dHJhX3Byb2R1Y3RfaWQiLCJvcHRpb25fZGF0YSIsImV4dHJhX3ZhcmlhbnRfaWQiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnRUeXBlIiwiYWNjZXB0IiwiY2FydElkIiwiY2FydEl0ZW1zX2FsbCIsImxpbmVJdGVtcyIsInBoeXNpY2FsSXRlbXMiLCJjYXJ0SXRlbXMiLCJmaWx0ZXIiLCJwYXJlbnRJZCIsImNhcnRJdGVtIiwiaXRlbVByb2R1Y3RJZCIsIml0ZW1WYXJpYW50SWQiLCJpdGVtUXR5IiwiZ0NhdGFsb2dJZCIsImJ5cGFzc19zdG9yZV9oYXNoIiwiYWxlcnQiLCIkY2FydElucHV0cyIsInNldFVwQWR2UXR5TXVsdGkiLCJiaW5kSW5wdXRFdmVudHMiLCJiaW5kQnV0dG9uRXZlbnRzIiwibXVsdGlDaGVjayIsIm11bHRpQ2hlY2tNc2ciLCJQYWdlTWFuYWdlciIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ1ZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJpbmRWYWxpZGF0aW9uIiwiYmluZFN0YXRlVmFsaWRhdGlvbiIsImJpbmRVUFNSYXRlcyIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjb3VudHJ5SWQiLCJpc05hTiIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiY29udGV4dCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsImlzIiwiVmFsaWRhdG9ycyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiYWRkQ2xhc3MiLCJjZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7Ozs7Ozs7O1NBQ2pCQyxPLEdBQUEsbUJBQVU7QUFDTixTQUFLQyxZQUFMLEdBQW9CQyw2Q0FBQyxDQUFDLHFCQUFELENBQXJCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkQsNkNBQUMsQ0FBQyxv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Q0FBQyx5QkFBRCxDQUFELENBQTZCaUUsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQUMsS0FBSyxFQUFJO0FBQzlDQSxXQUFLLENBQUNnQyxjQUFOO0FBRUFsRyxPQUFDLENBQUNrRSxLQUFLLENBQUMrQixhQUFQLENBQUQsQ0FBdUI3RixJQUF2QjtBQUNBc08seUJBQW1CLENBQUNELFdBQXBCLENBQWdDLGtCQUFoQztBQUNBek8sT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJnQyxJQUE3QjtBQUNILEtBTkQ7QUFTQWhDLEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCaUUsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQUMsS0FBSyxFQUFJO0FBQzlDQSxXQUFLLENBQUNnQyxjQUFOO0FBRUF3SSx5QkFBbUIsQ0FBQ1csUUFBcEIsQ0FBNkIsa0JBQTdCO0FBQ0FyUCxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QmdDLElBQTdCO0FBQ0FoQyxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkksSUFBN0I7QUFDSCxLQU5EO0FBT0gsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckxMO0FBQWUseUVBQVVrUCxJQUFWLEVBQWdCO0FBQzNCLE1BQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixXQUFPLEtBQVA7QUFDSCxHQUgwQixDQUszQjs7O0FBQ0EsU0FBTyxJQUFQO0FBQ0gsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBnaWZ0Q2VydENoZWNrIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgU2hpcHBpbmdFc3RpbWF0b3IgZnJvbSAnLi9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvcic7XG5cbmltcG9ydCB7XG4gICAgZGVmYXVsdE1vZGFsXG59IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9iMmIvY29uZmlnJztcbmltcG9ydCBBZHZRdWFudGl0eVV0aWwgZnJvbSAnLi9iMmIvY29tbW9uL2FkdlF1YW50aXR5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLiRjYXJ0Q29udGVudCA9ICQoJ1tkYXRhLWNhcnQtY29udGVudF0nKTtcbiAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzID0gJCgnW2RhdGEtY2FydC1zdGF0dXNdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRUb3RhbHMgPSAkKCdbZGF0YS1jYXJ0LXRvdGFsc10nKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnRdIC5sb2FkaW5nT3ZlcmxheScpXG4gICAgICAgICAgICAuaGlkZSgpOyAvLyBUT0RPOiB0ZW1wb3JhcnkgdW50aWwgcm9wZXIgcHVsbHMgaW4gaGlzIGNhcnQgY29tcG9uZW50c1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIGFkdiBxdWFudGl0eVxuICAgICAgICB0aGlzLmluaXRBZHZRdWFudGl0eSgpO1xuICAgIH1cblxuICAgIC8vIGFkZCBhZHYgcXVhbnRpdHlcbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBsZXQgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG5cblxuICAgICAgICBjb25zdCBhZHZRdWFudGl0eU1JbiA9IHBhcnNlSW50KCRlbC5hdHRyKCdkYXRhLWFkdi1taW4tcXR5JyksIDEwKSB8fCAxO1xuICAgICAgICBjb25zdCBhZHZRdWFudGl0eUluY3JlbWVudCA9IHBhcnNlSW50KCRlbC5hdHRyKCdkYXRhLWFkdi1pbmNyZW1lbnQtcXR5JyksIDEwKSB8fCAxO1xuXG4gICAgICAgIGxldCBuZXdRdHkgPSBvbGRRdHk7XG5cbiAgICAgICAgaWYgKCR0YXJnZXQuaGFzQ2xhc3MoJ2J1dHRvbicpKSB7XG4gICAgICAgICAgICBuZXdRdHkgPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJyA/IG9sZFF0eSArIGFkdlF1YW50aXR5SW5jcmVtZW50IDogb2xkUXR5IC0gYWR2UXVhbnRpdHlJbmNyZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdRdHkgPSBuZXdRdHkgPCAwID8gMCA6IG5ld1F0eTtcblxuXG4gICAgICAgIG1pblF0eSA9IEFkdlF1YW50aXR5VXRpbC5nZXRNaW5RdHkoYWR2UXVhbnRpdHlNSW4sIGFkdlF1YW50aXR5SW5jcmVtZW50KTtcblxuXG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKG5ld1F0eSAhPT0gMCAmJiBuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgIC8qcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1pbkVycm9yLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTsqL1xuXG4gICAgICAgICAgICBuZXdRdHkgPSBtaW5RdHk7XG4gICAgICAgICAgICAvKnN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGBUaGUgbWluaW11bSBwdXJjaGFzYWJsZSBxdWFudGl0eSBpcyAke21pblF0eX1gLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTsqL1xuXG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgIG5ld1F0eSA9IG1heFF0eTtcbiAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1heEVycm9yLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGludGVydmFsIHF0eVxuICAgICAgICBpZiAoKG5ld1F0eSAlIGFkdlF1YW50aXR5SW5jcmVtZW50KSAhPT0gMCkge1xuICAgICAgICAgICAgbmV3UXR5ID0gbmV3UXR5ICsgKGFkdlF1YW50aXR5SW5jcmVtZW50IC0gKG5ld1F0eSAlIGFkdlF1YW50aXR5SW5jcmVtZW50KSk7IC8vIGNvcnJlY3QgdGhlIHF1YW50aXR5IGZvciB0aGUgdXNlclxuXG4gICAgICAgICAgICAvKnN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGBQbGVhc2UgZW50ZXIgaW5jcmVtZW50cyBvZiAke2FkdlF1YW50aXR5SW5jcmVtZW50fS5gLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTsqL1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cobmV3UXR5KTtcblxuICAgICAgICBBZHZRdWFudGl0eVV0aWwudmFsaWRhdGVBZHZRdHkoJGVsKTtcblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcblxuXG4gICAgICAgICAgICAgICAgLy9mb3IgYnVuZGxlYjJiXG4gICAgICAgICAgICAgICAgaWYgKCFyZW1vdmUgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhdGFsb2dQcmljZShpdGVtSWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwcmVWYWwgIT09IG51bGwgPyBwcmVWYWwgOiBtaW5RdHk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChOdW1iZXIoJGVsLmF0dHIoJ3ZhbHVlJykpLCAxMCk7XG4gICAgICAgIGxldCBpbnZhbGlkRW50cnk7XG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKCFuZXdRdHkpIHtcbiAgICAgICAgICAgIGludmFsaWRFbnRyeSA9ICRlbC5hdHRyKCd2YWx1ZScpO1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGAke2ludmFsaWRFbnRyeX0gaXMgbm90IGEgdmFsaWQgZW50cnlgLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCkge1xuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5jb25maWd1cmVJbkNhcnQoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChvcHRpb24pO1xuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgICAgICBjb25zdCAkc3VibWl0ID0gJCgnaW5wdXQuYnV0dG9uJywgJGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcuYWxlcnRNZXNzYWdlQm94Jyk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gJCgnW25hbWU9XCJpdGVtX2lkXCJdJywgJGZvcm0pLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoaXRlbSwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdwLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaENvbnRlbnQocmVtb3ZlKSB7XG4gICAgICAgIGNvbnN0ICRjYXJ0SXRlbXNSb3dzID0gJCgnW2RhdGEtaXRlbS1yb3ddJywgdGhpcy4kY2FydENvbnRlbnQpO1xuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXG4gICAgICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2NhcnQvcGFnZS10aXRsZScsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcbiAgICAgICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgdGhpcy5pbml0QWR2UXVhbnRpdHkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZENhcnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGRlYm91bmNlVGltZW91dCA9IDQwMDtcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0UmVtb3ZlSXRlbSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGxldCBwcmVWYWw7XG5cbiAgICAgICAgLy8gY2FydCB1cGRhdGVcbiAgICAgICAgJCgnW2RhdGEtY2FydC11cGRhdGVdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxuICAgICAgICAgICAgY2FydFVwZGF0ZSgkdGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNhcnQgcXR5IG1hbnVhbGx5IHVwZGF0ZXNcbiAgICAgICAgJCgnLmNhcnQtaXRlbS1xdHktaW5wdXQnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2ZvY3VzJywgZnVuY3Rpb24gb25RdHlGb2N1cygpIHtcbiAgICAgICAgICAgIHByZVZhbCA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0pLmNoYW5nZShldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9ICQoJy5jb3Vwb24tY29kZScpO1xuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9ICQoJy5jb3Vwb24tZm9ybScpO1xuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKTtcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY29kZUlucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFnaWZ0Q2VydENoZWNrKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2hpcHBpbmcgZXN0aW1hdG9yIG1vZHVsZVxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSk7XG4gICAgfVxuXG4gICAgLy8gZm9yIGJ1bmRsZWIyYlxuICAgIC8vIGZvciBzaW1wbGUgcHJvZHVjdHNcbiAgICBnZXRWYXJpYW50SWRCeVByb2R1Y3RJZChwcm9kdWN0SWQpIHtcbiAgICAgICAgbGV0IHZhcmlhbnRJZDtcblxuICAgICAgICBpZiAodGhpcy5jYXRhbG9nX3Byb2R1Y3RzICYmIHRoaXMuY2F0YWxvZ19wcm9kdWN0c1twcm9kdWN0SWRdKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYW50U2t1cyA9IHRoaXMuY2F0YWxvZ19wcm9kdWN0c1twcm9kdWN0SWRdO1xuICAgICAgICAgICAgdmFyaWFudElkID0gdmFyaWFudFNrdXNbMF0udmFyaWFudF9pZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFyaWFudElkO1xuICAgIH1cblxuICAgIC8vIGZvciBidW5kbGViMmJcbiAgICBoYW5kbGVQaWNrTGlzdE9wdGlvbnMoY2FydEl0ZW1PYmosIGNiKSB7XG4gICAgICAgIGNvbnN0IGNhcnRJdGVtSWQgPSBjYXJ0SXRlbU9iai5pdGVtX2lkO1xuICAgICAgICBjb25zdCBwcm9kdWN0X2lkID0gY2FydEl0ZW1PYmoucHJvZHVjdF9pZDtcbiAgICAgICAgY29uc3QgdmFyaWFudF9pZCA9IGNhcnRJdGVtT2JqLnZhcmlhbnRfaWQ7XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChjYXJ0SXRlbUlkLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2IyYi9jb25maWd1cmUtcHJvZHVjdC1kYXRhJyxcbiAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRQaWNrTGlzdE9wdGlucyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gcmVzcG9uc2UuZGF0YS5vcHRpb25zO1xuXG5cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24ucGFydGlhbCA9PSBcInByb2R1Y3QtbGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBvcHRpb24udmFsdWVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9wdGlvblZhbHVlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uVmFsdWVzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvblZhbHVlLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGlja0xpc3RPcHRpbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbl9pZFwiOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbl92YWx1ZVwiOiBvcHRpb25WYWx1ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uX2RhdGFcIjogb3B0aW9uVmFsdWUuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUGlja0xpc3RPcHRpbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQaWNrTGlzdE9wdGlucykge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7Y29uZmlnLmFwaVJvb3RVcmx9L3Byb2R1Y3R2YXJpYW50cz9zdG9yZV9oYXNoPSR7Y29uZmlnLnN0b3JlSGFzaH0mcHJvZHVjdF9pZD0ke3Byb2R1Y3RfaWR9JnZhcmlhbnRfaWQ9JHt2YXJpYW50X2lkfWAsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHRyYXNfbGlzdCA9IFtdO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2VsZWN0ZWRQaWNrTGlzdE9wdGlucy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaG93Q3VzdG9tUHJpY2UgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5vcHRpb25fbGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZGF0YS5vcHRpb25fbGlzdDtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uSWQgPSBvcHRpb25zW2pdLm9wdGlvbl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tqXS5vcHRpb25fdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25JZCA9PSBzZWxlY3RlZFBpY2tMaXN0T3B0aW5zW2tdLm9wdGlvbl9pZCAmJiBvcHRpb25WYWx1ZSA9PSBzZWxlY3RlZFBpY2tMaXN0T3B0aW5zW2tdLm9wdGlvbl92YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDdXN0b21QcmljZSA9IGZhbHNlO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93Q3VzdG9tUHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhX3Byb2R1Y3RfaWQgPSBzZWxlY3RlZFBpY2tMaXN0T3B0aW5zW2tdLm9wdGlvbl9kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0cmFfdmFyaWFudF9pZCA9IHRoaXMuZ2V0VmFyaWFudElkQnlQcm9kdWN0SWQoZXh0cmFfcHJvZHVjdF9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFfdmFyaWFudF9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhc19saXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4dHJhX3Byb2R1Y3RfaWRcIjogZXh0cmFfcHJvZHVjdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHRyYV92YXJpYW50X2lkXCI6IGV4dHJhX3ZhcmlhbnRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFzX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXh0cmFfcHJvZHVjdF9pZFwiOiBleHRyYV9wcm9kdWN0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFzX2xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbU9iai5leHRyYXNfbGlzdCA9IF8uY2xvbmVEZWVwKGV4dHJhc19saXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgSlNPTi5zdHJpbmdpZnkoanFYSFIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy9mb3IgYnVuZGxlYjJiXG4gICAgdXBkYXRlQ2F0YWxvZ1ByaWNlKGNhcnRJdGVtSWQsIGNiKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIHVybDogXCIuLi9hcGkvc3RvcmVmcm9udC9jYXJ0c1wiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXJ0XCIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SWQgPSBkYXRhWzBdLmlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhcnRJZFwiLCBjYXJ0SWQpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGNhcnRJdGVtcyA9IGRhdGFbMF0ubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtc19hbGwgPSBkYXRhWzBdLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBjYXJ0SXRlbXNfYWxsLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wYXJlbnRJZCA9PSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRJdGVtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SXRlbSA9IGNhcnRJdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGNhcnRJdGVtLmlkO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJ0SXRlbUlkID09IGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Qcm9kdWN0SWQgPSBjYXJ0SXRlbS5wcm9kdWN0SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVZhcmlhbnRJZCA9IGNhcnRJdGVtLnZhcmlhbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtUXR5ID0gY2FydEl0ZW0ucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ0NhdGFsb2dJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjYXRhbG9nX2lkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FydEl0ZW1PYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbV9pZFwiOiBpdGVtSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdF9pZFwiOiBpdGVtUHJvZHVjdElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhcmlhbnRfaWRcIjogaXRlbVZhcmlhbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiBpdGVtUXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhdGFsb2dfaWRcIjogZ0NhdGFsb2dJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInB1dGRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1PYmopKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGlja0xpc3RPcHRpb25zKGNhcnRJdGVtT2JqLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHV0ZGF0YTJcIiwgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1PYmopKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBieXBhc3Nfc3RvcmVfaGFzaCA9IGAke2NvbmZpZy5zdG9yZUhhc2h9YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQVVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYCR7Y29uZmlnLmFwaVJvb3RVcmx9L2NhcnQ/c3RvcmVfaGFzaD0ke2J5cGFzc19zdG9yZV9oYXNofSZjYXJ0X2lkPSR7Y2FydElkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbU9iaiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIHByaWNlIGRvbmUuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwidXBkYXRlIGNhdGFsb2cgcHJpY2UgZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBKU09OLnN0cmluZ2lmeShqcVhIUikpO1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVGhlcmUgaGFzIHNvbWUgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4uXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBpbml0QWR2UXVhbnRpdHkoKSB7XG4gICAgICAgIGNvbnN0ICRjYXJ0SW5wdXRzID0gJChcIi5jYXJ0LWl0ZW0gLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsXCIpO1xuICAgICAgICBBZHZRdWFudGl0eVV0aWwuc2V0VXBBZHZRdHlNdWx0aSgkY2FydElucHV0cywge1xuICAgICAgICAgICAgYmluZElucHV0RXZlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGJpbmRCdXR0b25FdmVudHM6IGZhbHNlLFxuICAgICAgICAgICAgbXVsdGlDaGVjazogZmFsc2UsXG4gICAgICAgICAgICBtdWx0aUNoZWNrTXNnOiBcIlBsZWFzZSByZXZpZXcgeW91ciBjYXJ0LCBvbmUgb3IgbW9yZSBpdGVtcyBoYXZlIGFuIGludmFsaWQgcXVhbnRpdHkuXCJcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdFc3RpbWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5iaW5kRXN0aW1hdG9yRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IC5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXRgLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBjb3VudHJpZXMsIHRoZSBzdGF0ZS9yZWdpb24gaXMgZHluYW1pY1xuICAgICAgICAgICAgLy8gT25seSBwZXJmb3JtIGEgY2hlY2sgZm9yIGFsbCBmaWVsZHMgd2hlbiBjb3VudHJ5IGhhcyBhIHZhbHVlXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYXJlQWxsKCd2YWxpZCcpIHdpbGwgY2hlY2sgY291bnRyeSBmb3IgdmFsaWRpdHlcbiAgICAgICAgICAgIGlmICgkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWApLnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRVUFNSYXRlcygpO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlJZCA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudHJ5SWQgIT09IDAgJiYgIU51bWJlci5pc05hTihjb3VudHJ5SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnQ291bnRyeVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCksXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZVZhbCAmJiBlbGVWYWwubGVuZ3RoICYmIGVsZVZhbCAhPT0gJ1N0YXRlL3Byb3ZpbmNlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuZ2V0U3RhdHVzKHRoaXMuJHN0YXRlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZmllbGQuYXR0cigncGxhY2Vob2xkZXInLCAnU3RhdGUvcHJvdmluY2UnKTtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIHlvdSBjaGFuZ2UgYSBjb3VudHJ5LCB5b3Ugc3dhcCB0aGUgc3RhdGUvcHJvdmluY2UgYmV0d2VlbiBhbiBpbnB1dCBhbmQgYSBzZWxlY3QgZHJvcGRvd25cbiAgICAgICAgICAgIC8vIE5vdCBhbGwgY291bnRyaWVzIHJlcXVpcmUgdGhlIHByb3ZpbmNlIHRvIGJlIGZpbGxlZFxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZW1vdmUgdGhpcyBjbGFzcyB3aGVuIHdlIHN3YXAgc2luY2Ugbm9kIHZhbGlkYXRpb24gZG9lc24ndCBjbGVhbnVwIGZvciB1c1xuICAgICAgICAgICAgJCh0aGlzLnNoaXBwaW5nRXN0aW1hdG9yKS5maW5kKCcuZm9ybS1maWVsZC0tc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1zdWNjZXNzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFc3RpbWF0b3JFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XG5cbiAgICAgICAgJGVzdGltYXRvckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgc3RhdGVfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctc3RhdGVcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgY2l0eTogJCgnW25hbWU9XCJzaGlwcGluZy1jaXR5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIHppcF9jb2RlOiAkKCdbbmFtZT1cInNoaXBwaW5nLXppcFwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldFNoaXBwaW5nUXVvdGVzKHBhcmFtcywgJ2NhcnQvc2hpcHBpbmctcXVvdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuc2hpcHBpbmctcXVvdGVzJykuaHRtbChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGJpbmQgdGhlIHNlbGVjdCBidXR0b25cbiAgICAgICAgICAgICAgICAkKCcuc2VsZWN0LXNoaXBwaW5nLXF1b3RlJykub24oJ2NsaWNrJywgY2xpY2tFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlSWQgPSAkKCcuc2hpcHBpbmctcXVvdGU6Y2hlY2tlZCcpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5zdWJtaXRTaGlwcGluZ1F1b3RlKHF1b3RlSWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuc2hvdygpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==