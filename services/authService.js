const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { generateToken } = require('../utils/jwtUtils');

const register = async (userData) => {
  const { username, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });
  return user;
};

const login = async (credentials) => {
  const { email, password } = credentials;
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  return generateToken(user);
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const updateUser = async (id, updatedData) => {
  const user = await User.findByPk(id);
  return user.update(updatedData);
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  return user.destroy();
};

module.exports = { register, login, getUserById, updateUser, deleteUser };
