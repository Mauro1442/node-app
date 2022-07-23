const mongoose = require("../config/mongodb");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The field Name is required"],
    minLength: [3, "The field Name must have at least 3 characters"],
  },
  price: Number,
  description: String,
  quantity: Number,
});
module.exports = mongoose.model("products", productSchema);
