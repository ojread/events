Template.eventEdit.events({
	'submit #eventEditForm': function (e) {
		e.preventDefault();

		// Fetch the field values.
		var title = $('#title').val();

		// Dates are just strings until the server creates date objects.
		var start = $('#start').val();
		var end = $('#end').val();

		// Check that data was entered.
		if (title && start && end) {
			if (this.event) {
				var id = this.event._id;
				
				// If event data is set then we're updating the existing event.
				Meteor.call('updateEvent', id, title, start, end, function (error) {
					if (!error) {
						Router.go('eventSingle', {
							_id: id
						});
					}
				});
			} else {
				// No event data so create new event.
				Meteor.call('insertEvent', title, start, end, function (error, id) {
					if (!error) {
						Router.go('eventSingle', {
							_id: id
						});
					}
				});
			}
		}
	}
});
