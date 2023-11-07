// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor", // Reference to the Vendor model
  },
  // Add other fields as needed
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
