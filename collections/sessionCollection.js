// Individual sessions happen at an event in a venue.
Sessions = new Mongo.Collection('sessions');

Sessions.allow({
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
	/*insertSession: function (title, start, end) {
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			return Events.insert({
				title: title,
				start: new Date(start),
				end: new Date(end)
			});
		}
	},
	updateSession: function (id, title, start, end) {
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			Events.update(id, {
				$set: {
					title: title,
					start: new Date(start),
					end: new Date(end)
				}
			});
		}
	},*/
	removeSession: function (id) {
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			SessionTimes.remove({sessionId: id});
			Sessions.remove(id);
		}
	},
	clearEventSessions: function (eventId) {
		sessions = Sessions.find({eventId: eventId});
		sessions.forEach(function (session) {
			SessionTimes.remove({sessionId: session._id});
			Sessions.remove(session._id);
		})
	}
});