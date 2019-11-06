'use strict';

var utils = require('../utils/writer.js');
var Refunds = require('../service/RefundsService');

module.exports.addRefund = function addRefund (req, res, next) {
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  var addressID = req.swagger.params['addressID'].value;
  var body = req.swagger.params['body'].value;
  Refunds.addRefund(xPRODUCTINSTANCEID,addressID,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRefundById = function getRefundById (req, res, next) {
  var refundID = req.swagger.params['refundID'].value;
  var addressID = req.swagger.params['addressID'].value;
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  Refunds.getRefundById(refundID,addressID,xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listRefunds = function listRefunds (req, res, next) {
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  var addressID = req.swagger.params['addressID'].value;
  Refunds.listRefunds(xPRODUCTINSTANCEID,addressID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
