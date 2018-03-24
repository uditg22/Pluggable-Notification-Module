var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
import bodyParser from 'body-parser';

import notificationsRouter from './routes/notifications';
import jobQueueSingleton from './util/job-queues/job-queue-singleton';
import NotificationPluginsRegistry from './notification/notification-plugins.registry';

NotificationPluginsRegistry.initialize();
jobQueueSingleton.start();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/notifications', notificationsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({err: {message: err.message}});
});

module.exports = app;
