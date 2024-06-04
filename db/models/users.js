"use strict";
const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

module.exports = sequelize.define(
  "users",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    longitude: {
      type: Sequelize.FLOAT,
    },
    lattitude: {
      type: Sequelize.FLOAT,
    },
    city: {
      type: Sequelize.STRING,
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
    modelName: "users",
  }
);

