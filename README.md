# Pluggable-Notification-Module

## Description
This is an plug and play Notification Api module that can be used in your project to trigger notifications to your users
across multiple channels including Mail, Slack, Push Notification with just a single api call. You can easily add a new
notification channel by creating a plugin for that and registering it with the Plugins registry.

## Prerequisites
### MongoDb Installation with min. version 3.4.x
### Node with min. version 6.11.x

## Setup
### Create a .env file in your root folder. Check the .env.sample file for all the variables that need to be set
### Run mongo daemon using mongod command
### npm install

## Build
./node_modules/.bin/babel ./src --experimental --source-maps-inline -d ./dist
node ./dist/index