"use strict";
const { Model, Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

module.exports = sequelize.define(
  "payments",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    action_id: {
      type: Sequelize.INTEGER,
    },
    action_type: {
      type: Sequelize.ENUM("Booking", "Event"),
    },
    transaction_id: {
      type: Sequelize.STRING,
    },
    date_of_payment: {
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  {
    modelName: "payments",
  }
);
