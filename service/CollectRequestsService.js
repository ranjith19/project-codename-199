'use strict';


/**
 * Add Collect Request
 *
 * xPRODUCTINSTANCEID String 
 * addressID String 
 * body BaseCollectRequest  (optional)
 * returns Object
 **/
exports.addCollectRequests = function(xPRODUCTINSTANCEID,addressID,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "collectRequest" : ""
  },
  "success" : true,
  "status" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get beneficiary by ID
 *
 * collectRequestID String 
 * addressID String 
 * xPRODUCTINSTANCEID String 
 * returns Object
 **/
exports.getCollectRequestById = function(collectRequestID,addressID,xPRODUCTINSTANCEID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "collectRequest" : ""
  },
  "success" : true,
  "status" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List collect requests
 *
 * xPRODUCTINSTANCEID String 
 * addressID String 
 * returns Object
 **/
exports.listCollectRequests = function(xPRODUCTINSTANCEID,addressID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "collectRequests" : [ "", "" ]
  },
  "success" : true,
  "status" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

