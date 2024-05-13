'use strict';
const {
  Model,
  HasOne
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class state extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        state.belongsTo(models.country,{foreignKey:'country_id'}),
        state.hasMany(models.cities,{foreignKey:'state_id'})
    }
  }
  state.init({
    country_id:DataTypes.INTEGER,
    name: DataTypes.STRING,
    state_code: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longtitude: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'state',
  },


);
  return state;
};