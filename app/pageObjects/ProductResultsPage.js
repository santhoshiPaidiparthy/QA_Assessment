/**
 * ClassName  : ProductResultsPage
 * Author     : Santhoshi Paidiparthy
 * Date       : 05/14/2016
 */

'use strict';


var webdriver = require('selenium-webdriver'),
    until = webdriver.until,
    By = webdriver.By;

/**
 * Class for taking actions on the page that displays the list of products in a chosen category.
 *
 * Methods: Product2()
 *
 * Example usage:
 *
 *     new ProductResultsPage(driver).
 *         Product1();
 *
 */

class ProductResultsPage{

	/**
	 * @param {!./webdriver.WebDriver} driver The driver that should be used to
	 *     perform this action sequence.
	 */
	constructor(driver) {
		/** @private {!./webdriver.WebDriver} */
		this.driver_ = driver;
	}

	/**
	 * Description: Adds Product "Apple iPhone4s 16GB SIM-Free – Black" to cart.
	 */
	Product2() {

		let driver = this.driver_; 
		/**
		 * until.elementLocated()
		 * Creates a condition that will loop until an element is
		 * {@link ./webdriver.WebDriver#findElement found} with the given locator.
		 *
		 * @param {!(By|Function)} locator The locator to use.
		 * @return {!WebElementCondition} The new condition.
		 */ 
		return driver.wait(until.elementLocated(By.css("#default_products_page_container > div.default_product_display.product_view_96.iphones.group > div.productcol > form > div.wpsc_buy_button_container.group > div.input-button-buy > span > input"))).then(function(mainElement){

			mainElement.click()
			.then(function(){

				driver.wait(until.elementLocated(By.className('go_to_checkout'))).then(function(element) {

					element.click();

				});

			});

		});
	}
}

module.exports = ProductResultsPage;
