(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
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
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");






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
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    _common_url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url);
  };

  _proto.showContent = function showContent() {
    var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].replaceParams(window.location.href, {
      section: 'content'
    });
    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    _common_url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url);
  };

  _proto.onReady = function onReady() {
    var _this2 = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context.urls);
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_10___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content'); // Init faceted search

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    } // Init collapsibles


    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_11__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
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
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    }); //for b2b user

    if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
      $(".body").addClass("b2b-products");
      this.handleCatalogProducts();
    } else {
      $(".navList-item .product-count").show();
    }
  };

  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;

    $.ajax({
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

    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
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
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_7__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $searchHeading.html(content.heading);
      $searchCount.html(content.productCount);

      if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
        //for b2b user
        _this5.handleCatalogProducts();
      } else {
        //for non b2b user
        $(".navList-item .product-count").show();
      }

      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };

  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_13__["default"])({
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
    var products = $(".product");

    for (var product_id in catalog_products) {
      var productSelector = "[catalog-product-" + product_id + "]";

      if ($("" + productSelector).length > 0) {
        $("" + productSelector).attr("catalog-product", "true");
        var base_price = $("" + productSelector).find(".price.price--withTax").text().replace("$", "").replace(",", "") || $("" + productSelector).find(".price.price--withoutTax").text().replace("$", "").replace(",", "");
        var tier_price = void 0;
        var catalog_price = void 0;
        var variantArr = catalog_products[product_id] || [];

        if (variantArr.length == 1) {
          tier_price = variantArr[0].tier_price || [];
          catalog_price = this.getCatalogPrice(base_price, tier_price, 1);
        }

        if (catalog_price) {
          $("" + productSelector).find(".price.price--withoutTax").text("$" + parseFloat(catalog_price).toFixed(2));
          $("" + productSelector).find(".price.price--withTax").text("$" + parseFloat(catalog_price).toFixed(2));
        }
      }
    } //product Gallery, for listing page


    var $productGallery = $("[b2b-products-gallery]");
    $productGallery.each(function () {
      var catalogProductCount = $(this).find("[catalog-product]").length;

      if (catalogProductCount == 0) {
        $("[catalog-listing-wrap]").show();
        $(this).parents(".page").html("We can't find products matching the selection.");
      } else {
        $("[catalog-listing-wrap]").show();
        var $catalogProductCounter = $("[data-catalog-product-counter]");

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

  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_6__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwidXJsIiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VjdGlvbiIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJnb1RvVXJsIiwic2hvd0NvbnRlbnQiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkc2VhcmNoRm9ybSIsIiRjYXRlZ29yeVRyZWVDb250YWluZXIiLCJmaW5kIiwiVXJsIiwicGFyc2UiLCJ0cmVlRGF0YSIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJxdWVyeSIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiY2F0ZWdvcnlJZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUNhdGFsb2dQcm9kdWN0cyIsInNob3ciLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJkb25lIiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJoZWFkaW5nIiwicHJvZHVjdENvdW50IiwiY29uZmlnIiwicHJvZHVjdF9yZXN1bHRzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiJGZvcm0iLCJub2QiLCJzdWJtaXQiLCIkZWxlbWVudCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJjYXRhbG9nX3Byb2R1Y3RzIiwiSlNPTiIsInByb2R1Y3RzIiwicHJvZHVjdF9pZCIsInByb2R1Y3RTZWxlY3RvciIsImF0dHIiLCJiYXNlX3ByaWNlIiwicmVwbGFjZSIsInRpZXJfcHJpY2UiLCJjYXRhbG9nX3ByaWNlIiwidmFyaWFudEFyciIsImdldENhdGFsb2dQcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiJHByb2R1Y3RHYWxsZXJ5IiwiZWFjaCIsImNhdGFsb2dQcm9kdWN0Q291bnQiLCJwYXJlbnRzIiwiJGNhdGFsb2dQcm9kdWN0Q291bnRlciIsInRpZXJfcHJpY2VfYXJyYXkiLCJxdHkiLCJqIiwiYmFzZV9xdHkiLCJwcmljZSIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE07Ozs7Ozs7Ozs7O1NBQ2pCQywyQixHQUFBLHFDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQTs7QUFDOUIsUUFBTUMsUUFBUSxHQUFHO0FBQ2JDLFVBQUksRUFBRUYsSUFBSSxDQUFDRyxJQURFO0FBRWJDLFFBQUUsRUFBRUosSUFBSSxDQUFDSyxRQUFMLENBQWNELEVBRkw7QUFHYkUsV0FBSyxFQUFFO0FBQ0hDLGdCQUFRLEVBQUVQLElBQUksQ0FBQ087QUFEWjtBQUhNLEtBQWpCOztBQVFBLFFBQUlQLElBQUksQ0FBQ00sS0FBVCxFQUFnQjtBQUNaTCxjQUFRLENBQUNLLEtBQVQsQ0FBZUUsTUFBZixHQUF3QlIsSUFBSSxDQUFDTSxLQUFMLEtBQWUsTUFBdkM7QUFDQUwsY0FBUSxDQUFDUSxRQUFULEdBQW9CLElBQXBCO0FBQ0g7O0FBRUQsUUFBSVQsSUFBSSxDQUFDUyxRQUFULEVBQW1CO0FBQ2ZSLGNBQVEsQ0FBQ1EsUUFBVCxHQUFvQixFQUFwQjtBQUNBVCxVQUFJLENBQUNTLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQixVQUFDQyxTQUFELEVBQWU7QUFDakNWLGdCQUFRLENBQUNRLFFBQVQsQ0FBa0JHLElBQWxCLENBQXVCLEtBQUksQ0FBQ2IsMkJBQUwsQ0FBaUNZLFNBQWpDLENBQXZCO0FBQ0gsT0FGRDtBQUdIOztBQUVELFdBQU9WLFFBQVA7QUFDSCxHOztTQUVEWSxZLEdBQUEsd0JBQWU7QUFDWCxRQUFNQyxHQUFHLEdBQUdDLHlEQUFRLENBQUNDLGFBQVQsQ0FBdUJDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBdkMsRUFBNkM7QUFDckRDLGFBQU8sRUFBRTtBQUQ0QyxLQUE3QyxD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b0JBQVUsR0FBR0YsVUFBVSxHQUFHQSxVQUFVLEdBQUdpQixLQUFiLEdBQXFCLEdBQS9DO0FBQ0g7QUFDSjtBQUNKOztBQUNELFdBQU9mLFVBQVA7QUFDSCxHOzs7RUE3VCtCZ0IsZ0QiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0ICdqc3RyZWUnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZURhdGEgPSB7XG4gICAgICAgICAgICB0ZXh0OiBub2RlLmRhdGEsXG4gICAgICAgICAgICBpZDogbm9kZS5tZXRhZGF0YS5pZCxcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG5vZGUuc2VsZWN0ZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChub2RlLnN0YXRlKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5zdGF0ZS5vcGVuZWQgPSBub2RlLnN0YXRlID09PSAnb3Blbic7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4ucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShjaGlsZE5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGVEYXRhO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdXJsVXRpbHMucmVwbGFjZVBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgICAgc2VjdGlvbjogJ3Byb2R1Y3QnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudCgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdXJsVXRpbHMucmVwbGFjZVBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgICAgc2VjdGlvbjogJ2NvbnRlbnQnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG5cbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xuXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vZm9yIGIyYiB1c2VyXG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpICE9IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAkKFwiLmJvZHlcIikuYWRkQ2xhc3MoXCJiMmItcHJvZHVjdHNcIik7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNhdGFsb2dQcm9kdWN0cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIi5uYXZMaXN0LWl0ZW0gLnByb2R1Y3QtY291bnRcIikuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFRyZWVOb2Rlcyhub2RlLCBjYikge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL3JlbW90ZS92MS9jYXRlZ29yeS10cmVlJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRSZXN1bHRzID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZGF0YU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRSZXN1bHRzLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoZGF0YU5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYihmb3JtYXR0ZWRSZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgdHJlZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogKG5vZGUsIGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJvb3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYih0aGlzLmNhdGVnb3J5VHJlZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF6eSBsb2FkZWQgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyZWVOb2Rlcyhub2RlLCBjYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgICAgICAgICBpY29uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrYm94OiB7XG4gICAgICAgICAgICAgICAgdGhyZWVfc3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcblxuICAgICAgICAkY29udGFpbmVyLmpzdHJlZSh0cmVlT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3NlYXJjaC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9yZXN1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAkc2VhcmNoSGVhZGluZy5odG1sKGNvbnRlbnQuaGVhZGluZyk7XG4gICAgICAgICAgICAkc2VhcmNoQ291bnQuaHRtbChjb250ZW50LnByb2R1Y3RDb3VudCk7XG4gICAgICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIC8vZm9yIGIyYiB1c2VyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYXRhbG9nUHJvZHVjdHMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9mb3Igbm9uIGIyYiB1c2VyXG4gICAgICAgICAgICAgICAgJChcIi5uYXZMaXN0LWl0ZW0gLnByb2R1Y3QtY291bnRcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vZm9yIGIyYlxuICAgIGhhbmRsZUNhdGFsb2dQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgY2F0YWxvZ19wcm9kdWN0cyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhdGFsb2dfcHJvZHVjdHNcIikpO1xuICAgICAgICBjb25zdCBwcm9kdWN0cyA9ICQoXCIucHJvZHVjdFwiKTtcblxuICAgICAgICBmb3IgKHZhciBwcm9kdWN0X2lkIGluIGNhdGFsb2dfcHJvZHVjdHMpIHtcblxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFNlbGVjdG9yID0gYFtjYXRhbG9nLXByb2R1Y3QtJHtwcm9kdWN0X2lkfV1gO1xuICAgICAgICAgICAgaWYgKCQoYCR7cHJvZHVjdFNlbGVjdG9yfWApLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgICQoYCR7cHJvZHVjdFNlbGVjdG9yfWApLmF0dHIoXCJjYXRhbG9nLXByb2R1Y3RcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJhc2VfcHJpY2UgPSAkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5maW5kKFwiLnByaWNlLnByaWNlLS13aXRoVGF4XCIpLnRleHQoKS5yZXBsYWNlKFwiJFwiLCBcIlwiKS5yZXBsYWNlKFwiLFwiLCBcIlwiKSB8fCAkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5maW5kKFwiLnByaWNlLnByaWNlLS13aXRob3V0VGF4XCIpLnRleHQoKS5yZXBsYWNlKFwiJFwiLCBcIlwiKS5yZXBsYWNlKFwiLFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgdGllcl9wcmljZTtcbiAgICAgICAgICAgICAgICBsZXQgY2F0YWxvZ19wcmljZTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50QXJyID0gY2F0YWxvZ19wcm9kdWN0c1twcm9kdWN0X2lkXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFudEFyci5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aWVyX3ByaWNlID0gdmFyaWFudEFyclswXS50aWVyX3ByaWNlIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBjYXRhbG9nX3ByaWNlID0gdGhpcy5nZXRDYXRhbG9nUHJpY2UoYmFzZV9wcmljZSwgdGllcl9wcmljZSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYXRhbG9nX3ByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoYCR7cHJvZHVjdFNlbGVjdG9yfWApLmZpbmQoXCIucHJpY2UucHJpY2UtLXdpdGhvdXRUYXhcIikudGV4dChcIiRcIiArIHBhcnNlRmxvYXQoY2F0YWxvZ19wcmljZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICQoYCR7cHJvZHVjdFNlbGVjdG9yfWApLmZpbmQoXCIucHJpY2UucHJpY2UtLXdpdGhUYXhcIikudGV4dChcIiRcIiArIHBhcnNlRmxvYXQoY2F0YWxvZ19wcmljZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9wcm9kdWN0IEdhbGxlcnksIGZvciBsaXN0aW5nIHBhZ2VcbiAgICAgICAgY29uc3QgJHByb2R1Y3RHYWxsZXJ5ID0gJChcIltiMmItcHJvZHVjdHMtZ2FsbGVyeV1cIik7XG4gICAgICAgICRwcm9kdWN0R2FsbGVyeS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgY2F0YWxvZ1Byb2R1Y3RDb3VudCA9ICQodGhpcykuZmluZChcIltjYXRhbG9nLXByb2R1Y3RdXCIpLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjYXRhbG9nUHJvZHVjdENvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAkKFwiW2NhdGFsb2ctbGlzdGluZy13cmFwXVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLnBhZ2VcIikuaHRtbChcIldlIGNhbid0IGZpbmQgcHJvZHVjdHMgbWF0Y2hpbmcgdGhlIHNlbGVjdGlvbi5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCJbY2F0YWxvZy1saXN0aW5nLXdyYXBdXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkY2F0YWxvZ1Byb2R1Y3RDb3VudGVyID0gJChcIltkYXRhLWNhdGFsb2ctcHJvZHVjdC1jb3VudGVyXVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoJGNhdGFsb2dQcm9kdWN0Q291bnRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRjYXRhbG9nUHJvZHVjdENvdW50ZXIudGV4dChjYXRhbG9nUHJvZHVjdENvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIC8vZm9yIGJ1bmRsZWIyYlxuICAgIGdldENhdGFsb2dQcmljZShiYXNlX3ByaWNlLCB0aWVyX3ByaWNlX2FycmF5LCBxdHkpIHtcbiAgICAgICAgLy9sZXQgdGllcl9wcmljZSA9IGJhc2VfcHJpY2U7XG4gICAgICAgIGxldCB0aWVyX3ByaWNlID0gYmFzZV9wcmljZTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRpZXJfcHJpY2VfYXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnR5cGU7XG4gICAgICAgICAgICBjb25zdCBiYXNlX3F0eSA9IHRpZXJfcHJpY2VfYXJyYXlbal0ucXR5O1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnByaWNlO1xuXG4gICAgICAgICAgICBpZiAocXR5ID49IGJhc2VfcXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBwcmljZTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBiYXNlX3ByaWNlIC0gYmFzZV9wcmljZSAqIHByaWNlIC8gMTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGllcl9wcmljZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9