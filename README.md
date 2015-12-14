# TrekBnB

TrekBnB, a clone of airbnb.com, is a web application built with Ruby on Rails,
PostgreSQL, React.js, Flux, Google Maps API v3, Bootstrap, and jQuery.

[Live link][amzn]

[amzn]: https://www.trekit.co

## Minimum Viable Product


<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Session control: Log in / Log out
- [ ] Guest Login
#### Guest functions (signin not required)
- [ ] Search function (user input: locations, start and end dates)
- [ ] Render result with list and Google Maps
- [ ] Update result after each map movement (AJAX)
- [ ] View listing details with ratings/comments from previous guests
#### Guest functions (signin required)
- [ ] Submit booking request
- [ ] Submit rating and comment after the stay (end date)
- [ ] View profiles of other users (level-1 details)
#### Host functions (signin required)
- [ ] Create new listings
- [ ] Edit current listings
- [ ] View profiles of requesters (level-2 details with reviews from other hosts)
- [ ] Approve/Deny booking request

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Room Model and JSON API (1 day)

#### Backend Implementations:
1) user model/controller and session controller (Phase A)
2) user_profile model/controller (Phase A)
3) room model/controller (Phase A)
4) JSON (CRUD) API for user/session/room (Phase A)
5) static page controller
6) basic seed data for dev and testing


[Details][phase-one]

### Phase 2: Flux Architecture and Room CRUD (1.5 days)

#### Frontend Implementations:
1) React view structure with Flux and React Router
2) RoomStore with ApiUtil and RoomActions (for CRUD AJAX request)
3) landing page with search bar and login (Phase A)
4) Google Maps API for city name autocomplete in search field
5) Render result based on location input with Google Maps with markers and list
   of rooms within the map's geo-boundry.
6) real-time update to the result based on the current map view
7) basic bootstrap styling for landing and result pages

[Details][phase-two]

### Phase 3: Room details and User profile pages (2 days)

#### Frontend Implementations:
1) show page of a listed room with descriptions and pricing (Phase A)
2) overlay image gallery
3) user profile (Phase A)

[Details][phase-three]

### Phase 4: Room ratings and reviews (1.5 day)

#### Backend Implementations:
1) Reservation model/controller (Phase A)
2) feedback model/controller with JSON API (Phase A)

#### Frontend Implementations:
1) reservation request option in room's show page (Phase A)
2) reservation summary in user account page
3) cancellation buttons for future reservations
4) review buttons for past reservations
5) review form page
6) add ratings and reviews to room show page

[Details][phase-four]

### Phase 5: Room listings (2 day)

#### Backend Implementations:
1) improve room model/controller and JSON API (Phase B)
2) improve reservation model/controller and JSON API (Phase B)
3) improve users controller and JSON API (Phase B)

#### Frontend Implementations:
1) new listing form
2) edit existing room form
3) delete room or suspend reservation
4) add room status/summary to host user's account page
5) add reservation approval/denial functions
6) hosts have ability to see more details of the requester

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1.5 day)

#### Backend Implementations:
1) create more seed data
2) add visitor data cleanup mechanism
3) cloud instance config verifications
4) remove API keys from github and regenerate new ones

#### Frontend Implementations:
1) ensure style consistency
2) add transition animations

### Bonus Features (TBD)

- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Demo guidance overlay
- [ ] Messaging and notifications
#### Guest functions (signin required)
- [ ] Facebook/Google sign-in
- [ ] Add flight/transportation/weather information
- [ ] Payment integration (using a sandbox)
- [ ] Search filter options
#### Host functions (signin required)
- [ ] Add more details/options (amenities) to room
- [ ] Cancellation policies
- [ ] Add/Change availability
- [ ] View profiles of confirmed guests (level-3 details with contact information)
- [ ] Submit rating and review of the guest after each stay
- [ ] Statistics (occupancy rate, earnings, fees)

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
