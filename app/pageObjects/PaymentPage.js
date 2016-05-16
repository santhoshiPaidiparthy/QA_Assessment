/**
 * ClassName  : PaymentPage
 * Author     : Santhoshi Paidiparthy
 * Date       : 05/14/2016
 */

'use strict';


var webdriver = require('selenium-webdriver'),
    until = webdriver.until,
    By = webdriver.By;

/**
 * Class for taking actions on the page that displays payment details
 *
 * Methods: SelectCountry()
 *
 * Example usage:
 *
 *     new PaymentPage(driver).
 *         SelectCountry();
 *
 * Future Enhancements: Can add functions to fill other personal details
 */

class PaymentPage{

	/**
	 * @param {!./webdriver.WebDriver} driver The driver that should be used to
	 *     perform this action sequence.
	 */
	constructor(driver) {
		/** @private {!./webdriver.WebDriver} */
		this.driver_ = driver;
	}

	/**
	 * @param countryName The value is used to fill the country field on Payments page
	 * Description: Selects the country from the country drop down box
	 */
	SelectCountry(countryName) {

		let driver = this.driver_; 
		/**
		 * until.elementLocated()
		 * Creates a condition that will loop until an element is
		 * {@link ./webdriver.WebDriver#findElement found} with the given locator.
		 *
		 * @param {!(By|Function)} locator The locator to use.
		 * @return {!WebElementCondition} The new condition.
		 */ 
		return driver.wait(until.elementLocated(By.id('current_country')))
			.then(function(mainElement){

				mainElement.sendKeys(countryName)

			});
	}

	/**
	 * Description: Calculates the shipping cost based on the country
	 */
	CalculateShipping() {

		let driver = this.driver_; 
		/**
		 * until.elementLocated()
		 * Creates a condition that will loop until an element is
		 * {@link ./webdriver.WebDriver#findElement found} with the given locator.
		 *
		 * @param {!(By|Function)} locator The locator to use.
		 * @return {!WebElementCondition} The new condition.
		 */ 
		return driver.wait(until.elementLocated(By.name('wpsc_submit_zipcode')))
			.then(function(mainElement){

				mainElement.click()

			});
	}


	/**
	 * Description: Gets the total price of the item
	 */
	GetCheckoutTotal() {

		let driver = this.driver_; 
		/**
		 * until.elementLocated()
		 * Creates a condition that will loop until an element is
		 * {@link ./webdriver.WebDriver#findElement found} with the given locator.
		 *
		 * @param {!(By|Function)} locator The locator to use.
		 * @return {!WebElementCondition} The new condition.
		 */ 
		return driver.wait(until.elementLocated(By.xpath('//*[@id="checkout_total"]/span')))
			.then(function(mainElement){

				return mainElement.getText();

			});
	}


}

module.exports = PaymentPage;
