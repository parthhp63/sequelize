'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_auth extends Model {
    static associate(models) {
      user_auth.hasOne(models.user_porfile,{foreignKey:'user_id'}),
      user_auth.hasMany(models.trip_details,{foreignKey:'user_id'}),
      user_auth.hasOne(models.trip_images,{foreignKey:'deleted_by'}),
      user_auth.hasOne(models.trip_events,{foreignKey:'created_by'}),
      user_auth.hasOne(models.trip_members,{foreignKey:'deleted_by'}),
      user_auth.hasOne(models.trip_members,{foreignKey:'user_id'})


    }
  }
  user_auth.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    status: DataTypes.STRING,
    activation_pin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_auth',
  });
  return user_auth;
};