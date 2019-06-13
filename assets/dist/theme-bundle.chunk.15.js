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
    }

    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
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

      _this5.initAdvqty();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwidXJsIiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VjdGlvbiIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJnb1RvVXJsIiwic2hvd0NvbnRlbnQiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkc2VhcmNoRm9ybSIsIiRjYXRlZ29yeVRyZWVDb250YWluZXIiLCJmaW5kIiwiVXJsIiwicGFyc2UiLCJ0cmVlRGF0YSIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJxdWVyeSIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiY2F0ZWdvcnlJZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUNhdGFsb2dQcm9kdWN0cyIsInNob3ciLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJkb25lIiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJoZWFkaW5nIiwicHJvZHVjdENvdW50IiwiY29uZmlnIiwicHJvZHVjdF9yZXN1bHRzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaW5pdEFkdnF0eSIsIiRmb3JtIiwibm9kIiwic3VibWl0IiwiJGVsZW1lbnQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiY2F0YWxvZ19wcm9kdWN0cyIsIkpTT04iLCJwcm9kdWN0cyIsInByb2R1Y3RfaWQiLCJwcm9kdWN0U2VsZWN0b3IiLCJhdHRyIiwiYmFzZV9wcmljZSIsInJlcGxhY2UiLCJ0aWVyX3ByaWNlIiwiY2F0YWxvZ19wcmljZSIsInZhcmlhbnRBcnIiLCJnZXRDYXRhbG9nUHJpY2UiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIiRwcm9kdWN0R2FsbGVyeSIsImVhY2giLCJjYXRhbG9nUHJvZHVjdENvdW50IiwicGFyZW50cyIsIiRjYXRhbG9nUHJvZHVjdENvdW50ZXIiLCJ0aWVyX3ByaWNlX2FycmF5IiwicXR5IiwiaiIsImJhc2VfcXR5IiwicHJpY2UiLCJBZHZRdWFudGl0eVV0aWwiLCJpbml0TGlzdGluZ0NhcmRBY3Rpb24iLCIkYWR2UXR5SW5wdXRzIiwic2V0VXBBZHZRdHlNdWx0aSIsImJpbmRJbnB1dEV2ZW50cyIsImJpbmRCdXR0b25FdmVudHMiLCJ0aXBzIiwibF9pZHgiLCJsX2l0ZW0iLCIkaW5wdXQiLCJoYW5kbGVRdWFudGl0eUNoYW5nZSIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7OztTQUNqQkMsMkIsR0FBQSxxQ0FBNEJDLElBQTVCLEVBQWtDO0FBQUE7O0FBQzlCLFFBQU1DLFFBQVEsR0FBRztBQUNiQyxVQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFERTtBQUViQyxRQUFFLEVBQUVKLElBQUksQ0FBQ0ssUUFBTCxDQUFjRCxFQUZMO0FBR2JFLFdBQUssRUFBRTtBQUNIQyxnQkFBUSxFQUFFUCxJQUFJLENBQUNPO0FBRFo7QUFITSxLQUFqQjs7QUFRQSxRQUFJUCxJQUFJLENBQUNNLEtBQVQsRUFBZ0I7QUFDWkwsY0FBUSxDQUFDSyxLQUFULENBQWVFLE1BQWYsR0FBd0JSLElBQUksQ0FBQ00sS0FBTCxLQUFlLE1BQXZDO0FBQ0FMLGNBQVEsQ0FBQ1EsUUFBVCxHQUFvQixJQUFwQjtBQUNIOztBQUVELFFBQUlULElBQUksQ0FBQ1MsUUFBVCxFQUFtQjtBQUNmUixjQUFRLENBQUNRLFFBQVQsR0FBb0IsRUFBcEI7QUFDQVQsVUFBSSxDQUFDUyxRQUFMLENBQWNDLE9BQWQsQ0FBc0IsVUFBQ0MsU0FBRCxFQUFlO0FBQ2pDVixnQkFBUSxDQUFDUSxRQUFULENBQWtCRyxJQUFsQixDQUF1QixLQUFJLENBQUNi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QUFELENBQWhCLENBQW9CL0UsSUFBakM7QUFDQSxVQUFNZ0YsUUFBUSxHQUFHSCxnQkFBZ0IsQ0FBQ0UsQ0FBRCxDQUFoQixDQUFvQkQsR0FBckM7QUFDQSxVQUFNRyxLQUFLLEdBQUdKLGdCQUFnQixDQUFDRSxDQUFELENBQWhCLENBQW9CRSxLQUFsQzs7QUFFQSxVQUFJSCxHQUFHLElBQUlFLFFBQVgsRUFBcUI7QUFDakIsWUFBSWhGLElBQUksSUFBSSxPQUFaLEVBQXFCO0FBQ2pCa0Usb0JBQVUsR0FBR2UsS0FBYjtBQUVILFNBSEQsTUFHTztBQUNIZixvQkFBVSxHQUFHRixVQUFVLEdBQUdBLFVBQVUsR0FBR2lCLEtBQWIsR0FBcUIsR0FBL0M7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsV0FBT2YsVUFBUDtBQUNILEc7O1NBRURuQixVLEdBQUEsc0JBQWE7QUFDVG1DLG9FQUFlLENBQUNDLHFCQUFoQjtBQUNBLFFBQU1DLGFBQWEsR0FBR3hILDZDQUFDLENBQUMsMkNBQUQsQ0FBdkI7QUFDQXNILG9FQUFlLENBQUNHLGdCQUFoQixDQUFpQ0QsYUFBakMsRUFBZ0Q7QUFDNUNFLHFCQUFlLEVBQUUsSUFEMkI7QUFFNUNDLHNCQUFnQixFQUFFLElBRjBCO0FBRzVDQyxVQUFJLEVBQUU7QUFIc0MsS0FBaEQsRUFJRyxZQUFNO0FBQ0xKLG1CQUFhLENBQUNYLElBQWQsQ0FBbUIsVUFBQ2dCLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNsQyxZQUFNQyxNQUFNLEdBQUcvSCw2Q0FBQyxDQUFDOEgsTUFBRCxDQUFoQjtBQUNBUix3RUFBZSxDQUFDVSxvQkFBaEIsQ0FBcUMsSUFBckMsRUFBMkNELE1BQTNDLEVBQW1ELElBQW5EO0FBQ0gsT0FIRDtBQUlILEtBVEQ7QUFVSCxHOzs7RUF0VitCRSxnRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGhvb2tzXG59IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0ICdqc3RyZWUnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IEFkdlF1YW50aXR5VXRpbCBmcm9tICcuL2IyYi9jb21tb24vYWR2UXVhbnRpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZURhdGEgPSB7XG4gICAgICAgICAgICB0ZXh0OiBub2RlLmRhdGEsXG4gICAgICAgICAgICBpZDogbm9kZS5tZXRhZGF0YS5pZCxcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG5vZGUuc2VsZWN0ZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChub2RlLnN0YXRlKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5zdGF0ZS5vcGVuZWQgPSBub2RlLnN0YXRlID09PSAnb3Blbic7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4ucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShjaGlsZE5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGVEYXRhO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdXJsVXRpbHMucmVwbGFjZVBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgICAgc2VjdGlvbjogJ3Byb2R1Y3QnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudCgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdXJsVXRpbHMucmVwbGFjZVBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgICAgc2VjdGlvbjogJ2NvbnRlbnQnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgJHNlYXJjaEZvcm0gPSAkKCdbZGF0YS1hZHZhbmNlZC1zZWFyY2gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGNhdGVnb3J5VHJlZUNvbnRhaW5lciA9ICRzZWFyY2hGb3JtLmZpbmQoJ1tkYXRhLXNlYXJjaC1jYXRlZ29yeS10cmVlXScpO1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCB0cmVlRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcblxuICAgICAgICAvLyBJbml0IGZhY2V0ZWQgc2VhcmNoXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCgnbGkucHJvZHVjdCcpLmxlbmd0aCA9PT0gMCB8fCB1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5pbml0VmFsaWRhdGlvbigkc2VhcmNoRm9ybSlcbiAgICAgICAgICAgIC5iaW5kVmFsaWRhdGlvbigkc2VhcmNoRm9ybS5maW5kKCcjc2VhcmNoX3F1ZXJ5X2FkdicpKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuY2F0ZWdvcnlUcmVlLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRyZWVEYXRhLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNhdGVnb3J5VHJlZURhdGEgPSB0cmVlRGF0YTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeVRyZWUoJGNhdGVnb3J5VHJlZUNvbnRhaW5lcik7XG5cbiAgICAgICAgJHNlYXJjaEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyLmpzdHJlZSgpLmdldF9zZWxlY3RlZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRvci5jaGVjaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzZWFyY2hGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjYXRlZ29yeVxcW1xcXVwiXScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhdGVnb3J5SWQgb2Ygc2VsZWN0ZWRDYXRlZ29yeUlkcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yeVtdJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkc2VhcmNoRm9ybS5hcHBlbmQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2ZvciBiMmIgdXNlclxuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgJChcIi5ib2R5XCIpLmFkZENsYXNzKFwiYjJiLXByb2R1Y3RzXCIpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDYXRhbG9nUHJvZHVjdHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIubmF2TGlzdC1pdGVtIC5wcm9kdWN0LWNvdW50XCIpLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbG9hZFRyZWVOb2Rlcyhub2RlLCBjYikge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL3JlbW90ZS92MS9jYXRlZ29yeS10cmVlJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZG9uZShkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3VsdHMgPSBbXTtcblxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChkYXRhTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFJlc3VsdHMucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShkYXRhTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKGZvcm1hdHRlZFJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYXRlZ29yeVRyZWUoJGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB0cmVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvcmU6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiAobm9kZSwgY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUm9vdCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXp5IGxvYWRlZCBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJlZU5vZGVzKG5vZGUsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tib3g6IHtcbiAgICAgICAgICAgICAgICB0aHJlZV9zdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gICAgICAgICRjb250YWluZXIuanN0cmVlKHRyZWVPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hIZWFkaW5nID0gJCgnI3NlYXJjaC1yZXN1bHRzLWhlYWRpbmcnKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnc2VhcmNoL3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ3NlYXJjaC9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnc2VhcmNoL2hlYWRpbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudDogJ3NlYXJjaC9wcm9kdWN0LWNvdW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3Jlc3VsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnc2VhcmNoL3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcbiAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcblxuXG4gICAgICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIC8vZm9yIGIyYiB1c2VyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYXRhbG9nUHJvZHVjdHMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9mb3Igbm9uIGIyYiB1c2VyXG4gICAgICAgICAgICAgICAgJChcIi5uYXZMaXN0LWl0ZW0gLnByb2R1Y3QtY291bnRcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRBZHZxdHkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFZhbGlkYXRpb24oJGZvcm0pIHtcbiAgICAgICAgdGhpcy4kZm9ybSA9ICRmb3JtO1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRmb3JtLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBiaW5kVmFsaWRhdGlvbigkZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICRlbGVtZW50LFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJGVsZW1lbnQuZGF0YSgnZXJyb3JNZXNzYWdlJyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL2ZvciBiMmJcbiAgICBoYW5kbGVDYXRhbG9nUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGNhdGFsb2dfcHJvZHVjdHMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjYXRhbG9nX3Byb2R1Y3RzXCIpKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSAkKFwiLnByb2R1Y3RcIik7XG5cbiAgICAgICAgZm9yICh2YXIgcHJvZHVjdF9pZCBpbiBjYXRhbG9nX3Byb2R1Y3RzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RTZWxlY3RvciA9IGBbY2F0YWxvZy1wcm9kdWN0LSR7cHJvZHVjdF9pZH1dYDtcbiAgICAgICAgICAgIGlmICgkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5hdHRyKFwiY2F0YWxvZy1wcm9kdWN0XCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgICAgIGxldCBiYXNlX3ByaWNlID0gJChgJHtwcm9kdWN0U2VsZWN0b3J9YCkuZmluZChcIi5wcmljZS5wcmljZS0td2l0aFRheFwiKS50ZXh0KCkucmVwbGFjZShcIiRcIiwgXCJcIikucmVwbGFjZShcIixcIiwgXCJcIikgfHwgJChgJHtwcm9kdWN0U2VsZWN0b3J9YCkuZmluZChcIi5wcmljZS5wcmljZS0td2l0aG91dFRheFwiKS50ZXh0KCkucmVwbGFjZShcIiRcIiwgXCJcIikucmVwbGFjZShcIixcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IHRpZXJfcHJpY2U7XG4gICAgICAgICAgICAgICAgbGV0IGNhdGFsb2dfcHJpY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudEFyciA9IGNhdGFsb2dfcHJvZHVjdHNbcHJvZHVjdF9pZF0gfHwgW107XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhbnRBcnIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGllcl9wcmljZSA9IHZhcmlhbnRBcnJbMF0udGllcl9wcmljZSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgY2F0YWxvZ19wcmljZSA9IHRoaXMuZ2V0Q2F0YWxvZ1ByaWNlKGJhc2VfcHJpY2UsIHRpZXJfcHJpY2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2F0YWxvZ19wcmljZSkge1xuICAgICAgICAgICAgICAgICAgICAkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5maW5kKFwiLnByaWNlLnByaWNlLS13aXRob3V0VGF4XCIpLnRleHQoXCIkXCIgKyBwYXJzZUZsb2F0KGNhdGFsb2dfcHJpY2UpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICAgICAkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5maW5kKFwiLnByaWNlLnByaWNlLS13aXRoVGF4XCIpLnRleHQoXCIkXCIgKyBwYXJzZUZsb2F0KGNhdGFsb2dfcHJpY2UpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vcHJvZHVjdCBHYWxsZXJ5LCBmb3IgbGlzdGluZyBwYWdlXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0R2FsbGVyeSA9ICQoXCJbYjJiLXByb2R1Y3RzLWdhbGxlcnldXCIpO1xuICAgICAgICAkcHJvZHVjdEdhbGxlcnkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGFsb2dQcm9kdWN0Q291bnQgPSAkKHRoaXMpLmZpbmQoXCJbY2F0YWxvZy1wcm9kdWN0XVwiKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY2F0YWxvZ1Byb2R1Y3RDb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJChcIltjYXRhbG9nLWxpc3Rpbmctd3JhcF1cIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cyhcIi5wYWdlXCIpLmh0bWwoXCJXZSBjYW4ndCBmaW5kIHByb2R1Y3RzIG1hdGNoaW5nIHRoZSBzZWxlY3Rpb24uXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiW2NhdGFsb2ctbGlzdGluZy13cmFwXVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGNhdGFsb2dQcm9kdWN0Q291bnRlciA9ICQoXCJbZGF0YS1jYXRhbG9nLXByb2R1Y3QtY291bnRlcl1cIik7XG4gICAgICAgICAgICAgICAgaWYgKCRjYXRhbG9nUHJvZHVjdENvdW50ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAkY2F0YWxvZ1Byb2R1Y3RDb3VudGVyLnRleHQoY2F0YWxvZ1Byb2R1Y3RDb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vZm9yIGJ1bmRsZWIyYlxuICAgIGdldENhdGFsb2dQcmljZShiYXNlX3ByaWNlLCB0aWVyX3ByaWNlX2FycmF5LCBxdHkpIHtcbiAgICAgICAgLy9sZXQgdGllcl9wcmljZSA9IGJhc2VfcHJpY2U7XG4gICAgICAgIGxldCB0aWVyX3ByaWNlID0gYmFzZV9wcmljZTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRpZXJfcHJpY2VfYXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnR5cGU7XG4gICAgICAgICAgICBjb25zdCBiYXNlX3F0eSA9IHRpZXJfcHJpY2VfYXJyYXlbal0ucXR5O1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnByaWNlO1xuXG4gICAgICAgICAgICBpZiAocXR5ID49IGJhc2VfcXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBwcmljZTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBiYXNlX3ByaWNlIC0gYmFzZV9wcmljZSAqIHByaWNlIC8gMTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGllcl9wcmljZTtcbiAgICB9XG5cbiAgICBpbml0QWR2cXR5KCkge1xuICAgICAgICBBZHZRdWFudGl0eVV0aWwuaW5pdExpc3RpbmdDYXJkQWN0aW9uKCk7XG4gICAgICAgIGNvbnN0ICRhZHZRdHlJbnB1dHMgPSAkKFwiW2FkdnF0eS1jYXJkLWFjdGlvbnNdIFthZHZxdHktY2FyZC1pbnB1dF1cIik7XG4gICAgICAgIEFkdlF1YW50aXR5VXRpbC5zZXRVcEFkdlF0eU11bHRpKCRhZHZRdHlJbnB1dHMsIHtcbiAgICAgICAgICAgIGJpbmRJbnB1dEV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgIGJpbmRCdXR0b25FdmVudHM6IHRydWUsXG4gICAgICAgICAgICB0aXBzOiB0cnVlXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICRhZHZRdHlJbnB1dHMuZWFjaCgobF9pZHgsIGxfaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQobF9pdGVtKTtcbiAgICAgICAgICAgICAgICBBZHZRdWFudGl0eVV0aWwuaGFuZGxlUXVhbnRpdHlDaGFuZ2UobnVsbCwgJGlucHV0LCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==