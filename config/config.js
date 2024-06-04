require("dotenv").config({ path: `${process.cwd()}/.env` });

module.exports = {
  development: {
    username: "postgres",
    password: "sahil2002",
    database: "ticket_plus",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
