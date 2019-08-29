// Dependencies
const mongoose = require('./Models');
const Schema = mongoose.Schema;
// Schemas
const { CategorySchema } = require('./Category');

const ProductSchema = new Schema({
    category: CategorySchema,
    name: String,
    photo: String,
    fractionable: Boolean,
    salesUnit: Number,
    unitPrice: Number,
});

const Product = mongoose.model('Product', ProductSchema);

exports.Product = Product;
exports.ProductSchema = ProductSchema;