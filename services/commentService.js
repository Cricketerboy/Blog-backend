const Comment = require('../models/comment');

const addComment = async (commentData) => {
  return await Comment.create(commentData);
};

const getCommentsByBlogId = async (blogId) => {
  return await Comment.findAll({ where: { blogId } });
};

module.exports = { addComment, getCommentsByBlogId };
