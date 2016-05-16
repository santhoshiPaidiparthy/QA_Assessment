/**
 * UI Test2 : Verify updating your account details is saved and retrieved after logging out and back in using the My Account link.
 *  
 * 
 * Author : Santhoshi Paidiparthy
 * Date   : 05/15/2016
 */

var assert             = require('assert'),
    test               = require('selenium-webdriver/testing'),
    webdriver          = require('selenium-webdriver'),
    HomePage           = require('../app/pageObjects/HomePage.js'),
    ProductResultsPage = require('../app/pageObjects/ProductResultsPage.js'),
    CheckOutPage       = require('../app/pageObjects/CheckOutPage.js'),
    PaymentPage        = require('../app/pageObjects/PaymentPage.js'),
    testData           = require('../app/testData/testData.js'),
    LogInPage          = require('../app/pageObjects/LogInPage.js'),
    LogOutPage         = require('../app/pageObjects/LogOutPage.js'),
    AccountPage        = require('../app/pageObjects/AccountPage.js'),
    expect             = require("chai").expect;

describe('Update user account profile Test', function() {

	var driver;

	before(function() {

		/*Create the driver instance with capabilities*/
		driver = new webdriver.Builder().
		withCapabilities(webdriver.Capabilities.chrome()).build();

	});


	it('Login -> update -> logout -> should have updated values', function(done) {

		driver.get('http://store.demoqa.com');

		var home = new HomePage(driver);
		var login = new LogInPage(driver);
		var accnt = new AccountPage(driver);
		var logout = new LogOutPage(driver);

		/*Go to home page and get the myaccoutnt element*/
		home.MyAccount().click();

		/*Go to Login page and enter credentials and click login*/
		login.enterUserName(testData.USERNAME)
		.then(function(){

			login.enterPassword(testData.PASSWORD)
			.then(function(){

				login.clickLoginButton()
				.then(function(){

					//update account details
					accnt.clickOnYourDetails()
					.then(function(){

						//clear FirstName
						accnt.clearFirstName()
						.then(function(){
							//Update FirstName
							setTimeout(function(){
								accnt.updateFirstName(testData.FIRSTNAME)
								.then(function(){
									setTimeout(function(){
										//click save profile
										accnt.clickSaveProfile()
										.then(function(){

											//click logout
											accnt.clickLogOut()
											.then(function(){

												//Log back in
												login.enterUserName(testData.USERNAME)
												.then(function(){

													login.enterPassword(testData.PASSWORD)
													.then(function(){

														login.clickLoginButton()
														.then(function(){
															//get firstname field value and compare with the expcted value
															accnt.getFirstNameValue()
															.then(function(value){

																expect(value).to.equal(testData.FIRSTNAME) // check the returned firstName value with the expected firstname                                                                                                                                 
																/*For every 'it' that needs to wait for a response value, we will inject a 'done' callback and call 
																 * it only when our expectations were exceuted. This way mocha knows it needs to wait for some of the expectations.
																 */	
																done();

															});

														});
													});
												});


											});
										});
									}, 5000)
								});
							});
						}, 3000)

					});
				});

			});

		});  

	} );

	/* After running the test close the driver instance*/
	after(function() { driver.quit(); })



});
