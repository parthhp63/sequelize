'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      
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
      },{transaction:t});
                 
      await queryInterface.addConstraint('trip_members',{
        fields:['user_id'],
        type:'foreign key',
        name:'fk_1',
        references:{
          table:'user_auths',
          field:'id',
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },{transaction:t});
  
      await queryInterface.addConstraint('trip_members',{
        fields:['deleted_by'],
        type:'foreign key',
        name:'fk_2',
        references:{
          table:'user_auths',
          field:'id',
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },{transaction:t});
  
      await queryInterface.addConstraint('trip_members',{
        fields:['trip_id'],
        type:'foreign key',
        references:{
          table:'trip_details',
          field:'id',
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },{transaction:t});

      

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      await queryInterface.dropTable('trip_members',{transaction:t,cascade:true}); 
    })
  }
};