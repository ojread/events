// Create default admin users.
// Make sure to change the passwords when live!

Meteor.startup(function () {

	var users = [
		{username: 'ollie',	email: 'oliver@purplegroup.com', password: 'ollie'}
	];

	for (var i=0; i<users.length; i++) {
		var user = users[i];
		if (Meteor.users.find({username: user.username}).count() < 1) {
			var id = Accounts.createUser(user);
			Roles.addUsersToRoles(id, 'admin');
			console.log('Created user', user.username);
		}
	}

});