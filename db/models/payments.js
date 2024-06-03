'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payments.init({
    action_id: DataTypes.INTEGER,
    action_type: DataTypes.ENUM,
    transaction_id: DataTypes.STRING,
    date_of_payment: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'payments',
  });
  return payments;
};