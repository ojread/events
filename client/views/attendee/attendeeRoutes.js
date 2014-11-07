Router.map(function () {
	this.route('attendeeList', {
		path: '/events/:eventId/attendees',
		waitOn: function () {
			return [
				Meteor.subscribe('event', this.params.eventId),
				Meteor.subscribe('eventAttendees', this.params.eventId)
			];
		},
		data: function () {
			return {
				event: Events.findOne(this.params.eventId),
				attendees: Attendees.find({eventId: this.params.eventId})
			};
		}
	});

	/*this.route('attendeeSingle', {
		path: '/events/:eventId/attendees/:_id',
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
