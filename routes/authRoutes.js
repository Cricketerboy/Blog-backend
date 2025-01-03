const express = require('express');
const { register, login, getUserById, updateUser, deleteUser  } = require('../services/authService');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = await register(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const token = await login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/users/:id', authenticate, async (req, res) => {
  try {
    const user = await getUserById(req.params.id);  // Use the imported getUserById
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/users/:id', authenticate, async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/users/:id', authenticate, async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
