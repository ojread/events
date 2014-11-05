Template.keywordIndex.events({
	'click #createKeyword': function (e) {
		var keyword = window.prompt('Enter the keyword');
		if (keyword.length > 0) {
			//Meteor.call('insertKeyword', keyword);
			Keywords.insert({
				keyword: keyword
			}, function () {
				Meteor.call('updateStreamKeywords');
			});
		}
	}
});

Template.keywordIndex.events({
	'click .removeKeyword': function (e) {
		if (window.confirm('Are you sure you want to delete the keyword "' + this.keyword + '"?')) {
			//Meteor.call('removeKeyword', this._id);
			Keywords.remove(this._id, function () {
				Meteor.call('updateStreamKeywords');
			});
		}
	}
});
