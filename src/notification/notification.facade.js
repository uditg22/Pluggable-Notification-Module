'use strict';

import NotificationPluginsRegistry from './notification-plugins.registry';

class NotificationFacade {
  constructor() {
    this.plugins = NotificationPluginsRegistry.getPlugins();
  }

  processNotificationRequest(notificationObj) {
    let promises = [];

    this.plugins.forEach(function(plugin) {
      promises.push(plugin.getNotificationRequestHandler().handleNotificationRequest(notificationObj));
    });

    return Promise.all(promises)
      .then(function() {
        return Promise.resolve();
      }).catch(function() {
        return Promise.reject(new Error('Error while trying to handle notification request'));
      });
  }
}

export default NotificationFacade;