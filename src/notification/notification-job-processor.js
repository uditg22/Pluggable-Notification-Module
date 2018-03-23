'use strict';

import NotificationPluginsRegistry from './notification-plugins.registry';

// Create an Notification Job Processor
class NotificationJobProcessor {
  constructor() {
    // Listen to new Notification Jobs and assign them to right Notification Dispatcher
    let plugins = NotificationPluginsRegistry.getPlugins();
    this.pluginsKeyedByType = {};
    plugins.forEach(function(plugin) {
      this.pluginsKeyedByType[plugin.getNotificationType()] = plugin;
    });
  }

  // Get the Notification dispatcher object based on notification type
  getDispatcherByNotificationType(notificationType) {
    if(this.pluginsKeyedByType.hasOwnProperty(notificationType)) {
      return this.pluginsKeyedByType[notificationType].getNotificationDispatcher();
    }
    return null;
  }

  processNotification(notificationObj) {
    this.getDispatcherByNotificationType(notificationObj.type).dispatchNotification(notificationObj);
  }
}

export default NotificationJobProcessor;