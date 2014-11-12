Router.map(function () {

	this.route('profileIndex', {
		path: '/profiles',
		waitOn: function () {
			return Meteor.subscribe('users');
		},
		data: function () {
			return {
				users: Meteor.users.find()
			};
		}
	});

	this.route('profileEdit', {
		path: '/profiles/:_id/edit',
		waitOn: function () {
			return Meteor.subscribe('user', this.params._id);
		},
		data: function () {
			return Meteor.users.findOne(this.params._id);
		}
	});

	this.route('profileSingle', {
		path: '/profiles/:_id',
		waitOn: function () {
			return Meteor.subscribe('user', this.params._id);
		},
		data: function () {
			return Meteor.users.findOne(this.params._id);
		}
	});

});