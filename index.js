// index.js
const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3010;

// Middleware
app.use(express.json());
app.use(express.static('static'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
const authorRoutes = require('./routes/author.routes');
const bookRoutes = require('./routes/book.routes');

app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);



// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
