require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD_POSTGRES,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD_POSTGRES,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD_POSTGRES,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  },
};