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
    await queryInterface.bulkInsert('Flights', [

      {
        flightNumber: "UK-07-530",
        airplaneId: 1, // Sample airplane ID from the airplane table
        departureAirportId: 1, // Sample airport ID from the airport table
        arrivalAirportId: 3, // Sample airport ID from the airport table
        arrivalTime: "2024-04-01T12:00:00Z",
        departureTime: "2024-04-01T08:00:00Z",
        price: 5000, // Sample trip price
        createdAt: new Date(),
        updatedAt: new Date(),
        totalSeats: 467
      },
      {
        flightNumber: "UK-07-531",
        airplaneId: 2, // Sample airplane ID from the airplane table
        departureAirportId: 1, // Sample airport ID from the airport table
        arrivalAirportId: 2, // Sample airport ID from the airport table
        arrivalTime: "2024-04-02T14:30:00Z",
        departureTime: "2024-04-02T10:30:00Z",
        price: 3980, // Sample trip price
        createdAt: new Date(),
        updatedAt: new Date(),
        totalSeats: 555
      },
      {
        flightNumber: "UK-07-532",
        airplaneId: 3, // Sample airplane ID from the airplane table
        departureAirportId: 2, // Sample airport ID from the airport table
        arrivalAirportId: 4, // Sample airport ID from the airport table
        arrivalTime: "2024-04-03T18:45:00Z",
        departureTime: "2024-04-03T14:45:00Z",
        price: 5980, // Sample trip price
        createdAt: new Date(),
        updatedAt: new Date(),
        totalSeats: 396
      },
      {
        flightNumber: "UK-07-533",
        airplaneId: 4, // Sample airplane ID from the airplane table
        departureAirportId: 3, // Sample airport ID from the airport table
        arrivalAirportId: 5, // Sample airport ID from the airport table
        arrivalTime: "2024-04-04T22:00:00Z",
        departureTime: "2024-04-04T18:00:00Z",
        price: 2980, // Sample trip price
        createdAt: new Date(),
        updatedAt: new Date(),
        totalSeats: 325
      },
      {
        flightNumber: "UK-07-534",
        airplaneId: 5, // Sample airplane ID from the airplane table
        departureAirportId: 4, // Sample airport ID from the airport table
        arrivalAirportId: 6, // Sample airport ID from the airport table
        arrivalTime: "2024-04-05T10:30:00Z",
        departureTime: "2024-04-05T06:30:00Z",
        price: 3780, // Sample trip price
        createdAt: new Date(),
        updatedAt: new Date(),
        totalSeats: 189
      },
      {
        flightNumber: "UK-07-535",
        airplaneId: 6, // Sample airplane ID from the airplane table
        departureAirportId: 5, // Sample airport ID from the airport table
        arrivalAirportId: 7, // Sample airport ID from the airport table
        arrivalTime: "2024-04-06T15:45:00Z",
        departureTime: "2024-04-06T11:45:00Z",
        price: 4380, // Sample trip price
        createdAt: new Date(),
        updatedAt: new Date(),
        totalSeats: 186
      },
      {
        flightNumber: "UK-07-536",
        airplaneId: 7, // Sample airplane ID from the airplane table
        departureAirportId: 6, // Sample airport ID from the airport table
        arrivalAirportId: 8, // Sample airport ID from the airport table
        arrivalTime: "2024-04-07T20:00:00Z",
        departureTime: "2024-04-07T16:00:00Z",
        price: 3580, // Sample trip price
        createdAt: new Date(),
        updatedAt: new Date(),
        totalSeats: 296
      },
      {
        flightNumber: "UK-07-537",
        airplaneId: 8, // Sample airplane ID from the airplane table
        departureAirportId: 7, // Sample airport ID from the airport table
        arrivalAirportId: 9, // Sample airport ID from the airport table
        arrivalTime: "2024-04-08T08:30:00Z",
        departureTime: "2024-04-08T04:30:00Z",
        price: 5380, // Sample trip price
        createdAt: new Date(),
        updatedAt: new Date(),
        totalSeats: 114
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

    await queryInterface.bulkDelete('Flights', {
      [Op.or]: [
        { flightNumber: "UK-07-530" },
        { flightNumber: "UK-07-531" },
        { flightNumber: "UK-07-532" },
        { flightNumber: "UK-07-533" },
        { flightNumber: "UK-07-534" },
        { flightNumber: "UK-07-535" },
        { flightNumber: "UK-07-536" },
        { flightNumber: "UK-07-537" }
      ]
    });
  }
};
