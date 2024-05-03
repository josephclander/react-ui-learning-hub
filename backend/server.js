const express = require("express");
const sequelize = require("./models/index");

const app = express();
app.use(express.json());

sequelize
  .sync({ force: true })
  .then(() => console.log("Drop and re-sync db."))
  .catch((error) => console.error("Error syncing database:", error));

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello from the backend.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
