'use strict';


/**
 * Notifications for credit alert and settlement
 *
 * body NotificationEventData Address object
 * returns Object
 **/
exports.partnerNotificatian = function(body) {
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

