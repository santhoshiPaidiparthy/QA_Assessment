/**
 * util   : contains utility functions 
 * 
 * Author : Santhoshi Paidiparthy
 * Date   : 05/15/2016
 */

var q               = require('q'),
    logger          = require('nodejslogger'),
    config          = require('../config/config.js'),
    testData         = require('../app/testData/testData.js');

/**
 * Helper method for sending a requests and returning a promise
 * The result of the promise is an object with three properties: 
 *    error, response & body
 * 
 * @param method
 * @param request
 * @returns response
 */
function doRequest(method, request) {

	var deferred = q.defer();

	var options = { method: method, strictSSL:true };

	request(options, function (error, response, strBody) {

		logger.debug("Error:    " + error);
		if (response) {
			logger.debug("Response: " + response.statusCode);
		}

		deferred.resolve({"error": error, "response": response, "body": strBody});
	});

	return deferred.promise;	
}

/**
 * Helper method to check if the given array has a station name equal to the test station name
 * 
 * @param fuelStations -> array 
 * @returns stationDetails
 */
function checkLocationInNearestStations(fuelStations){

	var stationDetails = '';
	var stationName = testData.CHECKSTATION;

	fuelStations.map(function(item,index){

	if((item.station_name).trim() == stationName)
	{

		stationDetails =  {"id" : item.id, "stationName" : item.station_name}

	}  

	});

	return stationDetails;

}



/**
 * getNearestQueryUrl : Helper method to build query url to get the nearest stations to Austin,TX that are part of the "ChargePoint Network".
 * 
 * @param None 
 * @returns queryUrl
 */

function getNearestQueryUrl(){

	var queryUrl = config.NEARESTSTATIONURL + config.APIKEY +'&location=' + testData.LOCATION + '&ev_network='+ testData.EVNETWORK;	  
	return queryUrl;
}



/**
 * getStationByIdUrl : Helper method to build query url to get the station details based on station id.
 * 
 * @param stationId 
 * @returns queryUrl
 */

function getStationByIdUrl(stationId) {

       	var queryUrl = config.ENDPOINTURL + stationId + '.json?api_key=' + config.APIKEY;	 // Example: https://api.data.gov/nrel/alt-fuel-stations/v1/:id.format?api_key=<yourApiKey> 
	return queryUrl;

}

module.exports = {

	doRequest                      : doRequest,
	checkLocationInNearestStations : checkLocationInNearestStations,
	getNearestQueryUrl             : getNearestQueryUrl,
	getStationByIdUrl              : getStationByIdUrl
};
