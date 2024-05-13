'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      await queryInterface.createTable('user_logs', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_email: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },      
        islogged: {
          type: Sequelize.TINYINT
        },
        ipAddress: {
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
      
      await queryInterface.dropTable('user_logs',{transaction:t,cascade:true}); 
    })
  }
};