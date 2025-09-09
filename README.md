# MLSA Task Manager API

A RESTful API for managing tasks and user authentication, built with Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Auth](#auth)
  - [Tasks](#tasks)
- [Models](#models)
- [Error Handling](#error-handling)
- [Project Structure](#project-structure)

---

## Features

- User registration and login with JWT authentication
- CRUD operations for tasks (create, read, update, delete)
- Task filtering, pagination, and sorting
- Input validation and error handling

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd mlsa-backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env` and update values as needed.

4. **Start the server:**
   ```sh
   npm run dev
   ```
   The server runs on `http://localhost:5000` by default.

## Environment Variables

See [.env](.env):

- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT signing
- `JWT_EXPIRE`: JWT token expiration (e.g., `7d`)

## API Endpoints

### Auth

- **POST `/api/auth/register`**  
  Register a new user  
  **Body:** `{ username, email, password }`

- **POST `/api/auth/login`**  
  Login and receive JWT token  
  **Body:** `{ email, password }`

- **GET `/api/auth/me`**  
  Get current user info  
  **Headers:** `Authorization: Bearer <token>`

### Tasks

All `/api/tasks` endpoints require authentication (`Authorization: Bearer <token>`).

- **GET `/api/tasks`**  
  Get all tasks for the user  
  **Query params:** `status`, `priority`, `page`, `limit`

- **POST `/api/tasks`**  
  Create a new task  
  **Body:** `{ title, description, status, priority, dueDate }`

- **GET `/api/tasks/:id`**  
  Get a specific task by ID

- **PUT `/api/tasks/:id`**  
  Update a task by ID  
  **Body:** `{ title, description, status, priority, dueDate }`

- **DELETE `/api/tasks/:id`**  
  Delete a task by ID

### Health Check

- **GET `/api/health`**  
  Returns `{ message: 'Server is running!' }`

## Models

See [models/User.js](models/User.js) and [models/Task.js](models/Task.js):

- **User:** `username`, `email`, `password`
- **Task:** `title`, `description`, `status`, `priority`, `dueDate`, `createdBy`

## Error Handling

- Standardized error responses with status codes and messages
- 404 handler for unknown routes
- Validation errors for input data

## Project Structure

```
.env
.gitignore
package.json
server.js
config/
  database.js
controllers/
  authController.js
  taskController.js
middleware/
  auth.js
  validation.js
models/
  Task.js
  User.js
routes/
  auth.js
  tasks.js
```

---