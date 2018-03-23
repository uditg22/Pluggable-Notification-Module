// Create an Abstract Notification Dispatcher Class
class AbstractNotificationDispatcher {
  constructor() {
    if (this.dispatchNotification === undefined) {
      throw new TypeError("Must override method dispatchNotification");
    }
  }
}

export default AbstractNotificationDispatcher;