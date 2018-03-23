'use strict';

import NotificationFacade from './notification.facade';

class NotificationController {
  constructor() {
    this.notificationFacade = new NotificationFacade();
  }

  postNotification(req, res, next) {
    return this.notificationFacade.processNotificationRequest(req.notification)
      .then(function() {
        return res.status(200).json({
          message: 'Successfully sent notification'
        });
      })
      .catch(function(err) {
        return next(err);
      });
  }
}

export default NotificationController;