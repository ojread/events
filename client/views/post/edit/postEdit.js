Template.postEdit.events({
    'submit #postEditForm': function(e) {
        e.preventDefault();

        // Fetch the field values.
        var title = $('#postTitle').val();
        var content = $('#postContent').val();

        // Check that data was entered.
        if (title.length > 0 && content.length > 0) {
            if (this.post) {
                var id = this.post._id;
                // If post data is set then we're updating the existing post.
                Posts.update(id, {
                    $set: {
                        title: title,
                        content: content
                    }
                });
            } else {
                // No post data so create new post.
                var id = Posts.insert({
                    title: title,
                    content: content
                });
            }

            // After inserting or updating, go back to the single view.
            Router.go('postSingle', {_id: id});
        }
    }
});
