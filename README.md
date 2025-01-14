# EcoHunt - Environmental Social Platform

EcoHunt is a full-stack web application that allows users to share and discover environmental initiatives, challenges, and achievements. The platform aims to build a community of environmentally conscious individuals who can inspire and learn from each other.

## Project Structure

The project consists of two main parts:

### Frontend (EcoHunt)
- Built with Angular
- Located in the `EcoHunt/` directory
- Handles user interface and interactions
- Features modern, responsive design

### Backend (Rest-api)
- Built with Node.js and Express
- Located in the `Rest-api/` directory
- Manages data and business logic
- Provides RESTful API endpoints

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Angular CLI (`npm install -g @angular/cli`)
- MongoDB (for the database)

## Getting Started

### Setting up the Backend

1. Navigate to the backend directory:
   ```bash
   cd Rest-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `Rest-api` directory with the following variables:
   ```
   PORT=3000
   DB_URI=mongodb://localhost:27017/ecohunt
   JWT_SECRET=your_jwt_secret_here
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Setting up the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd EcoHunt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and visit `http://localhost:4200`

## Main Features

### User Management
- Registration and authentication
- User profiles with environmental achievements
- Profile customization

### Posts and Interactions
- Create and share environmental posts
- Like and comment on posts
- Browse environmental initiatives
- Search functionality

### Environmental Features
- Track environmental impact
- Share eco-friendly challenges
- Community engagement

## API Endpoints

### Authentication
- POST `/api/users/register` - Register a new user
- POST `/api/users/login` - User login
- POST `/api/users/logout` - User logout

### Posts
- GET `/api/posts` - Get all posts
- POST `/api/posts` - Create a new post
- GET `/api/posts/:id` - Get specific post
- PUT `/api/posts/:id` - Update a post
- DELETE `/api/posts/:id` - Delete a post

### User Profile
- GET `/api/users/profile` - Get user profile
- PUT `/api/users/profile` - Update user profile

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## Support

If you encounter any issues or have questions, please:
1. Check the existing issues in the repository
2. Create a new issue with a detailed description
3. Contact the development team

## License

This project is licensed under the MIT License - see the LICENSE file for details.
