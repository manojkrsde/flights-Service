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
    await queryInterface.bulkInsert('Seats', [

      /**
       * Airplane 1 : 
       */

      /**
       * Row 1
       */
      { airplaneId: 1, row: 1, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 1, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 1, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 1, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 1, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 1, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Row 2
       */
      { airplaneId: 1, row: 2, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 2, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 2, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 2, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 2, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 2, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Row 3
       */
      { airplaneId: 1, row: 3, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 3, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 3, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 3, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 3, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 3, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 4
       */
      { airplaneId: 1, row: 4, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 4, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 4, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 4, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 4, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 4, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 5
       */
      { airplaneId: 1, row: 5, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 5, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 5, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 5, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 5, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 1, row: 5, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Airplane 2 :
      */

      /**
       * Row 1
       */
      { airplaneId: 2, row: 1, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 1, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 1, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 1, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 1, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 1, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Row 2
       */
      { airplaneId: 2, row: 2, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 2, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 2, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 2, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 2, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 2, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Row 3
       */
      { airplaneId: 2, row: 3, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 3, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 3, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 3, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 3, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 3, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 4
       */
      { airplaneId: 2, row: 4, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 4, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 4, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 4, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 4, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 4, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 5
       */
      { airplaneId: 2, row: 5, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 5, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 5, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 5, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 5, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 2, row: 5, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Airpalne 3: 
       */

      /**
 * Row 1
 */
      { airplaneId: 3, row: 1, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 1, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 1, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 1, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 1, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 1, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Row 2
       */
      { airplaneId: 3, row: 2, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 2, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 2, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 2, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 2, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 2, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Row 3
       */
      { airplaneId: 3, row: 3, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 3, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 3, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 3, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 3, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 3, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 4
       */
      { airplaneId: 3, row: 4, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 4, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 4, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 4, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 4, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 4, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 5
       */
      { airplaneId: 3, row: 5, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 5, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 5, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 5, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 5, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 3, row: 5, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Airplane 4 :
       *
       */

      /**
 * Row 1
 */
      { airplaneId: 4, row: 1, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 1, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 1, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 1, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 1, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 1, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Row 2
       */
      { airplaneId: 4, row: 2, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 2, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 2, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 2, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 2, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 2, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Row 3
       */
      { airplaneId: 4, row: 3, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 3, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 3, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 3, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 3, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 3, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 4
       */
      { airplaneId: 4, row: 4, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 4, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 4, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 4, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 4, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 4, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 5
       */
      { airplaneId: 4, row: 5, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 5, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 5, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 5, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 5, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 4, row: 5, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Airplane 5
       */

      /**
       * Row 1
       */
      { airplaneId: 5, row: 1, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 1, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 1, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 1, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 1, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 1, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Row 2
       */
      { airplaneId: 5, row: 2, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 2, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 2, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 2, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 2, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 2, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Row 3
       */
      { airplaneId: 5, row: 3, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 3, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 3, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 3, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 3, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 3, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 4
       */
      { airplaneId: 5, row: 4, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 4, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 4, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 4, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 4, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 4, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 5
       */
      { airplaneId: 5, row: 5, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 5, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 5, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 5, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 5, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 5, row: 5, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Airplane 6:
       * 
       */

      /**
       * Row 1
       */
      { airplaneId: 6, row: 1, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 1, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 1, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 1, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 1, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 1, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Row 2
       */
      { airplaneId: 6, row: 2, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 2, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 2, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 2, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 2, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 2, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Row 3
       */
      { airplaneId: 6, row: 3, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 3, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 3, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 3, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 3, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 3, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 4
       */
      { airplaneId: 6, row: 4, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 4, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 4, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 4, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 4, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 4, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 5
       */
      { airplaneId: 6, row: 5, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 5, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 5, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 5, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 5, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 6, row: 5, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Airplane 7:
       */

      /**
       * Row 1
       */
      { airplaneId: 7, row: 1, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 1, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 1, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 1, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 1, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 1, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Row 2
       */
      { airplaneId: 7, row: 2, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 2, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 2, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 2, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 2, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 2, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Row 3
       */
      { airplaneId: 7, row: 3, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 3, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 3, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 3, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 3, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 3, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 4
       */
      { airplaneId: 7, row: 4, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 4, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 4, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 4, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 4, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 4, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 5
       */
      { airplaneId: 7, row: 5, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 5, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 5, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 5, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 5, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 7, row: 5, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Airplane 8
       */

      /**
       * Row 1
       */
      { airplaneId: 8, row: 1, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 1, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 1, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 1, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 1, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 1, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Row 2
       */
      { airplaneId: 8, row: 2, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 2, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 2, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 2, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 2, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 2, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Row 3
       */
      { airplaneId: 8, row: 3, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 3, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 3, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 3, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 3, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 3, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 4
       */
      { airplaneId: 8, row: 4, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 4, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 4, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 4, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 4, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 4, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 5
       */
      { airplaneId: 8, row: 5, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 5, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 5, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 5, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 5, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 8, row: 5, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Airplane 9 :
       */

      /**
       * Row 1
       */
      { airplaneId: 9, row: 1, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 1, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 1, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 1, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 1, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 1, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Row 2
       */
      { airplaneId: 9, row: 2, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 2, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 2, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 2, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 2, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 2, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Row 3
       */
      { airplaneId: 9, row: 3, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 3, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 3, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 3, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 3, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 3, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 4
       */
      { airplaneId: 9, row: 4, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 4, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 4, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 4, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 4, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 4, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 5
       */
      { airplaneId: 9, row: 5, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 5, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 5, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 5, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 5, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 9, row: 5, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Airplane 10
       */

      /**
       * Row 1
       */
      { airplaneId: 10, row: 1, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 1, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 1, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 1, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 1, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 1, col: 'F', updatedAt: new Date(), createdAt: new Date() },

      /**
       * Row 2
       */
      { airplaneId: 10, row: 2, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 2, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 2, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 2, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 2, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 2, col: 'F', updatedAt: new Date(), createdAt: new Date() },


      /**
       * Row 3
       */
      { airplaneId: 10, row: 3, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 3, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 3, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 3, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 3, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 3, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 4
       */
      { airplaneId: 10, row: 4, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 4, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 4, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 4, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 4, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 4, col: 'F', updatedAt: new Date(), createdAt: new Date() },



      /**
       * Row 5
       */
      { airplaneId: 10, row: 5, col: 'A', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 5, col: 'B', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 5, col: 'C', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 5, col: 'D', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 5, col: 'E', updatedAt: new Date(), createdAt: new Date() },
      { airplaneId: 10, row: 5, col: 'F', updatedAt: new Date(), createdAt: new Date() },


    ]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Seats', {
      [Op.or]: [
        { airplaneId: { [Op.between]: [1, 10] } }
      ]
    });
  }
};
