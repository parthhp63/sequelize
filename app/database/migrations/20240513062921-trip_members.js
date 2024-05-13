'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('trip_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trip_id: {
        type: Sequelize.INTEGER
      },
      user_id:{
        type:Sequelize.INTEGER
      },
      deleted_at:{
        type: 'TIMESTAMP',
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
               
    await queryInterface.addConstraint('trip_members',{
      fields:['user_id'],
      type:'foreign key',
      name:'fk1',
      references:{
        table:'user_auths',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    await queryInterface.addConstraint('trip_members',{
      fields:['deleted_by'],
      type:'foreign key',
      name:'fk2',
      references:{
        table:'user_auths',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    await queryInterface.addConstraint('trip_members',{
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
    await queryInterface.dropTable('trip_members'); 
  }
};
