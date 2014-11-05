// Define routes to connect paths, templates, data and subscriptions.

Router.map(function () {
	// List all venues
	this.route('venueIndex', {
		path: '/venues',
		waitOn: function () {
			return [
				Meteor.subscribe('venues')
			];
		},
		data: function () {
			return {
				venues: Venues.find().fetch()
			};
		}
	});

	// Write a new venue.
	// Use the venueEdit template but don't pass any venue data.
	this.route('venueCreate', {
		path: '/venues/new/:eventId',
		template: 'venueEdit',
		waitOn: function () {
			return Meteor.subscribe('event', this.params.eventId);
		},
		data: function () {
			return {
				event: Events.findOne(this.params.eventId)
			};
		}
	});

	// View a single venue.
	this.route('venueSingle', {
		path: '/venues/:_id',
		waitOn: function () {
			return [
				Meteor.subscribe('venue', this.params._id)
			];
		},
		data: function () {
			return {
				venue: Venues.findOne(),
				event: Events.findOne(),
				sessionTimes: SessionTimes.find(
					{venueId: this.params._id},
					{sort: {start: 1}}
				).fetch()
			};
		}
	});

	// Edit a venue.
	this.route('venueEdit', {
		path: '/venues/:_id/edit',
		waitOn: function () {
			return [
				Meteor.subscribe('venue', this.params._id)
			];
		},
		data: function () {
			return {
				venue: Venues.findOne(),
				event: Events.findOne()
			};
		}
	});

	// Show the live agenda for this venue.
	this.route('venueAgenda', {
		path: '/venues/:_id/agenda',
		layoutTemplate: 'fullscreenLayout',
		waitOn: function () {
			return [
				Meteor.subscribe('venue', this.params._id),
				Meteor.subscribe('venues'),
				Meteor.subscribe('sessions'),
				Meteor.subscribe('sessionTimes')
			];
		},
		data: function () {
			return {
				venue: Venues.findOne(this.params._id)
			};
		}
	});
});
