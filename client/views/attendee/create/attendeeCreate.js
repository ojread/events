Template.attendeeCreate.rendered = function () {
	Meteor.typeahead.inject();
};

Template.attendeeCreate.helpers({
	emails: function () {
		var emails = Meteor.users.find().map(function (user) {
			return user.emails[0].address;
		});
		return emails;
	}
});