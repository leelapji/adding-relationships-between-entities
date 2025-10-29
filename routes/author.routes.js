// routes/author.routes.js
const express = require('express');
const router = express.Router();
const { getBooksByAuthor } = require('../controllers/author.controller');

// GET all books for a specific author
router.get('/:authorId/books', getBooksByAuthor);

module.exports = router;
