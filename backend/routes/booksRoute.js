import express from 'express';
import { Book, books } from '../models/bookModel.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - publishYear
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the book
 *         title:
 *           type: string
 *           description: Title of the book
 *         author:
 *           type: string
 *           description: Author of the book
 *         publishYear:
 *           type: integer
 *           description: Year the book was published
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Save a new book
 *     description: Creates a new book entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Missing required fields
 */
router.post('/', (request, response) => {
  try {
    if (!request.body.title || !request.body.author || !request.body.publishYear) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const newBook = new Book(
      books.length + 1, // Auto-generate ID
      request.body.title,
      request.body.author,
      request.body.publishYear
    );

    books.push(newBook);

    return response.status(201).send(newBook);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books
 *     responses:
 *       200:
 *         description: List of books returned successfully
 */
router.get('/', (request, response) => {
  try {
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve details of a specific book by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the book
 *     responses:
 *       200:
 *         description: Book details returned successfully
 *       404:
 *         description: Book not found
 */
router.get('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const book = books.find((b) => b.id == id);

    if (!book) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book
 *     description: Modify the details of an existing book
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the book to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Missing required fields
 *       404:
 *         description: Book not found
 */
router.put('/:id', (request, response) => {
  try {
    if (!request.body.title || !request.body.author || !request.body.publishYear) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;
    const bookIndex = books.findIndex((b) => b.id == id);

    if (bookIndex === -1) {
      return response.status(404).json({ message: 'Book not found' });
    }

    books[bookIndex] = {
      id: Number(id),
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Remove a book from the collection
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the book to delete
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const bookIndex = books.findIndex((b) => b.id == id);

    if (bookIndex === -1) {
      return response.status(404).json({ message: 'Book not found' });
    }

    books.splice(bookIndex, 1);

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
