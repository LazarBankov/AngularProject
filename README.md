EcoHunt Project Documentation
Overview
EcoHunt is a web application designed to manage and track environmental cleanup efforts. The application allows users to create, view, and manage posts related to cleanup activities. Users can register, log in, and manage their profiles and posts. Additionally, the application supports marking cleanup activities as completed.

Used Frameworks and Libraries
Frontend
Angular
RxJS

Backend
Node.js
Express.js

Installation
Prerequisites
Node.js 
Angular CLI 

Functionality

Public Part
Home Page: Displays the latest posts related to cleanup activities.
Cleaned places: Displays all cleaned places.
Actual Dump Places: Displays all dump places that are attending people for cleaning process.
Details of each post in Actual Dump Places
Login and Registration: Allows users to create an account and log in.
About: Gives information about the platform and our targets.
ALL ABOVE ARE WITHOUT FUNCTIONALITY EXCEPT LOGIN AN REGISTER.

Private Part
User Profile: Allows users to view and edit their profile information.
Create Post: Enables logged-in users to create new posts about cleanup activities.
Logout: For logout your profile.
Details: in details if you are the owner you can Edit post, Delete it and Mark it as CLEANED and the post goes to the Cleaned Places catalog, if you are authenticated user you can attend to the event for cleaning it.

API Endpoints
GET /ecohunt/posts: Retrieves the latest posts.
GET /ecohunt/posts/:postId: Retrieves a single post by ID.
POST /ecohunt/posts: Creates a new post (requires authentication).
PUT /ecohunt/posts/:postId: Updates a post by ID (requires authentication).
DELETE /ecohunt/posts/:postId: Deletes a post by ID (requires authentication).
PUT /ecohunt/posts/:postId/attend: Marks a post as attended (requires authentication).
POST /ecohunt/posts/:postId/cleaned: Marks a post as cleaned (requires authentication).

Architecture
The project is structured following the Angular best practices:

Components: Each UI element is encapsulated within a component.
Services: Used for handling business logic and communication with the backend.
Guards: Protect routes based on authentication status.
Types: Define the data structures used in the application.
Conclusion
EcoHunt is a comprehensive application for managing environmental cleanup activities. With its robust frontend built on Angular and a powerful backend using Node.js and Express, it offers a seamless experience for users to contribute to and manage cleanup efforts.
