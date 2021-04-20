// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
    
//      await queryInterface.createTable('tasks', { 
//       id: {
//         type: Sequelize.BIGINT,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//       },
//       uuid: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       task: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       description: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       status: {
//           type: Sequelize.STRING,
//           allowNull: false
//       },
//       created_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//         allowNull: false
//       },
//       completed_at: {
//         type: Sequelize.DATE
//       }
//     });
//   },

//   down: async (queryInterface, Sequelize) => {

//    await queryInterface.dropTable('tasks');
     
//   }
// };
