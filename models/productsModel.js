const mongoose = require("../config/mongodb");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The field Name is required"],
    minLength: [3, "The field Name must have at least 3 characters"],
    lowerCase: true,
  },
  price: { type: Number, min: 0 },
  code: { type: String, unique: true },
  description: String,
  destacado: Boolean,
  quantity: Number,
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "categories",
  },
});
module.exports = mongoose.model("products", productSchema);
