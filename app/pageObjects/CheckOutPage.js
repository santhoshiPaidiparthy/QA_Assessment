/**
 * ClassName  : CheckOutPage
 * Author     : Santhoshi Paidiparthy
 * Date       : 05/14/2016
 */

'use strict';


var webdriver = require('selenium-webdriver'),
    until = webdriver.until,
    By = webdriver.By;

/**
 * Class for taking actions on the page that displays the items in the cart(checkout page)
 *
 * Methods: Continue()
 *
 * Example usage:
 *
 *     new CheckOutPage(driver).
 *         Continue();
 *
 * Future Enhancements: Can add functions to change the quantity of product, remove a product from the cart
 */

class CheckOutPage{

	/**
	 * @param {!./webdriver.WebDriver} driver The driver that should be used to
	 *     perform this action sequence.
	 */
	constructor(driver) {
		/** @private {!./webdriver.WebDriver} */
		this.driver_ = driver;
	}

	/**
	 * Description: continues to checkout.
	 */
	Continue() {

		let driver = this.driver_; 
		/**
		 * until.elementLocated()
		 * Creates a condition that will loop until an element is
		 * {@link ./webdriver.WebDriver#findElement found} with the given locator.
		 *
		 * @param {!(By|Function)} locator The locator to use.
		 * @return {!WebElementCondition} The new condition.
		 */ 
		return driver.wait(until.elementLocated(By.css('#checkout_page_container > div.slide1 > a > span')))
			.then(function(mainElement){

				mainElement.click()

			});
	}

	/**
	 * Description: remove from the cart
	 */
	removeFromCart() {

		let driver = this.driver_; 
		/**
		 * until.elementLocated()
		 * Creates a condition that will loop until an element is
		 * {@link ./webdriver.WebDriver#findElement found} with the given locator.
		 *
		 * @param {!(By|Function)} locator The locator to use.
		 * @return {!WebElementCondition} The new condition.
		 */ 
		return driver.wait(until.elementLocated(By.css('#checkout_page_container > div.slide1 > table > tbody > tr.product_row.product_row_0.alt > td.wpsc_product_remove.wpsc_product_remove_0 > form > input[type="submit"]:nth-child(4)')))
			.then(function(mainElement){

				mainElement.click()

			});
	}


	/**
	 * Description: check for the message when all the items in the cart are removed
	 */
	checkEntryContent(){

		let driver = this.driver_; 
		/**
		 * until.elementLocated()
		 * Creates a condition that will loop until an element is
		 * {@link ./webdriver.WebDriver#findElement found} with the given locator.
		 *
		 * @param {!(By|Function)} locator The locator to use.
		 * @return {!WebElementCondition} The new condition.
		 */ 


		return driver.wait(until.elementLocated(By.className('entry-content')))
			.then(function(element){

				return element.getText();

			})
	}

}

module.exports = CheckOutPage;

