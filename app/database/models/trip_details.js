'use strict';
const {
  Model,
  STRING
} = require('sequelize');
const user_auth = require('./user_auth');
module.exports = (sequelize, DataTypes) => {
  class trip_details extends Model {
    static associate(models) {
        trip_details.belongsTo(models.user_auth,{foreignKey:'user_id'}),
        trip_details.belongsTo(models.trip_type,{foreignKey:'trip_type_id'}),
        trip_details.hasMany(models.trip_days,{foreignKey:'trip_id'}),
        trip_details.hasMany(models.trip_members,{foreignKey:'trip_id'}),
        trip_details.belongsTo(models.user_auth,{foreignKey:'deleted_by'})
      }
  }

  trip_details.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description:DataTypes.STRING,
    start_date:DataTypes.DATE,
    end_date:DataTypes.DATE,
    trip_type_id:DataTypes.INTEGER,
    cover_image:DataTypes.STRING,
    location:DataTypes.STRING,
    deleted_at:{        
     type: 'TIMESTAMP',
    defaultValue: new Date()},

    deleted_by:DataTypes.INTEGER,
  },
   {
    sequelize,
    modelName: 'trip_details',
  });
  return trip_details;
};
