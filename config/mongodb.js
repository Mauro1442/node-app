const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/dn2022", function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Connected with Mongo Db");
  }
});
module.exports = mongoose;
