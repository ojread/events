// Set router and router progress options.
Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	progressDebug: false,
	progressDelay: 100
});

// Restrict access except on public pages.
// Data security should be done server-side, this is simply to
// guide anonymous users to where they should be.
Router.onBeforeAction(function () {
	if (!Roles.userIsInRole(Meteor.user(), 'admin')) {
		this.redirect('home');
	}
	this.next();
}, {
	except: ['home', 'venueAgenda', 'tweetDisplay']
});
