// Create an Abstract Notification Dispatcher Class
class AbstractNotificationDispatcher {
  constructor() {
    if(this.getJobListener === undefined) {
      throw new TypeError("Must override method getJobListener");
    }
    if (this.dispatchNotification === undefined) {
      throw new TypeError("Must override method dispatchNotification");
    }
  }
}

export default AbstractNotificationDispatcher;