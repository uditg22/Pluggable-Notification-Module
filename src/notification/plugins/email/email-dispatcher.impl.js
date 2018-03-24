'use strict'
import AbstractNotificationDispatcher from '../../interfaces/notification-dispatcher.interface';
import SendgridMailer from './sendgrid-mailer';

class EmailDispatcher extends AbstractNotificationDispatcher {
  constructor () {
    super();
    this.sendgridMailer = SendgridMailer;
  }

  getJobListener() {
    let self = this;
    return function(job, done) {
      console.log('Listened Job ' + JSON.stringify(job));
      let notificationObj = job.attrs.data.notification;
      self.dispatchNotification(notificationObj)
        .then(function() {
          done();
        })
        .catch(function(err) {
          done(err);
        });
    }
  }

  dispatchNotification(notificationObj) {
    let self = this;
    return new Promise(function(resolve, reject) {
      self.sendgridMailer.sendMail(notificationObj.subject, [{email: notificationObj.to, name: notificationObj.to}],
        notificationObj.message, {email: notificationObj.from, name: notificationObj.from})
        .then(function() {
          console.log('Dispatched Email Notification');
          resolve();
        })
        .catch(function(err) {
          console.error('Error while dispatching Email Notification ' + JSON.stringify(err));
          reject(err);
        });
    });
  }
}

export default EmailDispatcher;