// controllers/author.controller.js
const Author = require('../models/author.model');
const Book = require('../models/book.model');

// ✅ Retrieve all books for a particular author (arrow function version)
const getBooksByAuthor = async (req, res) => {
  try {
    const { authorId } = req.params;

    // Check if author exists
    const author = await Author.findById(authorId);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }

    // Fetch all books for that author (using reference)
    const books = await Book.find({ author: authorId }).select('title publishedYear');

    // Optionally, include author details
    res.status(200).json({
      author: {
        id: author._id,
        name: author.name,
        email: author.email
      },
      totalBooks: books.length,
      books
    });

  } catch (error) {
    console.error('Error fetching books for author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const addAuthor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const author = await Author.create({ name, email });
    res.status(201).json({
      message: 'Author created successfully',
      author,
    });
  } catch (error) {
    console.error('Error creating author:', error);
    res.status(500).json({ error: 'Error creating author' });
  }
}

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find().select('name email');
    res.status(200).json({
      totalAuthors: authors.length,
      authors
    });
  } catch (error) {
    console.error('Error fetching authors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = { getBooksByAuthor, addAuthor, getAuthors };
