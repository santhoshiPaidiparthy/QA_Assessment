/**
 * UI Test3 : Verify removing all items from your cart produces an empty cart message.
 * 
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
    expect             = require("chai").expect;


describe('Remove items from cart - test', function(){

	var driver;



	describe('Remove items from cart - ', function(){

		before(function() {

			driver = new webdriver.Builder().
			withCapabilities(webdriver.Capabilities.chrome()).build();


		});

		it('cart should be empty, and a message saying the same should be displayed', function(done) {


			driver.get('http://store.demoqa.com');

			var home = new HomePage(driver);
			var CheckoutCart = new CheckOutPage(driver);

			//Add items to your cart
			//
			home.iPhones()
			.then(function(){

				/* Once a particular category(iPhones) is selected, the results page with products in iPhone section will be displayed. 
				 * Select the product 'Apple iPhone4s 16GB SIM-Free – Black' and add it to the cart.*/

				var AddProductToCart = new ProductResultsPage(driver);
				AddProductToCart.Product2()
				.then(function(){

					/*Page takes some time load. So, using setTimeout to wait for some time before we look for the next web element*/
					setTimeout(function(){

						/*Remove the product from cart by clicking remove button on checkout page*/
						CheckoutCart.removeFromCart()
						.then(function(){

							/*Look for the message saying 'Oops, there is nothing in your cart.'*/
							CheckoutCart.checkEntryContent()
							.then(function(value){

								expect(value).to.equal(testData.EMPTYCARTMESSAGE);

								/*For every 'it' that needs to wait for a response value, we will inject a 'done' callback and call 
								 * it only when our expectations were exceuted. This way mocha knows it needs to wait for some of the expectations.
								 */
								done(); 

							});

						});

					}, 3000);

				});
			});

		});

		/* After running the test close the driver instance*/
		after(function() { driver.quit(); });

	});
});


