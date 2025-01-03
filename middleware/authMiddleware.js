const { verifyToken } = require('../utils/jwtUtils');

const authenticate = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Remove 'Bearer ' prefix
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied, token missing' });
  }

  try {
    const user = verifyToken(token);  // Assuming verifyToken verifies the JWT and returns user data
    req.user = user;  // Store user data in the request object
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = authenticate;
