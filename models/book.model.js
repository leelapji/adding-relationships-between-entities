const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  publishedYear: Number,
  author: { type: Schema.Types.ObjectId, ref: 'Author', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
