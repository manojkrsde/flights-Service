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

    await queryInterface.bulkInsert('Cities', [
      {
        "name": "Delhi",
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Mumbai",
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Bengaluru",
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Lucknow",
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Chennai",
        "updatedAt": new Date(),
        "createdAt": new Date()
      },

      {
        "name": "Hyderabad",
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Kolkata",
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Ahmedabad",
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Pune",
        "updatedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "name": "Jaipur",
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
    await queryInterface.bulkDelete('Cities', {
      [Op.or]: [
        { name: 'Delhi' },
        { name: 'Mumbai' },
        { name: 'Bengaluru' },
        { name: 'Lucknow' },
        { name: 'Chennai' },
        { name: 'Hyderabad' },
        { name: 'Kolkata' },
        { name: 'Ahmedabad' },
        { name: 'Pune' },
        { name: 'Jaipur' }
      ]
    });
  }
};
