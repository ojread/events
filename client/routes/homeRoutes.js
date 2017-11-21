Router.map(function () {
	this.route('home', {
		path: '/',
		waitOn: function () {
			return [
				Meteor.subscribe('venues'),
				Meteor.subscribe('keywords')
			];
		},
		data: function () {
			return {
				venues: Venues.find({}, {sort: {title: 1}}),
				keywords: Keywords.find()
			};
		}
	});
});