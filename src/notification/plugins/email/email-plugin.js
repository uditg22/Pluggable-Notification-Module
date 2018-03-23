'use strict'
import AbstractNotificationPlugin from '../../interfaces/notification-plugin.interface';
import EmailNotificationConstants from './email-notification.constants';
import EmailDispatcher from './email-dispatcher.impl';
import EmailRequestHandler from './email-request-handler.impl';

class EmailNotificationPlugin extends AbstractNotificationPlugin {
  constructor() {
    super();
    this.notificationType = EmailNotificationConstants.NOTIFICATION_TYPE;
    this.notificationDispatcher = new EmailDispatcher();
    this.notificationRequestHandler = new EmailRequestHandler();
  }

  getNotificationType() {
    return this.notificationType;
  }

  getNotificationDispatcher() {
    return this.notificationDispatcher;
  }

  getNotificationRequestHandler() {
    return this.notificationRequestHandler;
  }
}

export default EmailNotificationPlugin;