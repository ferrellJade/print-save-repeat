import {
    hooks
} from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import $ from 'jquery';
import FacetedSearch from './common/faceted-search';
import urlUtils from './common/url-utils';
import Url from 'url';
import compareProducts from './global/compare-products';
import collapsibleFactory from './common/collapsible';
import 'jstree';
import nod from './common/nod';
import AdvQuantityUtil from './b2b/common/advQuantity';

export default class Search extends CatalogPage {
    formatCategoryTreeForJSTree(node) {
        const nodeData = {
            text: node.data,
            id: node.metadata.id,
            state: {
                selected: node.selected,
            },
        };

        if (node.state) {
            nodeData.state.opened = node.state === 'open';
            nodeData.children = true;
        }

        if (node.children) {
            nodeData.children = [];
            node.children.forEach((childNode) => {
                nodeData.children.push(this.formatCategoryTreeForJSTree(childNode));
            });
        }

        return nodeData;
    }

    showProducts() {
        const url = urlUtils.replaceParams(window.location.href, {
            section: 'product',
        });

        this.$productListingContainer.removeClass('u-hiddenVisually');
        this.$facetedSearchContainer.removeClass('u-hiddenVisually');
        this.$contentResultsContainer.addClass('u-hiddenVisually');

        $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
        $('[data-content-results-toggle]').addClass('navBar-action');

        $('[data-product-results-toggle]').removeClass('navBar-action');
        $('[data-product-results-toggle]').addClass('navBar-action-color--active');

        urlUtils.goToUrl(url);
    }

    showContent() {
        const url = urlUtils.replaceParams(window.location.href, {
            section: 'content',
        });

        this.$contentResultsContainer.removeClass('u-hiddenVisually');
        this.$productListingContainer.addClass('u-hiddenVisually');
        this.$facetedSearchContainer.addClass('u-hiddenVisually');

        $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
        $('[data-product-results-toggle]').addClass('navBar-action');

        $('[data-content-results-toggle]').removeClass('navBar-action');
        $('[data-content-results-toggle]').addClass('navBar-action-color--active');

        urlUtils.goToUrl(url);
    }

    onReady() {
        compareProducts(this.context.urls);
        
        const $searchForm = $('[data-advanced-search-form]');
        const $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
        const url = Url.parse(window.location.href, true);
        const treeData = [];
        this.$productListingContainer = $('#product-listing-container');
        this.$facetedSearchContainer = $('#faceted-search-container');
        this.$contentResultsContainer = $('#search-results-content');

        // Init faceted search
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        // Init collapsibles
        collapsibleFactory();

        $('[data-product-results-toggle]').on('click', event => {
            event.preventDefault();
            this.showProducts();
        });

        $('[data-content-results-toggle]').on('click', event => {
            event.preventDefault();
            this.showContent();
        });

        if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
            this.showContent();
        } else {
            this.showProducts();
        }

        const validator = this.initValidation($searchForm)
            .bindValidation($searchForm.find('#search_query_adv'));

        this.context.categoryTree.forEach((node) => {
            treeData.push(this.formatCategoryTreeForJSTree(node));
        });

        this.categoryTreeData = treeData;
        this.createCategoryTree($categoryTreeContainer);

        $searchForm.on('submit', event => {
            const selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

            if (!validator.check()) {
                return event.preventDefault();
            }

            $searchForm.find('input[name="category\[\]"]').remove();

            for (const categoryId of selectedCategoryIds) {
                const input = $('<input>', {
                    type: 'hidden',
                    name: 'category[]',
                    value: categoryId,
                });

                $searchForm.append(input);
            }
        });

        //for b2b user
        if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
            $(".body").addClass("b2b-products");
            this.handleCatalogProducts();
        } else {
            $(".navList-item .product-count").show();
        }

    }

    loadTreeNodes(node, cb) {
        $.ajax({
            url: '/remote/v1/category-tree',
            data: {
                selectedCategoryId: node.id,
                prefix: 'category',
            },
            headers: {
                'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : '',
            },
        }).done(data => {
            const formattedResults = [];

            data.forEach((dataNode) => {
                formattedResults.push(this.formatCategoryTreeForJSTree(dataNode));
            });

            cb(formattedResults);
        });
    }

    createCategoryTree($container) {
        const treeOptions = {
            core: {
                data: (node, cb) => {
                    // Root node
                    if (node.id === '#') {
                        cb(this.categoryTreeData);
                    } else {
                        // Lazy loaded children
                        this.loadTreeNodes(node, cb);
                    }
                },
                themes: {
                    icons: true,
                },
            },
            checkbox: {
                three_state: false,
            },
            plugins: [
                'checkbox',
            ],
        };

        $container.jstree(treeOptions);
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const $searchHeading = $('#search-results-heading');
        const $searchCount = $('#search-results-product-count');
        const productsPerPage = this.context.searchProductsPerPage;
        const requestOptions = {
            template: {
                productListing: 'search/product-listing',
                sidebar: 'search/sidebar',
                heading: 'search/heading',
                productCount: 'search/product-count',
            },
            config: {
                product_results: {
                    limit: productsPerPage,
                },
            },
            showMore: 'search/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);
            $searchHeading.html(content.heading);
            $searchCount.html(content.productCount);
            if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
                //for b2b user
                this.handleCatalogProducts();
            } else {
                //for non b2b user
                $(".navList-item .product-count").show();
            }
            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        });
    }

    initValidation($form) {
        this.$form = $form;
        this.validator = nod({
            submit: $form,
        });

        return this;
    }

    bindValidation($element) {
        if (this.validator) {
            this.validator.add({
                selector: $element,
                validate: 'presence',
                errorMessage: $element.data('errorMessage'),
            });
        }

        return this;
    }

    check() {
        if (this.validator) {
            this.validator.performCheck();
            return this.validator.areAll('valid');
        }

        return false;
    }
    //for b2b
    handleCatalogProducts() {
        const catalog_products = JSON.parse(sessionStorage.getItem("catalog_products"));
        const products = $(".product");

        for (var product_id in catalog_products) {

            const productSelector = `[catalog-product-${product_id}]`;
            if ($(`${productSelector}`).length > 0) {

                $(`${productSelector}`).attr("catalog-product", "true");

                let base_price = $(`${productSelector}`).find(".price.price--withTax").text().replace("$", "").replace(",", "") || $(`${productSelector}`).find(".price.price--withoutTax").text().replace("$", "").replace(",", "");
                let tier_price;
                let catalog_price;
                const variantArr = catalog_products[product_id] || [];
                if (variantArr.length == 1) {
                    tier_price = variantArr[0].tier_price || [];
                    catalog_price = this.getCatalogPrice(base_price, tier_price, 1);
                }
                if (catalog_price) {
                    $(`${productSelector}`).find(".price.price--withoutTax").text("$" + parseFloat(catalog_price).toFixed(2));
                    $(`${productSelector}`).find(".price.price--withTax").text("$" + parseFloat(catalog_price).toFixed(2));
                }
            }
        }

        //product Gallery, for listing page
        const $productGallery = $("[b2b-products-gallery]");
        $productGallery.each(function() {
            const catalogProductCount = $(this).find("[catalog-product]").length;
            if (catalogProductCount == 0) {
                $("[catalog-listing-wrap]").show();
                $(this).parents(".page").html("We can't find products matching the selection.");
            } else {
                $("[catalog-listing-wrap]").show();
                const $catalogProductCounter = $("[data-catalog-product-counter]");
                if ($catalogProductCounter.length > 0) {
                    $catalogProductCounter.text(catalogProductCount);
                }
            }
        });

    }
    //for bundleb2b
    getCatalogPrice(base_price, tier_price_array, qty) {
        //let tier_price = base_price;
        let tier_price = base_price;

        for (let j = 0; j < tier_price_array.length; j++) {
            const type = tier_price_array[j].type;
            const base_qty = tier_price_array[j].qty;
            const price = tier_price_array[j].price;

            if (qty >= base_qty) {
                if (type == "fixed") {
                    tier_price = price;

                } else {
                    tier_price = base_price - base_price * price / 100;
                }
            }
        }
        return tier_price;
    }

    initAdvqty() {
        AdvQuantityUtil.initListingCardAction();
        const $advQtyInputs = $("[advqty-card-actions] [advqty-card-input]");
        AdvQuantityUtil.setUpAdvQtyMulti($advQtyInputs, {
            bindInputEvents: true,
            bindButtonEvents: true,
            tips: true
        }, () => {
            $advQtyInputs.each((l_idx, l_item) => {
                const $input = $(l_item);
                AdvQuantityUtil.handleQuantityChange(null, $input, true);
            });
        });
    }
}