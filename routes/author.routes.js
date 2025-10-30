// routes/author.routes.js
const express = require('express');
const router = express.Router();
const { getBooksByAuthor, addAuthor, getAuthors } = require('../controllers/author.controller');

// GET all books for a specific author
router.get('/:authorId/books', getBooksByAuthor);
router.post('/',addAuthor)
router.get('/',getAuthors)

module.exports = router;
