"use strict";

const challenges = require("./challenges.json");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("challenges", challenges, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("challenges", null, {});
  },
};
