'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  events.init({
    title: DataTypes.STRING,
    hosted_by: DataTypes.INTEGER,
    thumbnail_url: DataTypes.STRING,
    banner_url: DataTypes.STRING,
    ticket_price: DataTypes.INTEGER,
    tax_percet: DataTypes.ENUM,
    capacity: DataTypes.INTEGER,
    is_taxable: DataTypes.BOOLEAN,
    max_tickets_available: DataTypes.INTEGER,
    genre: DataTypes.ENUM,
    date_of_event: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    time_of_event: DataTypes.TIME,
    payment_status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};