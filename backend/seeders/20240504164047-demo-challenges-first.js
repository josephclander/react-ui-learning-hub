"use strict";

const challenges = require("./challenges.json");

// Add timestamps to each challenge
const challengesWithTimestamps = challenges.map((challenge) => ({
  ...challenge,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("challenges", challengesWithTimestamps, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("challenges", null, {});
  },
};
