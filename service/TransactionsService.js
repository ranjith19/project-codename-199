'use strict';


/**
 * Get beneficiary by ID
 *
 * transactionID String 
 * addressID String 
 * xPRODUCTINSTANCEID String 
 * returns Object
 **/
exports.getTransactionById = function(transactionID,addressID,xPRODUCTINSTANCEID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "transaction" : {
      "amountPaid" : {
        "value" : 6,
        "currencyCode" : "INR"
      },
      "platformTransactionRefID" : "platformTransactionRefID",
      "uniquePaymentRefID" : "uniquePaymentRefID",
      "timestamp" : "timestamp"
    }
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
 * List transactions
 *
 * xPRODUCTINSTANCEID String 
 * addressID String 
 * returns Object
 **/
exports.listTransactions = function(xPRODUCTINSTANCEID,addressID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "transactions" : [ {
      "amountPaid" : {
        "value" : 6,
        "currencyCode" : "INR"
      },
      "platformTransactionRefID" : "platformTransactionRefID",
      "uniquePaymentRefID" : "uniquePaymentRefID",
      "timestamp" : "timestamp"
    }, {
      "amountPaid" : {
        "value" : 6,
        "currencyCode" : "INR"
      },
      "platformTransactionRefID" : "platformTransactionRefID",
      "uniquePaymentRefID" : "uniquePaymentRefID",
      "timestamp" : "timestamp"
    } ]
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

