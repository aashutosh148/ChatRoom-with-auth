
# Real-Time ChatRoom-with-auth

Welcome to the Real-Time Chat Application, a web-based platform that combines secure user authentication and real-time chat functionality. This project is built using Node.js, Express.js, MongoDB, Socket.IO, and Handlebars, providing a robust and engaging experience for users.

## Features

- **User Authentication**: Users can sign up and create new accounts, or log in with existing credentials. Passwords are securely hashed and stored in a MongoDB database.
- **Real-time Chat**: Authenticated users can join a shared chat room and communicate with each other in real-time. Messages are instantly delivered to all connected clients.
- **User Presence**: Notifications are broadcasted when users join or leave the chat room, keeping everyone informed about the active participants.
- **Responsive Design**: The chat interface is built using Handlebars templates and styled with CSS, ensuring a visually appealing and responsive experience across different devices and screen sizes.

## Technologies Used

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A web application framework for Node.js, used for handling HTTP requests, defining routes, and managing middleware.
- **MongoDB**: A NoSQL database for storing user data and credentials.
- **Mongoose**: An Object Document Mapping (ODM) library for MongoDB, providing a higher-level abstraction for interacting with the database.
- **Socket.IO**: A library for real-time, bidirectional, and event-based communication between the client and server, enabling real-time chat functionality.
- **Handlebars (hbs)**: A templating engine for rendering dynamic HTML views and separating presentation logic from application logic.
- **express-session**: A middleware for Express.js that provides session management functionality, enabling persistent user sessions and secure authentication.
- **dotenv**: A module for loading environment variables from a `.env` file, allowing for secure management and storage of sensitive information.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/aashutosh148/ChatRoom-with-auth`
2. Install dependencies: `npm install`
3. Set up the environment variables by creating a `.env` file in the root directory and adding the variables: `SESSION_SECRET`: A secret key for signing and encrypting the session data.
1. Start the application: `npm start`
2. Open your web browser and navigate to `http://localhost:3000` to access the application.


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Socket.IO](https://socket.io/)
- [Handlebars](https://handlebarsjs.com/)
- [express-session](https://github.com/expressjs/session)
- [dotenv](https://github.com/motdotla/dotenv)

And many thanks to the open-source community for their invaluable contributions!
