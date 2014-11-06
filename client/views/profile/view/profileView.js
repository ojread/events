Template.profileView.rendered = function () {
	var url = Router.routes.profileView.url({_id: this.data._id});
	$('#qrcode').qrcode({
		text: url,
		width: 64,
		height: 64
	});
};
