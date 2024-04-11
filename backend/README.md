# BACKEND

## Description

This is the backend of the project. It is a REST API that provides the data for the frontend.
The data is stored in a MongoDB database. The backend is built using Node.js, Express, and Mongoose.

## Discribing the model structure

The backend has two models: Card and eventually users. The Card model has the following fields:

- name: The name of the card owner (eventually)
- title: The title of the card owner
- email: The email of the card owner (eventually)
- description: A description of the card owner

## Endpoints

The backend has the following endpoints:

- GET /api/card: Get all cards
- POST /api/card: Create a new card
- GET /api/card/:id: Get a card by id
- PUT /api/card/:id: Update a card by id
- DELETE /api/card/:id: Delete a card by id

## NOTE

- We don't need No, you don't need to use `app.use(express.static(path.join(__dirname, "build")))` in the backend because the frontend is a separate project. The frontend is built using Vite, and the build files are served by Vite's development server.

- Also you don't need to use `app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "build", "index.html")) })` in the backend because the frontend is a separate project. The frontend is built using Vite, and the build files are served by Vite's development server.

- No controllers have been add everything is built into the routes.

- DON'T FORGET TO ADD YOUR MONGODB URI IN THE `.env`
