// Only admins can see all user data.
Meteor.publish('users', function () {
	if (Roles.userIsInRole(this.userId, ['admin'])) {
		return Meteor.users.find();
	}
});

Meteor.publish('user', function (userId) {
	if (Roles.userIsInRole(this.userId, ['admin'])) {
		return Meteor.users.find(userId);
	}
});

// Profiles are considered to be public and don't contain sensitive data.
// We may want to separate the login email from the profile one?
Meteor.publish('userProfiles', function () {
	return Meteor.users.find({}, {
		$fields: {
			emails: 1,
			profile: 1
		}
	});
});

Meteor.publish('userProfile', function (userId) {
	return Meteor.users.find(userId, {
		$fields: {
			emails: 1,
			profile: 1
		}
	});
});

// List all users' emails.
Meteor.publish('userEmails', function () {
	return Meteor.users.find({}, {
		$fields: {
			emails: 1
		}
	});
});