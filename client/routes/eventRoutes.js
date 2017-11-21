// Define routes to connect paths, templates, data and subscriptions.

Router.map(function () {
	// List all events
	this.route('eventIndex', {
		path: '/events',
		waitOn: function () {
			return [
				Meteor.subscribe('events')
			];
		},
		data: function () {
			return {
				// "events" clashes with javascript!
				eventList: Events.find({}, {
					sort: {
						start: -1
					}
				}).fetch()
			};
		}
	});

	// Write a new event.
	// Use the eventEdit template but don't pass any event data.
	this.route('eventCreate', {
		path: '/events/new',
		template: 'eventEdit'
	});

	// View a single event.
	this.route('eventSingle', {
		path: '/events/:_id',
		waitOn: function () {
			return [
				Meteor.subscribe('event', this.params._id)
			];
		},
		data: function () {
			return {
				event: Events.findOne(this.params._id),
				venues: Venues.find({eventId: this.params._id}, {sort: {title: 1}}),
				sessions: Sessions.find({eventId: this.params._id}, {sort: {title: 1}})
			};
		}
	});

	// Edit a event.
	this.route('eventEdit', {
		path: '/events/:_id/edit',
		waitOn: function () {
			return [
				Meteor.subscribe('event', this.params._id)
			];
		},
		data: function () {
			return {
				event: Events.findOne(this.params._id)
			};
		}
	});
});
