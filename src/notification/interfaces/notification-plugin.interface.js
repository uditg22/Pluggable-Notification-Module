// Create an Abstract Notification Plugin Class
class AbstractNotificationPlugin {
  constructor() {
    if (this.getNotificationType === undefined) {
      throw new TypeError("Must override method getNotificationType");
    }
    if(this.getJobName === undefined) {
      throw new TypeError("Must override method getJobName");
    }
    if (this.getNotificationDispatcher === undefined) {
      throw new TypeError("Must override method getNotificationDispatcher");
    }
    if (this.getNotificationRequestHandler === undefined) {
      throw new TypeError("Must override method getNotificationRequestHandler");
    }
  }
}

export default AbstractNotificationPlugin;