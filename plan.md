# Site structure
Logical layout of all site functions.

## / (home)
- List public events?

## /events (eventList)
- List events visible to current user.
- Ordinary users see events that they are attending or have been invited to.
- Event organisers can see their company's events.

## /events/eventId (eventView)
- Show high-level details about the event (dates, location, contact details).

## /events/eventId/agenda
- Show all of this event's sessions that the user is registered for.

## /events/eventId/attendees
- List people invited to the event. Option to filter non-attendees.

## /events/eventId/invite
- Organiser can enter email addresses of people that they want to invite.
- May want more information - first/last name, organisation so uploading a CSV would be more useful. Where would this info come from in the first place?

## /events/eventId/sessions (sessionList)
- List the different sessions.

## /events/eventId/sessions/sessionId (sessionView)
- 

## /events/eventId/timetable
- Show all of this event's session times with links to sessions for more info.
- Let attendees register for sessions.

## /events/eventId/venues



## /profiles (profileList)
- List people that the current user has met.
- Like viewing users but for non-admins.

## /profiles/userId (profileView)
- Show this user's profile, basically a business card. Links to social media sites.
- This URL can be placed on their namebadge as a QR code.
- When a signed-in user visits their own profile, give them the option to edit their details.
- When a signed-in user visits another user's profile, note their meeting so they can look back and find each other.
- How public should this be? You would need to actually scan their code to find them so it's as controllable as a business card.

## /profiles/userId/edit (profileEdit)
- Update your personal details for others to see on your profile.
- Enter as much or as little as you like.



## /users (userList)
- List all users for admin.
- Deal with the back-end user settings such as roles/permissions.

## /users/userId (userView)
- Allow admin to edit user roles.




# Functions to implement

## Invitations
If the event is by invitation only, the organiser enters the list of names and email addresses of people who they want to invite. There could be more invitations than there are spaces but have it first-come, first-serve.
Emails are sent to the invitees with links back to the app.

If the event is open to all, they can register themselves. Take payment?

- Each event has a page where you can 



The event organiser enters the email addresses to send invitations to.

If an email address does not exist in the system, it needs to be added.

Accounts.createUser() - Use the email address to create a new user.

Create an Attendee to connect the user to the event.

Accounts.sendEnrollmentEmail() - Ask the user to set their password.


If an email address is owned by an existing user, they need to be invited using their existing account.

So the event invitation process needs to be separate to the account process. 