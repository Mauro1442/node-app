const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
  password: {
    type: String,
    required: [true, "The field Password is required"],
    minLength: [8, "The field Password must have at least 8 characters"],
    lowerCase: true,
  },
  email: {
    type: String,
    required: [true, "The field Email is required"],
    lowerCase: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "The field Name is required"],
    lowerCase: true,
  },
  lastname: {
    type: String,
    required: [true, "The field Last Name is required"],
    lowerCase: true,
  },
});
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
module.exports = mongoose.model("users", userSchema);
