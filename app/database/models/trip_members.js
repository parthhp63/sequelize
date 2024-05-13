'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trip_members extends Model {

    static associate(models) {
        trip_members.belongsTo(models.trip_details,{foreignKey:'trip_id'}),
        trip_members.belongsTo(models.user_auth,{foreignKey:'user_id'}),
        trip_members.belongsTo(models.user_auth,{foreignKey:'deleted_by'})

 
    }
  }

  trip_members.init({
    trip_id:DataTypes.INTEGER,
    user_id:DataTypes.INTEGER,
    delete_at:{        
        type: 'TIMESTAMP',
       },
       deleted_by:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'trip_members',
  });
  return trip_members;
};