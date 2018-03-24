'use strict';

import EmailPlugin from './plugins/email/email-plugin';
import jobQueueSingleton from '../util/job-queues/job-queue-singleton';

class NotificationPluginsRegistry {
  constructor() {
    this.plugins = [];
    this.plugins.push(new EmailPlugin());
  }

  initialize() {
    let self = this;
    jobQueueSingleton.onReady(function() {
      self.plugins.forEach(function(plugin) {
        console.log('Adding Job Listener for Job name ' + plugin.getJobName());
        jobQueueSingleton.addJobListener(plugin.getJobName(), plugin.getNotificationDispatcher().getJobListener());
      });
    });
  }

  getPlugins() {
    return this.plugins;
  }
}

export default new NotificationPluginsRegistry();