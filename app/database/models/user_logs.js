'use strict';
const {
  Model,
  STRING
} = require('sequelize');
const user_logs = require('./user_auth');
module.exports = (sequelize, DataTypes) => {
  class user_logs extends Model {
  }

  user_logs.init({
    user_email: DataTypes.STRING,
    password: DataTypes.STRING,
    islogged:DataTypes.TINYINT,
    ipAddress:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_logs',
  });
  return user_logs;
};