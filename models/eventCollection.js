// Events are the overall events that can contain many sessions.
Events = new Mongo.Collection('events');

// Allow and deny rules for Meteor's standard methods.
// It may be wise to deny these and replace with custom methods.
// For now, allow users with the admin role to do anything.
Events.allow({
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
// Create date objects on the server for consistent timezones.
Meteor.methods({
	insertEvent: function (title, start, end) {
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			return Events.insert({
				title: title,
				start: new Date(start),
				end: new Date(end)
			});
		}
	},
	updateEvent: function (id, title, start, end) {
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			Events.update(id, {
				$set: {
					title: title,
					start: new Date(start),
					end: new Date(end)
				}
			});
		}
	},
	removeEvent: function (id) {
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			Events.remove(id);
		}
	}
});
