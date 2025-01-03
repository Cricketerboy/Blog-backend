const Blog = require('../models/blog');
const { Op } = require('sequelize');

const createBlog = async (blogData) => {
  return await Blog.create(blogData);
};

const getAllBlogs = async (page = 1, limit = 10) => {
  return await Blog.findAndCountAll({
    limit,
    offset: (page - 1) * limit,
  });
};

const getBlogById = async (id) => {
  return await Blog.findByPk(id);
};

const updateBlog = async (id, blogData) => {
  const blog = await Blog.findByPk(id);
  return blog.update(blogData);
};

const deleteBlog = async (id) => {
  const blog = await Blog.findByPk(id);
  return blog.destroy();
};

module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
