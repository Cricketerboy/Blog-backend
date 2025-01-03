const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog', 'postgres', 'Kanpur@123', {
    host: 'localhost',
    dialect: 'postgres',
  });

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize; PORT=5000
