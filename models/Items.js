const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Items extends Model {}

Items.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    is_consumable: {
      // is_consumable will determine whether the item gets destroyed upon use
      // default value is true since most items will be 1 time use
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "items",
  }
);

module.exports = Items;
