"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EventPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EventPrice.belongsTo(models.Event, { foreignKey: "eventId" });
      EventPrice.belongsTo(models.Price, {foreignKey: "priceId"})
    }
  }
  EventPrice.init(
    {
      id: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      priceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "EventPrice",
    }
  );
  return EventPrice;
};
