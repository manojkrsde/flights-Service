'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Flights', {
      name: 'FK_Flights_airplaneId',
      type: 'FOREIGN KEY',
      fields: ['airplaneId'],
      references: {
        table: 'Airplanes',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('Flights', {
      name: 'FK_Flights_departureAirportId',
      type: 'FOREIGN KEY',
      fields: ['departureAirportId'],
      references: {
        table: 'Airports',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });



  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeConstraint('FK_Flights_airplaneId');

    await queryInterface.removeConstraint('FK_Flights_departureAirportId');

  }
};
