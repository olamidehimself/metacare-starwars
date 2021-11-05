const {Sequelize} = require('moment');
const DB_HOST = process.env.DB_HOST
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USERNAME = process.env.DB_USERNAME
const DB_PORT = process.env.DB_PORT
const DB_DATABASE = process.env.DB_DATABASE

const connectDB = async () => {
    const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOST,
        dialect: 'mysql'
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;