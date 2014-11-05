# Event web app plan

Ideas for combining and building on the two web apps used for the event in Westminster. I am aiming to:

1. Improve the efficency of how we store information and use it.
2. Offer clients and event attendees more services.
3. Put all this into a package to be licensed to other event organisers.


## Internal efficiency
	
- Store all data in the app rather than local documents.
	- Data only needs to be entered once and can be presented in different ways.
	- Everyone views live data - no need to worry about having the latest version.
	- Cached data can still be accessed when not online.
	- New versions of documents do not need to be distributed every time something changes.
	- Versions can still be saved for an audit trail.

- Create reports to display data in different ways.
	- Types of report:
		- Sessions by venue, time, presenter etc.
		- Attendees booked into a session - names and count.
		- Presenter stage calls.
	- Reports are HTML web pages.
		- Live data that updates immediately.
		- Easy to print directly from the browser.
		- Simple responsive design looks good on all devices, no issues with different software.
	- Reports should be flexible and sortable.
		- No coding should be necessary to create a report.
		- Come up with a way of using generic report templates that are filled with the desired data.
		- Add fields and releated records as needed.

- Good interface for planning session times.
	- Timetable that highlights clashes.


## Services for attendees and clients

- Attendee registration.
	- When people register for the event, they create a login so they can return and change details if necessary.
	- Book individual sessions that have limited capacity.

- Personal agenda
	- Attendees can view, email and print their own agenda based on their bookings.
	- They can visit the web app on their phone to get realtime updates and alerts.

- Digital signage
	- Show agenda of sessions in a given venue.
	- What's on now, next, later and when sessions are repeated.
	- These are simply public reports based on the same data as the rest of the app.

- Twitter feed
	- Subscribe to a given keyword and display tweets containing it.

- Access information related to sessions.
	- Speaker presentations.
	- Speaker biography, links and contact details.
	- Venue maps.

- Online business cards
	- Each name badge has a QR-code which links to that person's profile in our system.
	- They can manage their information through their registration login.
	- This could be basic contact info or a simple social network that puts people in touch with each other.


## Licensing

- Once we have a product that solves our problems and offers some good services then we can license it to other event organisers.
	- Allow them to create their own events, venues, sessions, reports etc. Perhaps a monthly charge based on the number of attendees.





At the event, run a backup server with router just for us in case the internet is rubbish.
Also take our own wireless routers so we don't have to rely on the venue's wireless.
Local and remote servers should mirror each other so in an emergency we can switch to the local server.
Integrate with other services with a REST API. Different front-ends. Resell to other companies.
Make a phone app that connects to the server and saves data locally for when offline.
What's on now and next for all venues on one screen.
Make now and next smarter. Only say now just before it starts, Later instead of next.
Collect many Twitter keywords but then have different views for each.
Handle entire registration process, giving delegates a login for booking sessions.
Store speaker presentations on the site, linked to from the session pages.
Delegates can access session info on their phones, seeing all details, live changes to schedules.