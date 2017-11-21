Meteor.publish('feeds', function () {
	return Feeds.find();
});

Meteor.publish('feed', function (id) {
	return Feeds.find(id);
});
