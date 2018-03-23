'use strict';

import EmailPlugin from './plugins/email/email-plugin';

class NotificationPluginsRegistry {
  constructor() {
    this.plugins = [];
    this.plugins.push(new EmailPlugin());
  }

  getPlugins() {
    return this.plugins;
  }
}

export default new NotificationPluginsRegistry();