const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes with middleware
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
  res.send('We are on home');
});

// Connect to db
//mongoose.set('useUnifiedTopology', true);
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log('Connected to DB!');
  }
);

// Listen to the server
app.listen(3000);
