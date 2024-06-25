const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  imageFiles: [{ type: mongoose.Types.ObjectId, ref: 'GridFSFile' }],
  status: { type: String, required: true },
  visibility: { type: String, required: true },
  manageStock: { type: Boolean, required: true },
}
, {
    timestamps: true // Automatically add createdAt and updatedAt fields
  });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;