Router.map(function () {
	// List all tweets
	this.route('tweetIndex', {
		path: '/tweets',
		waitOn: function () {
			return [
				Meteor.subscribe('tweets')
			];
		},
		data: function () {
			return {
				tweets: Tweets.find({}, {
					sort: {
						timestamp_ms: 1
					}
				})
			};
		}
	});

	// Display all tweets to the public.
	this.route('tweetDisplay', {
		path: '/tweets/display',
		layoutTemplate: 'fullscreenLayout',
		waitOn: function () {
			return [
				Meteor.subscribe('tweets')
			];
		},
		data: function () {
			return {
				tweets: Tweets.find({}, {
					sort: {
						timestamp_ms: 1
					}
				})
			};
		}
	});

	// Display tweets containing the given keyword.
	/*this.route('tweetKeyword', {
		path: '/tweets/:keyword',
		template: 'tweetIndex',
		layoutTemplate: 'fullscreenLayout',
		waitOn: function () {
			return [
				Meteor.subscribe('tweets')
			];
		},
		data: function () {
			var keyword = decodeURI(this.params.keyword);
			console.log(keyword);
			return {
				tweets: Tweets.find({
					text: {
						$regex: '.*' + keyword + '*.'
					}
				}, {
					sort: {
						id: -1
					}
				})
			};
		}
	});*/
});
