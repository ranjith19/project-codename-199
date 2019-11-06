'use strict';


/**
 * Add beneficiary
 *
 * xPRODUCTINSTANCEID String 
 * body BaseBeneficiary  (optional)
 * returns Object
 **/
exports.addBenificiary = function(xPRODUCTINSTANCEID,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "beneficiary" : ""
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
 * Delete Beneficiary
 *
 * benificairyID String 
 * xPRODUCTINSTANCEID String 
 * returns Object
 **/
exports.deleteBeneficiaryByID = function(benificairyID,xPRODUCTINSTANCEID) {
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
 * Get beneficiary by ID
 *
 * benificairyID String 
 * xPRODUCTINSTANCEID String 
 * returns Object
 **/
exports.getBenificiaryById = function(benificairyID,xPRODUCTINSTANCEID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "beneficiary" : ""
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
 * List beneficiaries
 *
 * xPRODUCTINSTANCEID String 
 * returns Object
 **/
exports.listBeneficiaries = function(xPRODUCTINSTANCEID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "beneficiaries" : [ "", "" ]
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

