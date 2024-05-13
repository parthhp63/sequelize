'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cities extends Model {
    static associate(models) {
        cities.belongsTo(models.state,{foreignKey:'state_id'},
        cities.belongsTo(models.country,{foreignKey:'country_id'}),
        )
    }
  }

  cities.init({
    name: DataTypes.STRING,
    state_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'cities',
  });
  return cities;
};