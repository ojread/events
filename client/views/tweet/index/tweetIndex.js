Template.tweetIndex.events({
	'click #clearTweets': function (e) {
		if (window.confirm('Are you sure you want to delete ALL tweets?')) {
			Meteor.call('clearTweets');
		}
	}
});

Template.tweetIndexItem.events({
	'click .delete': function (e) {
		if (window.confirm('Are you sure you want to delete this tweet?')) {
			Tweets.remove(this._id);
		}
	}
});