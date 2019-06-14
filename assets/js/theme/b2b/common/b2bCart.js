import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import _ from 'lodash';
import swal from 'sweetalert2';
import pricesStyle from '../prices-style';
import config from '../config';

const apiRootUrl = config.apiRootUrl;
const bypass_store_hash = config.storeHash;
const catalog_products = JSON.parse(sessionStorage.getItem("catalog_products") || "[]");
const gCatalogId = sessionStorage.getItem("catalog_id");
if ($("#b2b_loading_overlay_cart").length == 0) {
	$("body").append(`<div class="b2b-loading-overlay-cart" id="b2b_loading_overlay_cart">
	</div>`);
}
const $overlay = $("#b2b_loading_overlay_cart");

function getCart() {
	return new Promise((res, rej) => {
		$.ajax({
			type: "GET",
			url: "../api/storefront/carts",
			contentType: "application/json",
			accept: "application/json",
			async: false,
			success: (data) => {
				res(data);
			},
			error: (err) => {
				console.log(JSON.Stringify(err));
			}
		});
	});
}


function openCartTips(itemArr, cartItemIDs) {
	swal({
		title: "The shopping cart isn't empty",
		html: "<div class='nonempty-cart'><p>You have items in your shopping cart. Would you like to merge items in this order with items of this shopping cart or replace them?</p>" +
			"<p>Select Cancel to stay on the current page.</p></div>",
		showCancelButton: true,
		confirmButtonText: 'Merge',
		cancelButtonText: 'Cancel'
	})
	$(".swal2-confirm.button").after('<button type="button" class="button replace-button">Replace</button>');
	$(".swal2-confirm.button").on("click", function() {
		$overlay.show();
		addProductToCart(itemArr);
	});
	$(".replace-button").on("click", function() {
		swal.close();
		$overlay.show();
		replaceCart(cartItemIDs, itemArr);
	});
}

function addProductToCart(itemArr) {

	const item = itemArr[itemArr.length - 1];
	console.log("add item to cart...", item);

	const formData = new FormData();
	formData.append("action", "add");
	formData.append("product_id", item.product_id);
	formData.append("qty[]", item.quantity);

	const options_list = item.options_list || [];
	for (let i = 0; i < options_list.length; i++) {
		formData.append(options_list[i].option_id, options_list[i].option_value);
	}

	for (var inx of formData) {
		console.log(inx);
	}
	//return;
	utils.api.cart.itemAdd(formData, (err, response) => {
		const errorMessage = err || response.data.error;

		// Guard statement
		if (errorMessage) {
			// Strip the HTML from the error message
			const tmp = document.createElement('DIV');
			tmp.innerHTML = errorMessage;
			$overlay.hide();

			return swal({
				text: tmp.textContent || tmp.innerText,
				type: 'error',
			});
		}

		itemArr.pop();
		if (itemArr.length > 0) {
			addProductToCart(itemArr);
		} else {

			console.log("add item to cart done.");

			const options = {
				template: {
					content: 'b2b/cart-content-data',
					totals: 'cart/totals',
					pageTitle: 'cart/page-title',
					statusMessages: 'cart/status-messages',
				},
			};
			utils.api.cart.getContent(options, (err, response) => {
				//console.log(response.content);
				const divEle = document.createElement("div");
				$(divEle).html(response.content);
				const $items = $(divEle).find(".item");
				if ($items.length > 0) {

					let cartItemsArr = [];
					let cartItemsObj = {};
					let cartQuantity = 0;

					$.each($items, (index, item) => {
						//console.log(item);
						const $cartItem = $(item);
						const itemId = $cartItem.attr("data-item-id");
						const itemSku = $cartItem.attr("data-item-sku");
						const itemProductId = $cartItem.attr("data-item-productId");
						const itemQty = parseInt($cartItem.attr("data-item-quantity"));
						const itemOptions = $cartItem.attr("data-item-options");

						let itemVariantId;
						const variants = catalog_products[itemProductId];
						if (variants && variants.length > 0) {
							for (let i = 0; i < variants.length; i++) {
								const variant_sku = variants[i].variant_sku;
								if (variant_sku.toLowerCase() == itemSku.toLowerCase()) {
									itemVariantId = variants[i].variant_id;
								}
							}

						}

						cartQuantity += parseInt(itemQty);
						//const itemCatalogPrice = catalog_products[itemProductId] || cartItem.salePrice;

						if (cartItemsObj[`${itemProductId}-${itemVariantId}`]) {
							for (let j = 0; j < cartItemsArr.length; j++) {
								if (cartItemsArr[j].product_id == itemProductId && cartItemsArr[j].variant_id == itemVariantId && cartItemsArr[j].option_text == itemOptions) {
									cartItemsArr[j].quantity += parseInt(itemQty);
								}
							}
						} else {
							cartItemsObj[`${itemProductId}-${itemVariantId}`] = "true";
						}


						const cartItemObj = {
							"item_id": itemId,
							"product_id": itemProductId,
							"variant_id": itemVariantId,
							"quantity": itemQty,
							"catalog_id": gCatalogId,
							"option_text": itemOptions
						};

						cartItemsArr.push(cartItemObj);

					});

					//update cart counter
					const $body = $('body');
					const $cartCounter = $('.navUser-action .cart-count');

					$cartCounter.addClass('cart-count--positive');
					$body.trigger('cart-quantity-update', cartQuantity);

					console.log("cartItems", cartItemsArr);

					//$overlay.hide();

					let cartId;
					$.ajax({
						type: "GET",
						url: "../api/storefront/carts",
						contentType: "application/json",
						accept: "application/json",
						async: false,
						success: function(data) {

							if (data && data.length > 0) {
								cartId = data[0].id;
								$("[data-cart-subtotal]").text("$" + pricesStyle(data[0].baseAmount, 2));

							}
						}
					});
					updateCatalogPrice(cartItemsArr, cartId);
				}

			});
		}
	});
}

//replace cart contents with new items
function replaceCart(cartItemArr, itemArr) {
	const cartitem = cartItemArr[cartItemArr.length - 1];
	console.log("delete cartitem...", cartitem);

	$overlay.show();


	utils.api.cart.itemRemove(cartitem.id, (err, response) => {
		if (response.data.status === 'succeed') {
			cartItemArr.pop();

			debugger
			if (cartItemArr.length > 0) {
				replaceCart(cartItemArr, itemArr);
			} else {
				console.log("cart items removed, adding new items");
				addProductToCart(itemArr);
			}
		} else {
			$overlay.hide();
			swal({
				text: response.data.errors.join('\n'),
				type: 'error',
			});
		}

	});

}

function updateCatalogPrice(cartItemsArr, cartId) {
	const cartItemObj = cartItemsArr[cartItemsArr.length - 1];
	delete cartItemObj.option_text;
	console.log("putdata", JSON.stringify(cartItemObj));

	handlePickListOptions(cartItemObj, () => {
		console.log("putdata2", JSON.stringify(cartItemObj));

		$.ajax({
			type: "PUT",
			url: `${config.apiRootUrl}/cart?store_hash=${bypass_store_hash}&cart_id=${cartId}`,
			data: JSON.stringify(cartItemObj),
			success: function(data) {
				console.log("update catalog price...", data);

				cartItemsArr.pop();
				if (cartItemsArr.length == 0) {
					console.log("update price done.");
					$overlay.hide();
					$("[data-cart-subtotal]").text("$" + pricesStyle(data.data.base_amount, 2));

					swal({
						text: "Your items have been added to cart",
						type: 'success'
					});

					//window.location.reload();

				} else {
					updateCatalogPrice(cartItemsArr, cartId);
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				$overlay.hide();
				alert("update catalog price error");
			}
		});
	});

}


function handlePickListOptions(cartItemObj, cb) {
	const cartItemId = cartItemObj.item_id;
	const product_id = cartItemObj.product_id;
	const variant_id = cartItemObj.variant_id;

	utils.api.productAttributes.configureInCart(cartItemId, {
		template: 'b2b/configure-product-data',
	}, (err, response) => {
		console.log(response.data);

		let selectedPickListOptins = [];

		if (response.data && response.data.options) {
			const options = response.data.options;



			for (let i = 0; i < options.length; i++) {
				const option = options[i];

				if (option.partial == "product-list") {
					const optionValues = option.values;

					for (let j = 0; j < optionValues.length; j++) {
						const optionValue = optionValues[j];

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
				url: `${config.apiRootUrl}/productvariants?store_hash=${config.storeHash}&product_id=${product_id}&variant_id=${variant_id}`,
				success: (data) => {
					let extras_list = [];


					for (let k = 0; k < selectedPickListOptins.length; k++) {
						let showCustomPrice = true;

						if (data && data.option_list) {
							const options = data.option_list;


							for (let j = 0; j < options.length; j++) {
								const optionId = options[j].option_id;
								const optionValue = options[j].option_value;

								if (optionId == selectedPickListOptins[k].option_id && optionValue == selectedPickListOptins[k].option_value) {
									showCustomPrice = false;


								}



							}

							if (showCustomPrice) {
								const extra_product_id = selectedPickListOptins[k].option_data;
								const extra_variant_id = getVariantIdByProductId(extra_product_id);
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
						cartItemObj.extras_list = _.cloneDeep(extras_list);
					}

					if (cb) {
						cb();
					}


				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log("error", JSON.stringify(jqXHR));
				}
			});
		} else {
			if (cb) {
				cb();
			}

		}


	});

}

// for simple products
function getVariantIdByProductId(productId) {
	let variantId;

	if (catalog_products && catalog_products[productId]) {
		const variantSkus = catalog_products[productId];
		variantId = variantSkus[0].variant_id;
	}
	return variantId;
}

const b2bCart = {
	isB2bUser: () => {
		if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
			return true;
		}
		return false;
	},
	getCart: () => {
		getCart();
	},
	getVariantIdByProductId: (product_id) => {
		getVariantIdByProductId(product_id);
	},
	addToCart: (itemArr) => {
		getCart().then((data) => {
			let cartItemIDs = [];
			if (data && data.length > 0) {
				const cartId = data[0].id;
				const cartItemIDs_all = data[0].lineItems.physicalItems.concat(data[0].lineItems.digitalItems);
				cartItemIDs = cartItemIDs_all.filter(function(item) {
					return item.parentId == null;
				});
			}
			console.log(cartItemIDs);
			console.log("number of items in cart: ", cartItemIDs.length);

			if (cartItemIDs.length > 0) { //if there are items in cart notify user
				$overlay.hide();
				openCartTips(itemArr, cartItemIDs);
			} else {
				$overlay.show();
				addProductToCart(itemArr);
			}
		});

	},

}

export default b2bCart;