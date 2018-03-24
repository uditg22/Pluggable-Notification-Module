'use strict';

class NotificationMiddleware {
  validateRequest(req, res, next) {
    if(!req.body.subject || !req.body.from || !req.body.to || !req.body.message) {
      return next(new Error('Invalid Notification Request'));
    }
    return next();
  }

  populateNotification(req, res, next) {
    req.notification = {
      subject: req.body.subject,
      from: req.body.from,
      to: req.body.to,
      message: req.body.message
    };

    return next();
  }
}

export default NotificationMiddleware;