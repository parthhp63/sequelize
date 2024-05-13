'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trip_type extends Model {

    static associate(models) {
        trip_type.hasMany(models.trip_details,{foreignKey:'trip_type_id'})
    }
  }
  trip_type.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'trip_type',
  });
  return trip_type;
};