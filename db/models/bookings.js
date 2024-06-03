"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bookings.init(
    {
      user_id: DataTypes.INTEGER,
      event_id: DataTypes.INTEGER,
      num_of_seats: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
      payment_status: DataTypes.ENUM,
    },
    {
      sequelize,
      modelName: "bookings",
    }
  );
  return bookings;
};
