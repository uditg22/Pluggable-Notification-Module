'use strict'
import AbstractNotificationDispatcher from '../../interfaces/notification-dispatcher.interface';

class EmailDispatcher extends AbstractNotificationDispatcher {
  constructor () {
    super();
  }

  dispatchNotification(notificationObj) {
    console.log('Dispatching Email Notification');
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 300);
    });
  }
}

export default EmailDispatcher;