'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      state_id: {
        type: Sequelize.INTEGER
      },      
      country_id: {
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.DOUBLE 
      },
      longtitude: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint('cities',{
      fields:['country_id'],
      type:'foreign key',
      references:{
        table:'country',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    await queryInterface.addConstraint('cities',{
      fields:['state_id'],
      type:'foreign key',
      references:{
        table:'state',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cities'); 
  }
};