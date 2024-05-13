const web = require("express").Router();
const homeController=require("../app/controller/homeController");
// const seeders=require("../app/database/seeders");

// web.get("/",homeController().homeScreen);
// web.post("/adduser",homeController().addUser);
// web.get("/addtrip",homeController().addtrip);

module.exports=web;