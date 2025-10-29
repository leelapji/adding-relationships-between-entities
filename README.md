### 📁 Folder Structure

```
project-root/
├── models/
│   ├── user.model.js
│   ├── author.model.js       // optional
│   └── book.model.js         // optional
├── routes/
│   ├── user.routes.js
│   └── author.routes.js      // optional
├── controllers/
│   └── user.controller.js
├── config/
│   └── db.js
├── app.js
├── server.js
├── .env
└── package.json
```

### 📄 `models/user.model.js`

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', userSchema);
```

### 📄 `models/author.model.js` _(optional)_

```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: String,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Author', authorSchema);
```

### 📄 `models/book.model.js` _(optional)_

```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  publishedYear: Number
});

module.exports = mongoose.model('Book', bookSchema);
```

### 📄 `routes/user.routes.js`

```js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.registerUser);

module.exports = router;
```

### 📄 `controllers/user.controller.js`

```js
exports.registerUser = async (req, res) => {
  // Pseudocode for planning
  // 1. Validate request data
  // 2. Hash password (using bcrypt)
  // 3. Save user to database
  // 4. Return appropriate response
};
```

### 📄 `config/db.js`

```js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Connection error:', err.message);
  }
};

module.exports = connectDB;
```

### 📄 `app.js`

```js
const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
require('dotenv').config();

app.use(express.json());
app.use('/api/users', userRoutes);

module.exports = app;
```

### 📄 `server.js`

```js
const app = require('./app');
const connectDB = require('./config/db');

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 📄 `.env`

```env
MONGO_URI=mongodb://localhost:27017/myapp
```

### 📄 `package.json`

```json
{
  "name": "express-mongoose-boilerplate",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.6.1",
    "dotenv": "^16.4.1"
  }
}
```
