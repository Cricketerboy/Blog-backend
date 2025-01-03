const { Sequelize } = require('sequelize');
require('dotenv').config();

 // Optional environment variable to control SSL

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: 
          {   
              ssl: {
                  require: true, // Ensure SSL connection
                  rejectUnauthorized: false, // Avoid self-signed certificate errors
              },
          },
        logging: false,
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
