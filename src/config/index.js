'use strict';

import path from 'path';

// All configurations will extend these options
// ============================================
let defaultConfig = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

  // Server port
  port: process.env.PORT || 3000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    },
    uri: process.env.MONGODB_URI || 'mongodb://localhost/notification-dev'
  },

  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY || 'sendgrid-api-key',
    from: {
      email: process.env.SENDGRID_FROM_EMAIL || 'sendgrid-from-email@xyz.com',
      name: process.env.SENDGRID_FROM_NAME || 'sendgrid-from'
    }
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
export default defaultConfig;