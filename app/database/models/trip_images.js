'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trip_images extends Model {

    static associate(models) {
        trip_images.belongsTo(models.trip_days,{foreignKey:'day_id'}),
        trip_images.belongsTo(models.user_auth,{foreignKey:'deleted_by'})
 
    }
  }
  trip_images.init({
    image: DataTypes.STRING,
    day_id:DataTypes.INTEGER,
    delete_at:{        
        type: 'TIMESTAMP',
       defaultValue: new Date()},
   
       deleted_by:DataTypes.INTEGER,
       is_video:DataTypes.TINYINT,
  }, {
    sequelize,
    modelName: 'trip_images',
  });
  return trip_images;
};