Template.postSingle.events({
    'click #deletePost': function() {
        if (window.confirm('Are you sure you want to delete "' + this.title + '"?')) {
            Posts.remove(this._id, function() {
            	// After deleting, go back to the index.
            	Router.go('postIndex');
            });
        }
    }
});
