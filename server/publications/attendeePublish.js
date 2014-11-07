// Publish users attending the given event.
Meteor.publish('eventAttendees', function (eventId) {
	Meteor.publishWithRelations({
		handle: this,
		collection: Attendees,
		filter: {eventId: eventId},
		mappings: [{
			key: 'eventId',
			collection: Meteor.users
		}]
	});
});