const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const port = process.env.PORT || 8800;

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
  () => {
    console.log('Connected to MongoDB');
  });// Connect to MongoDB

// middlware
app.use(express.json());
app.use(helmet());
// app.use(morgan('dev'));
app.use(morgan('common'));

// routes
// app.get('/', (req, res) => {
//   res.send('MERNlama');
// });                 // GET /

app.use('/api/auth', authRouter); // GET /api/auth
app.use('/api/users', usersRouter); // GET /api/users
app.use('/api/posts', postsRouter); // GET /api/posts

app.listen(port, () => {
  console.log('Server is running on port:', port);
});