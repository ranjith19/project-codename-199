'use strict';

var utils = require('../utils/writer.js');
var Notifications = require('../service/NotificationsService');

module.exports.partnerNotificatian = function partnerNotificatian (req, res, next) {
  var body = req.swagger.params['body'].value;
  Notifications.partnerNotificatian(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
