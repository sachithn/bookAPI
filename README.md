# Book Store MERN stack project

---

## Setup and Run Instructions

Follow these steps to set up and run the project locally.

### Prerequisites

- Ensure you have Node.js (v16 or later) installed.
- Installed Node package manager.

### Step 1: Clone the Repository

### Step 2: Install Dependencies

- npm install

### Step 3: Run in development mode

go to backend folder and run command
- npm run dev

open onother terminal, go to frontend folder and run command
- npm run dev

### Running URLs

- Backend API URL: http://localhost:5555/
- Frontend URL: http://localhost:5173/
- Swagger API Documentation: http://localhost:5555/api-docs

### Testing with Postman

Manually Test Endpoints
- GET all books
Method: GET
URL: http://localhost:5555/books

- GET book by ID
Method: GET
URL: http://localhost:5555/books/{id}

- POST new book
Method: POST
URL: http://localhost:5555/books
PUT update book
Method: PUT
URL: http://localhost:5555/books/{id}
Body (JSON):
{
  "name": "Book Title",
  "author": "Author Name",
  "publishedYear": 2024
}

- PUT update book
Method: PUT
URL: http://localhost:5555/books/{id}
Body (JSON):
{
  "name": "Updated Title",
  "author": "Updated Author",
  "publishedYear": 2025
}

- DELETE book
Method: DELETE
URL: http://localhost:5555/books/{id}


## Features

- CRUD operations for books:
  - List all books
  - Get a book by ID
  - Add a new book
  - Update an existing book
  - Delete a book
- In-memory data storage
- Input validation and error handling
- CORS support for cross-origin requests
- Swagger API Documentation Provides interactive API exploration.

---

## Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building the API.
- **In-Memory Data Store**: Books are stored in an array (no database used).
- **CORS**: Middleware to enable cross-origin requests.

### In Forms
- all fields required
- published year need to be a number
