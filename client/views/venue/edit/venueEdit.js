Template.venueEdit.helpers({
	eventSelected: function (eventId) {
		if(eventId === this._id) {
			return 'selected';
		}
	}
});

Template.venueEdit.events({
	'submit #venueEditForm': function (e) {
		e.preventDefault();

		// Fetch the field values.
		var title = $('#title').val();
		var eventId = this.event._id;

		// Check that data was entered.
		if (title.length > 0) {
			if (this.venue) {
				var id = this.venue._id;
				// If venue data is set then we're updating the existing venue.
				Venues.update(id, {
					$set: {
						title: title,
						eventId: eventId
					}
				});
			} else {
				// No venue data so create new venue.
				var id = Venues.insert({
					title: title,
					eventId: eventId
				});
			}

			// After inserting or updating, go back to the single view.
			Router.go('eventSingle', {
				_id: eventId,
			});
		}
	}
});