const Book = require('../models/book.model');
const Author = require('../models/author.model');

exports.addBookToAuthor = async (req, res) => {
  try {
    const { authorId } = req.params;
    const { title, publishedYear } = req.body;

    const author = await Author.findById(authorId);
    if (!author) return res.status(404).json({ error: 'Author not found' });

    const book = await Book.create({ title, publishedYear, author: authorId });

    author.books.push(book._id);
    await author.save();

    res.status(201).json({ message: 'Book added successfully', book });
  } catch (error) {
    res.status(500).json({ error: 'Error adding book' });
  }
};
