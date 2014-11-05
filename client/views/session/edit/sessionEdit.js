Template.sessionEdit.helpers({
	eventSelected: function (eventId) {
		if (eventId === this._id) {
			return 'selected';
		}
	}
});

Template.sessionEdit.events({
	'submit #sessionEditForm': function (e) {
		e.preventDefault();

		// Fetch the field values.
		var title = $('#title').val();
		var description = $('#description').val();
		var eventId = this.event._id;

		// Check that data was entered.
		if (title.length > 0) {
			if (this.session) {
				// Update
				var id = this.session._id;
				Sessions.update(id, {
					$set: {
						title: title,
						description: description,
						eventId: eventId
					}
				});
			} else {
				// Insert
				var id = Sessions.insert({
					title: title,
					description: description,
					eventId: eventId
				});
			}

			// After inserting or updating, go back to the single view.
			Router.go('sessionSingle', {
				_id: id,
				eventId: eventId
			});
		}
	}
});
