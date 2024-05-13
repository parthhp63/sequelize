'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('trip_days', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trip_id: {
        type: Sequelize.INTEGER
      },
      discription: {
        type: Sequelize.STRING
      },      
      title: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.DOUBLE 
      },
      longtitude:{
        type:Sequelize.DOUBLE
      },
      location:{
        type:Sequelize.STRING
      },
      dates:{
        type:Sequelize.DATE
      },
      deleted_at:{
        type: 'TIMESTAMP'
      },
      deleted_by:{
        type:Sequelize.INTEGER
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


  await queryInterface.addConstraint('trip_days',{
    fields:['trip_id'],
    type:'foreign key',
    references:{
      table:'trip_details',
      field:'id',
    },
    onDelete:'cascade',
    onUpdate:'cascade'
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('trip_days'); 
  }
};
