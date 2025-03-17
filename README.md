# Password Reset Flow - BackEnd
This project implements a password reset flow that includes email verification and updating the user's password securely in the database.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [POSTMAN Documentation URL](#postman-documentation-url)


## Features
- **User Registration**: Register new users with hashed passwords. 
- **User Login**: Authenticate users and issue JWTs for authorized access.
- **JWT-Based Authorization**: Protect routes using httpOnly tokens.
- **Secure User Info Retrieval**: Users can retrieve their information using valid tokens.
- **Error Handling and Validation**: Proper error messages and input validations.
- **API Documentation**: Detailed documentation using Postman, with sample requests and responses.

## Tech Stack
- **Node.js**: JavaScript runtime for server-side applications.
- **Express.js**: Minimalist web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: JSON Web Token for secure token-based authentication.
- **Postman**: API testing and documentation.
- **NodeMailer** : To Generate Email after Successful registration and Reset Password. 

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Prasanna0401/Password-Reset-Flow-BackEnd.git
   ```

2. Install dependencies:

    ```bash 
    npm install express
    npm install mongoose
    npm install nodemon --save-dev
    npm install dotenv
    npm install jsonwebtoken 
    npm install bcrypt
    npm install nodemailer
    npm install cors
    ```

3. Setting up environment variables .

4. Run the Application
    ```bash
    npm start
    ```

## Environment Variables

Both of these values were put under .gitignore concerning security.

- **MongoDB Database URL** - The URL for the database stored in Atlas
- **Secret Key** - Which is used in hashing the token in token encryption and decryption phase.
- **Port Number** - Port number to run the server.
- **Email ID** - Sender Email ID
- **Password App** -Sender Password - It can be fetched in Gmail App Passwords.


## Folder Structure

.

├── config           # Contains database connection

├── controllers      # Contains controller functions

├── models           # Contains Mongoose models

├── routes           # Defines routes for the application

├── utils            # Middleware for JWT token verification

├── index.js         # Basefile

└── README.md        # Project documentation

## API Endpoints

1. ` POST /api/v1/auth/register` **Register a User**: Send a POST request to `/api/v1/auth/register` with JSON payload containing username, email, and password.
2. `POST /api/v1/auth/login` **Login User**: Send a POST request to `/api/v1/auth/login` with username and password. You’ll receive a JWT if credentials are valid.
3.  `GET /api/v1/auth/userInfo` **Access Protected Routes - Personal Information**: Send requests to protected routes with `Authorization: httpOnly-cookie <token>` `WithCredintials:True` after logging in to get the information of the logged in user. 
4. `POST api/v1/auth/signout` **Logout User**: Send a POST request to `api/v1/auth/signout`. It clears the token which is stored in the browser and logged out from the browser. If it is logged out, then we can't use the protected route `api/v1/auth/userInfo`.
5.  `POST /api/v1/auth/resetPassword` **Reset Password** : It is used to reset the password.It is used to generate a token which will be used to create a new password. 
5.  `POST /api/v1/auth/setNewPassword` **Set New Password** : After generating a token, you can input the token as key and new password to create a new password.

## POSTMAN Documentation URL

[POSTMAN API Documentation URL: ](https://documenter.getpostman.com/view/39260343/2sAYkDLfP8)