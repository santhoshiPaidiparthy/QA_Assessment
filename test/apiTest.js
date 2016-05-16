/**
 * API Test1 : Query for nearest stations to Austin, TX that are part of the "ChargePoint Network". 
 * Verify that "HYATT AUSTIN" appears in the results. Store/save the Station Id of the HYATT AUSTIN station.
 *
 * API Test2 : Use the Station ID from previous test to query the API and return the Street Address of that station. 
 * Verify the Station Address is 208 Barton Springs, Austin, Texas, USA, 78704
 *  
 * 
 * Author : Santhoshi Paidiparthy
 * Date   : 05/15/2016
 */

var expect 		= require('chai').expect,
    request		= require('request'),
    logger              = require('nodejslogger'),
    testData            = require('../app/testData/testData.js'),
    util                = require('../util/util.js');



describe("API tests", function() {

	this.timeout(50000);

	var stationId = '',
	options   = '',
	req       = '',
	body      = '',
	station   = '';

/**
 * API test1 : Query for nearest stations to Austin, TX that are part of the "ChargePoint Network". 
 * Verify that "HYATT AUSTIN" appears in the results. Store/save the Station Id of the HYATT AUSTIN station. 
 **/

it("HYATT AUSTIN should appears in the results", function(done) {


	options = { 
		url : util.getNearestQueryUrl() , //build the url to get station details by station id
	headers : {'Content-Type':'application/json'}
	};

	logger.info("Nearest station..");

	//returns new instance of request with said defaults in place.
	req = request.defaults(options);

	//Make the Api call to get the data for nearest stations to Austin, TX that are part of ChargePoint Network
	return util.doRequest("GET", req)
	.then(function (result) {

		if (result.error) {

			throw new Error("Failed to get data: " + result.error);
		}

		//body of the result for the GET request
		body = JSON.parse(result.body);

		//Call util function to check if the result array has the given station (HYATT AUSTIN) in fuel_stations[].station_name
		station = util.checkLocationInNearestStations(body.fuel_stations)

		//save station id in the global variable for test2
		stationId = station.id;

	console.log("stationId", stationId);

	//If (HYATT AUSTIN) exists, station value is neither null nor undefined
	expect(station).to.exist

		done();
	})
.catch(function (error) {
	console.log(error);
})
});

/**
 * API test2: Use the Station ID from previous test to query the API and return the Street Address of that station. Verify the Station Address is 208 Barton Springs, Austin, Texas, USA, 78704
 * 
 */

it("Station Address should be 208 Barton Springs, Austin, Texas, USA, 78704", function(done) {


	var stationAddressStreet = '',
	stationAddressCity   = '',
	stationAddressZip    = '',
	stationAddressState  = '';


options = { 
	url : util.getStationByIdUrl(stationId) ,
	headers : {'Content-Type':'application/json'}
};


logger.info("Station Address..");
console.log("options.url", options.url);

//returns new instance of request with said defaults in place.
req = request.defaults(options);

//Make the Api call to get the 
return util.doRequest("GET", req)
.then(function (result) {

	if (result.error) {

		throw new Error("Failed to get data: " + result.error);
	}

	//body of the result for the GET request
	body = JSON.parse(result.body);

	//extract street address from the result body
	stationAddressStreet = body.alt_fuel_station.street_address;
	stationAddressCity   = body.alt_fuel_station.city;
	stationAddressZip    = body.alt_fuel_station.zip;
	stationAddressState  = body.alt_fuel_station.state;

	//compare the retrived values for address with the expected values
	expect(stationAddressStreet.trim()).to.equal(testData.STATIONADDRESSSTREET);
	expect(stationAddressCity.trim()).to.equal(testData.STATIONADDRESSCITY);
	expect(stationAddressZip.trim()).to.equal(testData.STATIONADDRESSZIP);
	expect(stationAddressState.trim()).to.equal(testData.STATIONADDRESSSTATE);

	done();
})
.catch(function (error) {
	console.log(error);
})
});


});


