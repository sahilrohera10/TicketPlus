require("dotenv").config({ path: `${process.cwd()}/.env` });

module.exports = {
  development: {
    username: "ticket_plus_db_user",
    password: "Uavn58Ei58Tsux1pjIaaxO1dZrZXaSOz",
    database: "ticket_plus_db",
    host: "dpg-cpfvq3779t8c73eapsfg-a.singapore-postgres.render.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
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
