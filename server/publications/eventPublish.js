Meteor.publish('events', function () {
	return Events.find({}, {
		fields: {
			title: 1,
			start: 1
		}
	});
});

// Publish an event with all related records.
Meteor.publish('event', function (id) {
	Meteor.publishWithRelations({
		handle: this,
		collection: Events,
		filter: id,
		mappings: [
			{
				reverse: true,
				collection: Venues,
				key: 'eventId'
			},
			{
				reverse: true,
				collection: Sessions,
				key: 'eventId'
			}
		]
	});
});
