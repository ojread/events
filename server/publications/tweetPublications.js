Meteor.publish('tweets', function () {
	return Tweets.find({}, {
		sort: {
			id: -1
		},
		limit: 50
	});
});

Meteor.publish('tweet', function (id) {
	return Tweets.find(id);
});
