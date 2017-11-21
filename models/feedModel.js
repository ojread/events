Feeds = new Mongo.Collection('feeds');

// Admins can do anything.
Feeds.allow(allowAdminFunctions);
