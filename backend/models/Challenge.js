const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index"); // Import sequelize instance

class Challenge extends Model {}

Challenge.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
    attempts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Challenge",
    tableName: "challenges",
    timestamps: true,
  }
);

module.exports = Challenge;
