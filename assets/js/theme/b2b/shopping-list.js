import urlUtils from '../common/url-utils';
import Url from 'url';
import utils from '@bigcommerce/stencil-utils';
import _ from 'lodash';
import swal from 'sweetalert2';
import config from './config';
import ProductDetails from '../common/product-details';
import pricesStyle from './prices-style';
import {
	defaultModal
} from '../global/modal';
import AdvQuantityUtil from './common/advQuantity';

export default function(customer) {

	const url = Url.parse(window.location.href, true);
	const listID = url.query["list_id"] || '';
	if (!listID) {
		alert("The shopping list you are to looking is not exist.");
		window.location.href = "/shopping-lists/";
		return;
	}

	//store hash
	const bypass_store_hash = `${config.storeHash}`;
	//login user
	//const bypass_email = "bibo72@outlook.com";
	const bypass_email = customer.email;
	const bypass_customer_id = customer.id;
	let bypass_company_id;

	let gRoleId = -1;
	let isOwn = true;
	let catalogProductsLoaded = false;
	let gListObj = {};
	let csvFileData;
	let gTierPrice = {};

	//define list status
	const gListStatusObj = {
		"0": "Approved",
		"20": "Deleted",
		"30": "Draft",
		"40": "Ready for Approval",
	};


	let listName;
	let listType;
	let listItems;
	let listUserId;
	let listRoleId;
	let listStatus;
	let listOriginalStatus;
	let catalog_products = {};
	let catalog_products_sku = {};
	let gCatalogId = "";

	const $overlay = $("#b2b_loading_overlay");

	const $renameListModal = $("#modal-shopping-list-rename-form");

	const $selectAll = $("#select_all");
	const $shoppingListTable = $("#shopping_list_table");
	const $statusSelect = $("#shopping_list_status");

	//list current cart items
	/*let cartItemIDs = new Array();
	$(".cartItems").each(function() {
		var cartItemObj = new Object();
		cartItemObj.id = $(this).text().trim();
		cartItemIDs.push(cartItemObj);
	});*/

	$selectAll.on('click', (event) => {
		if ($selectAll.prop("checked") == true) {
			$shoppingListTable.find(".col-checkbox input[type=checkbox]").prop("checked", true);
			$shoppingListTable.find(".col-checkbox input[type=checkbox]:disabled").prop("checked", false);
		} else {
			$shoppingListTable.find(".col-checkbox input[type=checkbox]").prop("checked", false);
		}
	});

	$('#product_qty').on('change', event => {
		AdvQuantityUtil.handleQuantityChange(event);

		let sku = $("#product_search_results .product-options [data-product-sku]")[0].innerText.split('SKU: ')[1];
		const $priceSpan = $("#product_search_results [data-product-price]");
		let qty = $("#product_qty").val();
		let product_id = $("#product_search_results [data-product-id]").data().productId;
		const variants = catalog_products[product_id];

		let catalog_price = getCatalogPrice(sku, variants, qty, 2);
		if (catalog_price == 'NaN') {
			catalog_price = getCatalogPrice(sku, variants, qty, 1);
		}
		$priceSpan.text("$" + pricesStyle(parseFloat(catalog_price).toFixed(2), 2));
	});

	//bind events

	//list - edit - options
	$('body').on('click', '[data-edit-option]', event => {
		const $target = $(event.currentTarget);
		const $tr = $target.parents("tr");
		const productId = $tr.attr("data-product-id");
		const variantId = $tr.attr("data-variant-id");
		const itemIndex = $tr.attr("data-index");
		const itemOptions = $tr.attr("data-product-options");
		const skuHtml = $tr.find(".product-sku").html();


		event.preventDefault();
		// edit item in cart
		listEditOptions(productId, variantId, itemIndex, itemOptions, skuHtml);
	});

	$("body").on('click', '[data-update-option]', event => {
		const $target = $(event.target);
		const $modal = $target.parents(".modal");
		const itemIndex = $("#index_container", $modal).attr("data-index");
		const itemVariantId = $("#variant_id_container", $modal).attr("data-variant-id");
		let postData = _.cloneDeep(gListObj);
		let productsArr = postData.products;
		const editItem = productsArr[itemIndex] || {};

		const form = $('form', $modal)[0];
		const formData = filterEmptyFilesFromForm(new FormData(form));

		let options_list = [];
		for (let item of formData) {
			if (item[0].indexOf("attribute") != -1 && item[1] != "") {
				const optionObj = {
					"option_id": item[0],
					"option_value": item[1]
				}
				options_list.push(optionObj);
			}
		}

		const itemObj = {
			"product_id": editItem.product_id,
			"variant_id": itemVariantId,
			"qty": editItem.qty,
			"options_list": options_list
		};

		let products_arr = [];
		let hasDupid = false;
		for (let i = 0; i < postData.products.length; i++) {
			if (i != itemIndex) {
				const sameProductId = (postData.products[i].product_id == editItem.product_id);
				const sameVariantId = (postData.products[i].variant_id == itemVariantId);
				const sameOptionList = (JSON.stringify(options_list) == JSON.stringify(postData.products[i].options_list));
				if (sameProductId && sameVariantId && sameOptionList) {
					postData.products[i].qty = parseInt(postData.products[i].qty) + parseInt(editItem.qty);
					hasDupid = true;
				}
			}
		}
		if (hasDupid) {
			postData.products.splice(parseInt(itemIndex), 1);
		} else {
			postData.products.splice(parseInt(itemIndex), 1, itemObj);
		}
		console.log(postData);
		console.log(JSON.stringify(postData));

		$modal.find(".modal-close").eq(0).click();

		update_list(postData, function() {
			load_table();
		});

	});


	//define events

	//scroll to table after load table
	const scrollToTable = function() {
		const height = $(".b2b-wrap").offset().top;
		$('html, body').animate({
			scrollTop: height,
		}, 100);
	}

	// format date
	// date_string: 2019-01-23 08:48:57
	// return: 01/23/2019
	const getFormatDate = function(date_string) {
		let formatDate = "";
		if (date_string) {
			const d_year = date_string.substring(0, 4);
			const d_month = date_string.substring(5, 7);
			const d_date = date_string.substring(8, 10);
			formatDate = `${d_month}/${d_date}/${d_year}`;
		}

		return formatDate;
	}

	const load_table = function() {
		$shoppingListTable.find("tbody").html("");
		$selectAll.prop("checked", false);
		$("#unavailable_info_box").hide();

		$overlay.show();

		$.ajax({
			type: "GET",
			url: `${config.apiRootUrl}/getRequistionListDetail?store_hash=${bypass_store_hash}&company_id=${bypass_company_id}&customer_id=${bypass_customer_id}&id=${listID}`,
			success: function(data) {
				if (data && data != null) {
					console.log("shopping list", data);


					const listData = data;


					//current list data - for post
					gListObj.store_hash = listData.store_hash;
					gListObj.company_id = listData.company_id;
					gListObj.customer_id = listData.customer_id;
					gListObj.name = listData.name;
					gListObj.description = listData.description;
					gListObj.status = listData.status;
					gListObj.products = [];

					listStatus = listData.status;

					setStatusSelector(listStatus);

					if (listData.customer_id != bypass_customer_id) {
						isOwn = false;

						if ($("#delete_list").length > 0) {
							$("#delete_list").remove();
						}
						/*if ($("[data-rename-list]").length > 0) {
							$("[data-rename-list]").remove();
						}
						if ($("#update_list").length > 0) {
							$("#update_list").remove();
						}
						if ($("#shopping_item_remove").length > 0) {
							$("#shopping_item_remove").remove();
						}
						if ($("#quick_add_section").length > 0) {
							$("#quick_add_section").remove();
						}*/

					}

					/*if (listData.ht.original_status) {
									listOriginalStatus = listData.ht.original_status;
								} else {
									listOriginalStatus = listStatus;
								}


*/


					let listInfo_html = "";
					if (listData.created_date) {
						listInfo_html += `
                                	<div>
								        <b>Date Created: </b><span>${getFormatDate(listData.created_date)}</span>
								    </div>`;
					}
					if (listData.updated_date) {
						listInfo_html += `
                                	<div>
								        <b>Last Updated: </b><span>${getFormatDate(listData.updated_date)}</span>
								    </div>`;
					}
					if (listData.customer_info) {
						let createdBy;
						if (listData.customer_info.first_name) {
							createdBy = `${listData.customer_info.first_name} `;
						}
						if (listData.customer_info.last_name) {
							createdBy += listData.customer_info.last_name;
						}

						listInfo_html += `
                                	<div>
								        <b>Created By: </b><span>${createdBy}</span>
								    </div>`;
					}

					/*if (listData.status) {
									listInfo_html += `
                                	<div>
								        <b>Status: </b><span>${gListStatusObj[listData.status]}</span>
								    </div>`;
								}*/

					$("#shopping_list_detail").html(listInfo_html);

					$("#shopping_list_name").text(listData.name);
					if (listData.description && listData.description.trim() != "") {
						$("#shopping_list_comment").html(`<b>Descriptions: </b>${listData.description}`);
					}

					//$("#shopping_list_status").text("Status: " + gListStatusObj[listData.status]);


					if (listData.products && listData.products.length > 0) {
						listItems = listData.products;
						const listItemsData = listData.products;
						$("#num_items").text(listItemsData.length);
						console.log("list item", listItemsData);

						for (let pi = 0; pi < listItemsData.length; pi++) {
							const listItemData = listItemsData[pi];
							const product_id = listItemData.product_id;
							const variant_id = listItemData.variant_id;
							const product_quantity = listItemData.qty;
							const options_list = listItemData.options_list || [];
							const options_list_data = JSON.stringify(options_list);
							const indexI = pi;

							let in_catalog = true;

							/*const $productInfo = $(response);
							const product_title = $productInfo.attr("data-product-title");
							const product_image = $productInfo.attr("data-product-image");
							const product_sku = $productInfo.attr("data-product-sku");
							let product_price = $productInfo.attr("data-product-price");
							let product_priceValue = $productInfo.attr("data-product-priceValue");
							const product_url = $productInfo.attr("data-product-url");*/

							const product_title = listItemData.name;
							let product_image = "";
							if (listItemData.primary_image && listItemData.primary_image.thumbnail_url) {
								product_image = listItemData.primary_image.thumbnail_url;
							}

							const product_sku = listItemData.variant_sku;
							let product_priceValue = parseFloat(listItemData.base_price).toFixed(2);
							let product_price = "$" + product_priceValue;
							const product_url = listItemData.url;


							gListObj.products.push({
								"product_id": product_id,
								"variant_id": variant_id,
								"qty": parseInt(product_quantity),
								"options_list": options_list
							});



							//console.log(catalog_products);
							if (catalog_products[product_id]) {
								//product_priceValue = parseFloat(catalog_products[product_id]).toFixed(2);

								//product_priceValue = getCatalogPrice(product_priceValue, catalog_products[product_id], product_quantity);
								//product_price = product_price.toString().substring(0, 1) + parseFloat(product_priceValue).toFixed(2);
							} else {
								in_catalog = false;
								$("#unavailable_info_box").show();

							}

							const product_subTotalValue = product_priceValue * product_quantity;
							const product_subTotal = product_price.toString().substring(0, 1) + product_subTotalValue.toFixed(2);

							let tr;
							if (in_catalog) {
								tr = `<tr data-index="${indexI}" data-index-${indexI} data-product-${product_id} data-product-id="${product_id}" data-variant-id="${variant_id}" data-in-catalog="${in_catalog}" data-product-options='${options_list_data}'>
									    		    <td class="col-checkbox"><input type="checkbox"></td>
									    			<td class="col-product-info">

									    				<div class="product-iamge"><img src="${product_image}" alt="${product_title}"></div>
									    				<div class="product-description">
									    				    <div class="product-title"><a href="${product_url}">${product_title}</a></div>
									    				    <div class="product-options"></div>
									    				    <div class="product-attribute product-sku"><span>SKU: </span>${product_sku}</div>
									    				</div>
									    			</td>
									    			<td class="t-align-r col-product-price" data-product-priceValue="${product_priceValue}"><span class="mobile-td-lable">Price:</span><span class="product-price" data-main-price="${product_priceValue}" >$${pricesStyle(product_price,2)}</span></td>
									    			<td class="t-align-r col-product-qty" data-product-quantity><span class="mobile-td-lable">Qty:</span><input type="text" value="${product_quantity}" class="input-text qty" autocomplete="off" data-advqty-sku="${product_sku}"></td>
									    			<td class="t-align-r col-action">
										    			<div class="action-wrap">
										    				<div class="product-subtotal"><span class="mobile-td-lable">Subtotal:</span><span class="product-subtotal-span">$${pricesStyle(product_subTotal,2)}</span></div>
										    			    <div class="action-lists">
					
										    			    	<a class="button button--primary button--small square" href="javascript:void(0);"><i class="fa fa-delete" data-delete-item></i></a>
										    			    </div>
										    			</div>

									    			</td>
									    		</tr>`;

							} else {
								tr = `<tr data-index="${indexI}" data-index-${indexI} data-product-${product_id} data-product-id="${product_id}" data-variant-id="${variant_id}" data-in-catalog="${in_catalog}" data-product-options='${options_list_data}'>
									    		    <td class="col-checkbox"><input type="checkbox" disabled></td>
									    			<td class="col-product-info">

									    				<div class="product-iamge"><img src="${product_image}" alt="${product_title}"></div>
									    				<div class="product-description">
									    				    <div class="product-title">${product_title}</div>
									    				    <div class="product-options" style="display:none;"></div>
									    				    <div class="product-attribute product-sku"><span>SKU: </span>${product_sku}<br/><i class="label-unviable">Unavailable</i></div>
									    				</div>
									    			</td>
									    			<td class="t-align-r" data-product-priceValue="${product_priceValue}"><span data-main-price="${product_priceValue}" class="product-price">$${pricesStyle(product_price,2)}</span></td>
									    			<td class="t-align-r col-product-qty" data-product-quantity><input disabled type="text" value="${product_quantity}" class="input-text qty"></td>
									    			<td class="t-align-r col-action">
										    			<div class="action-wrap">
										    				<div class="product-subtotal"><span class="product-subtotal-span">$${pricesStyle(product_subTotal,2)}</span></div>
										    			    <div class="action-lists">

										    			    	<a class="button button--primary button--small square" href="javascript:void(0);"><i class="fa fa-delete" data-delete-item></i></a>
										    			    </div>
										    			</div>

									    			</td>
									    		</tr>`;

							}

							utils.api.product.getById(product_id, {
								template: 'b2b/product-view-data'
							}, (err, response) => {
								const tep_product_id = product_id;
								const tmp_index = indexI;
								const $productInfo = $(response);
								const product_url = $productInfo.attr("data-product-url");
								$(`[data-product-${tep_product_id}]`).find(".product-title a").attr("href", product_url);
								$(`[data-product-${tep_product_id}]`).find("[product-url]").attr("href", product_url);
								//hundle options
								const optionsStr = $productInfo.attr("data-product-options");

								//console.log(optionsStr);
								if (optionsStr && optionsStr != "[]") {
									const optionsArr = JSON.parse(optionsStr);
									//console.log(optionsArr);
									const selected_options_arr = options_list;
									//console.log(selected_options_arr);

									let optionHtml = "";
									let pickListArr = [];
									let productIds = [];


									for (let oi = 0; oi < optionsArr.length; oi++) {
										const option = optionsArr[oi];
										const option_id = `attribute[${option.id}]`;
										const option_required = option.required;
										let option_exist = false;
										for (let oj = 0; oj < selected_options_arr.length; oj++) {
											const selectedOption = selected_options_arr[oj];
											if (option_id == selectedOption.option_id) {
												option_exist = true;


												if (option.partial == "input-text") {
													optionHtml += `<span class="option-name">${option.display_name}:</span> ${selectedOption.option_value} </br>`;

												} else if (option.partial == "input-checkbox") {
													optionHtml += `<span class="option-name">${option.display_name}:</span> Yes </br>`;

												} else {
													if (option.values) {
														const optionValues = option.values;


														for (let ok = 0; ok < optionValues.length; ok++) {

															if (optionValues[ok].id == selectedOption.option_value) {
																optionHtml += `<span class="option-name">${option.display_name}:</span> ${optionValues[ok].label} </br>`;

																if (option.partial == "product-list") {

																	const pickedOptionId = option.id;
																	const pickedOptionValue = optionValues[ok].id;
																	const pickedProductId = optionValues[ok].data;
																	//const $priceSpan = $(`[data-index-${tmp_index}]`).find(".product-price");
																	pickListArr.push({
																		"pickedOptionId": pickedOptionId,
																		"pickedOptionValue": pickedOptionValue,
																		"pickedProductId": pickedProductId
																	});

																	productIds.push(pickedProductId);

																	/*if (!gTierPrice[pickedProductId]) {
																		getTierPriceByProductId(pickedProductId, product_quantity, function() {
																			getVariantOptions($priceSpan, product_id, variant_id, pickedOptionId, pickedProductId);

																		});
																	} else {
																		getVariantOptions($priceSpan, product_id, variant_id, pickedOptionId, pickedProductId);

																	}*/


																}
															}
														}
													}

												}

											}
										}

										// has required option, and this option not exist
										if (option_required && !option_exist) {
											optionHtml += `<span class="option-name">${option.display_name}:</span> <i class="no-option-value-tip" no-option-value>Click 'Edit Options' to set a value for this option.</i> </br>`;

										}


									}

									const $priceSpan = $(`[data-index-${tmp_index}]`).find(".product-price");

									console.log("list pick list option", pickListArr);

									getTierPriceByProductId_multi(productIds, product_quantity, function() {
										getVariantOptions($priceSpan, product_id, variant_id, pickListArr);
									});



									//console.log(tep_product_id);
									//console.log(optionHtml);
									$(`tr[data-index-${tmp_index}]`).find(".product-options").html(optionHtml);

									//console.log(options_list);
									if (listStatus != "40" && gRoleId != "0") {
									$(`tr[data-index-${tmp_index}]`).find(".action-lists").prepend(`<a class="button button--primary button--small" href="#" data-edit-option><i class="fa fa-edit"></i> Edit Options</a>`);
									}
									if (listStatus == "30" && gRoleId == "0") {
										$(`tr[data-index-${tmp_index}]`).find(".action-lists").prepend(`<a class="button button--primary button--small" href="#" data-edit-option><i class="fa fa-edit"></i> Edit Options</a>`);
									}

								}

							});

							$shoppingListTable.find("tbody").append(tr);
							//$("#qty_check_" + `${product_id}`).bind("change", function(event) {

							// DO NOT USE product_id, the items may has same product_id
							$(`tr[data-index-${indexI}]`).find("input.qty").bind("change", function(event) {
								AdvQuantityUtil.handleQuantityChange(event);

								let qty = $(this).val();
								if (!qty) {
									qty = 1;
								}
								if (isNaN(qty)) {
									swal({
										text: "please enter a number",
										type: "error"
									});
									return;
								}

								console.log("handle catalog price", qty);

								const $target = $(event.target);
								const $productPrice = $target.parents("tr").find(".product-price");
								const variants = catalog_products[product_id];
								let catalog_price = getCatalogPrice(product_sku, variants, qty, 2);
								if (catalog_price == 'NaN') {
									catalog_price = getCatalogPrice(product_sku, variants, qty, 1);
								}
								$productPrice.text("$" + pricesStyle(parseFloat(catalog_price).toFixed(2), 2));
							}).on('keyup', (event) => {
								AdvQuantityUtil.handleQuantityKeyup(event);
							});

							if (listStatus == "40") {
								$(".col-action .action-lists").hide();
								$shoppingListTable.find("tbody input").prop("disabled", true);
							}

							if (gRoleId == "0") {
								if (listStatus == "0") {
									$(".col-action .action-lists").hide();
									$shoppingListTable.find("tbody input").prop("disabled", true);
								}

							}

							/*if (isOwn == false) {
								$("input.qty").prop("disabled", true);
								$(".col-action .action-lists").remove();
							}*/

						}

						// set up advqty
						const $qtyInputs = $shoppingListTable.find("tbody input.qty");
						AdvQuantityUtil.setUpAdvQtyMulti($qtyInputs, {
							bindInputEvents: false,
							bindButtonEvents: false,
							tips: true,
							multiCheck: false,
							multiCheckMsg: "Please review your shopping list, one or more items have an invalid quantity."
						});


					} else {
						$("#num_items").text("0");
						$overlay.hide();
					}

					$overlay.hide();
					console.log("listData", gListObj);

					// sale rep can't modify other customer's shopping-list
					if (gRoleId == "10") {
						const bundleb2b_user = JSON.parse(sessionStorage.getItem("bundleb2b_user"));
						if (bundleb2b_user.user_id != listData.customer_id) {
							$(".rename-shopping-list").hide();
						}
					}

					if (gRoleId == "1" || gRoleId == "2" || gRoleId == "10") {

						if (listStatus == "40") {
							$(".toolbar-actions").html(`
											<button href="javascript:void(0);" class="action action--primary" id="pending_approval">Approve Shopping List</button>
    			                            <button href="javascript:void(0);" class="action" id="reject_approval">Revert to Draft</button>`);
							$(".table-toolbar .action-links").remove();
							$("#quick_add_section").remove();
							$("[data-rename-list]").remove();
						}


					} else if (gRoleId == "0") {
						$("#add_to_cart").remove();

						if (listStatus == "30") {
							if ($("#apply_approval").length == 0) {
								//$("#update_list_items").after(`<button href="javascript:void(0);" class="action" id="apply_approval">Submit for Approval</button>`);
							}

						} else {
							$(".toolbar-actions").remove();
							$(".table-toolbar .action-links").remove();
							$("#quick_add_section").remove();
							$("[data-rename-list]").remove();
						}
					}

					$overlay.hide();

				}

			},
			error: function(jqXHR, textStatus, errorThrown) {
				$overlay.hide();
				console.log("error", JSON.stringify(jqXHR));
			}
		});
	}

	const load_table_old = function() {
		$shoppingListTable.find("tbody").html("");
		$selectAll.prop("checked", false);
		$("#unavailable_info_box").hide();

		$overlay.show();

		$.ajax({
			type: "GET",
			url: `${config.apiRootUrl}/requisitionlist?store_hash=${bypass_store_hash}&company_id=${bypass_company_id}&customer_id=${bypass_customer_id}`,
			success: function(data) {
				if (data) {
					if (data.length > 0) {
						const listsDatas = data;

						for (let i = 0; i < listsDatas.length; i++) {
							const listData = listsDatas[i];
							if (listData.id == listID) {
								//current list data - for post
								gListObj.store_hash = listData.store_hash;
								gListObj.company_id = listData.company_id;
								gListObj.customer_id = listData.customer_id;
								gListObj.name = listData.name;
								gListObj.description = listData.description;
								gListObj.status = listData.status;
								gListObj.products = [];

								listStatus = listData.status;

								setStatusSelector(listStatus);

								if (listData.customer_id != bypass_customer_id) {
									isOwn = false;

									if ($("#delete_list").length > 0) {
										$("#delete_list").remove();
									}
									/*if ($("[data-rename-list]").length > 0) {
										$("[data-rename-list]").remove();
									}
									if ($("#update_list").length > 0) {
										$("#update_list").remove();
									}
									if ($("#shopping_item_remove").length > 0) {
										$("#shopping_item_remove").remove();
									}
									if ($("#quick_add_section").length > 0) {
										$("#quick_add_section").remove();
									}*/

								}

								/*if (listData.ht.original_status) {
									listOriginalStatus = listData.ht.original_status;
								} else {
									listOriginalStatus = listStatus;
								}


*/


								let listInfo_html = "";
								if (listData.created_date) {
									listInfo_html += `
                                	<div>
								        <b>Date Created: </b><span>${getFormatDate(listData.created_date)}</span>
								    </div>`;
								}
								if (listData.updated_date) {
									listInfo_html += `
                                	<div>
								        <b>Last Updated: </b><span>${getFormatDate(listData.updated_date)}</span>
								    </div>`;
								}
								if (listData.customer_info) {
									let createdBy;
									if (listData.customer_info.first_name) {
										createdBy = `${listData.customer_info.first_name} `;
									}
									if (listData.customer_info.last_name) {
										createdBy += listData.customer_info.last_name;
									}

									listInfo_html += `
                                	<div>
								        <b>Created By: </b><span>${createdBy}</span>
								    </div>`;
								}

								/*if (listData.status) {
									listInfo_html += `
                                	<div>
								        <b>Status: </b><span>${gListStatusObj[listData.status]}</span>
								    </div>`;
								}*/

								$("#shopping_list_detail").html(listInfo_html);

								$("#shopping_list_name").text(listData.name);
								if (listData.description && listData.description.trim() != "") {
									$("#shopping_list_comment").html(`<b>Descriptions: </b>${listData.description}`);
								}

								//$("#shopping_list_status").text("Status: " + gListStatusObj[listData.status]);


								if (listData.products && listData.products.length > 0) {
									listItems = listData.products;
									const listItemsData = listData.products;
									$("#num_items").text(listItemsData.length);
									console.log("list item", listItemsData);

									for (let pi = 0; pi < listItemsData.length; pi++) {
										const listItemData = listItemsData[pi];
										const product_id = listItemData.product_id;
										const variant_id = listItemData.variant_id;
										const product_quantity = listItemData.qty;
										const options_list = listItemData.options_list || [];
										const options_list_data = JSON.stringify(options_list);

										const indexI = pi;

										let in_catalog = true;

										/*const $productInfo = $(response);
										const product_title = $productInfo.attr("data-product-title");
										const product_image = $productInfo.attr("data-product-image");
										const product_sku = $productInfo.attr("data-product-sku");
										let product_price = $productInfo.attr("data-product-price");
										let product_priceValue = $productInfo.attr("data-product-priceValue");
										const product_url = $productInfo.attr("data-product-url");*/

										const product_title = listItemData.name;
										let product_image = "";
										if (listItemData.primary_image && listItemData.primary_image.thumbnail_url) {
											product_image = listItemData.primary_image.thumbnail_url;
										}

										const product_sku = listItemData.variant_sku;

										let product_priceValue = parseFloat(listItemData.base_price).toFixed(2);
										let product_price = "$" + product_priceValue;
										const product_url = listItemData.url;


										gListObj.products.push({
											"product_id": product_id,
											"variant_id": variant_id,
											"qty": parseInt(product_quantity),
											"options_list": options_list
										});



										//console.log(catalog_products);
										if (catalog_products[product_id]) {
											//product_priceValue = parseFloat(catalog_products[product_id]).toFixed(2);

											//product_priceValue = getCatalogPrice(product_priceValue, catalog_products[product_id], product_quantity);
											//product_price = product_price.toString().substring(0, 1) + parseFloat(product_priceValue).toFixed(2);
										} else {
											in_catalog = false;
											$("#unavailable_info_box").show();

										}

										const product_subTotalValue = product_priceValue * product_quantity;
										const product_subTotal = product_price.toString().substring(0, 1) + product_subTotalValue.toFixed(2);
										let tr;
										if (in_catalog) {
											tr = `<tr data-index="${indexI}" data-index-${indexI} data-product-${product_id} data-product-id="${product_id}" data-variant-id="${variant_id}" data-in-catalog="${in_catalog}" data-product-options='${options_list_data}'>
									    		    <td class="col-checkbox"><input type="checkbox"></td>
									    			<td class="col-product-info">

									    				<div class="product-iamge"><img src="${product_image}" alt="${product_title}"></div>
									    				<div class="product-description">
									    				    <div class="product-title"><a href="${product_url}">${product_title}</a></div>
									    				    <div class="product-options"></div>
									    				    <div class="product-attribute product-sku"><span>SKU: </span>${product_sku}</div>
									    				</div>
									    			</td>
									    			<td class="t-align-r col-product-price" data-product-priceValue="${product_priceValue}"><span class="mobile-td-lable">Price:</span><span class="product-price" data-main-price="${product_priceValue}" >$${pricesStyle(product_price,2)}</span></td>
									    			<td class="t-align-r col-product-qty" data-product-quantity><span class="mobile-td-lable">Qty:</span><input type="text" id="qty_check_${product_id}" value="${product_quantity}" class="input-text qty"></td>
									    			<td class="t-align-r col-action">
										    			<div class="action-wrap">
										    				<div class="product-subtotal"><span class="mobile-td-lable">Subtotal:</span><span class="product-subtotal-span">$${pricesStyle(product_subTotal,2)}</span></div>
										    			    <div class="action-lists">
					
										    			    	<a class="button button--primary button--small square" href="javascript:void(0);"><i class="fa fa-delete" data-delete-item></i></a>
										    			    </div>
										    			</div>

									    			</td>
									    		</tr>`;

										} else {
											tr = `<tr data-index="${indexI}" data-index-${indexI} data-product-${product_id} data-product-id="${product_id}" data-variant-id="${variant_id}" data-in-catalog="${in_catalog}" data-product-options='${options_list_data}'>
									    		    <td class="col-checkbox"><input type="checkbox" disabled></td>
									    			<td class="col-product-info">

									    				<div class="product-iamge"><img src="${product_image}" alt="${product_title}"></div>
									    				<div class="product-description">
									    				    <div class="product-title">${product_title}</div>
									    				    <div class="product-options" style="display:none;"></div>
									    				    <div class="product-attribute product-sku"><span>SKU: </span>${product_sku}<br/><i class="label-unviable">Unavailable</i></div>
									    				</div>
									    			</td>
									    			<td class="t-align-r" data-product-priceValue="${product_priceValue}"><span data-main-price="${product_priceValue}" class="product-price">$${pricesStyle(product_price,2)}</span></td>
									    			<td class="t-align-r col-product-qty" data-product-quantity><input disabled id="qty_check_${product_id}" type="text" value="${product_quantity}" class="input-text qty"></td>
									    			<td class="t-align-r col-action">
										    			<div class="action-wrap">
										    				<div class="product-subtotal"><span class="product-subtotal-span">$${pricesStyle(product_subTotal,2)}</span></div>
										    			    <div class="action-lists">

										    			    	<a class="button button--primary button--small square" href="javascript:void(0);"><i class="fa fa-delete" data-delete-item></i></a>
										    			    </div>
										    			</div>

									    			</td>
									    		</tr>`;

										}

										utils.api.product.getById(product_id, {
											template: 'b2b/product-view-data'
										}, (err, response) => {
											const tep_product_id = product_id;
											const tmp_index = indexI;
											const $productInfo = $(response);
											const product_url = $productInfo.attr("data-product-url");
											$(`[data-product-${tep_product_id}]`).find(".product-title a").attr("href", product_url);
											$(`[data-product-${tep_product_id}]`).find("[product-url]").attr("href", product_url);

											//hundle options
											const optionsStr = $productInfo.attr("data-product-options");

											//console.log(optionsStr);
											if (optionsStr && optionsStr != "[]") {
												const optionsArr = JSON.parse(optionsStr);
												//console.log(optionsArr);
												const selected_options_arr = options_list;
												//console.log(selected_options_arr);

												let optionHtml = "";
												let pickListArr = [];
												let productIds = [];


												for (let oi = 0; oi < optionsArr.length; oi++) {
													const option = optionsArr[oi];
													const option_id = `attribute[${option.id}]`;
													const option_required = option.required;
													let option_exist = false;
													for (let oj = 0; oj < selected_options_arr.length; oj++) {
														const selectedOption = selected_options_arr[oj];
														if (option_id == selectedOption.option_id) {
															option_exist = true;


															if (option.partial == "input-text") {
																optionHtml += `<span class="option-name">${option.display_name}:</span> ${selectedOption.option_value} </br>`;

															} else if (option.partial == "input-checkbox") {
																optionHtml += `<span class="option-name">${option.display_name}:</span> Yes </br>`;

															} else {
																if (option.values) {
																	const optionValues = option.values;


																	for (let ok = 0; ok < optionValues.length; ok++) {

																		if (optionValues[ok].id == selectedOption.option_value) {
																			optionHtml += `<span class="option-name">${option.display_name}:</span> ${optionValues[ok].label} </br>`;

																			if (option.partial == "product-list") {

																				const pickedOptionId = option.id;
																				const pickedOptionValue = optionValues[ok].id;
																				const pickedProductId = optionValues[ok].data;
																				//const $priceSpan = $(`[data-index-${tmp_index}]`).find(".product-price");
																				pickListArr.push({
																					"pickedOptionId": pickedOptionId,
																					"pickedOptionValue": pickedOptionValue,
																					"pickedProductId": pickedProductId
																				});

																				productIds.push(pickedProductId);

																				/*if (!gTierPrice[pickedProductId]) {
																					getTierPriceByProductId(pickedProductId, product_quantity, function() {
																						getVariantOptions($priceSpan, product_id, variant_id, pickedOptionId, pickedProductId);

																					});
																				} else {
																					getVariantOptions($priceSpan, product_id, variant_id, pickedOptionId, pickedProductId);

																				}*/


																			}
																		}
																	}
																}

															}

														}
													}

													// has required option, and this option not exist
													if (option_required && !option_exist) {
														optionHtml += `<span class="option-name">${option.display_name}:</span> <i class="no-option-value-tip" no-option-value>Click 'Edit Options' to set a value for this option.</i> </br>`;

													}


												}

												const $priceSpan = $(`[data-index-${tmp_index}]`).find(".product-price");

												console.log("list pick list option", pickListArr);

												getTierPriceByProductId_multi(productIds, product_quantity, function() {
													getVariantOptions($priceSpan, product_id, variant_id, pickListArr);
												});



												//console.log(tep_product_id);
												//console.log(optionHtml);
												$(`tr[data-index-${tmp_index}]`).find(".product-options").html(optionHtml);

												//console.log(options_list);

												if (listStatus != "40" && gRoleId != "0") {
													$(`tr[data-index-${tmp_index}]`).find(".action-lists").prepend(`<a class="button button--primary button--small" href="#" data-edit-option><i class="fa fa-edit"></i> Edit Options</a>`);
												}
												if (listStatus == "30" && gRoleId == "0") {
													$(`tr[data-index-${tmp_index}]`).find(".action-lists").prepend(`<a class="button button--primary button--small" href="#" data-edit-option><i class="fa fa-edit"></i> Edit Options</a>`);
												}

											}

										});


										$shoppingListTable.find("tbody").append(tr);
										$("#qty_check_" + `${product_id}`).bind("change", function(event) {
											let qty = $(this).val();
											if (!qty) {
												qty = 1;
											}
											let re = /^[0-9]+.?[0-9]*$/;
											if (!re.test(qty)) {
												swal({
													text: "please enter a number",
													type: "error"
												});
												return;
											}

											let sku = $(event).parent("tr").find(".product-sku");
										})

										if (listStatus == "40") {
											$(".col-action .action-lists").hide();
											$shoppingListTable.find("tbody input").prop("disabled", true);
										}

										if (gRoleId == "0") {
											if (listStatus == "0") {
												$(".col-action .action-lists").hide();
												$shoppingListTable.find("tbody input").prop("disabled", true);
											}

										}

										/*if (isOwn == false) {
											$("input.qty").prop("disabled", true);
											$(".col-action .action-lists").remove();
										}*/


									}

								} else {
									$("#num_items").text("0");
									$overlay.hide();
								}

								$overlay.hide();
								console.log("listData", gListObj);



								if (gRoleId == "1" || gRoleId == "2" || gRoleId == "10") {

									if (listStatus == "40") {
										$(".toolbar-actions").html(`
											<button href="javascript:void(0);" class="action action--primary" id="pending_approval">Approve Shopping List</button>
    			                            <button href="javascript:void(0);" class="action" id="reject_approval">Revert to Draft</button>`);
										$(".table-toolbar .action-links").remove();
										$("#quick_add_section").remove();
										$("[data-rename-list]").remove();
									}


								} else if (gRoleId == "0") {
									$("#add_to_cart").remove();

									if (listStatus == "30") {
										if ($("#apply_approval").length == 0) {
											//$("#update_list_items").after(`<button href="javascript:void(0);" class="action" id="apply_approval">Submit for Approval</button>`);
										}

									} else {
										$(".toolbar-actions").remove();
										$(".table-toolbar .action-links").remove();
										$("#quick_add_section").remove();
										$("[data-rename-list]").remove();
									}
								}


							}
						}
					} else {
						$overlay.hide();
					}
					$overlay.hide();

				}

			},
			error: function(jqXHR, textStatus, errorThrown) {
				$overlay.hide();
				console.log("error", JSON.stringify(jqXHR));
			}
		});
	}

	const setStatusSelector = function(listStatus) {

		if (gRoleId == 0) {
			// junior buyer
			if (listStatus == 30) {
				$statusSelect.html(`
					<option value="${listStatus}" selected>${gListStatusObj[listStatus]}</option>
					<option value="40">${gListStatusObj["40"]}</option>
				`);
				$statusSelect.val(listStatus);

			} else {
				$statusSelect.html(`<option value="${listStatus}">${gListStatusObj[listStatus]}</option>`);
				$statusSelect.val(listStatus);
				$("[data-update-status]").remove();
				$("#select_all").remove();
				$("[data-delete-items]").remove();
				$("#update_list_items").remove();
				$(".b2b-column-right").css("width", "100%");
			}

		} else if (gRoleId == 1 || gRoleId == 2) {
			// admin & senior buyer
			if (listStatus == 40) {
				$statusSelect.html(`
					<option value="${listStatus}" selected>${gListStatusObj[listStatus]}</option>
					<option value="0">${gListStatusObj["0"]}</option>
					<option value="30">${gListStatusObj["30"]}</option>
				`);

				$("#select_all").remove();
				$("[data-delete-items]").remove();
				$("#update_list_items").remove();
				$(".b2b-column-right").css("width", "100%");

			} else {
				$statusSelect.html(`<option value="${listStatus}">${gListStatusObj[listStatus]}</option>`);
				$("[data-update-status]").remove();
			}

		} else if (gRoleId == 10) {
			$statusSelect.html(`<option value="${listStatus}">${gListStatusObj[listStatus]}</option>`);
			$("[data-update-status]").remove();
		}

	}

	const update_list = function(listData, _callback) {
		let productArr = listData.products;

		for (var x = 0; x < productArr.length; x++) {
			delete productArr[x].name;
			delete productArr[x].price;
			delete productArr[x].primary_image;
			delete productArr[x].sku;
		}
		console.log("listPutData", listData);
		console.log("listPutData", JSON.stringify(listData));
		//return;

		$overlay.show();

		$.ajax({
			type: "PUT",
			url: `${config.apiRootUrl}/requisitionlist?id=${listID}&customer_id=${bypass_customer_id}`,
			data: JSON.stringify(listData),
			success: function(data) {
				if (data) {
					$overlay.hide();
					if (data.code == 1004) {
						swal({
							text: data.message,
							type: "error"
						});
						return;
					}

					if (_callback) {
						_callback();
					}
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				$overlay.hide();
				console.log("error", JSON.stringify(jqXHR));

			}
		});
	}


	const getIdsByVariantSku = function(variantSku) {
		console.log(catalog_products);
		let idsArr = [];
		for (let pid in catalog_products) {
			const variant_item = catalog_products[pid];
			for (let i = 0; i < variant_item.length; i++) {
				const variant_sku = variant_item[i].variant_sku;
				if (variant_sku == variantSku) {
					idsArr.push(variant_item[i].product_id);
					idsArr.push(variant_item[i].variant_id);
					return idsArr;
				}
			}
		}

		return idsArr;

	}

	/**
	 get catalog price
	 base_price float
	 tier_price array
	 qty number
	 **/
	const getCatalogPrice = function(sku, tier_price_arr, qty, type) {
		if (!qty) {
			qty = 1;
		} else {
			qty = Number(qty);
		}
		let catalog_price = 0;
		const catalog_price_arr = tier_price_arr || [];
		let new_price_arr = [];
		for (let i = 0; i < catalog_price_arr.length; i++) {
			if (type == 1) {
				for (let j in catalog_price_arr[i].tier_price) {
					if (catalog_price_arr[i].tier_price[j].qty == 1) {
						if (catalog_price_arr[i].tier_price[j].new_price) {
							new_price_arr.push(catalog_price_arr[i].tier_price[j].new_price);
						}
					}
				}
				if (new_price_arr.length == 0) {
					new_price_arr.push(catalog_price_arr[0].tier_price[0].price);
				}
			} else {
				if (catalog_price_arr[i].variant_sku == sku) {
					new_price_arr = catalog_price_arr[i].tier_price;
				}
			}
		}

		if (type == 1) {
			catalog_price = Math.min(...new_price_arr);
		} else {
			let curr_qty = 0;
			for (let j = 0; j < new_price_arr.length; j++) {
				const tier_qty = Number(new_price_arr[j].qty);
				if (tier_qty > curr_qty && qty >= tier_qty) {
					catalog_price = new_price_arr[j].new_price;
					curr_qty = tier_qty;
				}
			}
			if (!catalog_price) {
				for (let i in new_price_arr) {
					if (new_price_arr[i].type == "fixed") {
						catalog_price = new_price_arr[i].price;
						break;
					}
				}
				if(!catalog_price) {
					catalog_price_arr.forEach(item => {
						catalog_price = item.variant_price;
					})
				}

			}
		}

		catalog_price = parseFloat(catalog_price).toFixed(2);
		return catalog_price;
	}

	const filterEmptyFilesFromForm = function(formData) {
		try {
			for (const [key, val] of formData) {
				if (val instanceof File && !val.name && !val.size) {
					formData.delete(key);
				}
			}
		} catch (e) {
			console.error(e); // eslint-disable-line no-console
		}

		return formData;
	}

	//load_table();
	var interval = setInterval(function() {
		if (sessionStorage.getItem("bundleb2b_user")) {
			clearInterval(interval);
			if (sessionStorage.getItem("bundleb2b_user") == "none") {
				window.location.href = "/";
				return;
			}
			if (sessionStorage.getItem("catalog_products")) {
				catalog_products = JSON.parse(sessionStorage.getItem("catalog_products"));
			}
			gCatalogId = sessionStorage.getItem("catalog_id");

			const bundleb2b_user = JSON.parse(sessionStorage.getItem("bundleb2b_user"));
			gRoleId = bundleb2b_user.role_id;
			bypass_company_id = bundleb2b_user.company_id;


			load_table();

			//test
			//();
		}
		//console.log("loading icon is on",isLoadingOn);
	}, 100);

	/*$.ajax({
		type: "GET",
		url: "../api/storefront/carts",
		contentType: "application/json",
		accept: "application/json",
		success: function(data) {
			console.log("after add product to cart", data);
			if (data && data.length > 0) {
				const cartId = data[0].id;
				console.log("cartId", cartId);

			} else {
				$overlay.hide();
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$overlay.hide();
			console.log("error", JSON.stringify(jqXHR));
			swal({
				type: "error",
				text: "There has some error, please try again."
			});
		}
	});*/


	//open edit list modal
	$("[data-rename-list]").on('click', function() {
		const $form = $renameListModal.find("form");

		$("#list_name", $form).val(gListObj.name);
		$("#list_comment", $form).val(gListObj.description);
	});


	//rename list
	$("#rename_list").on('click', function() {
		const $form = $(this).parents("form");
		const list_name = $("#list_name", $form).val();
		const list_comment = $("#list_comment", $form).val() || " ";

		let postData = _.cloneDeep(gListObj);

		postData.name = list_name;
		postData.description = list_comment;

		console.log(postData);

		$overlay.show();
		update_list(postData, function() {
			$("#shopping_list_name").text(list_name);
			gListObj.name = list_name;
			gListObj.description = list_comment;
			if (list_comment && list_comment.trim() != "") {
				$("#shopping_list_comment").html(`<b>Descriptions: </b>${list_comment}`);
			} else {
				$("#shopping_list_comment").empty();
			}


			$renameListModal.find(".modal-close").eq(0).click();
		});
	});


	//add items to list
	$("#add_items_to_list").on('click', function() {

		const $resultTable = $("[product-search-result-table]");
		const $checkedProducts = $resultTable.find("[data-results-check-box]:checked");

		const $checkedProductsSingle = $("#product_search_result_table").find("[data-results-check-box]:checked");
		//const $checkedProductsMulti = $("#skus_search_results").find("[data-results-check-box]:checked");
		const single_product_quantity = $("#product_qty").val();

		if ($resultTable.find("tr").length == 0) {
			swal({
				text: "Please search the products by sku or name",
				type: "error"
			});
			return;
		}
		if ($checkedProducts.length == 0) {
			swal({
				text: "Please select products you want to add to list",
				type: "error"
			});
			return;
		}
		const checkNum = /^[1-9]\d*$/;
		if (!checkNum.test(single_product_quantity) && $checkedProductsSingle.length != 0) {
			swal({
				text: "Please enter a valid quantity",
				type: "error"
			});
			$("#product_qty").focus();
			return;
		}

		let products_arr = _.cloneDeep(gListObj.products) || [];
		let hasInvalidQty = false;
		let hasInvalidOption = false;

		$checkedProducts.each(function(index, item) {
			const $tr = $(item).parents("tr");

			const $item_qty_input = $tr.find(".product-qty-col input");

			// check advQty
			if ($item_qty_input.hasClass("not-valide-inc") || $item_qty_input.hasClass("not-valide-min")) {
				return swal({
					text: "Please review your checked items, one or more items have an invalid quantity.",
					type: "error"
				})
			}


			let item_qty;
			if ($item_qty_input.length > 0) {
				item_qty = $tr.find(".product-qty-col input").val();
			} else {
				item_qty = single_product_quantity;
			}
			//const item_qty = $tr.find(".product-qty-col input").val();

			if ($item_qty_input.length > 0 && !checkNum.test(item_qty)) {
				hasInvalidQty = true;
				swal({
					text: "Please enter a valid quantity",
					type: "error"
				});
				$tr.find(".product-qty-col input").focus();
				return false;
			}
			const product_id = $tr.attr("data-product-id");
			const variant_id = $tr.attr("data-variant-id");

			if (!variant_id) {
				hasInvalidOption = true;
			}

			const form = $('form[data-option-form]', $tr)[0];
			const formData = filterEmptyFilesFromForm(new FormData(form));

			let options_list = [];
			for (let item of formData) {
				//console.log(item);
				if (item[0].indexOf("attribute") != -1 && item[1] != "") {
					const optionObj = {
						"option_id": item[0],
						"option_value": item[1]
					}

					options_list.push(optionObj);
				}
			}

			//if has duplicated products
			let isExist = false;
			for (let i = 0; i < products_arr.length; i++) {
				const sameOption = (JSON.stringify(options_list) == JSON.stringify(products_arr[i].options_list));
				const sameProductId = (products_arr[i].product_id == product_id);
				const sameVariantId = (products_arr[i].variant_id == variant_id);
				if (sameProductId && sameVariantId && sameOption) {
					products_arr[i].qty = parseInt(products_arr[i].qty) + parseInt(item_qty);
					isExist = true;
				}
			}
			if (!isExist) {
				products_arr.push({
					"product_id": product_id,
					"variant_id": variant_id,
					"qty": item_qty,
					"options_list": options_list
				});
			}
		});


		if (hasInvalidOption) {
			alert("please choose an option.");
			return;
		}

		if (hasInvalidQty) {
			return;
		}

		let postData = _.cloneDeep(gListObj);
		postData.products = products_arr;
		//test data
		/*postData.products = [{
			"product_id": "234",
			"variant_id": "266",
			"qty": "2"
		}];*/


		//console.log(JSON.stringify(postData));
		console.log(postData);
		//return;

		$overlay.show();
		update_list(postData, function() {
			scrollToTable();
			load_table();
			//clear search input
			$("#product_search_input").val("");
			$("#product_qty").val("");
			$("#product_search_results").html("");
			$("#product_search_skus").val("");
			$("#skus_search_results").html("");

			// clear advQty
			AdvQuantityUtil.clearAdvQty($("#product_qty"));

			resetCsvFileUpload();
		});

	});
	$("#add_items_to_list_01").on('click', function() {

		const $resultTable = $("[product-search-result-table]");
		//const $checkedProducts = $resultTable.find("[data-results-check-box]:checked");
		const $checkedProductsSingle = $("#product_search_result_table").find("[data-results-check-box]:checked");
		const $checkedProductsMulti = $("#skus_search_results").find("[data-results-check-box]:checked");
		const single_product_quantity = $("#product_qty").val();

		if (csvFileData) {
			console.log(csvFileData);

			return;

		}
		if ($resultTable.find("tr").length == 0) {
			swal({
				text: "Please search the products by sku or name",
				type: "error"
			});
			return;
		}
		if ($checkedProductsSingle.length == 0 && $checkedProductsMulti.length == 0) {
			swal({
				text: "Please select products you want to add to list",
				type: "error"
			});
			return;
		}
		const checkNum = /^[1-9]\d*$/;
		if (!checkNum.test(single_product_quantity) && $checkedProductsSingle.length != 0) {
			swal({
				text: "Please enter a valid quantity",
				type: "error"
			});
			$("#product_qty").focus();
			return;
		}

		let products_arr = _.cloneDeep(gListObj.products) || [];
		let hasInvalidQty = false;
		let hasInvalidOption = false;

		$checkedProductsMulti.each(function(index, item) {
			const $tr = $(item).parents("tr");

			const item_qty = $tr.find(".product-qty-col input").val();

			if (!checkNum.test(item_qty)) {
				hasInvalidQty = true;
				swal({
					text: "Please enter a valid quantity",
					type: "error"
				});
				$tr.find(".product-qty-col input").focus();
				return false;
			}
			const product_id = $tr.attr("data-product-id");
			const variant_id = $tr.attr("data-variant-id");

			if (!variant_id) {
				hasInvalidOption = true;
			}

			const form = $('form[data-option-form]', $tr)[0];
			const formData = filterEmptyFilesFromForm(new FormData(form));

			let option_label = {};
			const $textLabel = $("[data-label-name]", $tr);
			if ($textLabel.length > 0) {
				$textLabel.each(function() {
					const $item = $(this);
					const label_name = $item.attr("data-label-name");
					let option_value = $item.attr("name");
					option_value = option_value.replace("[", "").replace("]", "");
					option_label[option_value] = label_name;
				});
			}

			let options_list = [];
			for (let item of formData) {
				console.log(item);
				if (item[0].indexOf("attribute") != -1 && item[1] != "") {
					const optionObj = {
						"option_id": item[0],
						"option_value": item[1]
					}

					/*const label_name = item[0].replace("[", "").replace("]", "");
					if (option_label[label_name]) {
						optionObj.option_label = option_label[label_name];
					}*/

					options_list.push(optionObj);
				}
			}

			//if has duplicated products
			let isExist = false;
			for (let i = 0; i < products_arr.length; i++) {
				const sameOption = (JSON.stringify(options_list) == JSON.stringify(products_arr[i].options_list));
				if (products_arr[i].product_id == product_id && products_arr[i].variant_id == variant_id && sameOption) {
					products_arr[i].qty = parseInt(products_arr[i].qty) + parseInt(item_qty);
					isExist = true;
				}
			}
			if (!isExist) {
				products_arr.push({
					"product_id": product_id,
					"variant_id": variant_id,
					"qty": item_qty,
					"options_list": options_list
				});
			}
		});

		$checkedProductsSingle.each(function(index, item) {
			const $tr = $(item).parents("tr");
			const product_id = $tr.attr("data-product-id");
			const variant_id = $tr.attr("data-variant-id");

			if (!variant_id) {
				hasInvalidOption = true;
			}

			const form = $('form[data-option-form]', $tr)[0];
			const formData = filterEmptyFilesFromForm(new FormData(form));
			let options_list = [];

			let option_label = {};
			const $textLabel = $("[data-label-name]", $tr);
			if ($textLabel.length > 0) {
				$textLabel.each(function() {
					const $item = $(this);
					const label_name = $item.attr("data-label-name");
					let option_value = $item.attr("name");
					option_value = option_value.replace("[", "").replace("]", "");
					option_label[option_value] = label_name;
				});
			}

			for (let item of formData) {
				console.log(item);
				if (item[0].indexOf("attribute") != -1 && item[1] != "") {
					const optionObj = {
						"option_id": item[0],
						"option_value": item[1]
					}

					/*const label_name = item[0].replace("[", "").replace("]", "");
					if (option_label[label_name]) {
						optionObj.option_label = option_label[label_name];
					}*/
					options_list.push(optionObj);
				}
			}

			//if has duplicated products
			let isExist = false;
			for (let i = 0; i < products_arr.length; i++) {
				const sameOption = (JSON.stringify(options_list) == JSON.stringify(products_arr[i].options_list));
				console.log(sameOption);
				console.log(JSON.stringify(options_list));
				console.log(JSON.stringify(products_arr[i].options_list));
				if (products_arr[i].product_id == product_id && products_arr[i].variant_id == variant_id && sameOption) {
					products_arr[i].qty = parseInt(products_arr[i].qty) + parseInt(single_product_quantity);
					isExist = true;
				}
			}
			if (!isExist) {
				products_arr.push({
					"product_id": product_id,
					"variant_id": variant_id,
					"qty": single_product_quantity,
					"options_list": options_list
				});
			}

		});


		if (hasInvalidOption) {
			alert("please choose an option.");
			return;
		}

		if (hasInvalidQty) {
			return;
		}

		let postData = _.cloneDeep(gListObj);
		postData.products = products_arr;
		//test data
		/*postData.products = [{
			"product_id": "234",
			"variant_id": "266",
			"qty": "2"
		}];*/


		console.log(JSON.stringify(postData));
		//console.log(postData);
		//return;

		$overlay.show();
		update_list(postData, function() {
			scrollToTable();
			load_table();
			//clear search input
			$("#product_search_input").val("");
			$("#product_qty").val("");
			$("#product_search_results").html("");
			$("#product_search_skus").val("");
			$("#skus_search_results").html("");
		});

	});

	$("body").on('click', '[data-delete-item]', (event) => {
		if (confirm("Are you sure you want to delete this item?") == false) {
			return;
		}
		const $target = $(event.target);
		const product_id = $target.parents("tr").attr("data-product-id");
		const variant_id = $target.parents("tr").attr("data-variant-id");
		const options_list = $target.parents("tr").attr("data-product-options");
		//const product_ids = `["${product_id}"]`;

		let postData = _.cloneDeep(gListObj);
		let products_arr = [];
		for (let i = 0; i < postData.products.length; i++) {
			if (postData.products[i].product_id != product_id || postData.products[i].variant_id != variant_id || options_list != JSON.stringify(postData.products[i].options_list)) {
				products_arr.push(postData.products[i]);
			}
		}
		postData.products = products_arr;

		update_list(postData, function() {
			load_table();
		});

	});
	$("body").on('click', '[data-delete-items]', (event) => {
		if (confirm("Are you sure you want to delete the selected items?") == false) {
			return;
		}

		const $target = $(event.target);
		let product_ids_arr = [];

		const $checkedInputs = $shoppingListTable.find("tbody tr input[type=checkbox]:checked");
		if ($checkedInputs.length == 0) {
			alert("Please select an item");
			return;
		}

		const $trCheckboxInputs = $shoppingListTable.find("tbody tr input[type=checkbox]");
		let postData = _.cloneDeep(gListObj);
		let products_arr = [];
		$trCheckboxInputs.each(function(index, item) {
			if ($(item).prop("checked") == false) {
				let productObj = {};
				const product_id = $(item).parents("tr").attr("data-product-id");
				const variant_id = $(item).parents("tr").attr("data-variant-id");
				const product_quantity = $(item).parents("tr").find("[data-product-quantity] input").val();

				const options_list = $(item).parents("tr").attr("data-product-options");
				if (options_list) {
					productObj.options_list = JSON.parse(options_list);
				}
				productObj.product_id = product_id;
				productObj.variant_id = variant_id;
				productObj.qty = product_quantity;
				products_arr.push(productObj);

			}

		});

		postData.products = products_arr;

		update_list(postData, function() {
			load_table();
		});

	});

	$("#delete_unavailable_item").on('click', (event) => {
		if (confirm("Are you sure you want to delete all unavailable items?") == false) {
			return;
		}
		const $target = $(event.target);
		let product_ids_arr = [];

		const $checkedInputs = $shoppingListTable.find("tbody tr input[type=checkbox]:disabled");
		if ($checkedInputs.length == 0) {
			alert("You have no Unavailable items in your list, plese refresh the page");
			return;
		}

		const $trCheckboxInputs = $shoppingListTable.find("tbody tr input[type=checkbox]");
		let postData = _.cloneDeep(gListObj);
		let products_arr = [];
		$trCheckboxInputs.each(function(index, item) {

			if ($(item).prop("disabled") == false) {
				let productObj = {};
				const product_id = $(item).parents("tr").attr("data-product-id");
				const variant_id = $(item).parents("tr").attr("data-variant-id");
				const product_quantity = $(item).parents("tr").find("[data-product-quantity] input").val();

				productObj.product_id = product_id;
				productObj.variant_id = variant_id;
				productObj.qty = product_quantity;

				const options_list = $(item).parents("tr").attr("data-product-options");
				if (options_list) {
					productObj.options_list = JSON.parse(options_list);
				}
				products_arr.push(productObj);

			}

		});

		postData.products = products_arr;

		update_list(postData, function() {
			load_table();
		});

	});

	$("#update_list_items").on('click', function() {
		const $trs = $shoppingListTable.find("tbody tr");
		if ($trs.length == 0) {
			alert("You have no items in your list.");
			return;
		}

		// advQty check
		if ($trs.find(".not-valid-min").length > 0 || $trs.find(".not-valid-inc").length > 0) {
			return swal({
				text: `Please review your shopping list, one or more items have an invalid quantity.`,
				type: 'error',
			});
		}

		let products_arr = [];
		$trs.each(function(index, item) {
			let productObj = {};
			const product_id = $(item).attr("data-product-id");
			const variant_id = $(item).attr("data-variant-id");
			const product_quantity = $(item).find("[data-product-quantity] input").val();
			productObj.product_id = product_id;
			productObj.variant_id = variant_id;
			productObj.qty = product_quantity;
			const options_list = $(item).attr("data-product-options");
			console.log(options_list);
			if (options_list) {
				productObj.options_list = JSON.parse(options_list);
			}
			products_arr.push(productObj);
		});


		//const product_quantity_str = JSON.stringify(product_quantity_obj);
		let postData = _.cloneDeep(gListObj);
		postData.products = products_arr;

		console.log(postData);

		update_list(postData, function() {
			load_table();
		});

	});

	/*$("input.qty").on("keyup", function(){
		const oldValue = $(this).val();
	});*/

	$("#delete_list").on('click', function() {
		if (confirm("Are you sure you want to delete this shopping list?") == false) {
			return;
		}

		$overlay.show();

		$.ajax({
			type: "DELETE",
			url: `${config.apiRootUrl}/requisitionlist?id=${listID}&customer_id=${bypass_customer_id}`,
			success: function(data) {
				console.log("delete list", data);
				$overlay.hide();
				swal({
					text: "The list has been removed successfully.",
					type: 'success',
				});

				window.location.href = "/shopping-lists/";
			},
			error: function(jqXHR, textStatus, errorThrown) {
				$overlay.hide();
				console.log("error", JSON.stringify(jqXHR));
			}
		});
	});

	const serachCatalogProductBySku = function(product_sku) {

	}

	const doSearch = _.debounce((searchQuery) => {
		$("#product_search_results").html(`<span class="loading-span"></span>`);

		utils.api.search.search(searchQuery, {
			template: 'b2b/shopping-list-search-results-data'
		}, (err, response) => {
			if (err) {
				$("#product_search_results").html(`<table class="search-product-table" id="product_search_result_table" product-search-result-table style="margin-bottom:1.5rem;"><tbody><tr><td>No products found.</td></tr></tbody></table>`);
				return false;
			}
			let resultTrs = "";
			const item = response;

			const product_id = $(item).attr("data-product-id");
			const product_name = $(item).attr("data-product-name") || "";
			const product_image = $(item).attr("data-product-image");
			const product_price = $(item).attr("data-product-price");
			const product_price_value = $(item).attr("data-product-price-value");
			const price_symbol = product_price.substring(0, 1);
			const has_option = $(item).attr("data-product-option");

			if (catalog_products[product_id]) {
				const variants = catalog_products[product_id];

				for (let i = 0; i < variants.length; i++) {
					const variantObj = variants[i];
					const variant_id = variantObj.variant_id;
					const variant_sku = variantObj.variant_sku;
					const variant_tier_price = variantObj;

					const catalog_price = getCatalogPrice(product_price, variant_tier_price, 1, 1);

					resultTrs += `<tr data-product-id="${product_id}" data-variant-id="${variant_id}">
						    <td class="col-checkbox"><input type="checkbox" data-results-check-box data-product-id="${product_id}" data-variant-id="${variant_id}"></td>
					        <td class="col-product-figure"><img src="${product_image}" alt="${product_name}" title="${product_name}"></td>
					        <td class="col-product-info">${product_name}<br/><b>SKU:</b> ${variant_sku}</td>
					        <td class="col-product-price">${price_symbol}${pricesStyle(parseFloat(catalog_price).toFixed(2),2)}</td></tr>`;
				}

				$("#product_search_results").html(`<table class="search-product-table" id="product_search_result_table" product-search-result-table style="margin-bottom:1.5rem;"><tbody>${resultTrs}</tbody></table>`);

			} else {
				$("#product_search_results").html(`<table class="search-product-table" id="product_search_result_table" product-search-result-table style="margin-bottom:1.5rem;"><tbody><tr><td>No products found.</td></tr></tbody></table>`);
			}

		});

	}, 200);

	const doSearch_02 = _.debounce((searchQuery) => {
		$("#product_search_results").html(`<span class="loading-span"></span>`);

		utils.api.search.search(searchQuery, {
			template: 'b2b/shopping-list-search-results-data'
		}, (err, response) => {
			if (err) {
				$("#product_search_results").html(`<table class="search-product-table" id="product_search_result_table" product-search-result-table style="margin-bottom:1.5rem;"><tbody><tr><td>No products found.</td></tr></tbody></table>`);
				return false;
			}
			let resultTrs = "";
			const item = response;

			const product_id = $(item).attr("data-product-id");


			if (catalog_products[product_id]) {
				$("#product_search_results").html(`<span class="loading-span"></span>`);

				utils.api.product.getById(product_id, {
					template: 'b2b/shopping-list-search-results-item'
				}, (err, response) => {
					console.log(response);
					resultTrs = response;

					if (resultTrs) {
						const variants = catalog_products[product_id];
						let variant_id;
						let variant_sku = $(response).attr("data-product-base-sku");
						let catalog_price;
						const product_price_value = $(response).find("[data-product-price]").attr("data-product-price-value");

						if (variants.length >= 1) {
							//variant_id = variants[0].variant_id;
							//variant_sku = variants[0].variant_sku;
							variant_id = getVariantIdByProductSku(variants, variant_sku);
							catalog_price = getCatalogPrice(searchQuery, variants, 1, 1);
						}

						$("#product_search_results").html(`<table class="search-product-table" id="product_search_result_table" product-search-result-table style="margin-bottom:1.5rem;"><tbody>${resultTrs}</tbody></table>`);
						if (variant_id) {
							$("#product_search_results #product_search_result_table tbody tr").attr("data-variant-id", variant_id);
							$("#product_search_results #product_search_result_table tbody tr input[type=checkbox]").attr("data-variant-id", variant_id).prop("disabled", false);
						}
						if (catalog_price) {
							$("#product_search_results #product_search_result_table tbody tr").find("[data-product-price]").text("$" + pricesStyle(parseFloat(catalog_price).toFixed(2), 2));
						}

						$("#product_search_results #product_search_result_table").find(".product-qty-col input").remove();

						const $optionLabels = $("#product_search_results #product_search_result_table").find("label[data-product-attribute-value]");
						$optionLabels.each(function() {
							const $optionLabel = $(this);
							const $optionInput = $optionLabel.prev();
							const optionId = $optionLabel.attr("for");
							const new_optionId = `s_${variant_id}_${optionId}`;
							$optionLabel.attr("for", new_optionId);
							$optionInput.attr("id", new_optionId);

						});

						initProductListOptionPrice();

						// set up advqty
						const $qtyInput = $("#quick_add_section #product_qty");
						$qtyInput.attr("data-advqty-sku", variant_sku);
						setUpSearchResultsAdvQty($qtyInput, true);
					} else {
						$("#product_search_results").html(`<table class="search-product-table" id="product_search_result_table" product-search-result-table style="margin-bottom:1.5rem;"><tbody><tr><td>No products found.</td></tr></tbody></table>`);
					}


					//return new ProductDetails($("#product_search_results").find('.optionView'));
				});

			} else {
				$("#product_search_results").html(`<table class="search-product-table" id="product_search_result_table" product-search-result-table style="margin-bottom:1.5rem;"><tbody><tr><td>No products found.</td></tr></tbody></table>`);
			}



		});

	}, 800);

	const doSearchSkus = function(searchQueryArr) {
		$("#skus_search_results").html(`<div class="product-qty-label form-label">Qty: <small>*</small></div><table class="search-product-table" product-search-result-table style="margin-bottom:1.5rem;"><tbody></tbody></table>`);

		for (let i = 0; i < searchQueryArr.length; i++) {

			/*utils.api.search.search(searchQuery[i], {
				template: 'b2b/shopping-list-search-results'
			}, (err, response) => {
				if (err) {
					return false;
				}

				let resultTrs = "";

				$(response).each((index, item) => {
					const product_id = $(item).attr("data-product-id");
					const product_price = $(item).find("[data-product-price]").attr("data-product-price-value");

					if (catalog_products[product_id]) {
						const catalog_price = getCatalogPrice(product_price, catalog_products[product_id], 1);
						$(item).find("[data-product-price]").text("$" + parseFloat(catalog_price).toFixed(2));
						resultTrs += `<tr>${$(item).html()}</tr>`;
					}
				});

				if (resultTrs) {
					$("#skus_search_results").find("[product-search-result-table] tbody").append(resultTrs);
				} else {
					$("#skus_search_results").find("[product-search-result-table] tbody").append(`<tr><td colspan="5">No products found for "${searchQuery[i]}".</td></tr>`);
				}


			});*/

			let searchproductId;
			let tr = "";
			let product_sku = "";
			let product_variantId;
			let product_price_value = "";

			const searchQuery = searchQueryArr[i];
			if (catalog_products) {
				for (let product_id in catalog_products) {
					const product = catalog_products[product_id];
					const product_base_sku = product.base_sku;
					const variants = product.variants || [];

					if (product_base_sku.toLowerCase() == searchQuery.toLowerCase()) {
						searchproductId = product_id;
						product_sku = product_base_sku;
						product_variantId = variants[0].variant_id;
						product_price_value = product.price;
					}

					for (let j = 0; j < variants.length; j++) {
						const product_variant_sku = variants[j].variant_sku;
						if (product_variant_sku.toLowerCase() == searchQuery.toLowerCase()) {
							searchproductId = product_id;
							product_sku = product_variant_sku;
							product_variantId = variants[j].variant_id;
							product_price_value = product.price;

							if (variants[j].tier_price) {
								const tier_prices = variants[j].tier_price
								for (let k = 0; k < tier_prices.length; k++) {
									if (tier_prices[k].type == "fixed" && tier_prices[k].qty == "1") {
										product_price_value = tier_prices[k].price;
									}
								}
							}
						}
					}
				}
			}


			if (searchproductId) {
				const product = catalog_products[searchproductId];
				const product_id = searchproductId;
				const product_name = product.product_name;
				const product_price = "$" + parseFloat(product_price_value).toFixed(2);
				const product_image = product.primary_image ? product.primary_image.thumbnail_url : "";
				const product_variants = product.variants || [];


				tr = `<tr data-product-id="${product_id}" data-variant-id="${product_variantId}">
				        <td class="col-checkbox"><input type="checkbox" data-results-check-box data-product-id="${product_id}" data-variant-id="${product_variantId}"></td>
				        <td class="col-product-figure"><img src="${product_image}" alt="${product_name}" title="${product_name}"></td>
				        <td class="col-product-info">${product_name}<br/>
				        <b>SKU:</b> ${product_sku}</td>
				        <td class="col-product-price" data-product-price data-product-price-value="${product_price_value}">${pricesStyle(product_price,2)}</td>
				        <td class="product-qty-col"><input class="form-input" type="text" id="product_qty_${product_id}" name="product_qty_${product_id}"></td>
				    </tr>`;
			} else {
				tr = `<tr><td colspan="5">No products found for "${searchQuery}".</td></tr>`;
			}
			$("#skus_search_results").find("[product-search-result-table] tbody").append(tr);

		}

	};
	const doSearchSkus_02 = function(searchQueryArr) {
		$("#skus_search_results").html(`<div class="product-qty-label form-label">Qty: <small>*</small></div><table class="search-product-table" product-search-result-table style="margin-bottom:1.5rem;"><tbody></tbody></table>`);

		for (let i = 0; i < searchQueryArr.length; i++) {
			const searchQuery = searchQueryArr[i];

			utils.api.search.search(searchQuery, {

				template: 'b2b/shopping-list-search-results-data'
			}, (err, response) => {
				if (err) {
					$("#product_search_results").html(`<table class="search-product-table" id="product_search_result_table" product-search-result-table style="margin-bottom:1.5rem;"><tbody><tr><td>No products found.</td></tr></tbody></table>`);
					return false;
				}
				let resultTrs = "";
				const item = response;

				const product_id = $(item).attr("data-product-id");

				if (catalog_products[product_id]) {
					console.log("search result: true");

					utils.api.product.getById(product_id, {
						template: 'b2b/shopping-list-search-results-item'
					}, (err, response) => {
						console.log(response);
						resultTrs = response;

						if (resultTrs) {
							const variants = catalog_products[product_id];

							let variant_id;
							let catalog_price;
							let variant_sku = $(response).attr("data-product-base-sku");
							const product_price_value = $(response).find("[data-product-price]").attr("data-product-price-value");
							if (variants.length == 1) {
								//variant_id = variants[0].variant_id;
								variant_id = getVariantIdByProductSku(variants, variant_sku);
							}
							if (variants.length >= 1) {
								//variant_id = variants[0].variant_id;
								variant_id = getVariantIdByProductSku(variants, variant_sku);
								catalog_price = getCatalogPrice(searchQuery, variants, 1, 1);
							}

							$("#skus_search_results").find("[product-search-result-table] tbody").append(resultTrs);
							if (variant_id) {
								$("#skus_search_results").find(`[product-search-result-table] tbody tr[data-product-id="${product_id}"]`).attr("data-variant-id", variant_id);
								$("#skus_search_results").find(`[product-search-result-table] tbody tr[data-product-id="${product_id}"] input[type=checkbox]`).attr("data-variant-id", variant_id);
							}
							if (catalog_price) {
								$("#skus_search_results").find(`[product-search-result-table] tbody tr[data-product-id="${product_id}"] [data-product-price]`).text("$" + pricesStyle(parseFloat(catalog_price).toFixed(2), 2));
							}

							const $optionLabels = $("#skus_search_results").find("label[data-product-attribute-value]");
							$optionLabels.each(function() {
								const $optionLabel = $(this);
								const $optionInput = $optionLabel.prev();
								const optionId = $optionLabel.attr("for");
								const new_optionId = `multi_${variant_id}_${optionId}`;
								$optionLabel.attr("for", new_optionId);
								$optionInput.attr("id", new_optionId);

							});

							initProductListOptionPrice();

							// set up advqty
							const $qtyInput = $("#skus_search_results").find(`[product-search-result-table] tbody tr[data-product-id="${product_id}"] input#product_qty_id`);
							setUpSearchResultsAdvQty($qtyInput, true);
						} else {
							$("#skus_search_results").find("[product-search-result-table] tbody").append(`<tr><td colspan="5">No products found for "${searchQuery}".</td></tr>`);
						}
						//productQtyChange(product_id);

						//return new ProductDetails($("#product_search_results").find('.optionView'));
					});

				} else {
					$("#skus_search_results").find("[product-search-result-table] tbody").append(`<tr><td colspan="5">No products found for "${searchQuery}".</td></tr>`);
				}
			});

		}

	};

	//init csv products options
	const onOptionChange = function(product_id, $form) {
		utils.api.productAttributes.optionChange(product_id, $form.serialize(), (err, result) => {
			if (err) {
				swal({
					text: err,
					type: 'error',
				});
				return false;
			}
			const data = result.data || {};

			//for edit options
			//const $submit = $("input[type=submit]", $form);
			const $submit = $("#btn_option_update", $form);

			const $skuModal = $form.parents(".modal-body").find("[data-product-sku]");


			//for search results
			const $tr = $form.parents('tr');
			const $sku = $("[data-product-sku]", $tr);
			const $checkbox = $("input[type=checkbox]", $tr);
			const $priceSpan = $("[data-product-price]", $tr);

			let variant_id;
			let tier_price_arr;
			let base_price;
			const variants = catalog_products[product_id] || [];
			if (data.sku) {

				const product_variant_sku = data.sku;
				$sku.html(`<b>SKU: </b>${data.sku}`);
				$skuModal.html(`SKU: ${data.sku}`);
				for (var i = 0; i < variants.length; i++) {
					if (variants[i].variant_sku.toLowerCase() == product_variant_sku.toLowerCase()) {
						variant_id = variants[i].variant_id;
						tier_price_arr = variants[i].tier_price;
					}
				}
				//console.log(variant_id);

				//const catalog_price = getCatalogPrice(product_price_value, variants[0].tier_price, 1);
			}


			if ($("body").hasClass("has-activeModal")) {
				//from edit item modal

				$("#variant_id_container").attr("data-variant-id", variant_id);

				let allValid = true;
				if (data.purchasing_message) {
					//$('p.alertBox-message', $messageBox).text(data.purchasing_message);
					//$submit.prop('disabled', true);
					allValid = false;
					//$messageBox.show();
				} else {
					$submit.prop('disabled', false);
					//$messageBox.hide();
				}

				if (!data.purchasable || !data.instock) {
					//$submit.prop('disabled', true);
					allValid = false;
				}
				if (!variant_id) {

					$submit.prop('disabled', true);
					allValid = false;
				}

				//required text field
				const $textInputs = $form.find("input.form-input[required]");

				let validInput = true;
				$textInputs.each(function(index, item) {
					const $textInput = $(item);
					if ($textInput.val() && $textInput.val().trim() != "") {} else {
						validInput = false;
					}

				});

				if (allValid && validInput) {

					$submit.prop('disabled', true);
				} else {

					$submit.prop('disabled', true);
				}

				$textInputs.bind('keyup', function() {
					const $checkbox = $(this).parents("tr").find("input[type=checkbox]");
					if ($(this).val() && allValid) {
						$submit.prop('disabled', true);

					} else {
						$submit.prop('disabled', true);
					}
				});


			} else {
				//from search results
				$checkbox.prop('disabled', true);

				if (data.price.with_tax) {
					base_price = data.price.with_tax.value;
				}

				if (data.price.without_tax) {
					base_price = data.price.without_tax.value;
				}
				let qty = $("#product_qty").val();
				const catalog_price = getCatalogPrice(data.sku, variants, qty, 2);
				$priceSpan.text("$" + pricesStyle(parseFloat(catalog_price).toFixed(2), 2));

				let allValid = true;
				if (data.purchasing_message) {
					$('p.alertBox-message', $messageBox).text(data.purchasing_message);
					//$submit.prop('disabled', true);
					//$checkbox.prop('disabled', true);
					allValid = false;
					//$messageBox.show();
				} else {
					//$submit.prop('disabled', false);
					//$checkbox.prop('disabled', false);
					//$messageBox.hide();
				}

				if (!data.purchasable || !data.instock) {
					//$submit.prop('disabled', true);
					//$checkbox.prop('disabled', true);
					//$checkbox.prop('checked', false);
					allValid = false;
				}
				if (variant_id) {
					$tr.attr("data-variant-id", variant_id);
					$checkbox.attr("data-variant-id", variant_id);
					//$checkbox.prop('disabled', false);

				} else {
					$tr.removeAttr("data-variant-id");
					$checkbox.removeAttr("data-variant-id");
					//$checkbox.prop('disabled', true);
					//$checkbox.prop('checked', false);
					allValid = false;
				}

				//required text field

				const $textInputs = $tr.find("input.form-input[required]");

				let validInput = true;
				$textInputs.each(function(index, item) {
					const $textInput = $(item);
					if ($textInput.val() && $textInput.val().trim() != "") {} else {
						validInput = false;
					}

				});

				if (allValid && validInput) {
					$checkbox.prop('checked', true);

					$checkbox.prop('disabled', false);
				} else {
					$checkbox.prop('checked', false);
					$checkbox.prop('disabled', true);
				}

				$textInputs.bind('keyup', function() {
					const $checkbox = $(this).parents("tr").find("input[type=checkbox]");
					if ($(this).val() && allValid) {
						$checkbox.prop("disabled", false);


					} else {

						$checkbox.prop("checked", false);
						$checkbox.prop("disabled", true);
					}
				});

			}


		});
	}

	//after user click an option
	utils.hooks.on('product-option-change', (event, option) => {
		const $changedOption = $(option);
		const $form = $changedOption.parents('form');
		const $messageBox = $('.alertMessageBox');
		const product_id = $('[name="product_id"]', $form).attr('value');

		//for edit options
		//const $submit = $("input[type=submit]", $form);
		const $submit = $("#btn_option_update", $form);

		const $skuModal = $form.parents(".modal-body").find("[data-product-sku]");


		//for search results
		const $tr = $changedOption.parents('tr');
		const $sku = $("[data-product-sku]", $tr);
		const $checkbox = $("input[type=checkbox]", $tr);
		const $qtyInput = $("input#product_qty_id", $tr);
		const $priceSpan = $("[data-product-price]", $tr);


		$submit.prop("disabled", true);
		$checkbox.prop("disabled", true);


		utils.api.productAttributes.optionChange(product_id, $form.serialize(), (err, result) => {
			if (err) {
				swal({
					text: err,
					type: 'error',
				});
				return false;
			}

			const data = result.data || {};

			let variant_id;
			let tier_price_arr;
			let base_price;
			const variants = catalog_products[product_id] || [];
			if (data.sku) {

				const product_variant_sku = data.sku;
				$sku.html(`<b>SKU: </b>${data.sku}`);
				$skuModal.html(`SKU: ${data.sku}`);
				for (var i = 0; i < variants.length; i++) {
					if (variants[i].variant_sku.toLowerCase() == product_variant_sku.toLowerCase()) {
						variant_id = variants[i].variant_id;
						tier_price_arr = variants[i].tier_price;
					}
				}
				//console.log(variant_id);

				//const catalog_price = getCatalogPrice(product_price_value, variants[0].tier_price, 1);
			}

			if ($("body").hasClass("has-activeModal")) {
				//from edit item modal

				$("#variant_id_container").attr("data-variant-id", variant_id);

				let allValid = true;
				if (data.purchasing_message) {
					$('p.alertBox-message', $messageBox).text(data.purchasing_message);
					//$submit.prop('disabled', true);
					allValid = false;
					$messageBox.show();
				} else {
					//$submit.prop('disabled', false);
					$messageBox.hide();
				}

				if (!data.purchasable || !data.instock) {
					//$submit.prop('disabled', true);
					allValid = false;
				}
				if (!variant_id) {
					//$submit.prop('disabled', true);
					allValid = false;
				}

				//required text field
				const $textInputs = $form.find("input.form-input[required]");

				let validInput = true;
				$textInputs.each(function(index, item) {
					const $textInput = $(item);
					if ($textInput.val() && $textInput.val().trim() != "") {} else {
						validInput = false;
					}

				});

				if (allValid && validInput) {

					$submit.prop('disabled', false);
				} else {

					$submit.prop('disabled', true);
				}

				$textInputs.bind('keyup', function() {
					const $checkbox = $(this).parents("tr").find("input[type=checkbox]");
					if ($(this).val() && allValid) {
						$submit.prop('disabled', false);

					} else {
						$submit.prop('disabled', true);
					}
				});

			} else {

				// set up advqty
				if ($form.parents("#product_search_results").length > 0) {
					const $qtyInputSingle = $("#quick_add_section #product_qty");
					$qtyInputSingle.attr("data-advqty-sku", data.sku);
					setUpSearchResultsAdvQty($qtyInputSingle, false);
				} else {
					const $qtyInputMulti = $("#product_qty_id", $tr);
					$qtyInputMulti.attr("data-advqty-sku", data.sku);
					setUpSearchResultsAdvQty($qtyInputMulti, false);
				}

				//from search results
				$checkbox.prop('disabled', true);

				if (data.price.with_tax) {
					base_price = data.price.with_tax.value;
				}

				if (data.price.without_tax) {
					base_price = data.price.without_tax.value;
				}

				if (variant_id) {
					let qty = 1;
					let productSearch = $form.parents("#product_search_results").length;
					let skuSearch = $form.parents("#skus_search_results").length;
					if (productSearch == 1) {
						qty = $("#product_qty").val();
					} else if (skuSearch == 1) {
						qty = $("#product_qty_id").val();
					}

					const tierPriceValue = getCatalogPrice(data.sku, variants, qty, 2);
					if (tierPriceValue) {
						$priceSpan.attr("data-main-price", tierPriceValue);
					}

					const $selectPickListOption = $('[data-product-attribute="product-list"] input.form-radio:checked', $form)
					if ($selectPickListOption.length > 0) {
						let pickListArr = [];
						$.each($selectPickListOption, (index, picklist) => {
							const pickedOptionId = $(picklist).attr("name").replace("attribute[", "").replace("]", "");
							const pickedOptionValue = $(picklist).attr("value");
							const pickedProductId = $(picklist).attr("data-product-id");
							pickListArr.push({
								"pickedOptionId": pickedOptionId,
								"pickedOptionValue": pickedOptionValue,
								"pickedProductId": pickedProductId
							});

						});

						getVariantOptions($priceSpan, product_id, variant_id, pickListArr);
					} else {

						if (tierPriceValue) {
							$priceSpan.text("$" + pricesStyle(parseFloat(tierPriceValue).toFixed(2), 2));
						}
					}
				} else {
					if (_.isObject(data.price)) {
						if (data.price.with_tax) {
							$priceSpan.text(data.price.with_tax.formatted);
						}

						if (data.price.without_tax) {
							$priceSpan.text(data.price.without_tax.formatted);
						}
					}
				}

				/*const catalog_price = getCatalogPrice(base_price, tier_price_arr, 1);
				$priceSpan.text("$" + parseFloat(catalog_price).toFixed(2));*/

				let allValid = true;
				if (data.purchasing_message) {
					$('p.alertBox-message', $messageBox).text(data.purchasing_message);
					//$submit.prop('disabled', true);
					//$checkbox.prop('disabled', true);
					allValid = false;
					$messageBox.show();
				} else {
					//$submit.prop('disabled', false);
					//$checkbox.prop('disabled', false);
					$messageBox.hide();
				}

				if (!data.purchasable || !data.instock) {
					//$submit.prop('disabled', true);
					//$checkbox.prop('disabled', true);
					//$checkbox.prop('checked', false);
					allValid = false;
				}

				if (variant_id) {
					$tr.attr("data-variant-id", variant_id);
					$checkbox.attr("data-variant-id", variant_id);


				} else {
					$tr.removeAttr("data-variant-id");
					$checkbox.removeAttr("data-variant-id");
					//$checkbox.prop('disabled', true);
					//$checkbox.prop('checked', false);
					allValid = false;
				}

				//required text field
				const $textInputs = $tr.find("input.form-input[required]");

				let validInput = true;
				$textInputs.each(function(index, item) {
					const $textInput = $(item);
					if ($textInput.val() && $textInput.val().trim() != "") {} else {
						validInput = false;
					}

				});

				if (allValid && validInput) {

					$checkbox.prop('disabled', false);
				} else {
					$checkbox.prop('checked', false);
					$checkbox.prop('disabled', true);
				}

				$textInputs.bind('keyup', function() {
					const $checkbox = $(this).parents("tr").find("input[type=checkbox]");
					if ($(this).val() && allValid) {
						$checkbox.prop("disabled", false);


					} else {
						$checkbox.prop("disabled", true);
						$checkbox.prop("checked", false);
					}
				});


			}


		});
	});

	$("#product_search_input").on('keyup', function() {
		const searchQuery = $(this).val();
		if (searchQuery.length > 2) {
			doSearch_02(searchQuery);
		} else if (searchQuery.length == 0) {
			$("#product_search_results").html("");
		}
	});

	$("#search_skus").on('click', function() {
		const searchQuery = $("#product_search_skus").val().split(",");
		if (searchQuery.length > 0) {
			doSearchSkus_02(searchQuery);
		} else if (searchQuery.length == 0) {
			$("#skus_search_results").html("");
		}
	});
	$("#product_search_skus").on('keyup', function() {
		const searchQuery = $(this).val();
		if (searchQuery.length > 0) {

		} else if (searchQuery.length == 0) {
			$("#skus_search_results").html("");
		}
	});

	// for simple products
	const getVariantIdByProductId = function(productId) {
		let variantId;

		if (catalog_products && catalog_products[productId]) {
			const variantSkus = catalog_products[productId];
			variantId = variantSkus[0].variant_id;
		}
		return variantId;
	}

	// for simple products
	const getVariantIdByProductSku = function(variants, sku) {
		let variantId;

		variants.forEach((v) => {
			if (v.variant_sku == sku) {
				variantId = v.variant_id;
			}
		});
		return variantId;
	}

	const handlePickListOptions = function(cartItemObj, cb) {
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

	const updateCatalogPrice = function(cartItemsArr, cartId) {
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

						$shoppingListTable.find(".col-checkbox input[type=checkbox]").prop("checked", false);

						swal({
							text: "Your list items have been added to cart",
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

	// Add item to cart
	const addProductToCart = function(itemArr) {

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



			/*let itemData = {};
			itemData.lineItems = [];
			for (let i = 0; i < itemArr.length; i++) {
				const item = {
					"quantity": itemArr[i].quantity,
					"productId": itemArr[i].product_id,
					"variantId": itemArr[i].variant_id
				};
				itemData.lineItems.push(item);
			}*/

			//$overlay.show();
			/*let cartId;
			let cartItems;

			$.ajax({
				type: "GET",
				url: "../api/storefront/carts",
				contentType: "application/json",
				accept: "application/json",
				async: false,
				success: (data) => {
					if (data && data.length > 0) {
						cartId = data[0].id;
					}
				}
			});
			if (cartId) {
				$.ajax({
					type: "POST",
					url: `../api/storefront/carts/${cartId}/items`,
					contentType: "application/json",
					accept: "application/json",
					async: false,
					data: JSON.stringify(itemData),
					success: (data) => {
						console.log("has cart id", data);
						cartItems = data.lineItems.physicalItems;

					}
				});

			} else {
				$.ajax({
					type: "POST",
					url: `../api/storefront/carts`,
					contentType: "application/json",
					accept: "application/json",
					async: false,
					data: JSON.stringify(itemData),
					success: (data) => {
						console.log("nocartid", data);
						cartItems = data.lineItems.physicalItems;

					}
				});

			}*/

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

	const addProductToCart_old = function(itemArr) {

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

		let itemData = {};
		itemData.lineItems = [];
		for (let i = 0; i < itemArr.length; i++) {
			const item = {
				"quantity": itemArr[i].quantity,
				"productId": itemArr[i].product_id,
				"variantId": itemArr[i].variant_id
			};
			itemData.lineItems.push(item);
		}

		//$overlay.show();
		let cartId;
		let cartItems;

		$.ajax({
			type: "GET",
			url: "../api/storefront/carts",
			contentType: "application/json",
			accept: "application/json",
			async: false,
			success: (data) => {
				if (data && data.length > 0) {
					cartId = data[0].id;
				}
			}
		});
		if (cartId) {
			$.ajax({
				type: "POST",
				url: `../api/storefront/carts/${cartId}/items`,
				contentType: "application/json",
				accept: "application/json",
				async: false,
				data: JSON.stringify(itemData),
				success: (data) => {
					console.log("has cart id", data);
					cartItems = data.lineItems.physicalItems;

				}
			});

		} else {
			$.ajax({
				type: "POST",
				url: `../api/storefront/carts`,
				contentType: "application/json",
				accept: "application/json",
				async: false,
				data: JSON.stringify(itemData),
				success: (data) => {
					console.log("nocartid", data);
					cartItems = data.lineItems.physicalItems;

				}
			});

		}

		console.log("add item to cart done.");

		$.ajax({
			type: "GET",
			url: "../api/storefront/carts",
			contentType: "application/json",
			accept: "application/json",
			success: function(data) {
				console.log("after add products to cart", data);
				if (data && data.length > 0) {
					const cartId = data[0].id;
					console.log("cartId", cartId);
					const cartItems_all = data[0].lineItems.physicalItems;
					const cartItems = cartItems_all.filter(function(item) {
						return item.parentId == null;
					});



					let cartItemsArr = [];
					let cartItemsObj = {};
					let cartQuantity = 0;


					for (let i = 0; i < cartItems.length; i++) {
						const cartItem = cartItems[i];
						const itemId = cartItem.id;
						const itemProductId = cartItem.productId;
						const itemVariantId = cartItem.variantId;
						const itemQty = cartItem.quantity;

						cartQuantity += parseInt(itemQty);
						//const itemCatalogPrice = catalog_products[itemProductId] || cartItem.salePrice;

						if (cartItemsObj[`${itemProductId}-${itemVariantId}`]) {
							for (let j = 0; j < cartItemsArr.length; j++) {
								if (cartItemsArr[j].product_id == itemProductId && cartItemsArr[j].variant_id == itemVariantId) {
									cartItemsArr[j].quantity += itemQty;
								}
							}
						} else {
							cartItemsObj[`${itemProductId}-${itemVariantId}`] = "true";
						}

						/*const cartItemObj = {
							"item_id": itemId,
							"product_id": itemProductId,
							"quantity": itemQty,
							"price": parseFloat(itemCatalogPrice)
						};*/
						const cartItemObj = {
							"item_id": itemId,
							"product_id": itemProductId,
							"variant_id": itemVariantId,
							"quantity": itemQty,
							"catalog_id": gCatalogId
						};

						cartItemsArr.push(cartItemObj);

					}

					//update cart counter
					const $body = $('body');
					const $cartCounter = $('.navUser-action .cart-count');

					$cartCounter.addClass('cart-count--positive');
					$body.trigger('cart-quantity-update', cartQuantity);
					console.log(cartItemsArr);

					//$overlay.hide();
					updateCatalogPrice(cartItemsArr, cartId);

				} else {
					$overlay.hide();
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				$overlay.hide();
				console.log("error", JSON.stringify(jqXHR));
				swal({
					type: "error",
					text: "There has some error, please try again."
				});
			}
		});
	}

	//replace cart contents with new items
	const replaceCart = function(cartItemArr, itemArr) {
		const cartitem = cartItemArr[cartItemArr.length - 1];
		console.log("delete cartitem...", cartitem);

		$overlay.show();


		utils.api.cart.itemRemove(cartitem.id, (err, response) => {
			if (response.data.status === 'succeed') {
				cartItemArr.pop();

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
	/*const replaceCart = function(cartItemArr, cartId, itemArr) {
		for (let i = 0; i < cartItemArr.length; i++) {
			const cartitem = cartItemArr[i];
			$.ajax({
				type: "DELETE",
				url: `../api/storefront/carts/${cartId}/items/${cartitem.id}`,
				contentType: "application/json",
				accept: "application/json",
				success: (data) => {
					console.log(data);
					if (typeof data == 'undefined') {
						console.log("cart items removed, adding new items");
						addProductToCart(itemArr);
					}
				},
				error: (data) => {
					console.log("fail");
					$overlay.hide();
					swal({
						type: "error",
						text: "There has some error, please try again."
					});
				}
			});
		}
	}*/


	$("#add_to_cart").on("click", function() {
		//console.log(cartItemIDs);
		//let itemArr = listItems;
		let itemArr = [];
		let allOptionsValid = true;
		//check advqty
		let invalidAdvQtyCount = 0;

		let $checkedItems = $shoppingListTable.find(".col-checkbox input[type=checkbox]:checked");
		$checkedItems.each(function(index, item) {
			const productObj = {};
			const $tr = $(item).parents("tr");

			//check advqty
			if ($tr.find(".not-valid-min").length > 0 || $tr.find(".not-valid-inc").length > 0) {
				invalidAdvQtyCount++;
			}

			productObj.product_id = $tr.attr("data-product-id");
			productObj.variant_id = $tr.attr("data-variant-id");
			productObj.quantity = $tr.find("[data-product-quantity] input").val();
			let options_list = $tr.attr("data-product-options");
			if (options_list) {
				productObj.options_list = JSON.parse(options_list);
			}
			if ($tr.find("[no-option-value]").length) {
				allOptionsValid = false;
			}

			itemArr.push(productObj);
		});

		console.log(itemArr);

		// advQty check
		if (invalidAdvQtyCount > 0) {
			return swal({
				text: `Please review your shopping list, one or more items have an invalid quantity.`,
				type: 'error',
			});
		}


		if (!listItems || listItems.length == 0) {
			alert("You have no products in list.");
			return;
		}

		if (itemArr.length == 0) {
			alert("Please select at least one item.");
			return;
		}

		if (!allOptionsValid) {
			alert("Please fill out product options first.");
			return;
		}

		$overlay.show();

		let cartItemIDs = [];
		let cartId;

		$.ajax({
			type: "GET",
			url: "../api/storefront/carts",
			contentType: "application/json",
			accept: "application/json",
			async: true,
			success: (data) => {
				if (data && data.length > 0) {
					cartId = data[0].id;
					const cartItemIDs_all = data[0].lineItems.physicalItems;
					cartItemIDs = cartItemIDs_all.filter(function(item) {
						return item.parentId == null;
					});
				}
				console.log(cartItemIDs);
				console.log("number of items in cart: ", cartItemIDs.length);

				if (cartItemIDs.length > 0) { //if there are items in cart notify user
					$overlay.hide();
					swal({
						title: "The shopping cart isn't empty",
						html: "<div class='nonempty-cart'><p>You have items in your shopping cart. Would you like to merge items in this order with items of this shopping cart or replace them?</p>" +
							"<p>Select Cancel to stay on the current page.</p></div>",
						showCancelButton: true,
						confirmButtonText: 'Merge',
						cancelButtonText: 'Cancel'
					})
					$(".swal2-confirm.button").after('<button type="button" class="button replace-button">Replace</button>');
				} else {
					$overlay.show();
					addProductToCart(itemArr);
				}
				$(".swal2-confirm.button").on("click", function() {
					$overlay.show();
					addProductToCart(itemArr);
				});
				$(".replace-button").on("click", function() {
					swal.close();
					$overlay.show();
					replaceCart(cartItemIDs, itemArr);
					//replaceCart(cartItemIDs, cartId, itemArr);
				});
			},
			error: () => {
				$overlay.hide();
				swal({
					type: "error",
					text: "There has some error, please try again."
				});
			}
		});



		//

	});

	const listEditOptions = function(productId, variantId, itemIndex, itemOptions, skuHtml) {
		const modal = defaultModal();
		modal.open();

		utils.api.product.getById(productId, {
			template: 'b2b/modals/configure-product'
		}, (err, response) => {
			modal.updateContent(response);
			modal.$content.find("#index_container").attr("data-index", itemIndex);
			modal.$content.find("#variant_id_container").attr("data-variant-id", variantId);
			modal.$content.find("[data-product-sku]").html(skuHtml);

			//TODO presetted options
			//[{"option_id":"attribute[198]","option_value":"106"},
			// {"option_id":"attribute[199]","option_value":"98"},
			// {"option_id":"attribute[200]","option_value":"111"}]
			const options = JSON.parse(itemOptions);


			for (let j = 0; j < options.length; j++) {
				const optionName = options[j].option_id; //attribute[198]
				const optionValue = options[j].option_value;

				const $option = modal.$content.find(`[name="${optionName}"]`);
				if ($option.length > 0) {
					if ($option.attr("type") == "radio") {
						$option.each(function() {
							if ($(this).val() == optionValue) {
								$(this).prop("checked", true);
							}
						});
					} else if ($option.attr("type") == "checkbox") {
						$option.prop("checked", true);

					} else {
						$option.val(optionValue);
					}
				}
			}

		});
	}

	//aproval list, only for Junior buyer,change status from 30->40
	$("body").on('click', '#apply_approval', () => {
		const $trs = $shoppingListTable.find("tbody tr");
		if ($trs.length == 0) {
			alert("You have no items in your list.");
			return;
		}
		$overlay.show();

		let postData = _.cloneDeep(gListObj);
		postData.status = "40";

		console.log(postData);

		update_list(postData, function() {
			load_table();
		});
	});

	//pending approval, for Senior buyer and Admin,change status from 40->0
	$("body").on('click', "#pending_approval", () => {

		$overlay.show();

		let postData = _.cloneDeep(gListObj);
		postData.status = "0";

		console.log(postData);

		update_list(postData, function() {
			window.location.reload();
		});
	});

	//reject pending list, for Senior buyer and Admin,change status from 40->30
	$("body").on('click', "#reject_approval", () => {
		$overlay.show();

		let postData = _.cloneDeep(gListObj);
		postData.status = "30";

		console.log(postData);

		update_list(postData, function() {
			window.location.href = "/shopping-lists/";
		});
	});

	// change list status
	$("body").on('click', '[data-update-status]', () => {
		// if is junior user, and list is null, return
		const $trs = $shoppingListTable.find("tbody tr");
		if (gRoleId == "0" && $trs.length == 0) {
			alert("You have no items in your list.");
			return;
		}

		// if status not changed, dont do anything
		const new_status = $statusSelect.val();
		if (gListObj.status == new_status) {
			return;
		}

		$overlay.show();

		let postData = _.cloneDeep(gListObj);
		postData.status = new_status;

		console.log(postData);

		update_list(postData, function() {

			if (gRoleId == "0" && new_status == "40") {
				// pedding for approval
				//load_table();
				window.location.reload();
			} else if ((gRoleId == 1 || gRoleId == "2") && new_status == "0") {
				// submit for approval
				window.location.reload();
			} else if ((gRoleId == 1 || gRoleId == "2") && new_status == "30") {
				//reject submit
				window.location.href = "/shopping-lists/";
			}
		});
	});

	$("body").on('click', "#clear_cart", () => {
		$overlay.show();

		$.ajax({
			type: "GET",
			url: "../api/storefront/carts",
			contentType: "application/json",
			accept: "application/json",
			async: true,
			success: (data) => {

				if (data && data.length > 0) {

					//const cartItems = data[0].lineItems.physicalItems;
					const cartItems_all = data[0].lineItems.physicalItems;
					const cartItems = cartItems_all.filter(function(item) {
						return item.parentId == null;
					});
					// return cartItemIDs
					clearCart(cartItems)
				} else {
					// no cart
					$overlay.hide();
				}


			},
			error: () => {
				$overlay.hide();
				swal({
					type: "error",
					text: "There has some error, please try again."
				});
			}
		});
	});

	//reject pending list, for Senior buyer and Admin,change status from 40->30
	$("body").on('click', "#page_bottom_cart_nav", () => {
		$("#page_bottom_cart_nav").toggleClass("is-open");
		$("#page_bottom_cart").toggleClass("is-open");
	});


	//new search
	let catalog_products_detailInfo = [];
	const getCatalogProductArr = function(searchQuery) {
		const search_query = searchQuery;
		const $SearchResultsContainer = $("#catalog_search_results tbody");
		for (let pid in catalog_products) {
			const product = catalog_products[pid];
			const product_id = product.product_id;
			utils.api.product.getById(product_id, {
				template: 'b2b/shopping-list-search-results-item'
			}, (err, response) => {
				if (err) {
					return console.log(err);
				}

				$SearchResultsContainer.append(response);



			});
		}

	}
	const displayCatalogProducts = function(productArr) {

	}

	$("#search_product_catalog").on("change", (event) => {
		const $target = $(event.target);
		const searchQuery = $target.val();
		getCatalogProductArr(searchQuery);
	});


	// after upload the csv file, display products in csv file
	//sample data: [244, 287, "SKU100", "SKU-9BB3516E", "1", empty]
	const displayCsvProducts = function(products) {
		let csvProdcutsArr = [];
		const $csvCheckInfoContainer = $("#csv_check_info");
		const $csvProdcutsContainer = $("#csv_products_list");
		$csvCheckInfoContainer.html("Loading products...");
		$csvProdcutsContainer.html(`<table class="search-product-table" product-search-result-table><tbody></tbody></table>`);
		const $csvProdcutsTbody = $csvProdcutsContainer.find("tbody");

		const productCount = products.length;

		for (let i = 0; i < productCount; i++) {
			const product_id = products[i][0];
			const variant_id = products[i][1];
			const variant_sku = products[i][2];
			const product_qty = products[i][3];
			const product_options = products[i][4];
			//shopping-list-csv-product-item
			utils.api.product.getById(product_id, {
				template: 'b2b/shopping-list-csv-product-item'
			}, (err, response) => {
				if (err) {
					return console.log(err);
				}

				const tmpIndex = i;

				const $response = $(response);

				//change input id and label "for" attribute
				const $optionLabels = $response.find("label[data-product-attribute-value]");
				$optionLabels.each(function() {
					const $optionLabel = $(this);
					const $optionInput = $optionLabel.prev();
					const optionId = $optionLabel.attr("for");
					const new_optionId = `csv_${variant_id}_${optionId}`;
					$optionLabel.attr("for", new_optionId);
					$optionInput.attr("id", new_optionId);
				});

				initProductListOptionPrice();

				const $form = $response.find("form.option-form");
				const $checkBox = $form.parents("tr").find("[data-results-check-box]");

				//set qty
				$response.find("#product_qty_id").val(product_qty);
				//set variant id
				$response.attr("data-variant-id", variant_id);

				$csvProdcutsTbody.append($response);

				const hasOptions = $form.find("[data-product-option-change]").html().trim().length;
				const $inputOptions = $form.find("[data-product-option-change] .form-input");

				if ($inputOptions.length > 0) {
					//console.log(product_options);
					//console.log(typeof product_options);

					if (product_options && product_options.trim() != "") {
						const product_options_arr = product_options.split(";");
						$inputOptions.each((index, item) => {
							if (product_options_arr && product_options_arr.length >= index + 1) {
								$(item).val(product_options_arr[index]);
							}
						});
					}
				}

				if (hasOptions) {
					//https://fl4mq0bm40.execute-api.us-west-2.amazonaws.com/prod/productvariants?store_hash=h3jnjw30qw&product_id=234&variant_id=260
					$.ajax({
						type: "GET",
						url: `${config.apiRootUrl}/productvariants?store_hash=${bypass_store_hash}&product_id=${product_id}&variant_id=${variant_id}`,
						success: function(data) {
							if (data && data.option_list) {
								const options = data.option_list;
								for (let j = 0; j < options.length; j++) {
									const optionId = options[j].option_id;
									const optionValue = options[j].option_value;

									const $option = $(`[name="attribute[${optionId}]"]`, $form);
									if ($option.length > 0) {
										if ($option.attr("type") == "text") {

											//$option.val(optionValue);
											if (product_options) {
												$option.val(optionValue);
											}

										} else if ($option.hasClass("form-select")) {
											$option.val(optionValue);

											//} else if ($option.hasClass("form-radio")) {
										} else if ($option.attr("type") == "radio") {

											$option.each(function() {
												if ($(this).val() == optionValue) {
													$(this).prop("checked", true);
												}
											});

										} else if ($option.attr("type") == "checkbox") {
											//$option.val(optionValue);
											$option.prop("checked", true);
										}
									}
								}

								//
								onOptionChange(product_id, $form);
							}
						},
						error: function(jqXHR, textStatus, errorThrown) {

							console.log("error", JSON.stringify(jqXHR));
						}
					});

				} else {
					//simple products, direct check them
					$checkBox.prop("checked", true);
				}

				if (tmpIndex == productCount - 1) {
					$csvCheckInfoContainer.html("Your products are listed below.");
				}



			});
		}

	}


	// after upload csv file, directly add csv products to list
	const addCsvProductsToList = function(products) {
		let csvProdcutsArr = [];
		const productCount = products.length;
		let finishedCount = 0;
		let products_arr = _.cloneDeep(gListObj.products) || [];

		$overlay.show();

		for (let i = 0; i < productCount; i++) {
			const product_id = products[i][0];
			const variant_id = products[i][1];
			const variant_sku = products[i][2];
			const product_qty = products[i][3];
			const product_options = products[i][4];

			//shopping-list-csv-product-item
			utils.api.product.getById(product_id, {
				template: 'b2b/shopping-list-csv-product-item'
			}, (err, response) => {
				if (err) {
					console.log(err);
					$overlay.show();
					return swal({
						text: response.data.errors.join('\n'),
						type: 'error',
					});
				}

				const tmpIndex = i;
				const $response = $(response);

				const $form = $response.find("form.option-form");
				const hasOptions = $form.find("[data-product-option-change]").html().trim().length;
				const $inputOptions = $form.find("[data-product-option-change] .form-input");

				$.ajax({
					type: "GET",
					url: `${config.apiRootUrl}/productvariants?store_hash=${bypass_store_hash}&product_id=${product_id}&variant_id=${variant_id}`,
					success: function(data) {
						finishedCount++;
						let options_list = [];
						if (data && data.option_list) {
							const options = data.option_list;

							for (let j = 0; j < options.length; j++) {
								const optionId = options[j].option_id;
								const optionValue = options[j].option_value;


								const optionObj = {
									"option_id": `attribute[${optionId}]`,
									"option_value": optionValue + ""
								}

								options_list.push(optionObj);



							}
						}

						const product_options_arr = product_options.split(";");
						if ($inputOptions.length > 0 && product_options_arr.length > 0) {
							if (product_options && product_options.trim() != "") {
								$inputOptions.each((index, item) => {
									if (product_options_arr.length >= index + 1) {
										//$(item).val(product_options_arr[index]);
										const optionId = $(item).attr("name")
										const optionObj = {
											"option_id": optionId,
											"option_value": product_options_arr[index]
										}

										options_list.push(optionObj);
									}
								});
							}
						}

						//if has duplicated products
						let isExist = false;
						for (let k = 0; k < products_arr.length; k++) {
							const sameOption = (JSON.stringify(options_list) == JSON.stringify(products_arr[k].options_list));
							const sameProductId = (products_arr[k].product_id == product_id);
							const sameVariantId = (products_arr[k].variant_id == variant_id);
							if (sameProductId && sameVariantId && sameOption) {
								products_arr[k].qty = parseInt(products_arr[k].qty) + parseInt(product_qty);
								isExist = true;
							}
						}
						if (!isExist) {
							products_arr.push({
								"product_id": product_id,
								"variant_id": variant_id,
								"qty": product_qty,
								"options_list": options_list
							});
						}

						// after get all product options
						if (finishedCount == productCount) {
							// all products options getted, add to list
							let postData = _.cloneDeep(gListObj);
							postData.products = products_arr;
							//test data
							/*postData.products = [{
								"product_id": "234",
								"variant_id": "266",
								"qty": "2"
							}];*/


							//console.log(JSON.stringify(postData));
							console.log(postData);
							//return;

							$overlay.show();
							update_list(postData, function() {
								scrollToTable();
								load_table();
								//clear search input
								$("#product_search_input").val("");
								$("#product_qty").val("");
								$("#product_search_results").html("");
								$("#product_search_skus").val("");
								$("#skus_search_results").html("");

								resetCsvFileUpload();

								swal({
									text: "Your products have been added to list successfully.",
									type: 'success',
								});
							});

						}
					},
					error: function(jqXHR, textStatus, errorThrown) {
						$overlay.show();
						console.log("error", JSON.stringify(jqXHR));
					}
				});



			});

		}

	}

	// csv file upload

	const resetCsvFileUpload = function() {
		$("#csv_check_info").html("");
		$("#csv_products_list").html("");
		$("#customer_sku_csv").val("");
		$("#csv_file_name").text("");
	}

	// get product options by product id and variant id
	const getProductOptions = function(cb) {
		$.ajax({
			type: "GET",
			url: `${config.apiRootUrl}/productvariants?store_hash=${bypass_store_hash}&product_id=${product_id}&variant_id=${variant_id}`,
			success: function(data) {
				if (data && data.option_list) {
					const options = data.option_list;
					//$tr.attr("data-product-options", JSON.stringify(options));
					cb();
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error", JSON.stringify(jqXHR));
			}
		});
	}

	const uploadDealcsv = function() {};
	/*------ Method for read uploded csv file ------*/
	uploadDealcsv.prototype.getCsv = function(e) {

		let input = document.getElementById('customer_sku_csv');
		input.addEventListener('change', function() {

			if (this.files && this.files[0]) {
				var uploadFile = this.files[0];
				resetCsvFileUpload();
				$("#csv_file_name").text(uploadFile.name);

				var reader = new FileReader();

				reader.addEventListener('load', function(e) {
					let csvdata = e.target.result;
					console.log(csvdata);
					const data = parseCsv.validation(csvdata);
					console.log(data);
					/*if (data) {
						const csvTobase64Data = btoa(JSON.stringify(data));
						console.log(csvTobase64Data);
						csvFileData = csvTobase64Data;


						window.csvTobase64 = csvTobase64Data;
					}*/
				});

				reader.readAsBinaryString(uploadFile);
			}
		});
	}
	/*------- Method for parse csv data and display --------------*/
	uploadDealcsv.prototype.validation = function(content) {
		const $csvCheckInfoContainer = $("#csv_check_info");
		$csvCheckInfoContainer.html(`<p class="checking-tips">Checking file...</p>`);
		let parsedata = [];
		let originArr = [];
		let errorCounter = 0;
		if (content) {
			originArr = content.split("\n");
		}

		/*originArr = [
			"variant_sku,qty,options,,",
			"SKU074,1,,,",
			",3,,,",
			"SKU-9BB3516E,4,,,",
			"SKU-9BB3516E,,,,",
			",,,,",
			""
		];*/
		/*originArr = [
			"variant_sku,qty,options,,",
			"SKU074,1,,,",
			"SKU-9E819FC0,4,,,",
			"SKU-9BB3516E,1,,,",
			",,,,",
			""
		];*/
		console.log(originArr);


		parseCsv.removeEmptyRow(originArr);
		let unEmptyArr = originArr;

		let columns = 0;
		if (unEmptyArr && unEmptyArr.length > 0) {
			const headerRow = unEmptyArr[0];
			const headerArr = headerRow.split(",");
			//["variant_sku", "qty", "options", "", ""]
			parseCsv.removeEmptyRow(headerArr);
			columns = headerArr.length;
			console.log(headerArr);

		} else {
			$csvCheckInfoContainer.html(`<div class="checking-info-box">Empty file, please upload another.</div>`);
			return null;
		}

		for (let i = 1; i < unEmptyArr.length; i++) {


			let productIdsArr = "";
			const dataItem = unEmptyArr[i].split(",");
			//console.log(dataItem); //["SKU074", "1", "", "", ""]

			parseCsv.removeEmptyRow(dataItem);

			//console.log(dataItem); //["SKU074", "1", "", "", ""]

			let errorInfo = "";
			if (dataItem.length > columns) {
				errorInfo += `redundant data; `;
			} else {
				dataItem.length = columns;
			}
			if (!dataItem[0]) {
				errorInfo += `variant_sku can't be empty; `;
			} else {
				const idsArr = getIdsByVariantSku(dataItem[0]);
				if (idsArr && idsArr.length > 0) {
					productIdsArr = idsArr;
				} else {
					errorInfo += `variant_sku ${dataItem[0]} doesn't exist; `;
				}
			}
			if (!dataItem[1]) {
				errorInfo += `qty can't be empty; `;
			}

			if (errorInfo.trim() != "") {
				errorCounter++;
				$csvCheckInfoContainer.append(`<div class="error-info-line"><i class="fa fa-exclamation-triangle"></i> Error: Line ${i+1} - ${errorInfo}</div>`);
			}
			const productDataArr = productIdsArr.concat(dataItem);

			parsedata.push(productDataArr);

		}
		console.log('parsedataparsedataparsedataparsedata',parsedata);

		if (errorCounter == 0) {
			/*$csvCheckInfoContainer.html(`<div>File check passed.</div>`);
			//displayCsvProducts(parsedata);
			addCsvProductsToList(parsedata);*/

			//advQty check
			const csvdataArr = parsedata.map((item) => {
				return {
					sku: item[2],
					qty: item[3]
				}
			});
			AdvQuantityUtil.csvProductsQtyCheck(csvdataArr, () => {
				$csvCheckInfoContainer.html(`<div>File check passed.</div>`);
				addCsvProductsToList(parsedata);
			}, () => {
				$csvCheckInfoContainer.append(`<div class="csv-error-summary">Your file doesn't pass our "Advance Quantity" check, please correct them and upload the file again.</div>`);
				$csvCheckInfoContainer.find(".checking-tips").remove();
			});


		} else {
			$csvCheckInfoContainer.append(`<div class="csv-error-summary">Your file has ${errorCounter} errors, please correct them and upload the file again.</div>`);
			$csvCheckInfoContainer.find(".checking-tips").remove();
		}
		return parsedata;
	}

	uploadDealcsv.prototype.isEmptyRow = function(arr) {
		//[,,,,,]
		const tmpArr = arr.split(",");
		for (let k = 0; k < tmpArr.length; k++) {
			//console.log(tmpArr[k]);
			if (tmpArr[k] && tmpArr[k] != "" && tmpArr[k] != null) {
				return false;
			}
		}
		return true;
	}
	uploadDealcsv.prototype.removeEmptyRow = function(arr) {
		const tmpArr = arr;
		if (parseCsv.isEmptyRow(tmpArr[tmpArr.length - 1])) {
			tmpArr.pop();
			parseCsv.removeEmptyRow(tmpArr);
		} else {
			return tmpArr;
		}
	}
	var parseCsv = new uploadDealcsv();
	parseCsv.getCsv();

	//clear cart contents
	const clearCart = function(cartItemArr) {
		const cartitem = cartItemArr[cartItemArr.length - 1];
		$overlay.show();
		utils.api.cart.itemRemove(cartitem.id, (err, response) => {
			if (response.data.status === 'succeed') {
				cartItemArr.pop();

				if (cartItemArr.length > 0) {
					clearCart(cartItemArr);
				} else {
					$overlay.hide();
					$('body').trigger('cart-quantity-update', 0);
					$("[data-cart-subtotal]").text("$0.00");
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

	const getMainProductTierPrice = function(variantSku, qty) {
		let tier_price;

		if (!variantSku) {
			return false;
		}

		const productId = $('[name="product_id"]', this.$scope).val();

		if (catalog_products && catalog_products[productId]) {
			/*const $price = $("[data-product-price-without-tax]", this.$scope) || $("[data-product-price-with-tax]", this.$scope);
			const base_price = $price.text().trim();
			const base_price_symbol = base_price.substring(0, 1);
			const base_price_value = base_price.replace("$", "");*/
			const base_price_value = this.getMainProductBasePrice();
			console.log(base_price_value);

			const variantSkus = catalog_products[productId];
			let tier_price_array = [];
			for (let i = 0; i < variantSkus.length; i++) {
				if (variantSkus[i].variant_sku == variantSku) {
					tier_price_array = variantSkus[i].tier_price;
				}
			}

			tier_price = base_price_value;
			for (let j = 0; j < tier_price_array.length; j++) {
				const price_type = tier_price_array[j].type;
				const tier_qty = tier_price_array[j].qty;
				const price = tier_price_array[j].price;

				if (qty >= tier_qty) {
					if (price_type == "fixed") {
						tier_price = price;

					} else {
						tier_price = base_price_value - base_price_value * price / 100;
					}
				}
			}

			if (tier_price) {
				tier_price = parseFloat(tier_price).toFixed(2);
			}
		}

		return tier_price;
	}

	// for bundleb2b
	const getVariantOptions = function($priceSpan, product_id, variant_id, pickListArr) {
		const bypass_store_hash = `${config.storeHash}`;

		$.ajax({
			type: "GET",
			url: `${config.apiRootUrl}/productvariants?store_hash=${bypass_store_hash}&product_id=${product_id}&variant_id=${variant_id}`,
			success: (data) => {

				const gMasterPrcie = $priceSpan.attr("data-main-price");

				let productPrice = parseFloat(gMasterPrcie).toFixed(2);
				console.log("price start -------");
				console.log(productPrice);

				if (data && data.option_list) {
					const options = data.option_list;

					for (let i = 0; i < pickListArr.length; i++) {
						const pickedOptionId = pickListArr[i].pickedOptionId;
						const pickedOptionValue = pickListArr[i].pickedOptionValue;
						const pickedProductId = pickListArr[i].pickedProductId;

						let showCustomPrice = true;

						for (let j = 0; j < options.length; j++) {
							const optionId = options[j].option_id;
							const optionValue = options[j].option_value;

							if (pickedOptionId == optionId && pickedOptionValue == optionValue) {
								showCustomPrice = false;
							}
						}

						if (showCustomPrice) {
							const pickListProductPrice = gTierPrice[pickedProductId] || 0;
							productPrice = parseFloat(parseFloat(productPrice) + parseFloat(pickListProductPrice)).toFixed(2);
							console.log("+" + pickListProductPrice);

						}
					}
				}

				console.log(productPrice);
				console.log("price end -------");

				$priceSpan.text("$" + pricesStyle(parseFloat(productPrice).toFixed(2), 2));
				// for list
				if ($priceSpan.parents("tr").find(".product-subtotal-span").length > 0) {
					const qty = $priceSpan.parents("tr").find("input.qty").val();
					const totlePriceValue = parseFloat(qty * productPrice).toFixed(2);
					$priceSpan.parents("tr").find(".product-subtotal-span").text("$" + pricesStyle(totlePriceValue, 2));
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error", JSON.stringify(jqXHR));
			}
		});
	}


	// for bundleb2b
	// for simple products
	const getTierPriceByProductId = function(productId, qty, cb) {
		if (!productId) {
			return;
		}

		$.ajax({
			type: "GET",
			url: `${config.apiRootUrl}/getCatalogproduct?store_hash=${config.storeHash}&id=${productId}`,
			success: (data) => {
				if (!data) {
					return;
				}
				let tier_price;
				const base_price = data.price;

				if (catalog_products && catalog_products[productId]) {
					const variantSkus = catalog_products[productId];
					const tier_price_array = variantSkus[0].tier_price;
					const base_price_value = base_price;

					for (let j = 0; j < tier_price_array.length; j++) {
						const price_type = tier_price_array[j].type;
						const tier_qty = tier_price_array[j].qty;
						const price = tier_price_array[j].price;

						if (qty >= tier_qty) {
							if (price_type == "fixed") {
								tier_price = price;

							} else {

								if (base_price_value) {
									tier_price = base_price_value - base_price_value * price / 100;
								} else {
									tier_price = new_price;
								}
							}
						}
					}

					if (tier_price) {
						tier_price = parseFloat(tier_price).toFixed(2);
					}
				} else {
					tier_price = base_price;
				}

				gTierPrice[productId] = tier_price;

				if (cb) {
					cb();
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error", JSON.stringify(jqXHR));
			}
		});

	}

	// for simple products
	const getTierPriceByProductId_multi = function(productIds, qty, cb) {
		const productId = productIds[productIds.length - 1];
		if (gTierPrice[productId]) {
			productIds.pop();
			if (productIds.length == 0) {
				if (cb) {
					cb();
				}
			} else {
				getTierPriceByProductId_multi(productIds, qty, cb);
			}

		} else {
			utils.api.product.getById(productId, {
				template: 'b2b/product-view-data'
			}, (err, response) => {
				let tier_price;
				const base_price = $(response).attr("data-product-priceValue");

				if (catalog_products && catalog_products[productId]) {
					const variantSkus = catalog_products[productId];
					const tier_price_array = variantSkus[0].tier_price;
					const base_price_value = base_price;

					for (let j = 0; j < tier_price_array.length; j++) {
						const price_type = tier_price_array[j].type;
						const tier_qty = tier_price_array[j].qty;
						const price = tier_price_array[j].price;

						if (qty >= tier_qty) {
							if (price_type == "fixed") {
								tier_price = price;

							} else {

								if (base_price_value) {
									tier_price = base_price_value - base_price_value * price / 100;
								} else {
									tier_price = new_price;
								}
							}
						}
					}

					if (tier_price) {
						tier_price = parseFloat(tier_price).toFixed(2);
					}
				} else {
					tier_price = base_price;
				}

				gTierPrice[productId] = tier_price;

				productIds.pop();
				if (productIds.length == 0) {
					if (cb) {
						cb();
					}
				} else {
					getTierPriceByProductId_multi(productIds, qty, cb);
				}


			});

		}



	}

	$("#skus_search_results").on('change', '#product_qty_id', (event) => {
		const $target = $(event.currentTarget);
		const $tr = $target.parents("tr");
		const qtyInput = $target;
		const product_id = $tr.attr("data-product-id");

		AdvQuantityUtil.handleQuantityChange(event);


		let sku = $tr.find("[data-product-sku]")[0].innerText.split('SKU: ')[1];
		const $priceSpan = $tr.find("[data-product-price]");
		let qty = qtyInput.val();
		const variants = catalog_products[product_id];

		let catalog_price = getCatalogPrice(sku, variants, qty, 2);
		if (catalog_price == 'NaN') {
			catalog_price = getCatalogPrice(sku, variants, qty, 1);
		}
		$priceSpan.text("$" + pricesStyle(parseFloat(catalog_price).toFixed(2), 2));

	});

	/*const productQtyChange = function(product_id) {
		const productQtyOption = $(`[product-search-result-table] tbody tr[data-product-id="${product_id}"]`);
		const qtyInput = productQtyOption.find("#product_qty_id");
		if (qtyInput.length > 0) {
			qtyInput.on('change', event => {
				AdvQuantityUtil.handleQuantityChange(event);


				let sku = productQtyOption.find("[data-product-sku]")[0].innerText.split('SKU: ')[1];
				const $priceSpan = productQtyOption.find("[data-product-price]");
				let qty = qtyInput.val();
				const variants = catalog_products[product_id];

				let catalog_price = getCatalogPrice(sku, variants, qty, 2);
				if (catalog_price == 'NaN') {
					catalog_price = getCatalogPrice(sku, variants, qty, 1);
				}
				$priceSpan.text("$" + pricesStyle(parseFloat(catalog_price).toFixed(2), 2));
			});
		}
	};*/

	const initProductListOptionPrice = function() {
		const $form = $('form[data-cart-item-add]');
		const $pickListOptions = $('.form-field[data-product-attribute="product-list"]');
		if ($pickListOptions.length > 0) {
			$.each($pickListOptions, (index, option) => {
				const $formRadios = $(option).find("input.form-radio");
				$.each($formRadios, (i, radio) => {
					const productId = $(radio).attr("data-product-id");
					console.log(productId);
					if (!gTierPrice[productId]) {
						getTierPriceByProductId(productId, 1);
					}

				});

			});
		}
		console.log(gTierPrice);
	}

	const getMainProductBasePrice = function() {

		const $price = $("[data-product-price-without-tax]", this.$scope) || $("[data-product-price-with-tax]", this.$scope);
		const base_price = $price.text().trim();
		const base_price_symbol = base_price.substring(0, 1);
		const base_price_value = base_price.replace("$", "").replace(",", "");
		return base_price_value;
	}

	const setUpSearchResultsAdvQty = ($qtyInputs, hideAlert) => {

		AdvQuantityUtil.setUpAdvQtyMulti($qtyInputs, {
			bindInputEvents: true,
			bindButtonEvents: false,
			tips: true
		}, () => {
			$qtyInputs.each((l_idx, l_item) => {
				const $input = $(l_item);
				//AdvQuantityUtil.handleQuantityChange(null, $input, hideAlert);
				$input.trigger("change");
			});
		});
	}



}

/*$.ajax({
	type: "GET",
	url: `${config.apiRootUrl}/company?store_hash=${bypass_store_hash}&customer_id=${bypass_customer_id}`,
	success: function(data) {
		console.log("list users", data);
	},
	error: function(jqXHR, textStatus, errorThrown) {
		$overlay.hide();
		console.log("error", JSON.stringify(jqXHR));
	}
});*/