const { Sequelize } = require("sequelize");

// Configuration should ideally be imported here, not from JSON directly.
const sequelize = new Sequelize(
  "postgres://josephlander@localhost:5432/rmc_db"
);

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => console.error("Unable to connect to the database:", error));

module.exports = sequelize;
