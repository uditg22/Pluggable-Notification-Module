'use strict'
import AbstractNotificationRequestHandler from '../../interfaces/notification-request-handler.interface';

class EmailRequestHandler extends AbstractNotificationRequestHandler {
  constructor () {
    super();
  }

  handleNotificationRequest(notificationReqObj) {
    console.log('Creating a new Job in the Notification queue of type Email');
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 100);
    });
  }
}

export default EmailRequestHandler;