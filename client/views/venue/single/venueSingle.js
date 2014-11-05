Template.venueSingle.events({

});

Template.venueSingleSessionTime.helpers({
	title: function () {
		return Sessions.findOne(this.sessionId).title;
	}
});