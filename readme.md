# Purple Group Meteor Boilerplate

This is a bare-bones Meteor app that demonstrates a logical structure and shows some very useful packages. This project is a good base for rapid prototyping.


## Directory Structure

* client - only available to the client
	* config - set up things like accounts UI and router
	* views - templates and routes
		* common - layout and header templates
		* home - home page template
		* post - example CRUD interface
			* edit - create or update a post
			* index - list all posts
			* single - view a post in detail
		* user - manage Meteor's user collection
			* index - admin page for setting roles
* collections - available globally
* server - only available to the server
	* fixtures - insert default records on server start
	* publications - make record sets available to the client


## Packages

* iron:router - Connects URLs, templates, data and subscriptions.
* mrt:iron-router-progress - Indicates when a page is loading.
* alanning:roles - Assign roles to users and restrict their access.
* accounts-password - Sign in with a password.
* mrt:bootstrap-3 - Frontend framework that lets you concentrate on functionality.
* mrt:accounts-ui-bootstrap-3-blaze - Style the login widget to match Bootstrap 3.
* mrt:publish-with-relations - Reactively publish records with related data.

The autopublish and insecure packages have been removed because we want control over that stuff.


## Data Flow

Collection - Define the collection and access rights.
Publish - Define sets of records to be sent to the client.
Subscribe - Request a publication from the server.
Data - Use the subscribed records to send data to the template.
Router - Connects subscriptions, data and templates to a URL path in the app.
Template - Render the supplied data.


## Iron Router

Meteor has no built-in way of handling multi-page apps. Iron Router deals with this and vastly simplifies the whole process of getting the right data from the server to the client.
Each view directory has a routes file which defines the routes for that section of the app. The options for each route are as follows:

* template - The template to display. Defaults to the route name.
* path - The URL path that triggers this route.
* waitOn - A function that returns an array of subscriptions.
* data - A function that returns an object that will be available to the template.