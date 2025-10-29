const express = require('express');
const router = express.Router();
const { addBookToAuthor } = require('../controllers/book.controller');

router.post('/:authorId', addBookToAuthor);

module.exports = router;
