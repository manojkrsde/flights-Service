'use strict';

const { Enums } = require('../utils/common');
const { BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS } = Enums.SEAT_TYPE;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    /**
     * Foreign Key:
     */
    await queryInterface.addConstraint('Seats', {
      type: 'FOREIGN KEY',
      name: 'FK_Seats_airplaneId',
      fields: ['airplaneId'],
      references: {
        table: 'Airplanes',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });


    /**
     * Adding Check Constraint to achieve ENUM like property
     */
    await queryInterface.addConstraint('Seats', {
      name: 'CK_Seats_seatType',
      fields: ['type'],
      type: 'check',
      where: {
        type: [BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS]
      }
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */


    await queryInterface.removeConstraint('FK_Seats_airplaneId');
    await queryInterface.removeConstraint('CK_Seats_seatType');
  }
};
