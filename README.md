# Event Booking System

## Objective
- Build a backend API for an event booking system using Nest.js and GraphQL.
- Implement features like user role permission, event creation, event listing, ticket booking, and payment processing (TBC).
- Integrate with a MongoDB database to store event information, user data, and bookings.
- Implement validation and error handling for input data and payment transactions.

---
## Business Definition (Scope)
### Event Creation:
Organizers create events by providing details such as event name, description, date, time, location, and ticket types.
They can set ticket prices, availability, and any discounts or promotional codes.

### Event Listing:
Once an event is created, it is listed on the platform's event catalog.
Users can browse through the list of upcoming events, filter by category, location, date, or keywords, and view event details.

### Ticket Booking:
Users can select the event they want to attend and book tickets.
They can choose the type and quantity of tickets they wish to purchase and proceed to payment.

### Ticket Management:
Users can manage their bookings, view their ticket details, and download/print their tickets.
Organizers can track ticket sales, manage attendee lists, and scan tickets at the event venue for check-in.

### Feedback and Reviews:
After attending an event, users can provide feedback and reviews, helping organizers improve future events and providing valuable insights for other potential attendees.

## User Roles
### Organizers/Businesses:
These are entities or individuals who organize and host events.
1. Can create events, specify event details (such as date, time, location, and ticket prices), and manage bookings.
2. Have access to analytics and reports to track attendance, ticket sales, and revenue.

### Attendees/Users
These are individuals who are interested in attending events.
1. They can browse through the list of upcoming events, view event details, and book tickets.
2. Users can create accounts to manage their bookings, view their ticket history, and receive notifications about upcoming events.
---

## ToDo:

- [ ] Event creation, update and delete (soft), list (by user)
- [ ] User can attend to an event or cancel it
- [ ] Implement fake online payment system (approve or deny transactions)