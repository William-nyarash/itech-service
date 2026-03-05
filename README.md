# ITech Service API

## Overview

ITech Service is a backend REST API built using Node.js and Express that supports a school club registration and attendance tracking system.

The API allows applications to manage club members and attendance records through RESTful routes that support creating, retrieving, updating, and deleting resources.

This project is intended to serve as part of the backend infrastructure for managing activities within a school technology club.


## Tech Stack

* Node.js
* Express.js
* RESTful API architecture
* JSON-based request and response handling



## Features

* Register club members
* Retrieve registered club members
* Update member information
* Delete member records
* Record attendance for club meetings
* Retrieve attendance records
* Update attendance entries
* Delete attendance records


## API Routes

### Club Member Routes

Base route:

/itech-club

Handles club member registration and management.

| Method | Endpoint        | Description                     |
| ------ | --------------- | ------------------------------- |
| POST   | /itech-club     | Register a new club member      |
| GET    | /itech-club     | Retrieve all club members       |
| GET    | /itech-club/:id | Retrieve a specific club member |
| PUT    | /itech-club/:id | Update club member information  |
| DELETE | /itech-club/:id | Remove a club member            |


### Attendance Routes

Base route:
``` bash
/itech-attend
```
Handles attendance tracking for club meetings and events.

| Method | Endpoint          | Description                           |
| ------ | ----------------- | ------------------------------------- |
| POST   | /itech-attend     | Record attendance                     |
| GET    | /itech-attend     | Retrieve attendance records           |
| GET    | /itech-attend/:id | Retrieve a specific attendance record |
| PUT    | /itech-attend/:id | Update attendance information         |
| DELETE | /itech-attend/:id | Delete an attendance record           |


## Project Structure
```bash
itech-service
├──backend
  ├── src
  |   ├── config/
  |   |  ├── db.js
  |   |  └── env.js
  |   ├── controllers/
  |   |   ├── attendance.controllers.js
  |   |   └── user.controllers.js
  |   ├── models/
  |   |   ├── attendance.js
  |   |   └──  user.js
  │   ├── request/
  |   |   └── getAllUsers.rest
  |   ├── routes/
  |   |   ├── user.routes.js
  |   |   └── attendance.users.js
  │   └── app.js
  ├── .env.copy.example
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  └── README.md
```

## Installation

Clone the repository
```bash
git clone https://github.com/William-nyarash/itech-service.git
```
Navigate into the project directory
```bash
cd itech-service
```
Install dependencies
```bash
npm install
```

## environmental variables

insert your values to the variables in the .env.copy.example 
and rename the file to `.env`
```bash
PORT="port number"
MONGODB_URI="your mongodb connection string"
BCRYPT_SALT_ROUNDS="your integer value"
```
## Running the Application

Start the server
```bash
npm start
```
If using nodemon
```bash
npm run dev
```
The server will run on:
```bash
http://localhost:3000
```
---

## Example Request

Create a new club member

POST /itech-club
```curl
Content-Type: application/json

#Example request body

{
"name": "John Doe",
"email": "[john@example.com](mailto:john@example.com)",
"course": "Computer Science"
}
```
---

## Future Improvements

* Database integration (MongoDB or PostgreSQL)
* Authentication and authorization
* Input validation
* Error handling middleware
* API documentation
* Role-based access control

---

## License

MIT License.
