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
        name: 'Delhi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mumbai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bengaluru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chennai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lucknow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hyderabad',
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
    await queryInterface.bulkDelete('Cities', {
      [Op.or]: [
        { name: 'Delhi' },
        { name: 'Mumbai' },
        { name: 'Bengaluru' },
        { name: 'Lucknow' },
        { name: 'Chennai' },
        { name: 'Hyderabad' }
      ]
    });

  }
};
