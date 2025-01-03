const { Sequelize } = require('sequelize');
require('dotenv').config();

const useSSL = process.env.USE_SSL === 'true'; // Optional environment variable to control SSL

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: useSSL
        ? {
              ssl: {
                  require: true, // Ensure SSL connection
                  rejectUnauthorized: false, // Avoid self-signed certificate errors
              },
          }
        : {},
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully!');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
