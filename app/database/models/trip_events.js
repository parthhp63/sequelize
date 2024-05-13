'use strict';
const {
  Model,
  STRING
} = require('sequelize');
const user_auth = require('./user_auth');
module.exports = (sequelize, DataTypes) => {
  class trip_events extends Model {
    static associate(models) {
        trip_events.belongsTo(models.trip_details,{foreignKey:'trip_id'}),
        trip_events.belongsTo(models.user_auth,{foreignKey:'created_by'})
      }
  }
  trip_events.init({
    trip_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description:DataTypes.STRING,
    image:DataTypes.STRING,
    start_time:DataTypes.DATE,
    end_time:DataTypes.DATE,
    created_by:DataTypes.INTEGER,
    deleted_at:{        
     type: 'TIMESTAMP',
    defaultValue: new Date()},
  },
   {
    sequelize,
    modelName: 'trip_events',
  });
  return trip_events;
};
