Meteor.publish('sessions', function () {
	return Sessions.find();
});

Meteor.publish('session', function (id) {
	//return Sessions.find(id);

	Meteor.publishWithRelations({
		handle: this,
		collection: Sessions,
		filter: id,
		mappings: [
			{
				key: 'eventId',
				collection: Events,
				mappings: [{
					reverse: true,
					key: 'eventId',
					collection: Venues
				}]
			},
			{
				reverse: true,
				key: 'sessionId',
				collection: SessionTimes,
			}
		]
	});
});