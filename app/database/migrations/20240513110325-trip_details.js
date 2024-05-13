'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      await queryInterface.createTable('trip_details', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_id: {
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },      
        description: {
          type: Sequelize.STRING
        },
        start_date: {
          type: Sequelize.DATE 
        },
        end_date:{
          type:Sequelize.DATE
        },
        trip_type_id:{
          type:Sequelize.INTEGER
        },
        cover_image:{
          type:Sequelize.STRING
        },
        location:{
          type:Sequelize.STRING
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
      },{transaction:t});
  
      await queryInterface.addConstraint('trip_details',{
        fields:['user_id'],
        type:'foreign key',
        name:'fk1',
        references:{
          table:'user_auths',
          field:'id',
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },{transaction:t});
  
      await queryInterface.addConstraint('trip_details',{
        fields:['deleted_by'],
        type:'foreign key',
        name:'fk2',
        references:{
          table:'user_auths',
          field:'id',
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },{transaction:t});
  
      await queryInterface.addConstraint('trip_details',{
        fields:['trip_type_id'],
        type:'foreign key',
        references:{
          table:'trip_type',
          field:'id',
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },{transaction:t});
    })
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      console.log("trip_details down fn");
      await queryInterface.dropTable('trip_details',{transaction:t,cascade:true}); 
    })
  }
};