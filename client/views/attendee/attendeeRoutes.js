Router.map(function () {
	this.route('attendeeList', {
		path: '/event/:eventId/attendees',
		waitOn: function () {
			return [
				Meteor.subscribe('event', this.params.eventId)
			];
		},
		data: function () {
			return {
				event: Events.findOne(this.params.eventId)
			};
		}
	});

	/*this.route('attendeeSingle', {
		path: '/event/:eventId/attendees/:_id',
		waitOn: function () {
			return [
				Meteor.subscribe('event', this.params.eventId)
			];
		},
		data: function () {
			return {
				event: Events.findOne(this.params._id),
				venues: Venues.find({eventId: this.params._id}, {sort: {title: 1}}),
				sessions: Sessions.find({eventId: this.params._id}, {sort: {title: 1}})
			};
		}
	});*/
});
