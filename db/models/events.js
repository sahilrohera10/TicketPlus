
"use strict";
const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

module.exports = sequelize.define(
   "events",
   {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    hosted_by: {
      type: Sequelize.INTEGER,
    },
    thumbnail_url: {
      type: Sequelize.STRING,
    },
    banner_url: {
      type: Sequelize.STRING,
    },
    ticket_price: {
      type: Sequelize.INTEGER,
    },
    tax_percet: {
      type: Sequelize.ENUM("2.5", "5", "9"),
    },
    capacity: {
      type: Sequelize.INTEGER,
    },
    is_taxable: {
      type: Sequelize.BOOLEAN,
    },
    max_tickets_available: {
      type: Sequelize.INTEGER,
    },
    genre: {
      type: Sequelize.ENUM(
        "Comedy",
        "Music",
        "Dance",
        "Gaming",
        "Theatre & Art",
        "Workshops",
        "Health & Wellness",
        "Kids",
        "Talks"
      ),
    },
    date_of_event: {
      type: Sequelize.DATE,
    },
    duration: {
      type: Sequelize.INTEGER,
    },
    time_of_event: {
      type: Sequelize.TIME,
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
    modelName: 'events',

  }
  
);