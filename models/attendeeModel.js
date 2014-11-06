// Attendee records connect users to events.
Attendees = new Mongo.Collection('attendees');

Meteor.methods({
	insertAttendee: function (userId, eventId) {

	},
	removeAttendee: function (id) {
		var attendee = Attendees.findOne(id);
		
	}
});