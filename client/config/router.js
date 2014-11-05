// Set basic router templates.
Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

// Tell it to wait for data to be ready.
Router.onBeforeAction('loading');

// Configure the loading bar.
IronRouterProgress.configure({
	delay: 100 // Delay it on fast routes.
});

// Restrict access except on public pages.
Router.onBeforeAction(function (pause) {
	if (!Roles.userIsInRole(Meteor.user(), 'admin')) {
		this.redirect('home');
		pause();
	}
	return true;
}, {except: ['home', 'venueAgenda', 'tweetDisplay']});