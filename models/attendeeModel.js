// Attendee records connect users to events.
Attendees = new Mongo.Collection('attendees');

Meteor.methods({
	insertAttendee: function (userId, eventId) {
		check([userId, eventId], [String]);
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			Attendees.insert({
				userId: userId,
				eventId: eventId
			});
		}
	},
	removeAttendee: function (id) {
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			//var attendee = Attendees.findOne(id);
			Attendees.remove(id);
		}
	}
});