'use strict';

import Agenda from 'agenda';
import config from '../../config';

class JobQueueSingleton {
  constructor() {
    let self = this;
    self.agenda = new Agenda({db: {address: config.mongo.uri, collection: 'jobs'}, defaultConcurrency: 20});
    self.isReady = false;

    self.initPromise = new Promise(function(resolve, reject) {
      self.agenda.on('ready', function() {
        console.log('Agenda lib connected to MongoDB');
        self.isReady = true;
        resolve();
        console.log('Started the Agenda Job Worker!!');
      });
    });
  }

  start() {
    let self = this;
    if(this.isReady) {
      console.log('Synchronously starting the Job queue listener');
      self.agenda.start();
    } else {
      self.initPromise.then(function() {
        console.log('Asynchronously starting the Job queue listener');
        self.agenda.start();
      });
    }
  }

  onReady(callbackFn) {
    if(this.isReady) {
      callbackFn();
    } else {
      return this.initPromise.then(callbackFn);
    }
  }

  addNewJob(jobName, jobData, cb) {
    return this.agenda.now(jobName, jobData, cb);
  }

  addJobListener(jobName, listenerFn) {
    this.agenda.define(jobName, listenerFn);
  }
}

export default new JobQueueSingleton();