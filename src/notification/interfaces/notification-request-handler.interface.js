// Create an Abstract Notification Dispatcher Class
class AbstractNotificationRequestHandler {
  constructor() {
    if (this.handleNotificationRequest === undefined) {
      throw new TypeError("Must override method handleNotificationRequest");
    }
  }
}

export default AbstractNotificationRequestHandler;