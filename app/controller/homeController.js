const db=require("../database/models/index");

const homeController =()=>{
    return {
      async addtrip(req,res){
        console.log(db.sequelize);
        const data=await db.sequelize.models.user_auth.create({
          email:'sdfsd',password:'asdfs',start_date:'2024-04-06 11:11:00',end_date:'2024-04-06 11:11:00',trip_type_id:1,cover_image:'sdv',location:'casdc'
        })
        await data.save;
        res.json(data);
      }

      };
}

module.exports = homeController;