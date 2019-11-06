'use strict';

var utils = require('../utils/writer.js');
var Beneficiaries = require('../service/BeneficiariesService');

module.exports.addBenificiary = function addBenificiary (req, res, next) {
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  var body = req.swagger.params['body'].value;
  Beneficiaries.addBenificiary(xPRODUCTINSTANCEID,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBeneficiaryByID = function deleteBeneficiaryByID (req, res, next) {
  var benificairyID = req.swagger.params['benificairyID'].value;
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  Beneficiaries.deleteBeneficiaryByID(benificairyID,xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBenificiaryById = function getBenificiaryById (req, res, next) {
  var benificairyID = req.swagger.params['benificairyID'].value;
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  Beneficiaries.getBenificiaryById(benificairyID,xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listBeneficiaries = function listBeneficiaries (req, res, next) {
  var xPRODUCTINSTANCEID = req.swagger.params['X-PRODUCT-INSTANCE-ID'].value;
  Beneficiaries.listBeneficiaries(xPRODUCTINSTANCEID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
