'use strict'
import AbstractNotificationRequestHandler from '../../interfaces/notification-request-handler.interface';
import jobQueueSingleton from '../../../util/job-queues/job-queue-singleton';
import EmailConstants from './email-notification.constants';

class EmailRequestHandler extends AbstractNotificationRequestHandler {
  constructor () {
    super();
  }

  handleNotificationRequest(notificationReqObj) {
    return new Promise(function(resolve, reject) {
      jobQueueSingleton.onReady(function() {
        jobQueueSingleton.addNewJob(EmailConstants.JOB_NAME, {notification: notificationReqObj}, function() {
          console.log('Created a new Job in the job queue of type Email Notification');
          resolve();
        });
      });
    });
  }
}

export default EmailRequestHandler;