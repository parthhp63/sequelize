'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      await queryInterface 
    await queryInterface.createTable('user_auths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      salt: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      activation_pin: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      
      await queryInterface.dropTable('user_auths',{transaction:t,cascade:true});
    })
  }
};