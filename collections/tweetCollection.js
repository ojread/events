// Collection of posts.
Tweets = new Mongo.Collection('tweets');

// Allow and deny rules for Meteor's standard methods.
// It may be wise to deny these and replace with custom methods.
// For now, allow users with the admin role to do anything.
Tweets.allow({
	insert: function (userId, doc) {
		if (Roles.userIsInRole(userId, ['admin'])) {
			return true;
		}
	},
	update: function (userId, doc, fieldNames, modifier) {
		if (Roles.userIsInRole(userId, ['admin'])) {
			return true;
		}
	},
	remove: function (userId, doc) {
		if (Roles.userIsInRole(userId, ['admin'])) {
			return true;
		}
	}
});

// Custom methods for interacting with the collection.
Meteor.methods({
	clearTweets: function () {
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			Tweets.remove({});
		}
	}
});
