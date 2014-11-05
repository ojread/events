Template.sessionSingle.events({
	'click #deleteSession': function (e) {
		if (window.confirm('Are you sure you want to delete this session?')) {
			Meteor.call('removeSession', this._id);
		}
	}
});

Template.sessionSingleTime.helpers({
	venues: function () {
		return Venues.find({}, {sort: {title: 1}});
	},
	venueSelected: function (venueId) {
		if (venueId === this._id) {
			return 'selected';
		}
	}
});

Template.sessionSingleTime.events({
	'submit .sessionTimeForm': function (e) {
		e.preventDefault();

		// Date used for start and end (need to deal with multi-day sessions).
		var date = $('.date', e.target).val();
		var startTime = $('.startTime', e.target).val();
		var endTime = $('.endTime', e.target).val();
		var venueId = $('.venueId', e.target).val();

		var start = combineDateAndTime(date, startTime);
		var end = combineDateAndTime(date, endTime);

		// Insert or update?
		if (this._id) {
			Meteor.call('updateSessionTime', this._id, start, end, venueId);
		} else {
			var sessionId = this.session._id;
			Meteor.call('insertSessionTime', sessionId, start, end, venueId);
		}
	},
	'click .removeSessionTime': function (e) {
		if (window.confirm('Are you sure you want to delete this session time?')) {
			SessionTimes.remove(this._id);
		}
	}
});



function combineDateAndTime(dateString, timeString) {
	var datetime = new Date(dateString);
	var time = timeString.split(':');
	datetime.setHours(time[0]);
	datetime.setMinutes(time[1]);
	var utc = datetime.getTime();
	return utc;
}