'use strict';

var utils = require('../utils/writer.js');
var Transactions = require('../service/TransactionsService');

module.exports.getTransactionById = function getTransactionById (req, res, next) {
  var transactionID = req.swagger.params['transactionID'].value;
  var addressID = req.swagger.params['addressID'].value;
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  Transactions.getTransactionById(transactionID,addressID,xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listTransactions = function listTransactions (req, res, next) {
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  var addressID = req.swagger.params['addressID'].value;
  Transactions.listTransactions(xPRODUCTINSTANCEID,addressID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
