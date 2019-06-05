(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");






function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }










var Account =
/*#__PURE__*/
function (_PageManager) {
  _inheritsLoose(Account, _PageManager);

  function Account(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }

  var _proto = Account.prototype;

  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]'); // Injected via template

    this.passwordRequirements = this.context.passwordRequirements; // Instantiates wish list JS

    _wishlist__WEBPACK_IMPORTED_MODULE_7__["default"].load(this.context);

    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);

      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }

    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);

      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }

    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }

    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }

    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }

    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }
  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */
  ;

  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;

    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });

      if (!submitForm) {
        event.preventDefault();
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__["default"])({
          text: _this2.context.selectItem,
          type: 'error'
        });
      }
    });
  };

  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_8__["default"])($addressForm);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: 'form[data-address-form] input[type="submit"]'
    });
    addressValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_9__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }

        if ($last) {
          addressValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setStateCountryValidation(addressValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();

      if (addressValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false; // Iterate until we find a non-zero value in the dropdown for quantity

      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true; // Exit out of loop if we found at least one return

          return true;
        }
      });

      if (formSubmit) {
        return true;
      }

      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__["default"])({
        text: errorMessage,
        type: 'error'
      });
      return event.preventDefault();
    });
  };

  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this3 = this;

    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_8__["default"])($paymentMethodForm);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]"
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_9__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }

      var $field = $(field);

      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }

      if ($last) {
        paymentMethodValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;
        _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setStateCountryValidation(paymentMethodValidator, field);
      } else {
        _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].cleanUpStateValidation(field);
      }
    }); // Use credit card number input listener to highlight credit card type

    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_11__["creditCardType"])(target.value);

      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    }); // Set of credit card validation

    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    }); // Set of credit card format

    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\""); // Billing address validation

    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault(); // Perform final form validation

      paymentMethodValidator.performCheck();

      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {}); // Assign country and state code


        var country = lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(_this3.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });

        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });

        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state; // Default Instrument

        data.default_instrument = !!data.default_instrument; // Store credit card

        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_11__["storeInstrument"])(_this3.context, data, function () {
          window.location.href = _this3.context.paymentMethodsUrl;
        }, function () {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__["default"])({
            text: _this3.context.generic_error,
            type: 'error'
          });
        });
      }
    });
  };

  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_8__["default"])($editAccountForm);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: '${formEditSelector} input[type="submit"]'
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector); // This only handles the custom fields, standard fields are added below

    editValidator.add(validationModel);

    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setEmailValidation(editValidator, emailSelector);
    }

    if ($passwordElement && $password2Element) {
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
    }

    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;

          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }

          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }

    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();

      if (editValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]'
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();

      if (inboxValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_5__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */

var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};
/**
 * Get credit card type from credit card number
 * @param {string} value
 */


var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(value), true);
};
/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */

var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
      shopperId = _ref.shopperId,
      storeHash = _ref.storeHash,
      vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
      credit_card_number = _ref2.credit_card_number,
      expiration = _ref2.expiration,
      name_on_card = _ref2.name_on_card,
      cvv = _ref2.cvv,
      default_instrument = _ref2.default_instrument,
      address1 = _ref2.address1,
      address2 = _ref2.address2,
      city = _ref2.city,
      postal_code = _ref2.postal_code,
      state_or_province_code = _ref2.state_or_province_code,
      country_code = _ref2.country_code,
      company = _ref2.company,
      first_name = _ref2.first_name,
      last_name = _ref2.last_name,
      email = _ref2.email,
      phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(target.value));
      });
    }
  },

  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
            which = _ref4.which;
        var refTarget = target;

        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvc3dlZXQtYWxlcnQuanMiXSwibmFtZXMiOlsiQWNjb3VudCIsImNvbnRleHQiLCIkc3RhdGUiLCIkIiwiJGJvZHkiLCJvblJlYWR5IiwiJGVkaXRBY2NvdW50Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsIiRhZGRyZXNzRm9ybSIsIiRpbmJveEZvcm0iLCIkYWNjb3VudFJldHVybkZvcm0iLCIkcGF5bWVudE1ldGhvZEZvcm0iLCIkcmVvcmRlckZvcm0iLCIkaW52b2ljZUJ1dHRvbiIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwiV2lzaGxpc3QiLCJsb2FkIiwibGVuZ3RoIiwicmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24iLCJpcyIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJvbiIsImxlZnQiLCJ3aW5kb3ciLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwidG9wIiwiYXZhaWxIZWlnaHQiLCJ1cmwiLCJkYXRhIiwib3BlbiIsImluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24iLCJyZWdpc3RlckluYm94VmFsaWRhdGlvbiIsImluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24iLCJpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uIiwiaW5pdFJlb3JkZXJGb3JtIiwiYmluZERlbGV0ZUFkZHJlc3MiLCJiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCIsImV2ZW50IiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwicHJldmVudERlZmF1bHQiLCIkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzIiwic3VibWl0Rm9ybSIsImZpbmQiLCJyZW1vdmUiLCJlYWNoIiwiaW5kZXgiLCJwcm9kdWN0Q2hlY2tib3giLCJwcm9kdWN0SWQiLCJ2YWwiLCIkaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwic3dhbCIsInRleHQiLCJzZWxlY3RJdGVtIiwidmFsaWRhdGlvbk1vZGVsIiwidmFsaWRhdGlvbiIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsImFkZCIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiZXJyIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsIlZhbGlkYXRvcnMiLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImVycm9yTWVzc2FnZSIsImZvcm1TdWJtaXQiLCJpIiwiZWxlIiwicGFyc2VJbnQiLCJhdHRyIiwiZmlyc3ROYW1lTGFiZWwiLCJsYXN0TmFtZUxhYmVsIiwiY29tcGFueUxhYmVsIiwicGhvbmVMYWJlbCIsImFkZHJlc3MxTGFiZWwiLCJhZGRyZXNzMkxhYmVsIiwiY2l0eUxhYmVsIiwiY291bnRyeUxhYmVsIiwiY2hvb3NlQ291bnRyeUxhYmVsIiwic3RhdGVMYWJlbCIsInBvc3RhbENvZGVMYWJlbCIsInBheW1lbnRNZXRob2RTZWxlY3RvciIsInBheW1lbnRNZXRob2RWYWxpZGF0b3IiLCJjYXJkVHlwZSIsInRhcmdldCIsImNyZWRpdENhcmRUeXBlIiwic2libGluZ3MiLCJjc3MiLCJDQ1ZhbGlkYXRvcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbiIsImNyZWRpdENhcmROdW1iZXIiLCJzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbiIsImV4cGlyYXRpb24iLCJzZXROYW1lT25DYXJkVmFsaWRhdGlvbiIsIm5hbWVPbkNhcmQiLCJzZXRDdnZWYWxpZGF0aW9uIiwiY3Z2IiwiQ0NGb3JtYXR0ZXJzIiwic2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdCIsInNldEV4cGlyYXRpb25Gb3JtYXQiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsIml0ZW0iLCJyZWZPYmoiLCJjb3VudHJ5IiwiY291bnRyaWVzIiwic3RhdGUiLCJzdGF0ZXMiLCJjb3VudHJ5X2NvZGUiLCJjb2RlIiwic3RhdGVfb3JfcHJvdmluY2VfY29kZSIsImRlZmF1bHRfaW5zdHJ1bWVudCIsInN0b3JlSW5zdHJ1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInBheW1lbnRNZXRob2RzVXJsIiwiZ2VuZXJpY19lcnJvciIsImZvcm1FZGl0U2VsZWN0b3IiLCJlZGl0VmFsaWRhdG9yIiwiZW1haWxTZWxlY3RvciIsIiRlbWFpbEVsZW1lbnQiLCJwYXNzd29yZFNlbGVjdG9yIiwiJHBhc3N3b3JkRWxlbWVudCIsInBhc3N3b3JkMlNlbGVjdG9yIiwiJHBhc3N3b3JkMkVsZW1lbnQiLCJjdXJyZW50UGFzc3dvcmRTZWxlY3RvciIsIiRjdXJyZW50UGFzc3dvcmQiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJjdXJyZW50UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImluYm94VmFsaWRhdG9yIiwiTnVtYmVyIiwiZW50ZXJPcmRlck51bSIsImVudGVyU3ViamVjdCIsImVudGVyTWVzc2FnZSIsIlBhZ2VNYW5hZ2VyIiwib21pdE51bGxTdHJpbmciLCJrZXkiLCJjcmVkaXRjYXJkcyIsImNhcmQiLCJwYXJzZSIsImRvbmUiLCJmYWlsIiwicGF5bWVudHNVcmwiLCJzaG9wcGVySWQiLCJzdG9yZUhhc2giLCJ2YXVsdFRva2VuIiwicHJvdmlkZXJfaWQiLCJjcmVkaXRfY2FyZF9udW1iZXIiLCJuYW1lX29uX2NhcmQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInBvc3RhbF9jb2RlIiwiY29tcGFueSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBob25lIiwiZXhwaXJ5Iiwic3BsaXQiLCJhamF4IiwiZGF0YVR5cGUiLCJtZXRob2QiLCJjYWNoZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsImluc3RydW1lbnQiLCJjYXJkaG9sZGVyX25hbWUiLCJudW1iZXIiLCJleHBpcnlfbW9udGgiLCJtb250aCIsImV4cGlyeV95ZWFyIiwieWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsImJpbGxpbmdfYWRkcmVzcyIsIkZvcm1hdHRlcnMiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwic3dlZXRBbGVydCIsInNldERlZmF1bHRzIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uQ2xhc3MiLCJjYW5jZWxCdXR0b25DbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7QUFDakIsbUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsb0NBQU1BLE9BQU47QUFFQSxVQUFLQyxNQUFMLEdBQWNDLENBQUMsQ0FBQywyQkFBRCxDQUFmO0FBQ0EsVUFBS0MsS0FBTCxHQUFhRCxDQUFDLENBQUMsTUFBRCxDQUFkO0FBSmlCO0FBS3BCOzs7O1NBRURFLE8sR0FBQSxtQkFBVTtBQUNOLFFBQU1DLGdCQUFnQixHQUFHQyx3RUFBWSxDQUFDLDhCQUFELENBQXJDO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRCx3RUFBWSxDQUFDLHlCQUFELENBQWpDO0FBQ0EsUUFBTUUsVUFBVSxHQUFHRix3RUFBWSxDQUFDLHVCQUFELENBQS9CO0FBQ0EsUUFBTUcsa0JBQWtCLEdBQUdILHdFQUFZLENBQUMsNEJBQUQsQ0FBdkM7QUFDQSxRQUFNSSxrQkFBa0IsR0FBR0osd0VBQVksQ0FBQyxn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ZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBXaXNobGlzdCBmcm9tICcuL3dpc2hsaXN0JztcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vY29tbW9uL2Zvcm0tdmFsaWRhdGlvbic7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtLCBWYWxpZGF0b3JzLCBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH0gZnJvbSAnLi9jb21tb24vZm9ybS11dGlscyc7XG5pbXBvcnQgeyBjcmVkaXRDYXJkVHlwZSwgc3RvcmVJbnN0cnVtZW50LCBWYWxpZGF0b3JzIGFzIENDVmFsaWRhdG9ycywgRm9ybWF0dGVycyBhcyBDQ0Zvcm1hdHRlcnMgfSBmcm9tICcuL2NvbW1vbi9wYXltZW50LW1ldGhvZCc7XG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRlZGl0QWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFkZHJlc3NGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFjY291bnRSZXR1cm5Gb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJldHVybi1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcGF5bWVudE1ldGhvZEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW52b2ljZUJ1dHRvbiA9ICQoJ1tkYXRhLXByaW50LWludm9pY2VdJyk7XG5cbiAgICAgICAgLy8gSW5qZWN0ZWQgdmlhIHRlbXBsYXRlXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XG5cbiAgICAgICAgLy8gSW5zdGFudGlhdGVzIHdpc2ggbGlzdCBKU1xuICAgICAgICBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCRlZGl0QWNjb3VudEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGludm9pY2VCdXR0b24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkaW52b2ljZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCAvIDIgLSA0NTA7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCAvIDIgLSAzMjA7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJGludm9pY2VCdXR0b24uZGF0YSgncHJpbnRJbnZvaWNlJyk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdvcmRlckludm9pY2UnLCBgd2lkdGg9OTAwLGhlaWdodD02NTAsbGVmdD0ke2xlZnR9LHRvcD0ke3RvcH0sc2Nyb2xsYmFycz0xYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkcmVzc0Zvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGluYm94Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFjY291bnRSZXR1cm5Gb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBheW1lbnRNZXRob2RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHJlb3JkZXJGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZUFkZHJlc3MoKTtcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgc3VibWl0IGhvb2sgdG8gZW5zdXJlIHRoZSBjdXN0b21lciByZWNlaXZlcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgYmVmb3JlIGRlbGV0aW5nIGFuIGFkZHJlc3NcbiAgICAgKi9cbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLWFkZHJlc3NdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmREZWxldGVQYXltZW50TWV0aG9kKCkge1xuICAgICAgICAkKCdbZGF0YS1kZWxldGUtcGF5bWVudC1tZXRob2RdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZVBheW1lbnRNZXRob2QnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzID0gJCgnLmFjY291bnQtbGlzdEl0ZW0gLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcblxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LnNlbGVjdEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcbiAgICAgICAgY29uc3Qgc3RhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChzdGF0ZVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGFkZHJlc3NWYWxpZGF0b3IsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGFkZHJlc3NGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICRhY2NvdW50UmV0dXJuRm9ybS5kYXRhKCdhY2NvdW50UmV0dXJuRm9ybUVycm9yJyk7XG5cbiAgICAgICAgJGFjY291bnRSZXR1cm5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHVudGlsIHdlIGZpbmQgYSBub24temVybyB2YWx1ZSBpbiB0aGUgZHJvcGRvd24gZm9yIHF1YW50aXR5XG4gICAgICAgICAgICAkKCdbbmFtZV49XCJyZXR1cm5fcXR5XCJdJywgJGFjY291bnRSZXR1cm5Gb3JtKS5lYWNoKChpLCBlbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJChlbGUpLnZhbCgpLCAxMCkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVN1Ym1pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBvdXQgb2YgbG9vcCBpZiB3ZSBmb3VuZCBhdCBsZWFzdCBvbmUgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZm9ybVN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pIHtcbiAgICAgICAgLy8gSW5qZWN0IHZhbGlkYXRpb25zIGludG8gZm9ybSBmaWVsZHMgYmVmb3JlIHZhbGlkYXRpb24gcnVuc1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2ZpcnN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmZpcnN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2xhc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQubGFzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb21wYW55LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb21wYW55TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bob25lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5waG9uZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczFMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMi5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczJMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY2l0eS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY2l0eUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvdW50cnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZXNlbGVjdFwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY291bnRyeUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIHByZWZpeDogXCIke3RoaXMuY29udGV4dC5jaG9vc2VDb3VudHJ5TGFiZWx9XCIgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3N0YXRlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5zdGF0ZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bvc3RhbF9jb2RlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5wb3N0YWxDb2RlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kU2VsZWN0b3IgPSAnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJztcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFZhbGlkYXRvciA9IG5vZCh7IHN1Ym1pdDogYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCB9KTtcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl1gKTtcblxuICAgICAgICBsZXQgJGxhc3Q7XG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGZpZWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXNlIGNyZWRpdCBjYXJkIG51bWJlciBpbnB1dCBsaXN0ZW5lciB0byBoaWdobGlnaHQgY3JlZGl0IGNhcmQgdHlwZVxuICAgICAgICBsZXQgY2FyZFR5cGU7XG4gICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIGNhcmRUeXBlID0gY3JlZGl0Q2FyZFR5cGUodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChjYXJkVHlwZSkge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdbYWx0PVwiJHtjYXJkVHlwZX1cImApLnNpYmxpbmdzKCkuY3NzKCdvcGFjaXR5JywgJy4yJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgdmFsaWRhdGlvblxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCwgdGhpcy5jb250ZXh0LmNyZWRpdENhcmROdW1iZXIpO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0RXhwaXJhdGlvblZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWAsIHRoaXMuY29udGV4dC5leHBpcmF0aW9uKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldE5hbWVPbkNhcmRWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIm5hbWVfb25fY2FyZFwiXWAsIHRoaXMuY29udGV4dC5uYW1lT25DYXJkKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEN2dlZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3Z2XCJdYCwgdGhpcy5jb250ZXh0LmN2diwgKCkgPT4gY2FyZFR5cGUpO1xuXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCBmb3JtYXRcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldENyZWRpdENhcmROdW1iZXJGb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCk7XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRFeHBpcmF0aW9uRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cImApO1xuXG4gICAgICAgIC8vIEJpbGxpbmcgYWRkcmVzcyB2YWxpZGF0aW9uXG4gICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gUGVyZm9ybSBmaW5hbCBmb3JtIHZhbGlkYXRpb25cbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXJpYWxpemUgZm9ybSBkYXRhIGFuZCByZWR1Y2UgaXQgdG8gb2JqZWN0XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IF8ucmVkdWNlKCRwYXltZW50TWV0aG9kRm9ybS5zZXJpYWxpemVBcnJheSgpLCAob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcbiAgICAgICAgICAgICAgICAgICAgcmVmT2JqW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmT2JqO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBjb3VudHJ5IGFuZCBzdGF0ZSBjb2RlXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IF8uZmluZCh0aGlzLmNvbnRleHQuY291bnRyaWVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5jb3VudHJ5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvdW50cnkgJiYgXy5maW5kKGNvdW50cnkuc3RhdGVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5X2NvZGUgPSBjb3VudHJ5ID8gY291bnRyeS5jb2RlIDogZGF0YS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgIGRhdGEuc3RhdGVfb3JfcHJvdmluY2VfY29kZSA9IHN0YXRlID8gc3RhdGUuY29kZSA6IGRhdGEuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEluc3RydW1lbnRcbiAgICAgICAgICAgICAgICBkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudCA9ICEhZGF0YS5kZWZhdWx0X2luc3RydW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBjcmVkaXQgY2FyZFxuICAgICAgICAgICAgICAgIHN0b3JlSW5zdHJ1bWVudCh0aGlzLmNvbnRleHQsIGRhdGEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNvbnRleHQucGF5bWVudE1ldGhvZHNVcmw7XG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5nZW5lcmljX2Vycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybUVkaXRTZWxlY3RvciA9ICdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJztcbiAgICAgICAgY29uc3QgZWRpdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJFbWFpbEFkZHJlc3NcIl1gO1xuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDb25maXJtUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDdXJyZW50UGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkY3VycmVudFBhc3N3b3JkID0gJChjdXJyZW50UGFzc3dvcmRTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gVGhpcyBvbmx5IGhhbmRsZXMgdGhlIGN1c3RvbSBmaWVsZHMsIHN0YW5kYXJkIGZpZWxkcyBhcmUgYWRkZWQgYmVsb3dcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihlZGl0VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjdXJyZW50UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogY3VycmVudFBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnICYmICRwYXNzd29yZEVsZW1lbnQudmFsKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9maXJzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZpcnN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfbGFzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0Lmxhc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGVkaXRBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGVkaXRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKSB7XG4gICAgICAgIGNvbnN0IGluYm94VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBzZWxlY3RbbmFtZT1cIm1lc3NhZ2Vfb3JkZXJfaWRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBOdW1iZXIodmFsKSAhPT0gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJPcmRlck51bSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbbmFtZT1cIm1lc3NhZ2Vfc3ViamVjdFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyU3ViamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gdGV4dGFyZWFbbmFtZT1cIm1lc3NhZ2VfY29udGVudFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyTWVzc2FnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGluYm94VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgY3JlZGl0Y2FyZHMgZnJvbSAnY3JlZGl0Y2FyZHMnO1xuXG4vKipcbiAqIE9taXQgbnVsbCBvciBlbXB0eSBzdHJpbmcgcHJvcGVydGllcyBvZiBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IG9taXROdWxsU3RyaW5nID0gb2JqID0+IHtcbiAgICBjb25zdCByZWZPYmogPSBvYmo7XG5cbiAgICAkLmVhY2gocmVmT2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgcmVmT2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWZPYmo7XG59O1xuXG4vKipcbiAqIEdldCBjcmVkaXQgY2FyZCB0eXBlIGZyb20gY3JlZGl0IGNhcmQgbnVtYmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWRpdENhcmRUeXBlID0gdmFsdWUgPT4gY3JlZGl0Y2FyZHMuY2FyZC50eXBlKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsdWUpLCB0cnVlKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhamF4IHJlcXVlc3QgdG8gc3RvcmUgYSBuZXcgaW5zdHJ1bWVudCBpbiBiaWdwYXlcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgaGVhZGVyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGJvZHlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZhaWwgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHVuc3VjY2Vzc2Z1bCByZXNwb25zZVxuICovXG5leHBvcnQgY29uc3Qgc3RvcmVJbnN0cnVtZW50ID0gKHtcbiAgICAvLyBIb3N0bmFtZSwgSWRzICYgVG9rZW5cbiAgICBwYXltZW50c1VybCxcbiAgICBzaG9wcGVySWQsXG4gICAgc3RvcmVIYXNoLFxuICAgIHZhdWx0VG9rZW4sXG59LCB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAvLyBQcm92aWRlciBOYW1lXG4gICAgcHJvdmlkZXJfaWQsXG5cbiAgICAvLyBJbnN0cnVtZW50IERldGFpbHNcbiAgICBjcmVkaXRfY2FyZF9udW1iZXIsXG4gICAgZXhwaXJhdGlvbixcbiAgICBuYW1lX29uX2NhcmQsXG4gICAgY3Z2LFxuICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcblxuICAgIC8vIEJpbGxpbmcgQWRkcmVzc1xuICAgIGFkZHJlc3MxLFxuICAgIGFkZHJlc3MyLFxuICAgIGNpdHksXG4gICAgcG9zdGFsX2NvZGUsXG4gICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcbiAgICBjb3VudHJ5X2NvZGUsXG4gICAgY29tcGFueSxcbiAgICBmaXJzdF9uYW1lLFxuICAgIGxhc3RfbmFtZSxcbiAgICBlbWFpbCxcbiAgICBwaG9uZSxcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG59LCBkb25lLCBmYWlsKSA9PiB7XG4gICAgY29uc3QgZXhwaXJ5ID0gZXhwaXJhdGlvbi5zcGxpdCgnLycpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgJHtwYXltZW50c1VybH0vc3RvcmVzLyR7c3RvcmVIYXNofS9jdXN0b21lcnMvJHtzaG9wcGVySWR9L3N0b3JlZF9pbnN0cnVtZW50c2AsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHZhdWx0VG9rZW4sXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaW5zdHJ1bWVudDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjYXJkJyxcbiAgICAgICAgICAgICAgICBjYXJkaG9sZGVyX25hbWU6IG5hbWVfb25fY2FyZCxcbiAgICAgICAgICAgICAgICBudW1iZXI6IGNyZWRpdGNhcmRzLmNhcmQucGFyc2UoY3JlZGl0X2NhcmRfbnVtYmVyKSxcbiAgICAgICAgICAgICAgICBleHBpcnlfbW9udGg6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSxcbiAgICAgICAgICAgICAgICBleHBpcnlfeWVhcjogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX3ZhbHVlOiBjdnYsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmlsbGluZ19hZGRyZXNzOiBvbWl0TnVsbFN0cmluZyh7XG4gICAgICAgICAgICAgICAgYWRkcmVzczEsXG4gICAgICAgICAgICAgICAgYWRkcmVzczIsXG4gICAgICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxuICAgICAgICAgICAgICAgIGNvdW50cnlfY29kZSxcbiAgICAgICAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwcm92aWRlcl9pZCxcbiAgICAgICAgICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICAgICAgLmRvbmUoZG9uZSlcbiAgICAgICAgLmZhaWwoZmFpbCk7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybWF0dGVycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gY3JlZGl0Y2FyZHMuY2FyZC5mb3JtYXQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh0YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25Gb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQsIHdoaWNoIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHdoaWNoID09PSA4ICYmIC8uKihcXC8pJC8udGVzdCh0YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQudmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCAhPT0gOCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFsxLTldXFwvfFsyLTldKSQvZywgJzAkMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkkL2csICckMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzAtMV0pKFszLTldKSQvZywgJzAkMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKShbMC05XXsyfSkkL2csICckMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMF0rKVxcL3xbMF0rJC9nLCAnMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXGRcXC9dfF5bXFwvXSokL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmNhcmQuaXNWYWxpZChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gdmFsLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIC9eKDBbMS05XXwxWzAtMl0pXFwvKFswLTldezJ9KSQvLnRlc3QodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmICFjcmVkaXRjYXJkcy5leHBpcmF0aW9uLmlzUGFzdChjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksIGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIG5hbWUgb24gY2FyZFxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICEhdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGN2dlxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICogQHBhcmFtIHthbnl9IGNhcmRUeXBlIFRoZSBjcmVkaXQgY2FyZCBudW1iZXIgdHlwZVxuICAgICAqL1xuICAgIHNldEN2dlZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UsIGNhcmRUeXBlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNhcmRUeXBlID09PSAnZnVuY3Rpb24nID8gY2FyZFR5cGUoKSA6IGNhcmRUeXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmN2Yy5pc1ZhbGlkKHZhbCwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgc3dlZXRBbGVydCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbi8vIFNldCBkZWZhdWx0cyBmb3Igc3dlZXRhbGVydDIgcG9wdXAgYm94ZXNcbnN3ZWV0QWxlcnQuc2V0RGVmYXVsdHMoe1xuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICBjb25maXJtQnV0dG9uQ2xhc3M6ICdidXR0b24nLFxuICAgIGNhbmNlbEJ1dHRvbkNsYXNzOiAnYnV0dG9uJyxcbn0pO1xuXG4vLyBSZS1leHBvcnRcbmV4cG9ydCBkZWZhdWx0IHN3ZWV0QWxlcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9