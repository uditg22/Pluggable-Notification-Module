'use strict';

import express from 'express';
import NotificationMiddleware from '../notification/notification.middleware';
import NotificationController from '../notification/notification.controller';

let router = express.Router();
let notificationMiddleware = new NotificationMiddleware();
let notificationController = new NotificationController();

router.get('/', function(req, res, next) {
  return res.json({'message': 'I am notification list'});
});

router.post('/', notificationMiddleware.validateRequest.bind(notificationMiddleware),
  notificationMiddleware.populateNotification.bind(notificationMiddleware),
  notificationController.postNotification.bind(notificationController));

export default router;
