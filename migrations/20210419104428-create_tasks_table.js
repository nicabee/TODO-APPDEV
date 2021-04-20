// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('tasks', { 
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
//       createdAt: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW,
//         allowNull: false
//       },
//       completedAt: {
//         type: Sequelize.DATE
//       }
//     });
//   },

//   down: async (queryInterface, Sequelize) => {

//     await queryInterface.dropTable('tasks');
//   }
// };
