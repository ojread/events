// Set basic router templates.
Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

// Tell it to wait for data to be ready.
Router.onBeforeAction('loading');

// Delay the progress bar on fast routes.
IronRouterProgress.configure({
	delay: 100
});