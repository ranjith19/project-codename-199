'use strict';

var utils = require('../utils/writer.js');
var Addresses = require('../service/AddressesService');

module.exports.createAddress = function createAddress (req, res, next) {
  var body = req.swagger.params['body'].value;
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  Addresses.createAddress(body,xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAddress = function deleteAddress (req, res, next) {
  var addressID = req.swagger.params['addressID'].value;
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  Addresses.deleteAddress(addressID,xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAddress = function getAddress (req, res, next) {
  var addressID = req.swagger.params['addressID'].value;
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  Addresses.getAddress(addressID,xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAddresses = function listAddresses (req, res, next) {
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  Addresses.listAddresses(xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAddressByID = function updateAddressByID (req, res, next) {
  var addressID = req.swagger.params['addressID'].value;
  var body = req.swagger.params['body'].value;
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  Addresses.updateAddressByID(addressID,body,xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
