'use strict';


/**
 * create a refund request
 *
 * xPRODUCTINSTANCEID String 
 * addressID String 
 * body BaseRefund  (optional)
 * returns Object
 **/
exports.addRefund = function(xPRODUCTINSTANCEID,addressID,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "refund" : ""
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
 * Get refund by ID
 *
 * refundID String 
 * addressID String 
 * xPRODUCTINSTANCEID String 
 * returns Object
 **/
exports.getRefundById = function(refundID,addressID,xPRODUCTINSTANCEID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "refund" : ""
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
 * List Refund requests
 *
 * xPRODUCTINSTANCEID String 
 * addressID String 
 * returns Object
 **/
exports.listRefunds = function(xPRODUCTINSTANCEID,addressID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "refunds" : [ "", "" ]
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

