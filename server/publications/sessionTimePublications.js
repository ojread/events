Meteor.publish('sessionTimes', function () {
	return SessionTimes.find();
});