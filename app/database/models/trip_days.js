'use strict';
const {
  Model,
  HasOne
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trip_days extends Model {
    static associate(models) {
        trip_days.belongsTo(models.trip_details,{foreignKey:'trip_id'}),
        trip_days.hasMany(models.trip_images,{foreignKey:'day_id'}),
        trip_days.belongsTo(models.user_auth,{foreignKey:'deleted_by'})

    }
  }

  trip_days.init({
    trip_id:DataTypes.INTEGER,
    discription: DataTypes.STRING,
    title: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longtitude: DataTypes.DOUBLE,
    location: DataTypes.STRING,
    dates: DataTypes.DATE,
    deleted_at:{        
        type: 'TIMESTAMP',},
    deleted_by: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'trip_days',
  },


);
  return trip_days;
};