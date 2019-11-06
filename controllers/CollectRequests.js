'use strict';

var utils = require('../utils/writer.js');
var CollectRequests = require('../service/CollectRequestsService');

module.exports.addCollectRequests = function addCollectRequests (req, res, next) {
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  var addressID = req.swagger.params['addressID'].value;
  var body = req.swagger.params['body'].value;
  CollectRequests.addCollectRequests(xPRODUCTINSTANCEID,addressID,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCollectRequestById = function getCollectRequestById (req, res, next) {
  var collectRequestID = req.swagger.params['collectRequestID'].value;
  var addressID = req.swagger.params['addressID'].value;
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  CollectRequests.getCollectRequestById(collectRequestID,addressID,xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listCollectRequests = function listCollectRequests (req, res, next) {
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  var addressID = req.swagger.params['addressID'].value;
  CollectRequests.listCollectRequests(xPRODUCTINSTANCEID,addressID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
