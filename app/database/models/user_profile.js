'use strict';
const {
  Model
} = require('sequelize');
const user_auth = require('./user_auth');
module.exports = (sequelize, DataTypes) => {
  class user_profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_profile.belongsTo(models.user_auth,{foreignKey:'user_id'}),
      user_profile.belongsTo(models.cities,{foreignKey:'city_id'})
    }
  }
  user_profile.init({
    user_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    user_bio: DataTypes.STRING,
    user_dob: DataTypes.DATE,
    city_id:DataTypes.INTEGER,
    gender:DataTypes.STRING,
    profile_image:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user_profile',
  });
  return user_profile;
};