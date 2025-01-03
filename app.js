const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const commentRoutes = require('./routes/commentRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);
app.use('/comments', commentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
