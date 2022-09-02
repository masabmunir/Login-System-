const mongoose = require('mongoose');
var validator = require('validator');


mongoose.connect("mongodb://localhost:27017/signup", { useNewUrlParser: true })
    .then(() => console.log("Connection Successfull......"))
    .catch((err) => console.log(err));

 module.exports = mongoose;   