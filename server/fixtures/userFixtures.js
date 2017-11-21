// Create default admin users.
// Make sure to change the passwords when live!

Meteor.startup(function () {

	var users = [{
		email: 'oliver@purplegroup.com',
		password: 'ollie'
	}];

	if (Meteor.users.find().count() === 0) {
		for (var i = 0; i < users.length; i++) {
			var user = users[i];
			var id = Accounts.createUser(user);
			Roles.addUsersToRoles(id, 'admin');
			console.log('Created user', user.email);
		}
	}

});
