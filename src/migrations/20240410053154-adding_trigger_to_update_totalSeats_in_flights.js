'use strict';


const triggerQuery = `

        CREATE TRIGGER update_totalSeats
        ON Flights
        AFTER INSERT
        AS
        BEGIN
            UPDATE Flights
            SET totalSeats = Airplanes.capacity
            FROM Flights
            INNER JOIN Airplanes ON Flights.AirplaneId = Airplanes.id
            INNER JOIN inserted ON Flights.id = inserted.id;
        END;

        ENABLE TRIGGER dbo.update_totalSeats
        ON dbo.flights;

      `

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.sequelize.query(triggerQuery);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS update_totalSeats;');

  }
};
