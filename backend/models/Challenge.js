const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index"); // Import sequelize instance

class Challenge extends Model {}

Challenge.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize, // passing the `sequelize` instance is necessary
    modelName: "Challenge", // Specify model name
    tableName: "challenges",
  }
);

module.exports = Challenge;
