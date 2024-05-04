const express = require("express");
const sequelize = require("./models/index");
const Challenge = require("./models/Challenge");

const app = express();
app.use(express.json());

sequelize
  .sync()
  .then(() => console.log("Drop and re-sync db."))
  .catch((error) => console.error("Error syncing database:", error));

const PORT = process.env.PORT || 3001;

app.put("/challenge/:id", async (req, res) => {
  const challengeId = parseInt(req.params.id);
  const attempts = req.body.attempts;
  // get challenge by id
  const challenge = await Challenge.findByPk(challengeId);
  console.log(challenge);
  // create new object with updated value for attempts
  // save the challenge to update the database
  // return success message?
  // expect the front end to update the info locally in state
  // when return to the index page, the data is up to date?

  res.send(challenge);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
