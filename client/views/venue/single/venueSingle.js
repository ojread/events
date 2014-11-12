Template.venueView.events({

});

Template.venueViewSessionTime.helpers({
	title: function () {
		return Sessions.findOne(this.sessionId).title;
	}
});