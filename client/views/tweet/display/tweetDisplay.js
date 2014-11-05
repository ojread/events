/*Template.tweetDisplay.created = function () {
	
};*/

Template.tweetDisplay.destroyed = function () {
	$('html').removeClass('fullscreen');
};

Template.tweetDisplay.rendered = function () {
	$('html').addClass('fullscreen');
	
	var tweetBuffer = new TweetBuffer();

	// Watch the tweets cursor for new records.
	this.data.tweets.observe({
		added: function (tweet) {
			tweetBuffer.add(tweet._id);
			//console.log(tweet);
		},
		removed: function (tweet) {
			tweetBuffer.remove(tweet._id);
		}
	});

	// Each few seconds try to show the next tweet.
	Meteor.setInterval(function () {
		tweetBuffer.showNextTweet();
	}, 10000);
};

Template.tweetDisplayItem.rendered = function () {
	// Add this tweet to to the buffer to be displayed when ready.
	//tweetBuffer.add(this.data._id);
};

Template.tweetDisplayItem.helpers({
	tweetText: function () {
		//console.log(twttr.txt);
		return twttr.txt.autoLink(this.text);
	},
	avatar: function () {
		var src = this.user.profile_image_url;
		// Get the bigger image.
		return src.replace('normal', '400x400');
	},
	photo: function () {
		if (this.entities.media) {
			if (this.entities.media[0].type === 'photo') {
				return this.entities.media[0].media_url;
			}
		}
		return false;
	},
	photoLandscape: function () {
		if (this.entities.media) {
			if (this.entities.media[0].type === 'photo') {
				var size = this.entities.media[0].sizes.large;
				if (size.w > size.h) {
					return true;
				}
			}
		}
		return false;
	}
});



// The buffer stores a number of tweets so they can be rotated.
// Show one on screen at a time and rotate through recent tweets.
// When a new one comes in, remove the oldest if length > max.
function TweetBuffer () {
	this._tweetIds = [];
	this._maxLength = 10;
	this._currentIndex = 0;
	this._currentTweetId = '';	
}

TweetBuffer.prototype.add = function(tweetId) {
	// Add this tweet to the end of the array.
	this._tweetIds.push(tweetId);

	// Show the tweet now if it's alone.
	if (this._tweetIds.length === 1) {
		this._currentTweetId = tweetId;
		$('#'+this._currentTweetId).fadeIn();
	}
};

TweetBuffer.prototype.remove = function(tweetId) {
	// Just making sure that removed tweets don't display.
	var index = this._tweetIds.indexOf(tweetId);
	if (index) {
		this._tweetIds.splice(index, 1);
	}
};

TweetBuffer.prototype.showNextTweet = function() {
	// Make sure there is more than 1 tweet to switch between.
	if (this._tweetIds.length > 1) {

		// Hide the current tweet
		$('#'+this._currentTweetId).fadeOut();

		// Get the next tweetId.
		this._currentIndex++;

		// Have we reached the end of the array?
		if (this._currentIndex >= this._tweetIds.length) {
			this._currentIndex = 0;

			// Remove any surplus elements from the start.
			if (this._tweetIds.length > this._maxLength) {
				var surplus = this._tweetIds.length - this._maxLength;
				this._tweetIds.splice(0, surplus);
			}
		}
		this._currentTweetId = this._tweetIds[this._currentIndex];

		$('#'+this._currentTweetId).fadeIn();

		//console.log(this._currentIndex, this._tweetIds);
	}
};