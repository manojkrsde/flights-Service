'use strict';

const { sequelize } = require('../models');
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // Add Foreign Key: Flights(arrivalAirportId) -> Airports(id)
    await sequelize.query(`
      ALTER TABLE Flights
      ADD CONSTRAINT FK_Flights_arrivalAirportId
      FOREIGN KEY (arrivalAirportId)
      REFERENCES Airports(id)
      ON UPDATE CASCADE
      ON DELETE CASCADE;
    `);

  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await sequelize.query(`
      ALTER TABLE Flights
      DROP CONSTRAINT FK_Flights_arrivalAirportId;
    `);
  }
};
