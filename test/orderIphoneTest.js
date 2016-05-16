/**
 * UI Test1 : Submit an order for an Apple iPhone4s 16GB SIM-Free – Black (known issue with State drop-down, selecting Country is adequate) and 
 * verify the Total Price: given is correct (assume shipping cost is correct based on your choice). You may assume prices shown on product 
 * pages are the correct price.
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


describe('Order iPhone', function(){

	this.timeout(50000);
	var driver;



	describe('Order iPhone - test1', function(){

		before(function() {

			/*Create the driver instance with capabilities*/

			driver = new webdriver.Builder().
			withCapabilities(webdriver.Capabilities.chrome()).build();


		});

		it('Country USA should have total price $282.00 (shipping+actual)', function(done) {


			driver.get(testData.TESTURL);

			var home = new HomePage(driver);

			/*Go to home page and navigate to 'Product Category' tab and click on 'iPhones' option */

			home.iPhones()
			.then(function(){

				/* Once a particular category(iPhones) is selected, the results page with products in iPhone section will be displayed. Select the product 'Apple iPhone4s 16GB SIM-Free – Black' and add it to the cart.*/	   
				var AddProductToCart = new ProductResultsPage(driver);
				AddProductToCart.Product2()
				.then(function(){

					/*Once the product is added to cart, a pop up window will be displayed. Select 'Go to checkout' option.*/
					var CheckoutCart = new CheckOutPage(driver);
					CheckoutCart.Continue()
					.then(function(){

						/*Choose the country passed into SelectCountry method*/ 
						var PayPage = new PaymentPage(driver);
						PayPage.SelectCountry(testData.COUNTRY1)  //testData.PRICE1 --> check testData.js file for this value
						.then(function(){ 

							/*Once the desired country is selected, click on calculate button to calculate the total price(shipping + product price)*/
							PayPage.CalculateShipping()
							.then(function(){

								/*Once the calculate button is clicked, get the total price value*/
								PayPage.GetCheckoutTotal()
								.then(function(value){

									var number = Number(value.replace(/[^0-9\.]+/g,""));

									// check the returned price with the expected price 
									expect(number).to.equal(Number(testData.PRICE1)); //testData.PRICE1 --> check testData.js file for this value


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

		} );


		/* After running the test close the driver instance*/
		after(function() { driver.quit(); });

	});



	/********************************************************************/

	describe('Order iPhone - test2', function(){

		before(function() {


			/*Create the driver instance with capabilities*/
			driver = new webdriver.Builder().
			withCapabilities(webdriver.Capabilities.chrome()).build();


		});

		it('Country sudan should have total price $284.00 (shipping+actual)', function(done) {

			driver.get(testData.TESTURL);

			var home = new HomePage(driver);
			//driver.waitforpagetoload(driver);
			// sleep 5;
			/*Go to home page and navigate to 'Product Category' tab and click on 'iPhones' option */
			home.iPhones()
			.then(function(){

				/* Once a particular category(iPhones) is selected, the results page with products in iPhone section will be displayed. Select the product 'Apple iPhone4s 16GB SIM-Free – Black' and add it to the cart.*/	   
				var AddProductToCart = new ProductResultsPage(driver);
				AddProductToCart.Product2()
				.then(function(){

					/*Once the product is added to cart, a pop up window will be displayed. Select 'Go to checkout' option.*/
					var CheckoutCart = new CheckOutPage(driver);
					CheckoutCart.Continue()
					.then(function(){

						/*Choose the country passed into SelectCountry method*/ 
						var PayPage = new PaymentPage(driver);
						PayPage.SelectCountry(testData.COUNTRY2)
						.then(function(){ 

							/*Once the desired country is selected, click on calculate button to calculate the total price(shipping + product price)*/
							PayPage.CalculateShipping()
							.then(function(){

								/*Once the calculate button is clicked, get the total price value*/
								PayPage.GetCheckoutTotal()
								.then(function(value){
									var number = Number(value.replace(/[^0-9\.]+/g,""));
									//console.log("number" , number);
									expect(number).to.equal(Number(testData.PRICE2)); // check the returned price with the expected price

									/*For every 'it' that needs to wait for a response value, we will inject a 'done' callback and call 
									 * it only when our expectations were exceuted. This way mocha knows it needs to wait for some of the expectations.
									 */
									done()

								});


							});
						});

					});

				});

			});

		} );

		/* After running the test close the driver instance*/
		after(function() { driver.quit(); });


	});



	/********************************************************************/


	describe('Order iPhone - test2', function(){

		before(function() {

			driver = new webdriver.Builder().
			withCapabilities(webdriver.Capabilities.chrome()).build();


		});

		it('Country sudan should not have total price $150.00 (shipping+actual)', function(done) {

			driver.get(testData.TESTURL);

			var home = new HomePage(driver);
			//driver.waitforpagetoload(driver);
			// sleep 5;
			/*Go to home page and navigate to 'Product Category' tab and click on 'iPhones' option */
			home.iPhones()
			.then(function(){

				/* Once a particular category(iPhones) is selected, the results page with products in iPhone section will be displayed. Select the product 'Apple iPhone4s 16GB SIM-Free – Black' and add it to the cart.*/	   
				var AddProductToCart = new ProductResultsPage(driver);
				AddProductToCart.Product2()
				.then(function(){

					/*Once the product is added to cart, a pop up window will be displayed. Select 'Go to checkout' option.*/
					var CheckoutCart = new CheckOutPage(driver);
					CheckoutCart.Continue()
					.then(function(){

						/*Choose the country passed into SelectCountry method*/ 
						var PayPage = new PaymentPage(driver);
						PayPage.SelectCountry(testData.COUNTRY2)
						.then(function(){ 

							/*Once the desired country is selected, click on calculate button to calculate the total price(shipping + product price)*/
							PayPage.CalculateShipping()
							.then(function(){

								/*Once the calculate button is clicked, get the total price value*/
								PayPage.GetCheckoutTotal()
								.then(function(value){
									var number = Number(value.replace(/[^0-9\.]+/g,""));
									//console.log("number" , number);
									expect(number).to.equal(Number(testData.PRICE3)); // check the returned price with the expected price

									/*For every 'it' that needs to wait for a response value, we will inject a 'done' callback and call 
									 * it only when our expectations were exceuted. This way mocha knows it needs to wait for some of the expectations.
									 */
									done()

								});


							});
						});

					});

				});

			});

		} );


		/* After running the test close the driver instance*/
		after(function() { driver.quit(); });


	});

});




