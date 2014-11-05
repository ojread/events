Meteor.publish('venues', function () {
	return Venues.find();
});

Meteor.publish('venue', function (id) {
	Meteor.publishWithRelations({
		handle: this,
		collection: Venues,
		filter: id,
		mappings: [
			{
				key: 'eventId',
				collection: Events
			},
			{
				reverse: true,
				key: 'venueId',
				collection: SessionTimes,
				mappings: [{
					key: 'sessionId',
					collection: Sessions
				}]
			}
		]
	});
});