import express from 'express';
import { PORT } from './config.js';
import { Book, books } from './models/bookModel.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import { swaggerUi,swaggerSpec } from './swagger.js';

const app = express();

// Swagger API Docs Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
  return response.status(200).send('Welcome To Book Store');
});

app.use('/books', booksRoute);

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
