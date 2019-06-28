(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./b2b/common/advQuantity */ "./assets/js/theme/b2b/common/advQuantity.js");






function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }













var Search =
/*#__PURE__*/
function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);

  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;

    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };

    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }

    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }

    return nodeData;
  };

  _proto.showProducts = function showProducts() {
    var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].replaceParams(window.location.href, {
      section: 'product'
    });
    this.$productListingContainer.removeClass('u-hiddenVisually');
    this.$facetedSearchContainer.removeClass('u-hiddenVisually');
    this.$contentResultsContainer.addClass('u-hiddenVisually');
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-content-results-toggle]').addClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-product-results-toggle]').removeClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-product-results-toggle]').addClass('navBar-action-color--active');
    _common_url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url);
  };

  _proto.showContent = function showContent() {
    var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].replaceParams(window.location.href, {
      section: 'content'
    });
    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-product-results-toggle]').addClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-content-results-toggle]').removeClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-content-results-toggle]').addClass('navBar-action-color--active');
    _common_url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url);
  };

  _proto.onReady = function onReady() {
    var _this2 = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context.urls);
    var $searchForm = jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_10___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#product-listing-container');
    this.$facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#faceted-search-container');
    this.$contentResultsContainer = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#search-results-content'); // Init faceted search

    if (jquery__WEBPACK_IMPORTED_MODULE_7___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    } // Init collapsibles


    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_12__["default"])();
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showProducts();
    });
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showContent();
    });

    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent();
    } else {
      this.showProducts();
    } // const validator = this.initValidation($searchForm)
    //     .bindValidation($searchForm.find('#'));


    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

      if (!validator.check()) {
        return event.preventDefault();
      }

      $searchForm.find('input[name="category\[\]"]').remove();

      for (var _iterator = selectedCategoryIds, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var categoryId = _ref;
        var input = jquery__WEBPACK_IMPORTED_MODULE_7___default()('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    }); //for b2b user

    if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(".body").addClass("b2b-products");
      this.handleCatalogProducts();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(".navList-item .product-count").show();
    }
  };

  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;

    jquery__WEBPACK_IMPORTED_MODULE_7___default.a.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };

  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;

    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;

    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#product-listing-container');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#faceted-search-container');
    var $searchHeading = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#search-results-heading');
    var $searchCount = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#search-results-product-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_8__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $searchHeading.html(content.heading);
      $searchCount.html(content.productCount);

      if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
        //for b2b user
        _this5.handleCatalogProducts();
      } else {
        //for non b2b user
        jquery__WEBPACK_IMPORTED_MODULE_7___default()(".navList-item .product-count").show();
      }

      jquery__WEBPACK_IMPORTED_MODULE_7___default()('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };

  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_14__["default"])({
      submit: $form
    });
    return this;
  };

  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }

    return this;
  };

  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }

    return false;
  } //for b2b
  ;

  _proto.handleCatalogProducts = function handleCatalogProducts() {
    var catalog_products = JSON.parse(sessionStorage.getItem("catalog_products"));
    var products = jquery__WEBPACK_IMPORTED_MODULE_7___default()(".product");

    for (var product_id in catalog_products) {
      var productSelector = "[catalog-product-" + product_id + "]";

      if (jquery__WEBPACK_IMPORTED_MODULE_7___default()("" + productSelector).length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()("" + productSelector).attr("catalog-product", "true");
        var base_price = jquery__WEBPACK_IMPORTED_MODULE_7___default()("" + productSelector).find(".price.price--withTax").text().replace("$", "").replace(",", "") || jquery__WEBPACK_IMPORTED_MODULE_7___default()("" + productSelector).find(".price.price--withoutTax").text().replace("$", "").replace(",", "");
        var tier_price = void 0;
        var catalog_price = void 0;
        var variantArr = catalog_products[product_id] || [];

        if (variantArr.length == 1) {
          tier_price = variantArr[0].tier_price || [];
          catalog_price = this.getCatalogPrice(base_price, tier_price, 1);
        }

        if (catalog_price) {
          jquery__WEBPACK_IMPORTED_MODULE_7___default()("" + productSelector).find(".price.price--withoutTax").text("$" + parseFloat(catalog_price).toFixed(2));
          jquery__WEBPACK_IMPORTED_MODULE_7___default()("" + productSelector).find(".price.price--withTax").text("$" + parseFloat(catalog_price).toFixed(2));
        }
      }
    } //product Gallery, for listing page


    var $productGallery = jquery__WEBPACK_IMPORTED_MODULE_7___default()("[b2b-products-gallery]");
    $productGallery.each(function () {
      var catalogProductCount = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).find("[catalog-product]").length;

      if (catalogProductCount == 0) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()("[catalog-listing-wrap]").show();
        jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).parents(".page").html("We can't find products matching the selection.");
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()("[catalog-listing-wrap]").show();
        var $catalogProductCounter = jquery__WEBPACK_IMPORTED_MODULE_7___default()("[data-catalog-product-counter]");

        if ($catalogProductCounter.length > 0) {
          $catalogProductCounter.text(catalogProductCount);
        }
      }
    });
  } //for bundleb2b
  ;

  _proto.getCatalogPrice = function getCatalogPrice(base_price, tier_price_array, qty) {
    //let tier_price = base_price;
    var tier_price = base_price;

    for (var j = 0; j < tier_price_array.length; j++) {
      var type = tier_price_array[j].type;
      var base_qty = tier_price_array[j].qty;
      var price = tier_price_array[j].price;

      if (qty >= base_qty) {
        if (type == "fixed") {
          tier_price = price;
        } else {
          tier_price = base_price - base_price * price / 100;
        }
      }
    }

    return tier_price;
  };

  _proto.initAdvqty = function initAdvqty() {
    _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_15__["default"].initListingCardAction();
    var $advQtyInputs = jquery__WEBPACK_IMPORTED_MODULE_7___default()("[advqty-card-actions] [advqty-card-input]");
    _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_15__["default"].setUpAdvQtyMulti($advQtyInputs, {
      bindInputEvents: true,
      bindButtonEvents: true,
      tips: true
    }, function () {
      $advQtyInputs.each(function (l_idx, l_item) {
        var $input = jquery__WEBPACK_IMPORTED_MODULE_7___default()(l_item);
        _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_15__["default"].handleQuantityChange(null, $input, true);
      });
    });
  };

  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwidXJsIiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VjdGlvbiIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJnb1RvVXJsIiwic2hvd0NvbnRlbnQiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkc2VhcmNoRm9ybSIsIiRjYXRlZ29yeVRyZWVDb250YWluZXIiLCJmaW5kIiwiVXJsIiwicGFyc2UiLCJ0cmVlRGF0YSIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJxdWVyeSIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiY2F0ZWdvcnlJZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUNhdGFsb2dQcm9kdWN0cyIsInNob3ciLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJkb25lIiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJoZWFkaW5nIiwicHJvZHVjdENvdW50IiwiY29uZmlnIiwicHJvZHVjdF9yZXN1bHRzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiJGZvcm0iLCJub2QiLCJzdWJtaXQiLCIkZWxlbWVudCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJjYXRhbG9nX3Byb2R1Y3RzIiwiSlNPTiIsInByb2R1Y3RzIiwicHJvZHVjdF9pZCIsInByb2R1Y3RTZWxlY3RvciIsImF0dHIiLCJiYXNlX3ByaWNlIiwicmVwbGFjZSIsInRpZXJfcHJpY2UiLCJjYXRhbG9nX3ByaWNlIiwidmFyaWFudEFyciIsImdldENhdGFsb2dQcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiJHByb2R1Y3RHYWxsZXJ5IiwiZWFjaCIsImNhdGFsb2dQcm9kdWN0Q291bnQiLCJwYXJlbnRzIiwiJGNhdGFsb2dQcm9kdWN0Q291bnRlciIsInRpZXJfcHJpY2VfYXJyYXkiLCJxdHkiLCJqIiwiYmFzZV9xdHkiLCJwcmljZSIsImluaXRBZHZxdHkiLCJBZHZRdWFudGl0eVV0aWwiLCJpbml0TGlzdGluZ0NhcmRBY3Rpb24iLCIkYWR2UXR5SW5wdXRzIiwic2V0VXBBZHZRdHlNdWx0aSIsImJpbmRJbnB1dEV2ZW50cyIsImJpbmRCdXR0b25FdmVudHMiLCJ0aXBzIiwibF9pZHgiLCJsX2l0ZW0iLCIkaW5wdXQiLCJoYW5kbGVRdWFudGl0eUNoYW5nZSIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7OztTQUNqQkMsMkIsR0FBQSxxQ0FBNEJDLElBQTVCLEVBQWtDO0FBQUE7O0FBQzlCLFFBQU1DLFFBQVEsR0FBRztBQUNiQyxVQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFERTtBQUViQyxRQUFFLEVBQUVKLElBQUksQ0FBQ0ssUUFBTCxDQUFjRCxFQUZMO0FBR2JFLFdBQUssRUFBRTtBQUNIQyxnQkFBUSxFQUFFUCxJQUFJLENBQUNPO0FBRFo7QUFITSxLQUFqQjs7QUFRQSxRQUFJUCxJQUFJLENBQUNNLEtBQVQsRUFBZ0I7QUFDWkwsY0FBUSxDQUFDSyxLQUFULENBQWVFLE1BQWYsR0FBd0JSLElBQUksQ0FBQ00sS0FBTCxLQUFlLE1BQXZDO0FBQ0FMLGNBQVEsQ0FBQ1EsUUFBVCxHQUFvQixJQUFwQjtBQUNIOztBQUVELFFBQUlULElBQUksQ0FBQ1MsUUFBVCxFQUFtQjtBQUNmUixjQUFRLENBQUNRLFFBQVQsR0FBb0IsRUFBcEI7QUFDQVQsVUFBSSxDQUFDUyxRQUFMLENBQWNDLE9BQWQsQ0FBc0IsVUFBQ0MsU0FBRCxFQUFlO0FBQ2pDVixnQkFBUSxDQUFDUSxRQUFULENBQWtCRyxJQUFsQixDQUF1QixLQUFJLENBQUNi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QWhCLENBQW9COUUsSUFBakM7QUFDQSxVQUFNK0UsUUFBUSxHQUFHSCxnQkFBZ0IsQ0FBQ0UsQ0FBRCxDQUFoQixDQUFvQkQsR0FBckM7QUFDQSxVQUFNRyxLQUFLLEdBQUdKLGdCQUFnQixDQUFDRSxDQUFELENBQWhCLENBQW9CRSxLQUFsQzs7QUFFQSxVQUFJSCxHQUFHLElBQUlFLFFBQVgsRUFBcUI7QUFDakIsWUFBSS9FLElBQUksSUFBSSxPQUFaLEVBQXFCO0FBQ2pCaUUsb0JBQVUsR0FBR2UsS0FBYjtBQUVILFNBSEQsTUFHTztBQUNIZixvQkFBVSxHQUFHRixVQUFVLEdBQUdBLFVBQVUsR0FBR2lCLEtBQWIsR0FBcUIsR0FBL0M7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsV0FBT2YsVUFBUDtBQUNILEc7O1NBRURnQixVLEdBQUEsc0JBQWE7QUFDVEMsb0VBQWUsQ0FBQ0MscUJBQWhCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHeEgsNkNBQUMsQ0FBQywyQ0FBRCxDQUF2QjtBQUNBc0gsb0VBQWUsQ0FBQ0csZ0JBQWhCLENBQWlDRCxhQUFqQyxFQUFnRDtBQUM1Q0UscUJBQWUsRUFBRSxJQUQyQjtBQUU1Q0Msc0JBQWdCLEVBQUUsSUFGMEI7QUFHNUNDLFVBQUksRUFBRTtBQUhzQyxLQUFoRCxFQUlHLFlBQU07QUFDTEosbUJBQWEsQ0FBQ1osSUFBZCxDQUFtQixVQUFDaUIsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2xDLFlBQU1DLE1BQU0sR0FBRy9ILDZDQUFDLENBQUM4SCxNQUFELENBQWhCO0FBQ0FSLHdFQUFlLENBQUNVLG9CQUFoQixDQUFxQyxJQUFyQyxFQUEyQ0QsTUFBM0MsRUFBbUQsSUFBbkQ7QUFDSCxPQUhEO0FBSUgsS0FURDtBQVVILEc7OztFQWhWK0JFLGdEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgaG9va3Ncbn0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgJ2pzdHJlZSc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgQWR2UXVhbnRpdHlVdGlsIGZyb20gJy4vYjJiL2NvbW1vbi9hZHZRdWFudGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgICBzZWN0aW9uOiAncHJvZHVjdCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIHNob3dDb250ZW50KCkge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgICBzZWN0aW9uOiAnY29udGVudCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCAkc2VhcmNoRm9ybSA9ICQoJ1tkYXRhLWFkdmFuY2VkLXNlYXJjaC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyID0gJHNlYXJjaEZvcm0uZmluZCgnW2RhdGEtc2VhcmNoLWNhdGVnb3J5LXRyZWVdJyk7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHRyZWVEYXRhID0gW107XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xuXG4gICAgICAgIC8vIEluaXQgZmFjZXRlZCBzZWFyY2hcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCdsaS5wcm9kdWN0JykubGVuZ3RoID09PSAwIHx8IHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxuICAgICAgICAvLyAgICAgLmJpbmRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtLmZpbmQoJyMnKSk7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnIycpKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuY2F0ZWdvcnlUcmVlLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRyZWVEYXRhLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNhdGVnb3J5VHJlZURhdGEgPSB0cmVlRGF0YTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeVRyZWUoJGNhdGVnb3J5VHJlZUNvbnRhaW5lcik7XG5cbiAgICAgICAgJHNlYXJjaEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyLmpzdHJlZSgpLmdldF9zZWxlY3RlZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRvci5jaGVjaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzZWFyY2hGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjYXRlZ29yeVxcW1xcXVwiXScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhdGVnb3J5SWQgb2Ygc2VsZWN0ZWRDYXRlZ29yeUlkcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yeVtdJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkc2VhcmNoRm9ybS5hcHBlbmQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2ZvciBiMmIgdXNlclxuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgJChcIi5ib2R5XCIpLmFkZENsYXNzKFwiYjJiLXByb2R1Y3RzXCIpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDYXRhbG9nUHJvZHVjdHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIubmF2TGlzdC1pdGVtIC5wcm9kdWN0LWNvdW50XCIpLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbG9hZFRyZWVOb2Rlcyhub2RlLCBjYikge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL3JlbW90ZS92MS9jYXRlZ29yeS10cmVlJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRSZXN1bHRzID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZGF0YU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRSZXN1bHRzLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoZGF0YU5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYihmb3JtYXR0ZWRSZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgdHJlZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogKG5vZGUsIGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJvb3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYih0aGlzLmNhdGVnb3J5VHJlZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF6eSBsb2FkZWQgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyZWVOb2Rlcyhub2RlLCBjYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgICAgICAgICBpY29uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrYm94OiB7XG4gICAgICAgICAgICAgICAgdGhyZWVfc3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcblxuICAgICAgICAkY29udGFpbmVyLmpzdHJlZSh0cmVlT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3NlYXJjaC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9yZXN1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAkc2VhcmNoSGVhZGluZy5odG1sKGNvbnRlbnQuaGVhZGluZyk7XG4gICAgICAgICAgICAkc2VhcmNoQ291bnQuaHRtbChjb250ZW50LnByb2R1Y3RDb3VudCk7XG4gICAgICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIC8vZm9yIGIyYiB1c2VyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYXRhbG9nUHJvZHVjdHMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9mb3Igbm9uIGIyYiB1c2VyXG4gICAgICAgICAgICAgICAgJChcIi5uYXZMaXN0LWl0ZW0gLnByb2R1Y3QtY291bnRcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vZm9yIGIyYlxuICAgIGhhbmRsZUNhdGFsb2dQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgY2F0YWxvZ19wcm9kdWN0cyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhdGFsb2dfcHJvZHVjdHNcIikpO1xuICAgICAgICBjb25zdCBwcm9kdWN0cyA9ICQoXCIucHJvZHVjdFwiKTtcblxuICAgICAgICBmb3IgKHZhciBwcm9kdWN0X2lkIGluIGNhdGFsb2dfcHJvZHVjdHMpIHtcblxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFNlbGVjdG9yID0gYFtjYXRhbG9nLXByb2R1Y3QtJHtwcm9kdWN0X2lkfV1gO1xuICAgICAgICAgICAgaWYgKCQoYCR7cHJvZHVjdFNlbGVjdG9yfWApLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgICQoYCR7cHJvZHVjdFNlbGVjdG9yfWApLmF0dHIoXCJjYXRhbG9nLXByb2R1Y3RcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJhc2VfcHJpY2UgPSAkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5maW5kKFwiLnByaWNlLnByaWNlLS13aXRoVGF4XCIpLnRleHQoKS5yZXBsYWNlKFwiJFwiLCBcIlwiKS5yZXBsYWNlKFwiLFwiLCBcIlwiKSB8fCAkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5maW5kKFwiLnByaWNlLnByaWNlLS13aXRob3V0VGF4XCIpLnRleHQoKS5yZXBsYWNlKFwiJFwiLCBcIlwiKS5yZXBsYWNlKFwiLFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgdGllcl9wcmljZTtcbiAgICAgICAgICAgICAgICBsZXQgY2F0YWxvZ19wcmljZTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50QXJyID0gY2F0YWxvZ19wcm9kdWN0c1twcm9kdWN0X2lkXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFudEFyci5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aWVyX3ByaWNlID0gdmFyaWFudEFyclswXS50aWVyX3ByaWNlIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBjYXRhbG9nX3ByaWNlID0gdGhpcy5nZXRDYXRhbG9nUHJpY2UoYmFzZV9wcmljZSwgdGllcl9wcmljZSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYXRhbG9nX3ByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoYCR7cHJvZHVjdFNlbGVjdG9yfWApLmZpbmQoXCIucHJpY2UucHJpY2UtLXdpdGhvdXRUYXhcIikudGV4dChcIiRcIiArIHBhcnNlRmxvYXQoY2F0YWxvZ19wcmljZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICQoYCR7cHJvZHVjdFNlbGVjdG9yfWApLmZpbmQoXCIucHJpY2UucHJpY2UtLXdpdGhUYXhcIikudGV4dChcIiRcIiArIHBhcnNlRmxvYXQoY2F0YWxvZ19wcmljZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9wcm9kdWN0IEdhbGxlcnksIGZvciBsaXN0aW5nIHBhZ2VcbiAgICAgICAgY29uc3QgJHByb2R1Y3RHYWxsZXJ5ID0gJChcIltiMmItcHJvZHVjdHMtZ2FsbGVyeV1cIik7XG4gICAgICAgICRwcm9kdWN0R2FsbGVyeS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgY2F0YWxvZ1Byb2R1Y3RDb3VudCA9ICQodGhpcykuZmluZChcIltjYXRhbG9nLXByb2R1Y3RdXCIpLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjYXRhbG9nUHJvZHVjdENvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAkKFwiW2NhdGFsb2ctbGlzdGluZy13cmFwXVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLnBhZ2VcIikuaHRtbChcIldlIGNhbid0IGZpbmQgcHJvZHVjdHMgbWF0Y2hpbmcgdGhlIHNlbGVjdGlvbi5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCJbY2F0YWxvZy1saXN0aW5nLXdyYXBdXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkY2F0YWxvZ1Byb2R1Y3RDb3VudGVyID0gJChcIltkYXRhLWNhdGFsb2ctcHJvZHVjdC1jb3VudGVyXVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoJGNhdGFsb2dQcm9kdWN0Q291bnRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRjYXRhbG9nUHJvZHVjdENvdW50ZXIudGV4dChjYXRhbG9nUHJvZHVjdENvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIC8vZm9yIGJ1bmRsZWIyYlxuICAgIGdldENhdGFsb2dQcmljZShiYXNlX3ByaWNlLCB0aWVyX3ByaWNlX2FycmF5LCBxdHkpIHtcbiAgICAgICAgLy9sZXQgdGllcl9wcmljZSA9IGJhc2VfcHJpY2U7XG4gICAgICAgIGxldCB0aWVyX3ByaWNlID0gYmFzZV9wcmljZTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRpZXJfcHJpY2VfYXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnR5cGU7XG4gICAgICAgICAgICBjb25zdCBiYXNlX3F0eSA9IHRpZXJfcHJpY2VfYXJyYXlbal0ucXR5O1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnByaWNlO1xuXG4gICAgICAgICAgICBpZiAocXR5ID49IGJhc2VfcXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBwcmljZTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBiYXNlX3ByaWNlIC0gYmFzZV9wcmljZSAqIHByaWNlIC8gMTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGllcl9wcmljZTtcbiAgICB9XG5cbiAgICBpbml0QWR2cXR5KCkge1xuICAgICAgICBBZHZRdWFudGl0eVV0aWwuaW5pdExpc3RpbmdDYXJkQWN0aW9uKCk7XG4gICAgICAgIGNvbnN0ICRhZHZRdHlJbnB1dHMgPSAkKFwiW2FkdnF0eS1jYXJkLWFjdGlvbnNdIFthZHZxdHktY2FyZC1pbnB1dF1cIik7XG4gICAgICAgIEFkdlF1YW50aXR5VXRpbC5zZXRVcEFkdlF0eU11bHRpKCRhZHZRdHlJbnB1dHMsIHtcbiAgICAgICAgICAgIGJpbmRJbnB1dEV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgIGJpbmRCdXR0b25FdmVudHM6IHRydWUsXG4gICAgICAgICAgICB0aXBzOiB0cnVlXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICRhZHZRdHlJbnB1dHMuZWFjaCgobF9pZHgsIGxfaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQobF9pdGVtKTtcbiAgICAgICAgICAgICAgICBBZHZRdWFudGl0eVV0aWwuaGFuZGxlUXVhbnRpdHlDaGFuZ2UobnVsbCwgJGlucHV0LCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==