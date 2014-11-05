Template.registerHelper('timeFromNow', function (date) {
	return moment(date).fromNow();
});

Template.registerHelper('formatDate', function (date) {
	return moment(date).format('DD MMM YYYY');
});

Template.registerHelper('formatDateInput', function (date) {
	return moment(date).format('YYYY-MM-DD');
});

Template.registerHelper('formatDatetime', function (datetime) {
	return moment(datetime).format('hh:mm DD MMM YYYY');
});

Template.registerHelper('formatDatetimeInput', function (datetime) {
	return moment(datetime).format('YYYY-MM-DDThh:mm:00');
});

Template.registerHelper('formatTime', function (datetime) {
	return moment(datetime).format('HH:mm');
});

Template.registerHelper('formatLocalTime', function (datetime) {
	return moment(datetime).zone('+01:00').format('HH:mm');
});

Template.registerHelper('calendarTime', function (datetime) {
	return moment(datetime).calendar();
});