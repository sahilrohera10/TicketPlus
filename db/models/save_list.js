"use strict";
const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

module.exports = sequelize.define(
  "save_lists",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    event_id: {
      type: Sequelize.INTEGER,
    },
    
  },
  {
    modelName: "save_lists",
  }
);

