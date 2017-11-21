Router.map(function () {

	this.route('feedIndex', {
		path: '/feeds',
		waitOn: function () {
			return [
				Meteor.subscribe('feeds')
			];
		},
		data: function () {
			return {
                feeds: Feeds.find()
			};
		}
	});

});
