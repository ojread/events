// Meteor.users is a built-in collection so we just define
// access rules here. Keep it simple for now - just admin.

Meteor.users.allow({
	insert: function (userId, doc) {
		if (Roles.userIsInRole(userId, ['admin'])) {
			return true;
		}
	},
	update: function (userId, doc, fieldNames, modifier) {
		if (Roles.userIsInRole(userId, ['admin'])) {
			return true;
		}
	},
	remove: function (userId, doc) {
		if (Roles.userIsInRole(userId, ['admin'])) {
			return true;
		}
	}
});

Meteor.methods({
	'setUserRoles': function (userId, roles) {
		// Check the calling user is admin.
		if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			if (Meteor.userId() !== userId) {
				Roles.setUserRoles(userId, roles);
			}
		}
	}
});