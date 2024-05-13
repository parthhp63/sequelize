'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      await queryInterface.createTable('trip_type', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },{transaction:t});
    })
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      
      await queryInterface.dropTable('trip_type',{transaction:t,cascade:true}); 
    })

  }
};