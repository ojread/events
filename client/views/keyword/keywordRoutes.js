Router.map(function () {
	// List all keywords
	this.route('keywordIndex', {
		path: '/keywords',
		waitOn: function () {
			return [
				Meteor.subscribe('keywords')
			];
		},
		data: function () {
			return {
				keywords: Keywords.find().fetch()
			};
		}
	});
});