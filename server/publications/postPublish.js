// Publish the titles of all posts.
Meteor.publish('posts', function () {
	return Posts.find({}, {fields: {title: 1}});
});

// Publish all fields of the given post.
Meteor.publish('post', function (id) {
	return Posts.find(id);
});