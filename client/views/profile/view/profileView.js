Template.profileView.rendered = function () {
	var url = Router.routes.profileView.url({_id: this.data._id});
	$('#qrcode').qrcode({
		text: url,
		width: 128,
		height: 128
	});
};

Template.profileView.helpers({

	userCanEdit: function () {
		if (Meteor.userId() === this._id ||
			Roles.userIsInRole(Meteor.userId(), ['admin'])) {
			return true;
		}
	}

});