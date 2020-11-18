"use strict";
const data = require('./data.json');

/**
 * Search the service name in the services list available, 
 * and returns the matching services list with distance from the provided geo positions.
 * 
 * @param {Service name to be searched} serviceName 
 * @param {latitude} lat 
 * @param {longitude} lon 
 */
function search(serviceName, lat, lon) {
  return findAndCreateMatchedServices(serviceName, lat, lon).then(result => {  
    const searchResult = {}
    searchResult.totalHits = result.length;
    searchResult.totalDocuments = data.length;
    searchResult.results = result;
    return searchResult;
  });    
}

/**
 * Find all the matched services from the services list.
 * And create the desired output details for each service.
 * @param {search key} serviceName 
 * @param {latitude} lat 
 * @param {longitude} lon 
 */
function findAndCreateMatchedServices(serviceName, lat, lon) {
    serviceName = serviceName.toLowerCase()
    return Promise.resolve(data.map(function(service) {                 
            const obj = {}
            obj.id = service.id,
            obj.name = service.name,
            obj.position = service.position,
            obj.distance = getDistance(lat, lon, service.position.lat, service.position.lng),
            obj.score = getSearchScore(serviceName, service.name.toLowerCase())
            return obj;                                   
        })
        .filter(service => service.score < serviceName.length/2));
}

/**
 * Calculate a search score between values.
 * Best score is found by matching each words with the search key.
 * @param {search key 1} str1 
 * @param {search key 2} str2 
 */
function getSearchScore(str1, str2) {
  str1 = str1.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '')
  str2 = str2.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '')
  let score = str1.length;
  for(let i=0; i<str1.length; i++) {
    let searchStrPostfixRemoved = str1.substring(0,str1.length - i);
    let searchStrPrefixRemoved = str1.substring(i,str1.length);
    if(str2.includes(searchStrPrefixRemoved) || str2.includes(searchStrPostfixRemoved)) {
      score = Math.min(i, score);
    }
  }  
  return score;
}

/**
 * Calculate the distance between two geo locations.
 * @param {*} lat1 
 * @param {*} lon1 
 * @param {*} lat2 
 * @param {*} lon2 
 */
function getDistance(lat1,lon1,lat2,lon2) {
  const distanceInKm = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
  if(distanceInKm < 1) {
    return Math.floor(distanceInKm * 1000) + "m"
  }
  return distanceInKm.toFixed(2) + "km"
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371 // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1)  // deg2rad below
    var dLon = deg2rad(lon2-lon1)
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    var d = R * c // Distance in km
    return d
  }
  
function deg2rad(deg) {
    return deg * (Math.PI/180)
  }


module.exports.search = search