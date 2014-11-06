// Collection of twitter keywords to track.
Keywords = new Mongo.Collection('keywords');

// Allow and deny rules for Meteor's standard methods.
// It may be wise to deny these and replace with custom methods.
// For now, allow users with the admin role to do anything.
Keywords.allow({
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
/*Meteor.methods({
	insertKeyword: function (keyword) {
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			Keywords.insert({
				keyword: keyword
			}, function (error) {
				if (error) {
					console.log(error);
				}
				Meteor.call('updateStreamKeywords');
			});
		}
	},
	removeKeyword: function (id) {
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			Keywords.remove(id, function (error) {
				if (error) {
					console.log(error);
				}
				Meteor.call('updateStreamKeywords');
			});
		}
	}
});*/
