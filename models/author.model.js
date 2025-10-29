const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema);
