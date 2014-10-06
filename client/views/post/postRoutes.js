// Define routes to connect paths, templates, data and subscriptions.

Router.map(function () {
	// List all posts
	this.route('postIndex', {
		path: '/posts',
		waitOn: function () {
			return [
				Meteor.subscribe('posts')
			];
		},
		data: function () {
			return {
				posts: Posts.find().fetch()
			};
		}
	});

	// Write a new post.
	// Use the postEdit template but don't pass any post data.
	this.route('postCreate', {
		path: '/posts/new',
		template: 'postEdit'
	});
	
	// View a single post.
	this.route('postSingle', {
		path: '/posts/:_id',
		waitOn: function () {
			return [
				Meteor.subscribe('post', this.params._id)
			];
		},
		data: function () {
			return {
				post: Posts.findOne(this.params._id)
			};
		}
	});

	// Edit a post.
	this.route('postEdit', {
		path: '/posts/:_id/edit',
		waitOn: function () {
			return [
				Meteor.subscribe('post', this.params._id)
			];
		},
		data: function () {
			return {
				post: Posts.findOne(this.params._id)
			};
		}
	});
});