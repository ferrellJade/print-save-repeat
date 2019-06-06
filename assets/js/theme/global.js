import $ from 'jquery';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import compareProducts from './global/compare-products';
import privacyCookieNotification from './global/cookieNotification';
import maintenanceMode from './global/maintenanceMode';
import carousel from './common/carousel';
import 'lazysizes';
import loadingProgressBar from './global/loading-progress-bar';
import sweetAlert from './global/sweet-alert';
import svgInjector from './global/svg-injector';
import b2b from './b2b';

export default class Global extends PageManager {
    onReady() {
        // for bundleb2b
        sessionStorage.setItem("b2b_flag", "false");
        if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
            sessionStorage.setItem("b2b_flag", "true");
        }
        if (!this.context.customer) {
            sessionStorage.setItem("bundleb2b_user", "none");
            sessionStorage.removeItem("catalog_id");
            sessionStorage.removeItem("catalog_products");
            sessionStorage.removeItem("company_payments");
            sessionStorage.removeItem("bundleb2b_sale");
        }

        // Only load visible elements until the onload event fires,
        // after which preload nearby elements.
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
        cartPreview();
        compareProducts(this.context.urls);
        carousel();
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        maintenanceMode(this.context.maintenanceMode);
        loadingProgressBar();
        sweetAlert();
        svgInjector();

        b2b.call(this);

        $.ajax({
            type: "GET",
            url: "../api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options",
            contentType: "application/json",
            accept: "application/json",
            async: false,
            success: (data) => {
                if (data && data.length > 0) {

                    console.log("cart data", data);
                }
            }
        });
    }
}
