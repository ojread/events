Meteor.publish('users', function () {
	return Meteor.users.find();
});

Meteor.publish('user', function (userId) {
	return Meteor.users.find(userId);
});