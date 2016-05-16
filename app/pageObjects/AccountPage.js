/**
 * ClassName  : AccountPage
 * Author     : Santhoshi Paidiparthy
 * Date       : 05/14/2016
 */

'use strict';


var webdriver = require('selenium-webdriver'),
    until = webdriver.until,
    By = webdriver.By;


/**
 * Class for taking actions on account page
 * Methods : getFirstNameElement(), clearFirstName(), updateFirstName(Fname), getFirstNameValue(), clickOnYourDetails(),  clickSaveProfile(), clickLogOut()
 *
 * Example:
 *
 *     new AccountPage(driver).
 *         getFirstNameElement();
 *
 * Future enhancements :Can add other methods to enter other personal details.
 */

class AccountPage{

	/**
	 * @param {!./webdriver.WebDriver} driver The driver that should be used to
	 *     perform this action sequence.
	 */
	constructor(driver) {
		/** @private {!./webdriver.WebDriver} */
		this.driver_ = driver;
	}

	/**
	 * Finds firstName element on account page and returns it
	 */
	getFirstNameElement(){

		let driver = this.driver_; 

		return driver.wait(until.elementLocated(By.id("wpsc_checkout_form_2")))


	}

	/**
	 * Finds firstName element on account page and clears it
	 */
	clearFirstName() {

		let driver = this.driver_; 

		return this.getFirstNameElement()
			.then(function(element){

				element.clear(); //clear the existing value before sending new value, otherwise new value gets appended to the old value.

			});

	}

	/**
	 * Finds firstName element on account page and enter the provided value for first name.
	 * @param Fname firstname value that is used to update the first name field
	 */
	updateFirstName(Fname) {

		let driver = this.driver_; 

		try{

			return this.getFirstNameElement()
				.then(function(element){

					element.sendKeys(Fname);

				});
		}catch(e){

			console.log("error", e)
		}

	}


	/**
	 * Finds firstName element on account page and returns its value
	 */
	getFirstNameValue(){

		return this.getFirstNameElement()
			.then(function(mainElement){

				return mainElement.getText();

			});

	}




	/**
	 * Finds your details button element on account page and clicks it.
	 */
	clickOnYourDetails() {

		let driver = this.driver_; 

		return driver.wait(until.elementLocated(By.css("#post-31 > div > div > div > a:nth-child(2)")))
			.then(function(element){

				element.click();

			});
	}


	/**
	 * Finds your details button element on account page and clicks it.
	 */
	clickSaveProfile(){

		let driver = this.driver_; 

		try{

			return driver.wait(until.elementLocated(By.name('submit')))
				.then(function(element){

					element.click();

				});
		}catch(e){

			console.log("error" , e)
		}
	}




	/**
	 * Finds logout button element on account page and clicks it.
	 */
	clickLogOut(){

		let driver = this.driver_; 

		return driver.wait(until.elementLocated(By.id('account_logout')))
			.then(function(element){

				element.click();

			});
	}




}

module.exports = AccountPage;

