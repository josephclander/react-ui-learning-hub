const express = require("express");
const sequelize = require("./models/index");
const Challenge = require("./models/Challenge");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

sequelize
  .sync()
  .then(() => console.log("Drop and re-sync db."))
  .catch((error) => console.error("Error syncing database:", error));

const PORT = process.env.PORT || 3001;

app.get("/challenges", async (req, res) => {
  try {
    const challenges = await Challenge.findAll({ order: [["id", "ASC"]] });
    if (!challenges || challenges.length === 0) {
      return res.status(404).send("No challenges found");
    }
    res.send(challenges);
  } catch (error) {
    console.error("Error fetching challenges");
    res.status(500).send("An error occured while fetching the challenges");
  }
});

// get challenge
app.get("/challenges/:id", async (req, res) => {
  const challengeId = parseInt(req.params.id);

  try {
    const challenge = await Challenge.findByPk(challengeId);
    if (!challenge) {
      // Use return here to stop further execution and send a response
      return res.status(404).send("That challenge cannot be found");
    }
    res.send(challenge);
  } catch (error) {
    // Handle unexpected errors, such as database issues
    console.error("Error fetching challenge:", error);
    res.status(500).send("An error occurred while fetching the challenge");
  }
});

// update challenge attempts by one
app.put("/challenges/:id/increment", async (req, res) => {
  const challengeId = parseInt(req.params.id);

  try {
    const response = await Challenge.increment(
      { attempts: 1 },
      {
        where: {
          id: challengeId,
        },
      }
    );
    const challenge = response[0][0][0];
    if (!challenge || challenge.length === 0) {
      return res.status(404).send("That challenge cannot be found");
    }
    res.send(challenge);
  } catch (error) {
    console.error("Error incrementing challenge:", error);
    res.status(500).send("An error occurend while incrementing the challenge");
  }
});

// decrease challenge attempts by one
app.put("/challenges/:id/decrement", async (req, res) => {
  const challengeId = parseInt(req.params.id);

  try {
    const response = await Challenge.decrement(
      { attempts: 1 },
      {
        where: {
          id: challengeId,
        },
      }
    );
    const challenge = response[0][0][0];
    if (!challenge || challenge.length === 0) {
      return res.status(404).send("That challenge cannot be found");
    }
    res.send(challenge);
  } catch (error) {
    console.error("Error decrementing challenge:", error);
    res.status(500).send("An error occurend while decrementing the challenge");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
