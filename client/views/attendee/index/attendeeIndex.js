Template.attendeeIndexItem.helpers({
	name: function () {
		var user = Meteor.users.fineOne(this.userId);
		
	}
});