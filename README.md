# JWT Authentication Project

A simple full-stack JWT Authentication project built using React and Express.js.

This project helped me understand how authentication works in modern web applications using JSON Web Tokens (JWT). The application allows a user to log in, receive a JWT token from the backend, store it in localStorage, and use that token to access protected routes.

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Fetch API

### Backend

* Node.js
* Express.js
* JWT (jsonwebtoken)
* CORS

---

## Project Structure

```text
jwt-auth-project
│
├── backend
│   ├── middleware
│   │   └── auth.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── Login.jsx
│   │   └── Profile.jsx
│   └── package.json
│
└── README.md
```

---

## Features

* User Login
* JWT Token Generation
* JWT Verification
* Protected Routes
* React Routing
* Local Storage Authentication
* Express Middleware Authentication

---

## Authentication Flow

1. User enters username and password on the login page.
2. React sends a POST request to the backend.
3. Backend validates the credentials.
4. Backend generates a JWT token using `jwt.sign()`.
5. Token is sent back to React.
6. React stores the token in localStorage.
7. User is redirected to the Profile page.
8. Profile page sends the token in the Authorization header.
9. Backend verifies the token using `jwt.verify()`.
10. If valid, protected data is returned.

---

## Routes

### POST /login

Authenticates the user and returns a JWT token.

Sample Request:

```json
{
  "username": "sakshi",
  "password": "1234"
}
```

Sample Response:

```json
{
  "token": "jwt_token_here"
}
```

---

### GET /profile

Protected route.

Requires:

```http
Authorization: Bearer <token>
```

Sample Response:

```json
{
  "message": "Protected Data",
  "user": {
    "username": "sakshi"
  }
}
```

---

## Running the Project

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend

npm install

node server.js
```

Server runs on:

```text
http://localhost:3000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Learning Outcomes

Through this project I learned:

* How JWT Authentication works
* Difference between Authentication and Authorization
* How React communicates with Express APIs
* How to use localStorage
* How middleware works in Express
* How protected routes are implemented
* How JWT tokens are generated and verified
* Basic full-stack application structure

---

## What I Would Improve Next

If I continue working on this project, I plan to:

* Add user registration functionality
* Store users in MongoDB
* Hash passwords using bcrypt
* Implement logout functionality
* Create protected React routes
* Move secrets to environment variables using dotenv
* Implement refresh tokens for better security

---

## Challenges Faced

While building this project, I faced a few issues and learned how to debug them:

### 1. Backend Returning 500 Errors

Initially, the login API was returning a 500 Internal Server Error. I learned how to use browser developer tools and backend console logs to identify the root cause and verify that requests were reaching the server correctly.

### 2. Invalid JSON Response

At one point, the frontend was trying to parse HTML as JSON, which caused an "Unexpected token '<'" error. This helped me understand how frontend and backend responses should be structured and how to inspect network requests.

### 3. JWT Verification Failure

After implementing JWT authentication, profile requests were failing because an old token value (`dummy-token`) was still stored in localStorage. I learned how JWT verification works and how stale tokens can cause authentication failures.

### 4. Understanding Middleware Flow

One of the most challenging concepts was understanding how Express middleware works. By debugging the authentication middleware, I learned how requests move through middleware before reaching protected routes.

### 5. Managing Frontend Routing

I also learned how React Router handles navigation and how protected pages can fetch data only after successful authentication.


## Author

Sakshi Chaturvedi
Associate Software Engineer | React & Full-Stack Development Learner

Built as a learning project to understand JWT Authentication using React and Express.js.
