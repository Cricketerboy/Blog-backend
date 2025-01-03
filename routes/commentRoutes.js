const express = require('express');
const { addComment, getCommentsByBlogId } = require('../services/commentService');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  try {
    const comment = await addComment(req.body);
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const comments = await getCommentsByBlogId(req.query.post_id);
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
