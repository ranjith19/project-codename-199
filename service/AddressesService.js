'use strict';


/**
 * Create a new address
 *
 * body BaseAddressRequest Address object
 * xPRODUCTINSTANCEID String  (optional)
 * returns Object
 **/
exports.createAddress = function(body,xPRODUCTINSTANCEID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "address" : ""
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
 * Delete address
 *
 * addressID String 
 * xPRODUCTINSTANCEID String 
 * returns Object
 **/
exports.deleteAddress = function(addressID,xPRODUCTINSTANCEID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Get address
 *
 * addressID String 
 * xPRODUCTINSTANCEID String  (optional)
 * returns Object
 **/
exports.getAddress = function(addressID,xPRODUCTINSTANCEID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "address" : ""
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
 * List addresses
 *
 * xPRODUCTINSTANCEID String  (optional)
 * returns Object
 **/
exports.listAddresses = function(xPRODUCTINSTANCEID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "addresses" : [ "", "" ]
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
 * Update address
 *
 * addressID String 
 * body Address  (optional)
 * xPRODUCTINSTANCEID String  (optional)
 * returns Object
 **/
exports.updateAddressByID = function(addressID,body,xPRODUCTINSTANCEID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "address" : ""
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

