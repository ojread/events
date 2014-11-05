var twitter, stream;

Meteor.startup(function () {
	startTwitterStream();

	// Every day clear out tweets over a week old.
	Meteor.setInterval(function () {
		var now = new Date().getTime();
		now -= 604800000 // Take off a week.
		Tweets.remove({
			timestamp_ms: {
				$lt: now
			}
		}, function (error, count) {
			if (error) {
				console.log('Error clearing tweets', error);
			} else {
				console.log('Cleared ' + count + ' tweets.');
			}
		});
	}, 86400000);
});

function startTwitterStream() {
	// Get a list of the keywords to track from the Keywords collection.
	var keywords = Keywords.find().map(function (doc) {
		return doc.keyword;
	});

	twitter = new TwitMaker({
		consumer_key: 'uaBcOrrLQ3FOzfvg07prQ',
		consumer_secret: 'azID5lGCXEMIKGrutcW8UHUV6Ig5gRyCAKAS0enETn4',
		access_token: '174989052-8TmJtJR5Q7WpatFm2ZMRwj2YziHLsdP7arJZXLpv',
		access_token_secret: 'UGJeLBe5rBjSWnYvXqqtF4CShQcGaURaooK4QyhW9I'
	});

	stream = twitter.stream('statuses/filter', {
		track: keywords
	});

	console.log('Twitter stream started tracking', keywords);

	//var stream = twitter.stream('user', {});

	// React to new tweets.
	stream.on('tweet', function (tweet) {
		tweetReceived(tweet);
	});

	// React to deletion of tweets.
	stream.on('delete', function (deleteMessage) {
		console.log('delete', deleteMessage);
		//tweetDeleted(tweet);
	});

	// Callback functions are wrapped inside a fiber with bindEnvironment.
	// This is needed because the Twitter stream is not using a fiber.
	var tweetReceived = Meteor.bindEnvironment(function (tweet) {
		Tweets.insert(tweet);
	});

	var tweetDeleted = Meteor.bindEnvironment(function (deleteMessage) {
		// Remove tweet from database using the twitter id.
		Tweets.remove({
			id: deleteMessage.id
		});
	});
}

function restartTwitterStream() {
	// Stop the running stream.
	stream.stop();
	console.log('Stream stopped');

	startTwitterStream();
	console.log('Stream restarted');
}

Meteor.methods({
	updateStreamKeywords: function () {
		restartTwitterStream();
	}
});
