/**
 * ClassName  : HomePage
 * Author     : Santhoshi Paidiparthy
 * Date       : 05/14/2016
 */

'use strict';


var webdriver = require('selenium-webdriver'),
    until = webdriver.until,
    By = webdriver.By;


/**
 * Class for taking actions on home page  : navigating through the main navigation bar and choosing from the drop down actions
 * Methods : iPhones()
 *
 * Example:
 *
 *     new HomePage(driver).
 *         ProductCategory();
 *
 * Future enhancements :Can add other methods like Login,logout, Cart to take actions on those items. But these are out of scope for this QA assessment.
 */

class HomePage{

	/**
	 * @param {!./webdriver.WebDriver} driver The driver that should be used to
	 *     perform this action sequence.
	 */
	constructor(driver) {
		/** @private {!./webdriver.WebDriver} */
		this.driver_ = driver;
	}

	/**
	 * Selects the iPhones (id = 'menu-item-37') category under Product Category(id = 'menu-item-33') tab
	 */
	iPhones() {

		let driver = this.driver_; 
		/**
		 * until.elementLocated()
		 * Creates a condition that will loop until an element is
		 * {@link ./webdriver.WebDriver#findElement found} with the given locator.
		 *
		 * @param {!(By|Function)} locator The locator to use.
		 * @return {!WebElementCondition} The new condition.
		 */ 
		return  driver.wait(until.elementLocated(By.id('menu-item-33'))).then(function(mainElement){

			driver.actions().mouseMove(mainElement).perform()
			.then(function(){

				driver.wait(until.elementLocated(By.id('menu-item-37')))
				.then(function(element){

					element.click();

				});
			});
		});


	}


	/**
	 * Finds Myaccount element on home page and returns it.
	 */
	MyAccount(){

		let driver = this.driver_;

		return driver.wait(until.elementLocated(By.id('account')));

	}

	/**
	 * Finds cart element on home page and clicks it
	 */

	clickMycart(){

		let driver = this.driver_;

		return driver.wait(until.elementLocated(By.className("cart_icon")))
			.then(function(element){

				element.click()
			});
	}

}
module.exports = HomePage;

