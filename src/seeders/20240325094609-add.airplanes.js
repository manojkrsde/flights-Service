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
        "name": "Boeing 747",
        "modelNumber": "747-8",
        "capacity": 467,
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Airbus A380",
        "modelNumber": "A380-800",
        "capacity": 555,
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Boeing 777",
        "modelNumber": "777-300ER",
        "capacity": 396,
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Airbus A350",
        "modelNumber": "A350-900",
        "capacity": 325,
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Boeing 737",
        "modelNumber": "737-800",
        "capacity": 189,
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Airbus A320",
        "modelNumber": "A320-200",
        "capacity": 186,
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Boeing 787",
        "modelNumber": "787-9",
        "capacity": 296,
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Embraer E190",
        "modelNumber": "E190",
        "capacity": 114,
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Bombardier CRJ",
        "modelNumber": "CRJ900",
        "capacity": 90,
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Sukhoi Superjet 100",
        "modelNumber": "SSJ100",
        "capacity": 108,
        "updatedAt": new Date(),
        "createdAt": new Date()
      }
    ]
      , {});

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
          { modelNumber: "747-8" },
          { modelNumber: "A380-800" },
          { modelNumber: "777-300ER" },
          { modelNumber: "A350-900" },
          { modelNumber: "737-800" },
          { modelNumber: "A320-200" },
          { modelNumber: "787-9" },
          { modelNumber: "E190" },
          { modelNumber: "CRJ900" },
          { modelNumber: "SSJ100" }
        ]
      }
    );


  }
};
