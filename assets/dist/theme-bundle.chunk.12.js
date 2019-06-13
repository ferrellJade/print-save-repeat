(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _b2b_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./b2b/config */ "./assets/js/theme/b2b/config.js");
/* harmony import */ var _b2b_tools_jqPaginator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./b2b/tools/jqPaginator.js */ "./assets/js/theme/b2b/tools/jqPaginator.js");
/* harmony import */ var _b2b_prices_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./b2b/prices-style */ "./assets/js/theme/b2b/prices-style.js");
/* harmony import */ var _b2b_common_advQuantity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./b2b/common/advQuantity */ "./assets/js/theme/b2b/common/advQuantity.js");






function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }













var Category =
/*#__PURE__*/
function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);

  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Category.prototype;

  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context.urls);

    if (jquery__WEBPACK_IMPORTED_MODULE_7___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    } // for bundleb2b


    this.gCatalogId;
    this.gCategoryId = this.context.categoryId;
    this.gCatalogProducts;
    this.selectedFacets = {};
    this.pageSize = 30;
    this.pageNumber = 1;
    this.sortField = 'updated_date.keyword';
    this.sortOrder = 'asc';
    this.initB2bFeature();
  } // for bundleb2b
  ;

  _proto.initB2bFeature_o = function initB2bFeature_o() {
    if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()("#product-listing-container .productGrid").empty();
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(".pagination").hide();

      if (sessionStorage.getItem("catalog_id")) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()("#product-listing-container").append("<div class=\"pagination\">\n                <ul class=\"pagination-list\" id=\"jqPagination\"></ul>\n                </div>");
        this.getAllProductsApi();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()(".catalog-listing-wrap").html("We can't find products matching the selection.");
      }
    }
  };

  _proto.initB2bFeature = function initB2bFeature() {
    var _this = this;

    if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
      var b2bUserInfo = JSON.parse(sessionStorage.getItem("bundleb2b_user"));

      if (b2bUserInfo.catalog_id) {
        this.gCatalogId = b2bUserInfo.catalog_id;
      }

      if (sessionStorage.getItem("catalog_id")) {
        this.gCatalogId = sessionStorage.getItem("catalog_id");
      }

      this.gCatalogProducts = JSON.parse(sessionStorage.getItem("catalog_products") || "{}");
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(".page").addClass("b2b-search-page").html("<aside class=\"page-sidebar-b2b\" id=\"faceted-search-container-b2b\">\n                <div class=\"page-sidebar-inner\" id=\"product-filters-container\">\n                </div>\n            </aside>\n            <section class=\"page-content\">\n                <div id=\"b2b_search_result\">\n                    <ul class=\"productGrid\">\n                        <li></li>\n                    </ul>\n                    <ul class=\"pagination-list\" id=\"jqPagination\"></ul>\n\n                </div>\n            </scetion>");
      var filterString = "&filtersBy={\"category_id\":\"" + this.gCategoryId + "\"}";
      var ajaxUrl = _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].apiRootUrl + "/search?store_hash=" + _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].storeHash + "&is_facets=1&catalog_id=" + this.gCatalogId + filterString + "&pageNumber=" + this.pageNumber + "&pageSize=" + this.pageSize + "&sortField=" + this.sortField + "&sortOrder=" + this.sortOrder;
      ajaxUrl = encodeURI(ajaxUrl);
      this.search(ajaxUrl).then(function (res) {
        _this.changeSort();

        _this._initFacets(res);

        _this._initProducts(res);

        if (res.total_count == 0) {
          jquery__WEBPACK_IMPORTED_MODULE_7___default()("#jqPagination").html("");
          jquery__WEBPACK_IMPORTED_MODULE_7___default()(".page-sidebar-b2b").remove();
          return;
        }

        jquery__WEBPACK_IMPORTED_MODULE_7___default()("#jqPagination").jqPaginator({
          totalPages: Math.ceil(res.total_count / _this.pageSize),
          visiblePages: 5,
          currentPage: _this.pageNumber,
          onPageChange: function onPageChange(num, type) {
            if (_this.pageNumber == num) return;
            _this.pageNumber = num;
            var ajaxUrl = _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].apiRootUrl + "/search?store_hash=" + _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].storeHash + "&is_facets=1&catalog_id=" + _this.gCatalogId + filterString + "&pageNumber=" + _this.pageNumber + "&pageSize=" + _this.pageSize + "&sortField=" + _this.sortField + "&sortOrder=" + _this.sortOrder;
            ajaxUrl = encodeURI(ajaxUrl);

            _this.search(ajaxUrl).then(function (res) {
              _this._initFacets(res);

              _this._initProducts(res);
            });
          }
        });
      });
    }
  } // for bundleb2b
  ;

  _proto.renderTable = function renderTable(start, end, categoryProducts) {
    var productsHtml = "";

    for (var j = start; j < end; j++) {
      var product = categoryProducts[j];
      productsHtml += "<li class=\"product\">\n                            <article class=\"card\">\n                                <figure class=\"card-figure\">\n                                        <a href=\"" + product.product_url + "\">\n                                            <div class=\"card-img-container\">\n                                                <img class=\"card-image\" src=\"" + product.primary_image.standard_url + "\" alt=\"\" title=\"\">\n                                            </div>\n                                        </a>\n                                    <figcaption class=\"card-figcaption\">\n                                        <div class=\"card-figcaption-body\">\n                                                        <a href=\"#\" class=\"button button--small card-figcaption-button quickview\" data-product-id=\"" + product.product_id + "\">Quick view</a>\n                                                <label class=\"button button--small card-figcaption-button\" for=\"compare-" + product.product_id + "\">\n                                                    Compare <input type=\"checkbox\" name=\"products[]\" value=\"" + product.product_id + "\" id=\"compare-" + product.product_id + "\" data-compare-id=\"" + product.product_id + "\">\n                                                </label>\n                                        </div>\n                                    </figcaption>\n                                </figure>\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">\n                                            <a href=\"" + product.product_url + "\">" + product.product_name + "</a>\n                                    </h4>\n\n                                    <div class=\"card-text\" data-test-info-type=\"price\">\n                                            \n                                    <div class=\"price-section price-section--withoutTax rrp-price--withoutTax\" style=\"display: none;\">\n                                        MSRP:\n                                        <span data-product-rrp-price-without-tax=\"\" class=\"price price--rrp\"> \n                                            \n                                        </span>\n                                    </div>\n                                    <div class=\"price-section price-section--withoutTax non-sale-price--withoutTax\" style=\"display: none;\">\n                                        Was:\n                                        <span data-product-non-sale-price-without-tax=\"\" class=\"price price--non-sale\">\n                                            \n                                        </span>\n                                    </div>\n                                    <div class=\"price-section price-section--withoutTax\">\n                                        <span class=\"price-label\">\n                                            \n                                        </span>\n                                        <span class=\"price-now-label\" style=\"display: none;\">\n                                            Now:\n                                        </span>\n                                        <span data-product-price-without-tax=\"\" class=\"price price--withoutTax\">$" + product.base_price + "</span>\n                                    </div>\n                                    </div>\n                                        </div>\n                            </article>\n                        </li>";
    }

    jquery__WEBPACK_IMPORTED_MODULE_7___default()("#product-listing-container .productGrid").html(productsHtml);
  } // for bundleb2b
  ;

  _proto.getAllProductsApi = function getAllProductsApi() {
    var _this2 = this;

    var categoryId = this.context.categoryId;
    var catalogId = sessionStorage.getItem("catalog_id");
    var catalogProducts = JSON.parse(sessionStorage.getItem("catalog_products") || "{}");
    var categoryProducts = []; //url = `https://fl4mq0bm40.execute-api.us-west-2.amazonaws.com/prod/categoryproducts?id=7120300914635706856&category_id=43`;

    jquery__WEBPACK_IMPORTED_MODULE_7___default.a.ajax({
      type: "GET",
      url: _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].apiRootUrl + "/categoryproducts?id=" + catalogId + "&category_id=" + categoryId,
      success: function success(data) {
        console.log("category products", data);

        if (data && data.length > 0) {
          for (var i = 0; i < data.length; i++) {
            if (catalogProducts[data[i].product_id]) {
              categoryProducts.push(data[i]);
            }
          }

          var productsPerPage = _this2.context.categoryProductsPerPage;
          var productsNum = categoryProducts.length;
          var totalPage = Math.ceil(productsNum / productsPerPage);

          if (productsNum > productsPerPage) {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()("#jqPagination").jqPaginator({
              totalPages: totalPage,
              visiblePages: 10,
              currentPage: 1,
              onPageChange: function onPageChange(num, type) {
                var start = (num - 1) * productsPerPage;
                var end = num * productsPerPage > productsNum ? productsNum : num * productsPerPage;

                _this2.renderTable(start, end, categoryProducts);
              }
            });
          } else {
            _this2.renderTable(0, productsNum, categoryProducts); //$("#jqPagination").jqPaginator('destroy');


            jquery__WEBPACK_IMPORTED_MODULE_7___default()("#jqPagination").html("");
          }
        }
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        console.log("error", JSON.stringify(jqXHR));
      }
    });
  } // for bundleb2b
  ;

  _proto.getAllProducts = function getAllProducts() {
    var paginations = this.context.paginationCategory || [];

    if (paginations) {
      for (var i = 1; i < paginations.length; i++) {
        var formatUrl = paginations[i].url;
        var productsPerPage = this.context.categoryProductsPerPage;
        var requestOptions = {
          config: {
            category: {
              shop_by_price: true,
              products: {
                limit: productsPerPage
              }
            }
          },
          template: 'b2b/catalog-product-listing'
        };
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(formatUrl, requestOptions, function (err, content) {
          var $listing = jquery__WEBPACK_IMPORTED_MODULE_7___default()(content);

          if (err) {
            throw new Error(err);
          } // Refresh view with new content


          console.log($listing);
        });
      }
    }
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this3 = this;

    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#product-listing-container');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_9__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('html, body').animate({
        scrollTop: 0
      }, 100);

      _this3.initB2bFeature();

      _this3.initAdvqty();
    });
  };

  _proto.search = function search(url, _callback) {
    var promise = new Promise(function (resolve, reject) {
      jquery__WEBPACK_IMPORTED_MODULE_7___default.a.ajax({
        type: 'GET',
        url: url,
        success: function success(data) {
          if (data.code == 200) {
            resolve(data.response);
          }
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          console.log(JSON.stringify(jqXHR));
        }
      });
    });
    return promise;
  };

  _proto.changeSort = function changeSort() {
    var _this4 = this;

    var result = jquery__WEBPACK_IMPORTED_MODULE_7___default()("#b2b_search_result");
    var sort = "<fieldset class=\"form-fieldset actionBar-section\" style=\"width: 210px; float: none;\">\n\t\t\t\t\t\t<div class=\"form-field\">\n\t\t\t\t\t\t\t<label class=\"form-label\" for=\"sort\">Sort By:</label>\n\t\t\t\t\t\t\t<select class=\"form-select form-select--small\" name=\"sort\" id=\"sort\">\n\t\t\t\t\t\t\t\t<option value=\"updated_date.keyword\" data-sort=\"asc\" selected=\"\">Featured Items</option>\n\t\t\t\t\t\t\t\t<option value=\"updated_date.keyword\" data-sort=\"desc\">Newest Items</option>" + // <option value="bestselling" >Best Selling</option>
    "<option value=\"product_name.keyword\" data-sort=\"asc\">A to Z</option>\n                                <option value=\"product_name.keyword\" data-sort=\"desc\">Z to A</option>" + // <option value="avgcustomerreview" >By Review</option>
    "<option value=\"base_price\" data-sort=\"asc\">Price: Ascending</option>\n\t\t\t\t\t\t\t\t<option value=\"base_price\" data-sort=\"desc\">Price: Descending</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</fieldset>";
    result.prepend(sort);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#sort').on('change', function () {
      _this4.sortField = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#sort').val();
      _this4.sortOrder = jquery__WEBPACK_IMPORTED_MODULE_7___default()("#sort").find("option:selected").data("sort");
      var filterString = "&filtersBy={\"category_id\":\"" + _this4.gCategoryId + "\"}";
      var ajaxUrl = _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].apiRootUrl + "/search?store_hash=" + _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].storeHash + "&is_facets=1&catalog_id=" + _this4.gCatalogId + filterString + "&pageNumber=" + _this4.pageNumber + "&pageSize=" + _this4.pageSize + "&sortField=" + _this4.sortField + "&sortOrder=" + _this4.sortOrder;
      ajaxUrl = encodeURI(ajaxUrl);

      _this4.search(ajaxUrl).then(function (res) {
        _this4._initFacets(res);

        _this4._initProducts(res);
      });
    });
  };

  _proto._initProducts = function _initProducts(res) {
    var ul = jquery__WEBPACK_IMPORTED_MODULE_7___default()("#b2b_search_result").find(".productGrid");
    ul.empty();
    var prods = res.payload;

    if (!prods || prods.length == 0) {
      return;
    }

    for (var i in prods) {
      var base_price = prods[i].base_price;
      var tier_price = void 0;
      var catalog_price = prods[i].calculated_price;
      var product_id = prods[i].product_id;
      var variantArr = this.gCatalogProducts[product_id] || []; // if (variantArr.length == 1) {
      //     tier_price = variantArr[0].tier_price || [];
      //     catalog_price = this.getCatalogPrice(base_price, tier_price, 1);
      // }

      var rrp_price = "<span class=\"b2b-rrp-price\">$" + Object(_b2b_prices_style__WEBPACK_IMPORTED_MODULE_14__["default"])(base_price, 2) + "</span>";

      if (base_price == catalog_price) {
        rrp_price = "";
      } //catalog_price = parseFloat(catalog_price).toFixed(2);


      catalog_price = Object(_b2b_prices_style__WEBPACK_IMPORTED_MODULE_14__["default"])(catalog_price, 2);
      console.log("this is catalog_price " + catalog_price);
      var pro_bg_a = "<a href=\"" + prods[i].product_url + "\">" + "<div class=\"card-img-container\">" + ("<img class=\"card-image lazyautosizes lazyloaded\" data-sizes=\"auto\" src=\"" + prods[i].primary_image.standard_url + "\" data-src=\"" + prods[i].primary_image.standard_url + "\" alt=\"\" title=\"\" sizes=\"263px\">") + "</div></a>";
      var figcaption = "<figcaption class=\"card-figcaption\"><div class=\"card-figcaption-body\">" + ("<a class=\"button button--small card-figcaption-button quickview\" data-product-id=\"" + prods[i].product_id + "\">Quick view</a>") + ("<label class=\"button button--small card-figcaption-button\" for=\"compare-" + prods[i].product_id + "\">Compare ") + ("<input type=\"checkbox\" name=\"products[]\" value=\"" + prods[i].product_id + "\" id=\"compare-" + prods[i].product_id + "\" data-compare-id=\"" + prods[i].product_id + "\">") + "</label>" + "</div></figcaption>";
      var card_body = "<h4 class=\"card-title\"><a href=\"" + prods[i].product_url + "\">" + prods[i].product_name + "</a></h4>" + "<div class=\"card-text\" data-test-info-type=\"price\">" + "<div class=\"price-section price-section--withoutTax non-sale-price--withoutTax\" style=\"display: none;\">Was:" + "<span data-product-non-sale-price-without-tax=\"\" class=\"price price--non-sale\"></span>" + "</div>" + "<div class=\"price-section price-section--withoutTax\">" + "<span class=\"price-label\"></span>" + "<span class=\"price-now-label\" style=\"display: none;\">Now:</span>" + (rrp_price + "<span data-product-price-without-tax=\"\" class=\"price price--withoutTax\">$" + catalog_price + "</span>") + "</div></div>";
      var card_advqty = "",
          product_cariants = prods[i].variants;

      if (prods[i].base_sku == product_cariants[0].variant_sku) {
        card_advqty = "<div class=\"card-cart-action form-increment\" advqty-card-actions>\n                                        <button type=\"button\" class=\"button button--icon\" data-action=\"dec\">\n                                            <span class=\"is-srOnly\">Decrease Quantity:</span>\n                                            <i class=\"icon\" aria-hidden=\"true\">\n                                                <svg>\n                                                    <use xlink:href=\"#icon-keyboard-arrow-down\"/>\n                                                </svg>\n                                            </i>\n                                        </button>\n                                        <input class=\"form-input form-input--incrementTotal\"\n                                               \n                                               type=\"tel\"\n                                               value=\"1\"\n                                               min=\"1\"\n                                               pattern=\"[0-9]*\"\n                                               aria-live=\"polite\"\n                                               autocomplete=\"off\"\n                                               advqty-card-input\n                                               data-advqty-sku=\"" + prods[i].base_sku + "\">\n                                        <button type=\"button\" class=\"button button--icon\" data-action=\"inc\">\n                                            <span class=\"is-srOnly\">Increase Quantity:</span>\n                                            <i class=\"icon\" aria-hidden=\"true\">\n                                                <svg>\n                                                    <use xlink:href=\"#icon-keyboard-arrow-up\"/>\n                                                </svg>\n                                            </i>\n                                        </button>\n                                        <div class=\"advqty-loading-overlay-blank\" data-advqty-increment-overlay></div>\n\n                                        <button type=\"button\" advqty-card-addToCart class=\"button button--small button--primary cart-button\" data-href=\"/cart.php?action=add&product_id=" + prods[i].product_id + "\" data-product-id=\"" + prods[i].product_id + "\"></button>\n                                    </div>";
      }

      ul.append("<li class=\"product\"><article class=\"card\">" + ("<figure class=\"card-figure\">" + pro_bg_a + figcaption + "</figure>") + ("<div class=\"card-body\">" + card_advqty + card_body + "</div>") + "</article></li>");
    }

    this.initAdvqty();
  };

  _proto._initFacets = function _initFacets(res) {
    this.selectedFacets = {};
    var facets = res.facets;
    facets.sort(function (a, b) {
      return a.sort_index - b.sort_index;
    });
    var $productFiltersContainer = jquery__WEBPACK_IMPORTED_MODULE_7___default()("#product-filters-container");
    var filterHtml = "";
    var facetsCount = facets.length;

    for (var i = 0; i < facetsCount; i++) {
      var facet = facets[i];
      var facetHtml = "";

      if (facet.attribute !== "category_id") {
        facetHtml = this.getFacetHtml(facet.type_name, facet.buckets, facet.attribute);
      }

      if (facetHtml.trim() != "") {
        filterHtml += "\n                <div class=\"product-filters-block\" data-attribute=\"" + facet.attribute + "\">\n                    <div class=\"product-filters-title open\">\n                        <h3>" + facet.title + "</h3>\n                        <div class=\"product-filters-title--toggle\">\n                            <span class=\"toggle-open\">&plus;</span>\n                            <span class=\"toggle-close\">&minus;</span>\n                        </div>\n                    </div>\n                    <ul class=\"product-filters-list open\">\n                        " + facetHtml + "\n                    </ul>\n                </div>";
      }
    }

    $productFiltersContainer.html(filterHtml);

    if (filterHtml.trim() == "") {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()("#faceted-search-container-b2b").remove();
    }

    console.log(this.selectedFacets);

    this._bindEvents();
  };

  _proto.getFacetHtml = function getFacetHtml(type_name, buckets, attribute) {
    var facetHtml = "";

    switch (type_name) {
      case "select":
        facetHtml += "";

        for (var j = 0; j < buckets.length; j++) {
          var bucket = buckets[j];
          var bucket_value = bucket.value;
          var isChecked = bucket.select ? 'checked' : '';

          if (bucket.count > 0) {
            facetHtml += "\n                        <li>\n                            <label data-facet-search data-facet-attribute=\"" + attribute + "\" data-facet-value=\"" + bucket_value + "\"><input type=\"checkbox\" value=\"" + bucket.value + "\" " + isChecked + "><span>" + bucket.title + "</span> <span>(" + bucket.count + ")</span></label>\n                        </li>";

            if (isChecked) {
              this.selectedFacets[attribute] = this.selectedFacets[attribute] || [];
              this.selectedFacets[attribute].push(bucket_value + "");
            }
          }
        }

        break;

      case "slider":
        facetHtml += "";

        for (var _j = 0; _j < buckets.length; _j++) {
          var _bucket = buckets[_j];
          var _bucket_value = _bucket.value;

          var _isChecked = _bucket.select ? 'checked' : '';

          if (_bucket.left != 0 || _bucket.right != 0) {
            this.selectedFacets[attribute] = this.selectedFacets[attribute] || [];
            this.selectedFacets[attribute].push(_bucket.left);
            this.selectedFacets[attribute].push(_bucket.right);
            facetHtml += "<li><a href=\"javascript:void(0);\" class=\"clear-price-range\" data-faceted-search-range=\"clear\">Clear</a><div class=\"form-minMaxRow\">\n                            <div class=\"form-field\">\n                                <input name=\"min_price\" placeholder=\"Min.\" min=\"0\" class=\"form-input form-input--small\" required=\"\" type=\"number\" value=\"" + _bucket.left + "\">\n                            </div>\n\n                            <div class=\"form-field\">\n                                <input name=\"max_price\" placeholder=\"Max.\" min=\"0\" class=\"form-input form-input--small\" required=\"\" type=\"number\" value=\"" + _bucket.right + "\">\n                            </div>\n\n                            <div class=\"form-field\">\n                                <button class=\"button button--small\" type=\"button\" data-faceted-search-range>\n                                    Update\n                                </button>\n                            </div>\n                        </div></li>";
          } else {
            facetHtml += "<li><div class=\"form-minMaxRow\">\n                            <div class=\"form-field\">\n                                <input name=\"min_price\" placeholder=\"Min.\" min=\"0\" class=\"form-input form-input--small\" required=\"\" type=\"number\" value=\"\">\n                            </div>\n\n                            <div class=\"form-field\">\n                                <input name=\"max_price\" placeholder=\"Max.\" min=\"0\" class=\"form-input form-input--small\" required=\"\" type=\"number\" value=\"\">\n                            </div>\n\n                            <div class=\"form-field\">\n                                <button class=\"button button--small\" type=\"button\" data-faceted-search-range>\n                                    Update\n                                </button>\n                            </div>\n                        </div></li>";
          }
        }

        break;

      default:
    }

    return facetHtml;
  };

  _proto._bindEvents = function _bindEvents() {
    var _this5 = this;

    jquery__WEBPACK_IMPORTED_MODULE_7___default()(".product-filters-title").unbind().bind('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).toggleClass("open").next('.product-filters-list').toggleClass("open");
    });
    jquery__WEBPACK_IMPORTED_MODULE_7___default()("[data-facet-search]").unbind().bind('click', function (event) {
      event.preventDefault();
      var $target = jquery__WEBPACK_IMPORTED_MODULE_7___default()(event.currentTarget);
      console.log("facet click");
      var $inputCheckBox = $target.find('input[type="checkbox"]');

      if ($inputCheckBox.length > 0 && $inputCheckBox.prop("checked") == true) {
        $inputCheckBox.prop("checked", false);
      } else {
        $inputCheckBox.prop("checked", true);
      }

      var facetAttribute = $target.attr('data-facet-attribute');
      var facetValue = $target.attr('data-facet-value');

      if (_this5.selectedFacets[facetAttribute]) {
        //exist facet
        var value_arr = _this5.selectedFacets[facetAttribute];
        var value_index = jquery__WEBPACK_IMPORTED_MODULE_7___default.a.inArray(facetValue, value_arr);

        if (value_index == -1) {
          // new value, add
          value_arr.push(facetValue);
        } else {
          // exist value, remove
          value_arr.splice(value_index, 1);
        } // if no values, remove the filter


        if (value_arr.length == 0) {
          delete _this5.selectedFacets[facetAttribute];
        }
      } else {
        // new facet
        _this5.selectedFacets[facetAttribute] = [facetValue];
      }

      var filterString = ""; //filtersBy={"category_id":%20"23|41|39|61"}

      jquery__WEBPACK_IMPORTED_MODULE_7___default.a.each(_this5.selectedFacets, function (facet, values) {
        var valuesString = values.join("|");
        filterString += ",\"" + facet + "\":\"" + valuesString + "\"";
      });
      filterString += ",\"category_id\":\"" + _this5.gCategoryId + "\"";

      if (filterString.trim() != "") {
        filterString = filterString.substring(1, filterString.length);
        filterString = "&filtersBy={" + filterString + "}";
      }

      var ajaxUrl2 = _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].apiRootUrl + "/search?store_hash=" + _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].storeHash + "&is_facets=1&catalog_id=" + _this5.gCatalogId + filterString + "&sortField=" + _this5.sortField + "&sortOrder=" + _this5.sortOrder;
      ajaxUrl2 = encodeURI(ajaxUrl2);

      _this5.search(ajaxUrl2).then(function (res) {
        _this5._initFacets(res);

        _this5._initProducts(res);
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_7___default()("[data-faceted-search-range]").unbind().bind('click', function (event) {
      _this5.pageNumber = 1;
      var $target = jquery__WEBPACK_IMPORTED_MODULE_7___default()(event.currentTarget);
      var $minPrice = jquery__WEBPACK_IMPORTED_MODULE_7___default()('input[name="min_price"]');
      var $maxPrice = jquery__WEBPACK_IMPORTED_MODULE_7___default()('input[name="max_price"]');
      var minPriceValue = $minPrice.val();
      var maxPriceValue = $maxPrice.val();

      if (minPriceValue == "" || maxPriceValue == "") {
        return alert("Please enter price range");
      }

      if (minPriceValue == 0 && maxPriceValue == 0) {
        return alert("Please enter price range");
      }

      if (parseInt(minPriceValue) > parseInt(maxPriceValue)) {
        return alert("Min price can't be bigger than Max price");
      }

      if ($target.attr("data-faceted-search-range") == "clear") {
        delete _this5.selectedFacets["calculated_price"];
      } else {
        _this5.selectedFacets["calculated_price"] = [minPriceValue, maxPriceValue];
      }

      var filterString = ""; //filtersBy={"category_id":%20"23|41|39|61"}

      jquery__WEBPACK_IMPORTED_MODULE_7___default.a.each(_this5.selectedFacets, function (facet, values) {
        var valuesString = values.join("|");
        filterString += ",\"" + facet + "\":\"" + valuesString + "\"";
      });
      filterString += ",\"category_id\":\"" + _this5.gCategoryId + "\"";

      if (filterString.trim() != "") {
        filterString = filterString.substring(1, filterString.length);
        filterString = "&filtersBy={" + filterString + "}";
      }

      var ajaxUrl2 = _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].apiRootUrl + "/search?store_hash=" + _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].storeHash + "&is_facets=1&catalog_id=" + _this5.gCatalogId + filterString + "&pageNumber=" + _this5.pageNumber + "&pageSize=" + _this5.pageSize + "&sortField=" + _this5.sortField + "&sortOrder=" + _this5.sortOrder;
      console.log(ajaxUrl2);
      ajaxUrl2 = encodeURI(ajaxUrl2);
      console.log(ajaxUrl2);

      _this5.search(ajaxUrl2).then(function (res) {
        console.log(res);

        _this5._initFacets(res);

        _this5._initProducts(res);

        if (res.total_count == 0) {
          jquery__WEBPACK_IMPORTED_MODULE_7___default()("#jqPagination").html(""); //$(".page-sidebar-b2b").remove();

          return;
        }

        jquery__WEBPACK_IMPORTED_MODULE_7___default()("#jqPagination").jqPaginator({
          totalPages: Math.ceil(res.total_count / _this5.pageSize),
          visiblePages: 5,
          currentPage: _this5.pageNumber,
          onPageChange: function onPageChange(num, type) {
            if (_this5.pageNumber == num) return;
            _this5.pageNumber = num;
            var ajaxUrl = _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].apiRootUrl + "/search?store_hash=" + _b2b_config__WEBPACK_IMPORTED_MODULE_12__["default"].storeHash + "&is_facets=1&catalog_id=" + _this5.gCatalogId + filterString + "&pageNumber=" + _this5.pageNumber + "&pageSize=" + _this5.pageSize + "&sortField=" + _this5.sortField + "&sortOrder=" + _this5.sortOrder;
            ajaxUrl = encodeURI(ajaxUrl);

            _this5.search(ajaxUrl).then(function (res) {
              _this5._initFacets(res);

              _this5._initProducts(res);
            });
          }
        });
      });
    });
  };

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

  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiZ0NhdGFsb2dJZCIsImdDYXRlZ29yeUlkIiwiY2F0ZWdvcnlJZCIsImdDYXRhbG9nUHJvZHVjdHMiLCJzZWxlY3RlZEZhY2V0cyIsInBhZ2VTaXplIiwicGFnZU51bWJlciIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsImluaXRCMmJGZWF0dXJlIiwiaW5pdEIyYkZlYXR1cmVfbyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImVtcHR5IiwiaGlkZSIsImFwcGVuZCIsImdldEFsbFByb2R1Y3RzQXBpIiwiaHRtbCIsImIyYlVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwiY2F0YWxvZ19pZCIsImFkZENsYXNzIiwiZmlsdGVyU3RyaW5nIiwiYWpheFVybCIsImNvbmZpZyIsImFwaVJvb3RVcmwiLCJzdG9yZUhhc2giLCJlbmNvZGVVUkkiLCJzZWFyY2giLCJ0aGVuIiwicmVzIiwiY2hhbmdlU29ydCIsIl9pbml0RmFjZXRzIiwiX2luaXRQcm9kdWN0cyIsInRvdGFsX2NvdW50IiwicmVtb3ZlIiwianFQYWdpbmF0b3IiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJ2aXNpYmxlUGFnZXMiLCJjdXJyZW50UGFnZSIsIm9uUGFnZUNoYW5nZSIsIm51bSIsInR5cGUiLCJyZW5kZXJUYWJsZSIsInN0YXJ0IiwiZW5kIiwiY2F0ZWdvcnlQcm9kdWN0cyIsInByb2R1Y3RzSHRtbCIsImoiLCJwcm9kdWN0IiwicHJvZHVjdF91cmwiLCJwcmltYXJ5X2ltYWdlIiwic3RhbmRhcmRfdXJsIiwicHJvZHVjdF9pZCIsInByb2R1Y3RfbmFtZSIsImJhc2VfcHJpY2UiLCJjYXRhbG9nSWQiLCJjYXRhbG9nUHJvZHVjdHMiLCJhamF4IiwidXJsIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaSIsInB1c2giLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInByb2R1Y3RzTnVtIiwidG90YWxQYWdlIiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInN0cmluZ2lmeSIsImdldEFsbFByb2R1Y3RzIiwicGFnaW5hdGlvbnMiLCJwYWdpbmF0aW9uQ2F0ZWdvcnkiLCJmb3JtYXRVcmwiLCJyZXF1ZXN0T3B0aW9ucyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJjb250ZW50IiwiJGxpc3RpbmciLCJFcnJvciIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJpbml0QWR2cXR5IiwiX2NhbGxiYWNrIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29kZSIsInJlc3BvbnNlIiwicmVzdWx0Iiwic29ydCIsInByZXBlbmQiLCJ2YWwiLCJmaW5kIiwidWwiLCJwcm9kcyIsInBheWxvYWQiLCJ0aWVyX3ByaWNlIiwiY2F0YWxvZ19wcmljZSIsImNhbGN1bGF0ZWRfcHJpY2UiLCJ2YXJpYW50QXJyIiwicnJwX3ByaWNlIiwicHJpY2VzU3R5bGUiLCJwcm9fYmdfYSIsImZpZ2NhcHRpb24iLCJjYXJkX2JvZHkiLCJjYXJkX2FkdnF0eSIsInByb2R1Y3RfY2FyaWFudHMiLCJ2YXJpYW50cyIsImJhc2Vfc2t1IiwidmFyaWFudF9za3UiLCJmYWNldHMiLCJhIiwiYiIsInNvcnRfaW5kZXgiLCIkcHJvZHVjdEZpbHRlcnNDb250YWluZXIiLCJmaWx0ZXJIdG1sIiwiZmFjZXRzQ291bnQiLCJmYWNldCIsImZhY2V0SHRtbCIsImF0dHJpYnV0ZSIsImdldEZhY2V0SHRtbCIsInR5cGVfbmFtZSIsImJ1Y2tldHMiLCJ0cmltIiwidGl0bGUiLCJfYmluZEV2ZW50cyIsImJ1Y2tldCIsImJ1Y2tldF92YWx1ZSIsInZhbHVlIiwiaXNDaGVja2VkIiwic2VsZWN0IiwiY291bnQiLCJsZWZ0IiwicmlnaHQiLCJ1bmJpbmQiLCJ0b2dnbGVDbGFzcyIsIm5leHQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCIkaW5wdXRDaGVja0JveCIsInByb3AiLCJmYWNldEF0dHJpYnV0ZSIsImF0dHIiLCJmYWNldFZhbHVlIiwidmFsdWVfYXJyIiwidmFsdWVfaW5kZXgiLCJpbkFycmF5Iiwic3BsaWNlIiwiZWFjaCIsInZhbHVlcyIsInZhbHVlc1N0cmluZyIsImpvaW4iLCJzdWJzdHJpbmciLCJhamF4VXJsMiIsIiRtaW5QcmljZSIsIiRtYXhQcmljZSIsIm1pblByaWNlVmFsdWUiLCJtYXhQcmljZVZhbHVlIiwiYWxlcnQiLCJwYXJzZUludCIsImdldENhdGFsb2dQcmljZSIsInRpZXJfcHJpY2VfYXJyYXkiLCJxdHkiLCJiYXNlX3F0eSIsInByaWNlIiwiQWR2UXVhbnRpdHlVdGlsIiwiaW5pdExpc3RpbmdDYXJkQWN0aW9uIiwiJGFkdlF0eUlucHV0cyIsInNldFVwQWR2UXR5TXVsdGkiLCJiaW5kSW5wdXRFdmVudHMiLCJiaW5kQnV0dG9uRXZlbnRzIiwidGlwcyIsImxfaWR4IiwibF9pdGVtIiwiJGlucHV0IiwiaGFuZGxlUXVhbnRpdHlDaGFuZ2UiLCJDYXRhbG9nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FB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LENBQUNuQixJQUFkLENBQW1CLFVBQUN3QixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDbEMsWUFBTUMsTUFBTSxHQUFHOU0sNkNBQUMsQ0FBQzZNLE1BQUQsQ0FBaEI7QUFDQVIsd0VBQWUsQ0FBQ1Usb0JBQWhCLENBQXFDLElBQXJDLEVBQTJDRCxNQUEzQyxFQUFtRCxJQUFuRDtBQUNILE9BSEQ7QUFJSCxLQVREO0FBVUgsRzs7O0VBaHVCaUNFLGdEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgaG9va3MsXG4gICAgYXBpXG59IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9iMmIvY29uZmlnJztcbmltcG9ydCAnLi9iMmIvdG9vbHMvanFQYWdpbmF0b3IuanMnO1xuaW1wb3J0IHByaWNlc1N0eWxlIGZyb20gJy4vYjJiL3ByaWNlcy1zdHlsZSc7XG5pbXBvcnQgQWR2UXVhbnRpdHlVdGlsIGZyb20gJy4vYjJiL2NvbW1vbi9hZHZRdWFudGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIGJ1bmRsZWIyYlxuICAgICAgICB0aGlzLmdDYXRhbG9nSWQ7XG4gICAgICAgIHRoaXMuZ0NhdGVnb3J5SWQgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlJZDtcbiAgICAgICAgdGhpcy5nQ2F0YWxvZ1Byb2R1Y3RzO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRmFjZXRzID0ge307XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSAzMDtcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgdGhpcy5zb3J0RmllbGQgPSAndXBkYXRlZF9kYXRlLmtleXdvcmQnO1xuICAgICAgICB0aGlzLnNvcnRPcmRlciA9ICdhc2MnO1xuICAgICAgICB0aGlzLmluaXRCMmJGZWF0dXJlKCk7XG4gICAgfVxuXG4gICAgLy8gZm9yIGJ1bmRsZWIyYlxuICAgIGluaXRCMmJGZWF0dXJlX28oKSB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpICE9IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RHcmlkXCIpLmVtcHR5KCk7XG4gICAgICAgICAgICAkKFwiLnBhZ2luYXRpb25cIikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhdGFsb2dfaWRcIikpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXJcIikuYXBwZW5kKGA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiIGlkPVwianFQYWdpbmF0aW9uXCI+PC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFByb2R1Y3RzQXBpKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIuY2F0YWxvZy1saXN0aW5nLXdyYXBcIikuaHRtbChcIldlIGNhbid0IGZpbmQgcHJvZHVjdHMgbWF0Y2hpbmcgdGhlIHNlbGVjdGlvbi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdEIyYkZlYXR1cmUoKSB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpICE9IFwibm9uZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBiMmJVc2VySW5mbyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJ1bmRsZWIyYl91c2VyXCIpKTtcbiAgICAgICAgICAgIGlmIChiMmJVc2VySW5mby5jYXRhbG9nX2lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nQ2F0YWxvZ0lkID0gYjJiVXNlckluZm8uY2F0YWxvZ19pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY2F0YWxvZ19pZFwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ0NhdGFsb2dJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjYXRhbG9nX2lkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdDYXRhbG9nUHJvZHVjdHMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjYXRhbG9nX3Byb2R1Y3RzXCIpIHx8IFwie31cIik7XG5cbiAgICAgICAgICAgICQoXCIucGFnZVwiKS5hZGRDbGFzcyhcImIyYi1zZWFyY2gtcGFnZVwiKS5odG1sKGA8YXNpZGUgY2xhc3M9XCJwYWdlLXNpZGViYXItYjJiXCIgaWQ9XCJmYWNldGVkLXNlYXJjaC1jb250YWluZXItYjJiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2Utc2lkZWJhci1pbm5lclwiIGlkPVwicHJvZHVjdC1maWx0ZXJzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImIyYl9zZWFyY2hfcmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3RHcmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbi1saXN0XCIgaWQ9XCJqcVBhZ2luYXRpb25cIj48L3VsPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NjZXRpb24+YCk7XG5cblxuICAgICAgICAgICAgY29uc3QgZmlsdGVyU3RyaW5nID0gYCZmaWx0ZXJzQnk9e1wiY2F0ZWdvcnlfaWRcIjpcIiR7dGhpcy5nQ2F0ZWdvcnlJZH1cIn1gO1xuICAgICAgICAgICAgbGV0IGFqYXhVcmwgPSBgJHtjb25maWcuYXBpUm9vdFVybH0vc2VhcmNoP3N0b3JlX2hhc2g9JHtjb25maWcuc3RvcmVIYXNofSZpc19mYWNldHM9MSZjYXRhbG9nX2lkPSR7dGhpcy5nQ2F0YWxvZ0lkfSR7ZmlsdGVyU3RyaW5nfSZwYWdlTnVtYmVyPSR7dGhpcy5wYWdlTnVtYmVyfSZwYWdlU2l6ZT0ke3RoaXMucGFnZVNpemV9JnNvcnRGaWVsZD0ke3RoaXMuc29ydEZpZWxkfSZzb3J0T3JkZXI9JHt0aGlzLnNvcnRPcmRlcn1gO1xuICAgICAgICAgICAgYWpheFVybCA9IGVuY29kZVVSSShhamF4VXJsKTtcblxuICAgICAgICAgICAgdGhpcy5zZWFyY2goYWpheFVybCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU29ydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRGYWNldHMocmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0UHJvZHVjdHMocmVzKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMudG90YWxfY291bnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2pxUGFnaW5hdGlvblwiKS5odG1sKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnBhZ2Utc2lkZWJhci1iMmJcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKFwiI2pxUGFnaW5hdGlvblwiKS5qcVBhZ2luYXRvcih7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbChyZXMudG90YWxfY291bnQgLyB0aGlzLnBhZ2VTaXplKSxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVBhZ2VzOiA1LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U6IChudW0sIHR5cGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VOdW1iZXIgPT0gbnVtKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSBudW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWpheFVybCA9IGAke2NvbmZpZy5hcGlSb290VXJsfS9zZWFyY2g/c3RvcmVfaGFzaD0ke2NvbmZpZy5zdG9yZUhhc2h9JmlzX2ZhY2V0cz0xJmNhdGFsb2dfaWQ9JHt0aGlzLmdDYXRhbG9nSWR9JHtmaWx0ZXJTdHJpbmd9JnBhZ2VOdW1iZXI9JHt0aGlzLnBhZ2VOdW1iZXJ9JnBhZ2VTaXplPSR7dGhpcy5wYWdlU2l6ZX0mc29ydEZpZWxkPSR7dGhpcy5zb3J0RmllbGR9JnNvcnRPcmRlcj0ke3RoaXMuc29ydE9yZGVyfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhamF4VXJsID0gZW5jb2RlVVJJKGFqYXhVcmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goYWpheFVybCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRGYWNldHMocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0UHJvZHVjdHMocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZm9yIGJ1bmRsZWIyYlxuICAgIHJlbmRlclRhYmxlKHN0YXJ0LCBlbmQsIGNhdGVnb3J5UHJvZHVjdHMpIHtcbiAgICAgICAgbGV0IHByb2R1Y3RzSHRtbCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGogPSBzdGFydDsgaiA8IGVuZDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gY2F0ZWdvcnlQcm9kdWN0c1tqXTtcbiAgICAgICAgICAgIHByb2R1Y3RzSHRtbCArPSBgPGxpIGNsYXNzPVwicHJvZHVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwiY2FyZC1maWd1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtwcm9kdWN0LnByb2R1Y3RfdXJsfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZVwiIHNyYz1cIiR7cHJvZHVjdC5wcmltYXJ5X2ltYWdlLnN0YW5kYXJkX3VybH1cIiBhbHQ9XCJcIiB0aXRsZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImNhcmQtZmlnY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZpZ2NhcHRpb24tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc21hbGwgY2FyZC1maWdjYXB0aW9uLWJ1dHRvbiBxdWlja3ZpZXdcIiBkYXRhLXByb2R1Y3QtaWQ9XCIke3Byb2R1Y3QucHJvZHVjdF9pZH1cIj5RdWljayB2aWV3PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc21hbGwgY2FyZC1maWdjYXB0aW9uLWJ1dHRvblwiIGZvcj1cImNvbXBhcmUtJHtwcm9kdWN0LnByb2R1Y3RfaWR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFyZSA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb2R1Y3RzW11cIiB2YWx1ZT1cIiR7cHJvZHVjdC5wcm9kdWN0X2lkfVwiIGlkPVwiY29tcGFyZS0ke3Byb2R1Y3QucHJvZHVjdF9pZH1cIiBkYXRhLWNvbXBhcmUtaWQ9XCIke3Byb2R1Y3QucHJvZHVjdF9pZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3Byb2R1Y3QucHJvZHVjdF91cmx9XCI+JHtwcm9kdWN0LnByb2R1Y3RfbmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCIgZGF0YS10ZXN0LWluZm8tdHlwZT1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBycnAtcHJpY2UtLXdpdGhvdXRUYXhcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTVNSUDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tcnJwXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXhcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2Utbm93LWxhYmVsXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3c6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4kJHtwcm9kdWN0LmJhc2VfcHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgICQoXCIjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdEdyaWRcIikuaHRtbChwcm9kdWN0c0h0bWwpO1xuXG4gICAgfVxuXG4gICAgLy8gZm9yIGJ1bmRsZWIyYlxuICAgIGdldEFsbFByb2R1Y3RzQXBpKCkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5SWQ7XG4gICAgICAgIGNvbnN0IGNhdGFsb2dJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjYXRhbG9nX2lkXCIpO1xuICAgICAgICBjb25zdCBjYXRhbG9nUHJvZHVjdHMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjYXRhbG9nX3Byb2R1Y3RzXCIpIHx8IFwie31cIik7XG4gICAgICAgIGxldCBjYXRlZ29yeVByb2R1Y3RzID0gW107XG4gICAgICAgIC8vdXJsID0gYGh0dHBzOi8vZmw0bXEwYm00MC5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9wcm9kL2NhdGVnb3J5cHJvZHVjdHM/aWQ9NzEyMDMwMDkxNDYzNTcwNjg1NiZjYXRlZ29yeV9pZD00M2A7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiBgJHtjb25maWcuYXBpUm9vdFVybH0vY2F0ZWdvcnlwcm9kdWN0cz9pZD0ke2NhdGFsb2dJZH0mY2F0ZWdvcnlfaWQ9JHtjYXRlZ29yeUlkfWAsXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F0ZWdvcnkgcHJvZHVjdHNcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGFsb2dQcm9kdWN0c1tkYXRhW2ldLnByb2R1Y3RfaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlQcm9kdWN0cy5wdXNoKGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0c051bSA9IGNhdGVnb3J5UHJvZHVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmNlaWwocHJvZHVjdHNOdW0gLyBwcm9kdWN0c1BlclBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdHNOdW0gPiBwcm9kdWN0c1BlclBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjanFQYWdpbmF0aW9uXCIpLmpxUGFnaW5hdG9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVBhZ2VzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U6IChudW0sIHR5cGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSAobnVtIC0gMSkgKiBwcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IChudW0gKiBwcm9kdWN0c1BlclBhZ2UgPiBwcm9kdWN0c051bSkgPyBwcm9kdWN0c051bSA6IG51bSAqIHByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWJsZShzdGFydCwgZW5kLCBjYXRlZ29yeVByb2R1Y3RzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGFibGUoMCwgcHJvZHVjdHNOdW0sIGNhdGVnb3J5UHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8kKFwiI2pxUGFnaW5hdGlvblwiKS5qcVBhZ2luYXRvcignZGVzdHJveScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNqcVBhZ2luYXRpb25cIikuaHRtbChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIEpTT04uc3RyaW5naWZ5KGpxWEhSKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZvciBidW5kbGViMmJcbiAgICBnZXRBbGxQcm9kdWN0cygpIHtcblxuXG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25zID0gdGhpcy5jb250ZXh0LnBhZ2luYXRpb25DYXRlZ29yeSB8fCBbXTtcbiAgICAgICAgaWYgKHBhZ2luYXRpb25zKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFnaW5hdGlvbnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdFVybCA9IHBhZ2luYXRpb25zW2ldLnVybDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2IyYi9jYXRhbG9nLXByb2R1Y3QtbGlzdGluZydcblxuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhcGkuZ2V0UGFnZShmb3JtYXRVcmwsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGxpc3RpbmcgPSAkKGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJGxpc3RpbmcpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdEIyYkZlYXR1cmUoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFkdnF0eSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWFyY2godXJsLCBfY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS5yZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqcVhIUikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgY2hhbmdlU29ydCgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICQoXCIjYjJiX3NlYXJjaF9yZXN1bHRcIik7XG4gICAgICAgIGxldCBzb3J0ID0gYDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZmllbGRzZXQgYWN0aW9uQmFyLXNlY3Rpb25cIiBzdHlsZT1cIndpZHRoOiAyMTBweDsgZmxvYXQ6IG5vbmU7XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCIgZm9yPVwic29ydFwiPlNvcnQgQnk6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzcz1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LS1zbWFsbFwiIG5hbWU9XCJzb3J0XCIgaWQ9XCJzb3J0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInVwZGF0ZWRfZGF0ZS5rZXl3b3JkXCIgZGF0YS1zb3J0PVwiYXNjXCIgc2VsZWN0ZWQ9XCJcIj5GZWF0dXJlZCBJdGVtczwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJ1cGRhdGVkX2RhdGUua2V5d29yZFwiIGRhdGEtc29ydD1cImRlc2NcIj5OZXdlc3QgSXRlbXM8L29wdGlvbj5gICtcbiAgICAgICAgICAgIC8vIDxvcHRpb24gdmFsdWU9XCJiZXN0c2VsbGluZ1wiID5CZXN0IFNlbGxpbmc8L29wdGlvbj5cbiAgICAgICAgICAgIGA8b3B0aW9uIHZhbHVlPVwicHJvZHVjdF9uYW1lLmtleXdvcmRcIiBkYXRhLXNvcnQ9XCJhc2NcIj5BIHRvIFo8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByb2R1Y3RfbmFtZS5rZXl3b3JkXCIgZGF0YS1zb3J0PVwiZGVzY1wiPlogdG8gQTwvb3B0aW9uPmAgK1xuICAgICAgICAgICAgLy8gPG9wdGlvbiB2YWx1ZT1cImF2Z2N1c3RvbWVycmV2aWV3XCIgPkJ5IFJldmlldzwvb3B0aW9uPlxuICAgICAgICAgICAgYDxvcHRpb24gdmFsdWU9XCJiYXNlX3ByaWNlXCIgZGF0YS1zb3J0PVwiYXNjXCI+UHJpY2U6IEFzY2VuZGluZzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJiYXNlX3ByaWNlXCIgZGF0YS1zb3J0PVwiZGVzY1wiPlByaWNlOiBEZXNjZW5kaW5nPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5gO1xuICAgICAgICByZXN1bHQucHJlcGVuZChzb3J0KTtcbiAgICAgICAgJCgnI3NvcnQnKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zb3J0RmllbGQgPSAkKCcjc29ydCcpLnZhbCgpO1xuICAgICAgICAgICAgdGhpcy5zb3J0T3JkZXIgPSAkKFwiI3NvcnRcIikuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS5kYXRhKFwic29ydFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlclN0cmluZyA9IGAmZmlsdGVyc0J5PXtcImNhdGVnb3J5X2lkXCI6XCIke3RoaXMuZ0NhdGVnb3J5SWR9XCJ9YDtcbiAgICAgICAgICAgIGxldCBhamF4VXJsID0gYCR7Y29uZmlnLmFwaVJvb3RVcmx9L3NlYXJjaD9zdG9yZV9oYXNoPSR7Y29uZmlnLnN0b3JlSGFzaH0maXNfZmFjZXRzPTEmY2F0YWxvZ19pZD0ke3RoaXMuZ0NhdGFsb2dJZH0ke2ZpbHRlclN0cmluZ30mcGFnZU51bWJlcj0ke3RoaXMucGFnZU51bWJlcn0mcGFnZVNpemU9JHt0aGlzLnBhZ2VTaXplfSZzb3J0RmllbGQ9JHt0aGlzLnNvcnRGaWVsZH0mc29ydE9yZGVyPSR7dGhpcy5zb3J0T3JkZXJ9YDtcbiAgICAgICAgICAgIGFqYXhVcmwgPSBlbmNvZGVVUkkoYWpheFVybCk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaChhamF4VXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdEZhY2V0cyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRQcm9kdWN0cyhyZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX2luaXRQcm9kdWN0cyhyZXMpIHtcbiAgICAgICAgbGV0IHVsID0gJChcIiNiMmJfc2VhcmNoX3Jlc3VsdFwiKS5maW5kKFwiLnByb2R1Y3RHcmlkXCIpO1xuICAgICAgICB1bC5lbXB0eSgpO1xuXG4gICAgICAgIGxldCBwcm9kcyA9IHJlcy5wYXlsb2FkO1xuICAgICAgICBpZiAoIXByb2RzIHx8IHByb2RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZvciAobGV0IGkgaW4gcHJvZHMpIHtcblxuICAgICAgICAgICAgbGV0IGJhc2VfcHJpY2UgPSBwcm9kc1tpXS5iYXNlX3ByaWNlO1xuICAgICAgICAgICAgbGV0IHRpZXJfcHJpY2U7XG4gICAgICAgICAgICBsZXQgY2F0YWxvZ19wcmljZSA9IHByb2RzW2ldLmNhbGN1bGF0ZWRfcHJpY2U7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0X2lkID0gcHJvZHNbaV0ucHJvZHVjdF9pZDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRBcnIgPSB0aGlzLmdDYXRhbG9nUHJvZHVjdHNbcHJvZHVjdF9pZF0gfHwgW107XG4gICAgICAgICAgICAvLyBpZiAodmFyaWFudEFyci5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgLy8gICAgIHRpZXJfcHJpY2UgPSB2YXJpYW50QXJyWzBdLnRpZXJfcHJpY2UgfHwgW107XG4gICAgICAgICAgICAvLyAgICAgY2F0YWxvZ19wcmljZSA9IHRoaXMuZ2V0Q2F0YWxvZ1ByaWNlKGJhc2VfcHJpY2UsIHRpZXJfcHJpY2UsIDEpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBsZXQgcnJwX3ByaWNlID0gYDxzcGFuIGNsYXNzPVwiYjJiLXJycC1wcmljZVwiPiQke3ByaWNlc1N0eWxlKGJhc2VfcHJpY2UsIDIpfTwvc3Bhbj5gO1xuXG4gICAgICAgICAgICBpZiAoYmFzZV9wcmljZSA9PSBjYXRhbG9nX3ByaWNlKSB7XG4gICAgICAgICAgICAgICAgcnJwX3ByaWNlID0gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9jYXRhbG9nX3ByaWNlID0gcGFyc2VGbG9hdChjYXRhbG9nX3ByaWNlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgY2F0YWxvZ19wcmljZSA9IHByaWNlc1N0eWxlKGNhdGFsb2dfcHJpY2UsIDIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGNhdGFsb2dfcHJpY2UgXCIgKyBjYXRhbG9nX3ByaWNlKTtcblxuICAgICAgICAgICAgbGV0IHByb19iZ19hID0gYDxhIGhyZWY9XCIke3Byb2RzW2ldLnByb2R1Y3RfdXJsfVwiPmAgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiY2FyZC1pbWctY29udGFpbmVyXCI+YCArXG4gICAgICAgICAgICAgICAgYDxpbWcgY2xhc3M9XCJjYXJkLWltYWdlIGxhenlhdXRvc2l6ZXMgbGF6eWxvYWRlZFwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgc3JjPVwiJHtwcm9kc1tpXS5wcmltYXJ5X2ltYWdlLnN0YW5kYXJkX3VybH1cIiBkYXRhLXNyYz1cIiR7cHJvZHNbaV0ucHJpbWFyeV9pbWFnZS5zdGFuZGFyZF91cmx9XCIgYWx0PVwiXCIgdGl0bGU9XCJcIiBzaXplcz1cIjI2M3B4XCI+YCArXG4gICAgICAgICAgICAgICAgYDwvZGl2PjwvYT5gO1xuICAgICAgICAgICAgbGV0IGZpZ2NhcHRpb24gPSBgPGZpZ2NhcHRpb24gY2xhc3M9XCJjYXJkLWZpZ2NhcHRpb25cIj48ZGl2IGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uLWJvZHlcIj5gICtcbiAgICAgICAgICAgICAgICBgPGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zbWFsbCBjYXJkLWZpZ2NhcHRpb24tYnV0dG9uIHF1aWNrdmlld1wiIGRhdGEtcHJvZHVjdC1pZD1cIiR7cHJvZHNbaV0ucHJvZHVjdF9pZH1cIj5RdWljayB2aWV3PC9hPmAgK1xuICAgICAgICAgICAgICAgIGA8bGFiZWwgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zbWFsbCBjYXJkLWZpZ2NhcHRpb24tYnV0dG9uXCIgZm9yPVwiY29tcGFyZS0ke3Byb2RzW2ldLnByb2R1Y3RfaWR9XCI+Q29tcGFyZSBgICtcbiAgICAgICAgICAgICAgICBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm9kdWN0c1tdXCIgdmFsdWU9XCIke3Byb2RzW2ldLnByb2R1Y3RfaWR9XCIgaWQ9XCJjb21wYXJlLSR7cHJvZHNbaV0ucHJvZHVjdF9pZH1cIiBkYXRhLWNvbXBhcmUtaWQ9XCIke3Byb2RzW2ldLnByb2R1Y3RfaWR9XCI+YCArXG4gICAgICAgICAgICAgICAgYDwvbGFiZWw+YCArXG4gICAgICAgICAgICAgICAgYDwvZGl2PjwvZmlnY2FwdGlvbj5gO1xuXG4gICAgICAgICAgICBsZXQgY2FyZF9ib2R5ID0gYDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj48YSBocmVmPVwiJHtwcm9kc1tpXS5wcm9kdWN0X3VybH1cIj4ke3Byb2RzW2ldLnByb2R1Y3RfbmFtZX08L2E+PC9oND5gICtcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiIGRhdGEtdGVzdC1pbmZvLXR5cGU9XCJwcmljZVwiPmAgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPldhczpgICtcbiAgICAgICAgICAgICAgICBgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj48L3NwYW4+YCArXG4gICAgICAgICAgICAgICAgYDwvZGl2PmAgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+YCArXG4gICAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwicHJpY2UtbGFiZWxcIj48L3NwYW4+YCArXG4gICAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwicHJpY2Utbm93LWxhYmVsXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPk5vdzo8L3NwYW4+YCArXG4gICAgICAgICAgICAgICAgYCR7cnJwX3ByaWNlfTxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4kJHtjYXRhbG9nX3ByaWNlfTwvc3Bhbj5gICtcbiAgICAgICAgICAgICAgICBgPC9kaXY+PC9kaXY+YDtcblxuICAgICAgICAgICAgbGV0IGNhcmRfYWR2cXR5ID0gXCJcIixcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2NhcmlhbnRzID0gcHJvZHNbaV0udmFyaWFudHM7XG4gICAgICAgICAgICBpZiAocHJvZHNbaV0uYmFzZV9za3UgPT0gcHJvZHVjdF9jYXJpYW50c1swXS52YXJpYW50X3NrdSkge1xuICAgICAgICAgICAgICAgIGNhcmRfYWR2cXR5ID0gYDxkaXYgY2xhc3M9XCJjYXJkLWNhcnQtYWN0aW9uIGZvcm0taW5jcmVtZW50XCIgYWR2cXR5LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb25cIiBkYXRhLWFjdGlvbj1cImRlY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkRlY3JlYXNlIFF1YW50aXR5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWtleWJvYXJkLWFycm93LWRvd25cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0taW5wdXQgZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2cXR5LWNhcmQtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hZHZxdHktc2t1PVwiJHtwcm9kc1tpXS5iYXNlX3NrdX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb25cIiBkYXRhLWFjdGlvbj1cImluY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkluY3JlYXNlIFF1YW50aXR5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWtleWJvYXJkLWFycm93LXVwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWR2cXR5LWxvYWRpbmctb3ZlcmxheS1ibGFua1wiIGRhdGEtYWR2cXR5LWluY3JlbWVudC1vdmVybGF5PjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYWR2cXR5LWNhcmQtYWRkVG9DYXJ0IGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc21hbGwgYnV0dG9uLS1wcmltYXJ5IGNhcnQtYnV0dG9uXCIgZGF0YS1ocmVmPVwiL2NhcnQucGhwP2FjdGlvbj1hZGQmcHJvZHVjdF9pZD0ke3Byb2RzW2ldLnByb2R1Y3RfaWR9XCIgZGF0YS1wcm9kdWN0LWlkPVwiJHtwcm9kc1tpXS5wcm9kdWN0X2lkfVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdWwuYXBwZW5kKGA8bGkgY2xhc3M9XCJwcm9kdWN0XCI+PGFydGljbGUgY2xhc3M9XCJjYXJkXCI+YCArXG4gICAgICAgICAgICAgICAgYDxmaWd1cmUgY2xhc3M9XCJjYXJkLWZpZ3VyZVwiPiR7cHJvX2JnX2F9JHtmaWdjYXB0aW9ufTwvZmlndXJlPmAgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+JHtjYXJkX2FkdnF0eX0ke2NhcmRfYm9keX08L2Rpdj5gICtcbiAgICAgICAgICAgICAgICBgPC9hcnRpY2xlPjwvbGk+YClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdEFkdnF0eSgpO1xuICAgIH1cblxuICAgIF9pbml0RmFjZXRzKHJlcykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRmFjZXRzID0ge307XG4gICAgICAgIGNvbnN0IGZhY2V0cyA9IHJlcy5mYWNldHM7XG4gICAgICAgIGZhY2V0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS5zb3J0X2luZGV4IC0gYi5zb3J0X2luZGV4O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RGaWx0ZXJzQ29udGFpbmVyID0gJChcIiNwcm9kdWN0LWZpbHRlcnMtY29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgZmlsdGVySHRtbCA9IFwiXCI7XG4gICAgICAgIGxldCBmYWNldHNDb3VudCA9IGZhY2V0cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZXRzQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZmFjZXQgPSBmYWNldHNbaV07XG5cbiAgICAgICAgICAgIGxldCBmYWNldEh0bWwgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGZhY2V0LmF0dHJpYnV0ZSAhPT0gXCJjYXRlZ29yeV9pZFwiKSB7XG4gICAgICAgICAgICAgICAgZmFjZXRIdG1sID0gdGhpcy5nZXRGYWNldEh0bWwoZmFjZXQudHlwZV9uYW1lLCBmYWNldC5idWNrZXRzLCBmYWNldC5hdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmFjZXRIdG1sLnRyaW0oKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVySHRtbCArPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtZmlsdGVycy1ibG9ja1wiIGRhdGEtYXR0cmlidXRlPVwiJHtmYWNldC5hdHRyaWJ1dGV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWZpbHRlcnMtdGl0bGUgb3BlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiR7ZmFjZXQudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWZpbHRlcnMtdGl0bGUtLXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLW9wZW5cIj4mcGx1czs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGUtY2xvc2VcIj4mbWludXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9kdWN0LWZpbHRlcnMtbGlzdCBvcGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZhY2V0SHRtbH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdEZpbHRlcnNDb250YWluZXIuaHRtbChmaWx0ZXJIdG1sKTtcbiAgICAgICAgaWYgKGZpbHRlckh0bWwudHJpbSgpID09IFwiXCIpIHtcbiAgICAgICAgICAgICQoXCIjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyLWIyYlwiKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRGYWNldHMpO1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG5cbiAgICB9XG5cbiAgICBnZXRGYWNldEh0bWwodHlwZV9uYW1lLCBidWNrZXRzLCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgbGV0IGZhY2V0SHRtbCA9IFwiXCI7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlX25hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgICAgICAgICBmYWNldEh0bWwgKz0gXCJcIjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1Y2tldHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVja2V0ID0gYnVja2V0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVja2V0X3ZhbHVlID0gYnVja2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSBidWNrZXQuc2VsZWN0ID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWNrZXQuY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldEh0bWwgKz0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLWZhY2V0LXNlYXJjaCBkYXRhLWZhY2V0LWF0dHJpYnV0ZT1cIiR7YXR0cmlidXRlfVwiIGRhdGEtZmFjZXQtdmFsdWU9XCIke2J1Y2tldF92YWx1ZX1cIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCIke2J1Y2tldC52YWx1ZX1cIiAke2lzQ2hlY2tlZH0+PHNwYW4+JHtidWNrZXQudGl0bGV9PC9zcGFuPiA8c3Bhbj4oJHtidWNrZXQuY291bnR9KTwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdID0gdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGYWNldHNbYXR0cmlidXRlXS5wdXNoKGJ1Y2tldF92YWx1ZSArIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNsaWRlclwiOlxuICAgICAgICAgICAgICAgIGZhY2V0SHRtbCArPSBcIlwiO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnVja2V0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWNrZXQgPSBidWNrZXRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWNrZXRfdmFsdWUgPSBidWNrZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGJ1Y2tldC5zZWxlY3QgPyAnY2hlY2tlZCcgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVja2V0LmxlZnQgIT0gMCB8fCBidWNrZXQucmlnaHQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdID0gdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdLnB1c2goYnVja2V0LmxlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdLnB1c2goYnVja2V0LnJpZ2h0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRIdG1sICs9IGA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImNsZWFyLXByaWNlLXJhbmdlXCIgZGF0YS1mYWNldGVkLXNlYXJjaC1yYW5nZT1cImNsZWFyXCI+Q2xlYXI8L2E+PGRpdiBjbGFzcz1cImZvcm0tbWluTWF4Um93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtaW5fcHJpY2VcIiBwbGFjZWhvbGRlcj1cIk1pbi5cIiBtaW49XCIwXCIgY2xhc3M9XCJmb3JtLWlucHV0IGZvcm0taW5wdXQtLXNtYWxsXCIgcmVxdWlyZWQ9XCJcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIke2J1Y2tldC5sZWZ0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtYXhfcHJpY2VcIiBwbGFjZWhvbGRlcj1cIk1heC5cIiBtaW49XCIwXCIgY2xhc3M9XCJmb3JtLWlucHV0IGZvcm0taW5wdXQtLXNtYWxsXCIgcmVxdWlyZWQ9XCJcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIke2J1Y2tldC5yaWdodH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zbWFsbFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWZhY2V0ZWQtc2VhcmNoLXJhbmdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9saT5gO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRIdG1sICs9IGA8bGk+PGRpdiBjbGFzcz1cImZvcm0tbWluTWF4Um93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtaW5fcHJpY2VcIiBwbGFjZWhvbGRlcj1cIk1pbi5cIiBtaW49XCIwXCIgY2xhc3M9XCJmb3JtLWlucHV0IGZvcm0taW5wdXQtLXNtYWxsXCIgcmVxdWlyZWQ9XCJcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibWF4X3ByaWNlXCIgcGxhY2Vob2xkZXI9XCJNYXguXCIgbWluPVwiMFwiIGNsYXNzPVwiZm9ybS1pbnB1dCBmb3JtLWlucHV0LS1zbWFsbFwiIHJlcXVpcmVkPVwiXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc21hbGxcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1mYWNldGVkLXNlYXJjaC1yYW5nZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+YDtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhY2V0SHRtbDtcblxuICAgIH1cblxuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICAkKFwiLnByb2R1Y3QtZmlsdGVycy10aXRsZVwiKS51bmJpbmQoKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIikubmV4dCgnLnByb2R1Y3QtZmlsdGVycy1saXN0JykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiW2RhdGEtZmFjZXQtc2VhcmNoXVwiKS51bmJpbmQoKS5iaW5kKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWNldCBjbGlja1wiKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dENoZWNrQm94ID0gJHRhcmdldC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbiAgICAgICAgICAgIGlmICgkaW5wdXRDaGVja0JveC5sZW5ndGggPiAwICYmICRpbnB1dENoZWNrQm94LnByb3AoXCJjaGVja2VkXCIpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkaW5wdXRDaGVja0JveC5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGlucHV0Q2hlY2tCb3gucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZhY2V0QXR0cmlidXRlID0gJHRhcmdldC5hdHRyKCdkYXRhLWZhY2V0LWF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgY29uc3QgZmFjZXRWYWx1ZSA9ICR0YXJnZXQuYXR0cignZGF0YS1mYWNldC12YWx1ZScpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEZhY2V0c1tmYWNldEF0dHJpYnV0ZV0pIHtcbiAgICAgICAgICAgICAgICAvL2V4aXN0IGZhY2V0XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlX2FyciA9IHRoaXMuc2VsZWN0ZWRGYWNldHNbZmFjZXRBdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlX2luZGV4ID0gJC5pbkFycmF5KGZhY2V0VmFsdWUsIHZhbHVlX2Fycik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlX2luZGV4ID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyB2YWx1ZSwgYWRkXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlX2Fyci5wdXNoKGZhY2V0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGV4aXN0IHZhbHVlLCByZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVfYXJyLnNwbGljZSh2YWx1ZV9pbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gdmFsdWVzLCByZW1vdmUgdGhlIGZpbHRlclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZV9hcnIubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRGYWNldHNbZmFjZXRBdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBuZXcgZmFjZXRcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmFjZXRzW2ZhY2V0QXR0cmlidXRlXSA9IFtmYWNldFZhbHVlXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZpbHRlclN0cmluZyA9IFwiXCI7IC8vZmlsdGVyc0J5PXtcImNhdGVnb3J5X2lkXCI6JTIwXCIyM3w0MXwzOXw2MVwifVxuXG4gICAgICAgICAgICAkLmVhY2godGhpcy5zZWxlY3RlZEZhY2V0cywgZnVuY3Rpb24oZmFjZXQsIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlc1N0cmluZyA9IHZhbHVlcy5qb2luKFwifFwiKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXJTdHJpbmcgKz0gYCxcIiR7ZmFjZXR9XCI6XCIke3ZhbHVlc1N0cmluZ31cImA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmlsdGVyU3RyaW5nICs9IGAsXCJjYXRlZ29yeV9pZFwiOlwiJHt0aGlzLmdDYXRlZ29yeUlkfVwiYDtcblxuICAgICAgICAgICAgaWYgKGZpbHRlclN0cmluZy50cmltKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGZpbHRlclN0cmluZyA9IGZpbHRlclN0cmluZy5zdWJzdHJpbmcoMSwgZmlsdGVyU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgZmlsdGVyU3RyaW5nID0gXCImZmlsdGVyc0J5PXtcIiArIGZpbHRlclN0cmluZyArIFwifVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYWpheFVybDIgPSBgJHtjb25maWcuYXBpUm9vdFVybH0vc2VhcmNoP3N0b3JlX2hhc2g9JHtjb25maWcuc3RvcmVIYXNofSZpc19mYWNldHM9MSZjYXRhbG9nX2lkPSR7dGhpcy5nQ2F0YWxvZ0lkfSR7ZmlsdGVyU3RyaW5nfSZzb3J0RmllbGQ9JHt0aGlzLnNvcnRGaWVsZH0mc29ydE9yZGVyPSR7dGhpcy5zb3J0T3JkZXJ9YDtcbiAgICAgICAgICAgIGFqYXhVcmwyID0gZW5jb2RlVVJJKGFqYXhVcmwyKTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoKGFqYXhVcmwyKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdEZhY2V0cyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRQcm9kdWN0cyhyZXMpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiW2RhdGEtZmFjZXRlZC1zZWFyY2gtcmFuZ2VdXCIpLnVuYmluZCgpLmJpbmQoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCAkbWluUHJpY2UgPSAkKCdpbnB1dFtuYW1lPVwibWluX3ByaWNlXCJdJyk7XG4gICAgICAgICAgICBjb25zdCAkbWF4UHJpY2UgPSAkKCdpbnB1dFtuYW1lPVwibWF4X3ByaWNlXCJdJyk7XG4gICAgICAgICAgICBjb25zdCBtaW5QcmljZVZhbHVlID0gJG1pblByaWNlLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgbWF4UHJpY2VWYWx1ZSA9ICRtYXhQcmljZS52YWwoKTtcbiAgICAgICAgICAgIGlmIChtaW5QcmljZVZhbHVlID09IFwiXCIgfHwgbWF4UHJpY2VWYWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGVudGVyIHByaWNlIHJhbmdlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1pblByaWNlVmFsdWUgPT0gMCAmJiBtYXhQcmljZVZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgZW50ZXIgcHJpY2UgcmFuZ2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQobWluUHJpY2VWYWx1ZSkgPiBwYXJzZUludChtYXhQcmljZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydChcIk1pbiBwcmljZSBjYW4ndCBiZSBiaWdnZXIgdGhhbiBNYXggcHJpY2VcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWZhY2V0ZWQtc2VhcmNoLXJhbmdlXCIpID09IFwiY2xlYXJcIikge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkRmFjZXRzW1wiY2FsY3VsYXRlZF9wcmljZVwiXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZhY2V0c1tcImNhbGN1bGF0ZWRfcHJpY2VcIl0gPSBbbWluUHJpY2VWYWx1ZSwgbWF4UHJpY2VWYWx1ZV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgbGV0IGZpbHRlclN0cmluZyA9IFwiXCI7IC8vZmlsdGVyc0J5PXtcImNhdGVnb3J5X2lkXCI6JTIwXCIyM3w0MXwzOXw2MVwifVxuXG4gICAgICAgICAgICAkLmVhY2godGhpcy5zZWxlY3RlZEZhY2V0cywgZnVuY3Rpb24oZmFjZXQsIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlc1N0cmluZyA9IHZhbHVlcy5qb2luKFwifFwiKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXJTdHJpbmcgKz0gYCxcIiR7ZmFjZXR9XCI6XCIke3ZhbHVlc1N0cmluZ31cImA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmlsdGVyU3RyaW5nICs9IGAsXCJjYXRlZ29yeV9pZFwiOlwiJHt0aGlzLmdDYXRlZ29yeUlkfVwiYDtcblxuICAgICAgICAgICAgaWYgKGZpbHRlclN0cmluZy50cmltKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGZpbHRlclN0cmluZyA9IGZpbHRlclN0cmluZy5zdWJzdHJpbmcoMSwgZmlsdGVyU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgZmlsdGVyU3RyaW5nID0gXCImZmlsdGVyc0J5PXtcIiArIGZpbHRlclN0cmluZyArIFwifVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYWpheFVybDIgPSBgJHtjb25maWcuYXBpUm9vdFVybH0vc2VhcmNoP3N0b3JlX2hhc2g9JHtjb25maWcuc3RvcmVIYXNofSZpc19mYWNldHM9MSZjYXRhbG9nX2lkPSR7dGhpcy5nQ2F0YWxvZ0lkfSR7ZmlsdGVyU3RyaW5nfSZwYWdlTnVtYmVyPSR7dGhpcy5wYWdlTnVtYmVyfSZwYWdlU2l6ZT0ke3RoaXMucGFnZVNpemV9JnNvcnRGaWVsZD0ke3RoaXMuc29ydEZpZWxkfSZzb3J0T3JkZXI9JHt0aGlzLnNvcnRPcmRlcn1gO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWpheFVybDIpO1xuICAgICAgICAgICAgYWpheFVybDIgPSBlbmNvZGVVUkkoYWpheFVybDIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWpheFVybDIpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2goYWpheFVybDIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdEZhY2V0cyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRQcm9kdWN0cyhyZXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcy50b3RhbF9jb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjanFQYWdpbmF0aW9uXCIpLmh0bWwoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vJChcIi5wYWdlLXNpZGViYXItYjJiXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJChcIiNqcVBhZ2luYXRpb25cIikuanFQYWdpbmF0b3Ioe1xuICAgICAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwocmVzLnRvdGFsX2NvdW50IC8gdGhpcy5wYWdlU2l6ZSksXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVQYWdlczogNSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMucGFnZU51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiAobnVtLCB0eXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlTnVtYmVyID09IG51bSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gbnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFqYXhVcmwgPSBgJHtjb25maWcuYXBpUm9vdFVybH0vc2VhcmNoP3N0b3JlX2hhc2g9JHtjb25maWcuc3RvcmVIYXNofSZpc19mYWNldHM9MSZjYXRhbG9nX2lkPSR7dGhpcy5nQ2F0YWxvZ0lkfSR7ZmlsdGVyU3RyaW5nfSZwYWdlTnVtYmVyPSR7dGhpcy5wYWdlTnVtYmVyfSZwYWdlU2l6ZT0ke3RoaXMucGFnZVNpemV9JnNvcnRGaWVsZD0ke3RoaXMuc29ydEZpZWxkfSZzb3J0T3JkZXI9JHt0aGlzLnNvcnRPcmRlcn1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWpheFVybCA9IGVuY29kZVVSSShhamF4VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKGFqYXhVcmwpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0RmFjZXRzKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdFByb2R1Y3RzKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENhdGFsb2dQcmljZShiYXNlX3ByaWNlLCB0aWVyX3ByaWNlX2FycmF5LCBxdHkpIHtcbiAgICAgICAgLy9sZXQgdGllcl9wcmljZSA9IGJhc2VfcHJpY2U7XG4gICAgICAgIGxldCB0aWVyX3ByaWNlID0gYmFzZV9wcmljZTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRpZXJfcHJpY2VfYXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnR5cGU7XG4gICAgICAgICAgICBjb25zdCBiYXNlX3F0eSA9IHRpZXJfcHJpY2VfYXJyYXlbal0ucXR5O1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnByaWNlO1xuXG4gICAgICAgICAgICBpZiAocXR5ID49IGJhc2VfcXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBwcmljZTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBiYXNlX3ByaWNlIC0gYmFzZV9wcmljZSAqIHByaWNlIC8gMTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGllcl9wcmljZTtcbiAgICB9XG5cbiAgICBpbml0QWR2cXR5KCkge1xuICAgICAgICBBZHZRdWFudGl0eVV0aWwuaW5pdExpc3RpbmdDYXJkQWN0aW9uKCk7XG4gICAgICAgIGNvbnN0ICRhZHZRdHlJbnB1dHMgPSAkKFwiW2FkdnF0eS1jYXJkLWFjdGlvbnNdIFthZHZxdHktY2FyZC1pbnB1dF1cIik7XG4gICAgICAgIEFkdlF1YW50aXR5VXRpbC5zZXRVcEFkdlF0eU11bHRpKCRhZHZRdHlJbnB1dHMsIHtcbiAgICAgICAgICAgIGJpbmRJbnB1dEV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgIGJpbmRCdXR0b25FdmVudHM6IHRydWUsXG4gICAgICAgICAgICB0aXBzOiB0cnVlXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICRhZHZRdHlJbnB1dHMuZWFjaCgobF9pZHgsIGxfaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQobF9pdGVtKTtcbiAgICAgICAgICAgICAgICBBZHZRdWFudGl0eVV0aWwuaGFuZGxlUXVhbnRpdHlDaGFuZ2UobnVsbCwgJGlucHV0LCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==