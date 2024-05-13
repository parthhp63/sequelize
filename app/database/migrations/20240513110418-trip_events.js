'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      await queryInterface.createTable('trip_events', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        image: {
          type: Sequelize.STRING
        },
        trip_id:{
          type:Sequelize.INTEGER
        },
        title:{
          type:Sequelize.STRING
        },
        description:{
          type:Sequelize.STRING
        },
        image:{
          type:Sequelize.STRING
        },
        start_time:{
          type:Sequelize.DATE
        },
        end_time:{
          type:Sequelize.DATE
        },
        created_by:{
          type:Sequelize.INTEGER
        },
        deleted_at:{
          type: 'TIMESTAMP',
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
  
      await queryInterface.addConstraint('trip_events',{
        fields:['trip_id'],
        type:'foreign key',
        references:{
          table:'trip_details',
          field:'id',
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },{transaction:t});
  
      await queryInterface.addConstraint('trip_events',{
        fields:['created_by'],
        type:'foreign key',
        references:{
          table:'user_auths',
          field:'id',
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },{transaction:t});
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      
      await queryInterface.dropTable('trip_events',{transaction:t,cascade:true}); 
    })
  }
};