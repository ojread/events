Template.profileEdit.events({
	'submit #editProfileForm': function (e) {
		e.preventDefault();

		var firstName = e.target['firstName'].value;
		var lastName = e.target['lastName'].value;
		var company = e.target['company'].value;
		var phoneNumber = e.target['phoneNumber'].value;

		Meteor.call('updateProfile',
			this._id,
			firstName,
			lastName,
			company,
			phoneNumber
		);

		Router.go('profileView', {
			_id: this._id
		});

	}
});
