// Dependencies
const mongoose = require('./Models');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    categoryId: mongoose.Types.ObjectId,
    name: String,
    photo: String,
    fractionable: Boolean,
    salesUnit: Number,
    unitPrice: Number,
});

const Product = mongoose.model('Product', ProductSchema);

exports.Product = Product;
exports.ProductSchema = ProductSchema;