# QA Assessment

Submitted by : Santhoshi Paidiparthy
Date         : 05/16/2016

### Installation and setup

####Installing Node.js

 Install appropriate version of Node.js from [https://nodejs.org/en/](here).

####Chrome driver

  This project is done with chrome driver capabilities.
  Make sure you have the latest chrome driver. Get it [http://chromedriver.storage.googleapis.com/index.html](here) and put it in your PATH.

### Node modules

After cloning this repository, install the dependencies:

`npm install`


### Project Structure
   
   * `app` directory that contains executable code
      *  `app/pageObjects` has all the page objects
      *  `app/testData` has the data used for tests

   * `test` directory that has Mocha tests
   * `config` directory has config files
   * `util` directory has utility files
   * `package.json` has all the dependent modules for this project

### Running the tests 


Update the [](testData.js) with the test data you would like to test against.

Open the terminal and go to [](test) folder and run `mocha -t 50000 <your test filename>` Ex : `mocha -t 50000 accntUpdateTest.js`


###Automation Excercise part 1

Write a test to:

 * Submit an order for an Apple iPhone4s 16GB SIM-Free – Black (known issue with State drop-down, selecting Country is adequate) and verify the Total Price: given is correct (assume shipping cost is correct based on your choice). You may assume prices shown on product pages are the correct price.
   * Related files: [](orderIphoneTest.js)
 * Verify updating your account details is saved and retrieved after logging out and back in using the My Account link.
   * Related files: [](accntUpdateTest.js)
 * Verify removing all items from your cart produces an empty cart message.
   * Related files: [](removeFromCartTest.js)

  
##Automation Excercise part 2

write a test to:

* Query for nearest stations to `Austin, TX` that are part of the `ChargePoint Network`. Verify that `HYATT AUSTIN` appears in the results. Store/save the Station Id of the HYATT AUSTIN station.
  * Related files: [](apiTest.js)
* Use the `Station ID` from previous test to query the API and return the `Street Address` of that station. Verify the Station Address is `208 Barton Springs, Austin, Texas, USA, 78704`
  * Related files: [](apiTest.js)

##Code Anlysis/White-box Testing

  Please find the explanation here [https://github.com/santhoshiPaidiparthy/QA_Assessment/blob/master/WhiteBoxTesting.md](WhiteBoxTesting.md) 

##Specification Review Excercise

  Please find the explanation here []() 

 
