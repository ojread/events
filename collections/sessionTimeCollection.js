// A session can be repeated many times with the same details.
SessionTimes = new Mongo.Collection('sessionTimes');

SessionTimes.allow({
	insert: function (userId, doc) {
		if (Roles.userIsInRole(userId, ['admin'])) {
			/*doc.start = new Date(doc.start);
			doc.end = new Date(doc.end);*/
			return true;
		}
	},
	update: function (userId, doc, fieldNames, modifier) {
		if (Roles.userIsInRole(userId, ['admin'])) {
			return true;
		}
	},
	remove: function (userId, doc) {
		if (Roles.userIsInRole(userId, ['admin'])) {
			return true;
		}
	}
});

// Custom methods for interacting with the collection.
// Create date objects on the server for consistent timezones.
if (Meteor.isServer) {
	Meteor.methods({
		insertSessionTime: function (sessionId, start, end, venueId) {
			if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
				//var startDatetime = combineDateAndTime(date, start);
				//var endDatetime = combineDateAndTime(date, end);

				//var startDatetime = moment(start).valueOf();
				//var endDatetime = new Date(end);

				var data = {
					sessionId: sessionId,
					start: start,
					end: end,
					venueId: venueId
				}

				SessionTimes.insert(data);
			}
		},
		updateSessionTime: function (id, start, end, venueId) {
			if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
				/*var startDatetime = combineDateAndTime(date, start);
				var endDatetime = combineDateAndTime(date, end);*/

				var data = {
					start: start,
					end: end,
					venueId: venueId
				};

				SessionTimes.update(id, {
					$set: data
				});
			}
		},
		removeSessionTime: function (id) {
			if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
				SessionTimes.remove(id);
			}
		}
	});

	function combineDateAndTime(dateString, timeString) {
		/*var date = new Date(dateString);
		var time = timeString.split(':');
		var datetime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time[0], time[1]);
		var utc = datetime.getTime();
		return utc;*/

		var datetime = new Date(dateString);
		var time = timeString.split(':');
		datetime.setHours(time[0]-1);
		datetime.setMinutes(time[1]);
		var utc = datetime.getTime();
		return utc;
	}
}