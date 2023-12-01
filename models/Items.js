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
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    // What other columns should an item have????
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "items",
  }
);
