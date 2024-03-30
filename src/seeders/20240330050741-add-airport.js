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
    await queryInterface.bulkInsert('Airports', [
      {
        name: "Indira Gandhi International Airport",
        code: "DEL",
        address: "New Delhi, Delhi",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        code: "BOM",
        address: "Mumbai, Maharashtra",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kempegowda International Airport",
        code: "BLR",
        address: "Bengaluru, Karnataka",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chaudhary Charan Singh International Airport",
        code: "LKO",
        address: "Lucknow, Uttar Pradesh",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chennai International Airport",
        code: "MAA",
        address: "Chennai, Tamil Nadu",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rajiv Gandhi International Airport",
        code: "HYD",
        address: "Hyderabad, Telangana",
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Netaji Subhas Chandra Bose International Airport",
        code: "CCU",
        address: "Kolkata, West Bengal",
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sardar Vallabhbhai Patel International Airport",
        code: "AMD",
        address: "Ahmedabad, Gujarat",
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pune Airport",
        code: "PNQ",
        address: "Pune, Maharashtra",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jaipur International Airport",
        code: "JAI",
        address: "Jaipur, Rajasthan",
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});


  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airports', {
      [Op.or]: [
        { code: "DEL" }, // Indira Gandhi International Airport
        { code: "BOM" }, // Chhatrapati Shivaji Maharaj International Airport
        { code: "BLR" }, // Kempegowda International Airport
        { code: "LKO" }, // Chaudhary Charan Singh International Airport
        { code: "MAA" }, // Chennai International Airport
        { code: "HYD" }, // Rajiv Gandhi International Airport
        { code: "CCU" }, // Netaji Subhas Chandra Bose International Airport
        { code: "AMD" }, // Sardar Vallabhbhai Patel International Airport
        { code: "PNQ" }, // Pune Airport
        { code: "JAI" }  // Jaipur International Airport
      ]
    });

  }
};
