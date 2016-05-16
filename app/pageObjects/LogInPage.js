/**
 * ClassName  : LogInPage
 * Author     : Santhoshi Paidiparthy
 * Date       : 05/14/2016
 */

'use strict';


var webdriver = require('selenium-webdriver'),
until = webdriver.until,
By = webdriver.By;


/**
 * Class for taking actions on login page
 * Methods : enterUserName() , enterPassword(), clickLoginButton()
 *
 * Example:
 *
 *     new LogInPage(driver).
 *         ();
 *
 * Future enhancements :Can add other methods like Login,logout, Cart to take actions on those items. But these are out of scope for this QA assessment.
 */

class LogInPage{

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
   * @param userName userName value
 */
 enterUserName(userName) {

	 let driver = this.driver_; 

    return driver.wait(until.elementLocated(By.id("log")))
	   .then(function(element){
               
               
               element.sendKeys(userName);

	   });

 }


  /**
   * Finds password element on login page and enters the provided value for password.
   * @param pswd password value
   */
 enterPassword(pswd) {

	 let driver = this.driver_; 
 
    return driver.wait(until.elementLocated(By.id("pwd")))
	   .then(function(element){
               
               
               element.sendKeys(pswd);

	   });

 }

 /**
   * Finds Login button element on login page and clicks it.
 */
 clickLoginButton() {

	 let driver = this.driver_; 

   return driver.wait(until.elementLocated(By.id("login"))).
	  then(function(element){
             
               element.click();

	   });
 }

  
}

module.exports = LogInPage;
