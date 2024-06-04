"use strict";
const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

const bookings = sequelize.define(
  "bookings",
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
    num_of_seats: {
      type: Sequelize.INTEGER,
    },
    subtotal: {
      type: Sequelize.INTEGER,
    },
    payment_status: {
      type: Sequelize.ENUM("PENDING", "CONFIRMED", "CANCELLED"),
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
    modelName: "bookings",
  }
);

bookings.belongsTo(sequelize.models.users, { foreignKey: "user_id" });
bookings.belongsTo(sequelize.models.events, { foreignKey: "event_id" });
module.exports = bookings