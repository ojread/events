// Define routes to connect paths, templates, data and subscriptions.

Router.map(function () {
	// List all sessions
	this.route('sessionIndex', {
		path: '/sessions',
		waitOn: function () {
			return [
				Meteor.subscribe('sessions')
			];
		},
		data: function () {
			return {
				sessions: Sessions.find()
			};
		}
	});

	// Write a new session.
	// Use the sessionEdit template but don't pass any session data.
	this.route('sessionCreate', {
		path: '/sessions/new/:eventId',
		template: 'sessionEdit',
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

	// View a single session.
	this.route('sessionSingle', {
		path: '/sessions/:_id',
		waitOn: function () {
			return [
				Meteor.subscribe('session', this.params._id)
			];
		},
		data: function () {
			return {
				session: Sessions.findOne(),
				venues: Venues.find({}, {
					sort: {
						title: 1
					}
				}).fetch(),
				event: Events.findOne(),
				sessionTimes: SessionTimes.find().fetch(),
			};
		}
	});

	// Edit a session.
	this.route('sessionEdit', {
		path: '/sessions/:_id/edit',
		waitOn: function () {
			return [
				Meteor.subscribe('session', this.params._id)
			];
		},
		data: function () {
			return {
				session: Sessions.findOne(),
				event: Events.findOne()
			};
		}
	});
});
