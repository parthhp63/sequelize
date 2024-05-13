'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('trip_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      day_id:{
        type:Sequelize.INTEGER
      },
      deleted_at:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
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

    await queryInterface.addConstraint('trip_images',{
      fields:['day_id'],
      type:'foreign key',
      references:{
        table:'trip_days',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    await queryInterface.addConstraint('trip_images',{
      fields:['deleted_by'],
      type:'foreign key',
      references:{
        table:'user_auths',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('trip_images'); 
  }
};
