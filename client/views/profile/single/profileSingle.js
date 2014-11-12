Template.profileSingle.rendered = function () {
	var url = Router.routes.profileSingle.url({_id: this.data._id});
	$('#qrcode').qrcode({
		text: url,
		width: 128,
		height: 128
	});
};

Template.profileSingle.helpers({

	userCanEdit: function () {
		if (Meteor.userId() === this._id ||
			Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			return true;
		}
	}

});