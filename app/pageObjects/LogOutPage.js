/**
 * ClassName  : LogOutPage
 * Author     : Santhoshi Paidiparthy
 * Date       : 05/14/2016
 */

'use strict';


var webdriver = require('selenium-webdriver'),
until = webdriver.until,
By = webdriver.By;


/**
 * Class for taking actions on logout page
 * Methods : enterUserName() , enterPassword(), clickLoginButton()
 *
 * Example:
 *
 *     new LogOutPage(driver).
 *         enterUserName();
 *
 * Future enhancements : None
 */

class LogOutPage{

   /**
   * @param {!./webdriver.WebDriver} driver The driver that should be used to
   *     perform this action sequence.
   */
  constructor(driver) {
    /** @private {!./webdriver.WebDriver} */
    this.driver_ = driver;
  }
  
 /**
   * Finds username element on login page and enter the provided value for username.
 */
 enterUserName(name) {

	 let driver = this.driver_; 

    return driver.wait(until.elementLocated(By.id("log")))
	   .then(function(element){
               
               
               element.sendKeys(name);

	   });

 }


  /**
   * Finds password element on login page and enters the provided value for password.
   */
 enterPassword(pswd) {

	 let driver = this.driver_; 
 
    return driver.wait(until.elementLocated(By.id("user_pass")))
	   .then(function(element){
               
               
               element.sendKeys(pswd);

	   });

 }

 /**
   * Finds Login button element on login page and clicks it.
 */
 clickLoginButton() {

	 let driver = this.driver_; 

   return driver.wait(until.elementLocated(By.id("user_login"))).
	  then(function(element){
             
               element.click();

	   });
 }

  
}

module.exports = LogOutPage;

