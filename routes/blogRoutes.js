const express = require('express');
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../services/blogService');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  try {
    const blog = await createBlog(req.body);
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  const { page, limit } = req.query;
  try {
    const blogs = await getAllBlogs(page, limit);
    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blog = await getBlogById(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', authenticate, async (req, res) => {
  try {
    const blog = await updateBlog(req.params.id, req.body);
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  try {
    await deleteBlog(req.params.id);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
