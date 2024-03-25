'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: "Airbus380",
        capacity: 580,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        modelNumber: "Boeing577",
        capacity: 720,
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      'Airplanes',
      {
        [Op.or]: [
          { modelNumber: "Airbus380" },
          { modelNumber: "Boeing577" }
        ]
      }
    );

  }
};
