const express = require("express");
const app = express();
const web = require("./routes/web");
const port = app.listen(3009);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// const index=require("./app/database/models/index");

app.set("view engine", "ejs");
app.use("/", web);