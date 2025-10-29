// controllers/author.controller.js
const Author = require('../models/author.model');
const Book = require('../models/book.model');

// ✅ Retrieve all books for a particular author
exports.getBooksByAuthor = async (req, res) => {
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
