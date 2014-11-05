Template.venueAgenda.created = function () {
	$('html').addClass('fullscreen');

	// Update the time now and every 10 secs.
	updateTime();
	Meteor.setInterval(updateTime, 10000);
};

Template.venueAgenda.destroyed = function () {
	$('html').removeClass('fullscreen');
};

function updateTime () {
	// Store the current time in a session var.
	// To be shown on the clock and to make reactive calls to current sessions.
	var now = new Date().getTime();
	Session.set('time', now);
}

Template.venueAgenda.helpers({
	currentTime: function () {
		return Session.get('time');
	},
	sessionTimes: function () {
		if (this.venue) {
			var midnight = moment(Session.get('time')).endOf('day').utc().valueOf();
			var now = moment(Session.get('time')).utc().valueOf();

			// Find sessions that haven't finished
			// but start before the end of the day.
			// Re-runs when time changes.
			var sessionTimes = SessionTimes.find({
				venueId: this.venue._id,
				start: {
					$lt: midnight
				},
				end: {
					$gt: now
				}
			}, {
				sort: {
					start: 1
				}
			}).fetch();

			//console.log(midnight, now);

			return sessionTimes;
		}
	}
});

Template.venueAgendaSessionTime.helpers({
	session: function () {
		return Sessions.findOne(this.sessionId);
	},
	repeats: function () {
		var session = Sessions.findOne(this.sessionId);
		var sessionTimes = SessionTimes.find({
			sessionId: this.sessionId
		});
		var id = this._id;
		var now = new Date().getTime();
		var that = this;

		var repeats = sessionTimes.map(function (sessionTime) {
			// Filter out the current session time.
			if(sessionTime._id !== id) {
				// Is this session time after the current one?
				if (sessionTime.start > that.start) {
					return sessionTime;
				}
			}
			return null;
		});

		// Remove empty repeats.
		for (var i=0; i<repeats.length; i++) {
			if (repeats[i] === null) {
				repeats.splice(i, 1);
				i--;
			} 
		}

		return repeats;
	}
});

Template.venueAgendaRepeat.helpers({
	day: function () {
		return moment(this.start).fromNow();
	},
	venueName: function () {
		return Venues.findOne(this.venueId).title;
	},
	text: function () {
		// Output all the text
	}
});