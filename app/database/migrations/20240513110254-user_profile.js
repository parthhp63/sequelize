'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async t=>{
      await queryInterface.createTable('user_profile', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_id: {
          type: Sequelize.INTEGER
        },
        first_name: {
          type: Sequelize.STRING
        },      
        last_name: {
          type: Sequelize.STRING
        },
        username: {
          type: Sequelize.STRING 
        },
        user_bio: {
          type: Sequelize.STRING
        },
        user_dob: {
          type: Sequelize.DATE
        },
        city_id: {
          type: Sequelize.INTEGER
        },
        gender: {
          type: Sequelize.STRING
        },
        profile_image: {
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
  
      await queryInterface.addConstraint('user_profile',{
        fields:['user_id'],
        type:'foreign key',
        references:{
          table:'user_auths',
          field:'id',
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },{transaction:t});
  
      await queryInterface.addConstraint('user_profile',{
        fields:['city_id'],
        type:'foreign key',
        references:{
          table:'cities',
          field:'id',
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },{transaction:t});
    })
   
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.sequelize.transaction(async t=>{
          await queryInterface.dropTable('user_profile',{transaction:t,cascade:true}); 
    })
  }
};