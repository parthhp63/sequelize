'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      await queryInterface.createTable('country', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        phone_code: {
          type: Sequelize.STRING
        },
        capital: {
          type: Sequelize.STRING
        },
        currency: {
          type: Sequelize.STRING
        },
        timezone: {
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
      
      await queryInterface.dropTable('country',{transaction:t, cascade:true}); 
    })
  }
};