// Dependencies
const mongoose = require('./Models');
const Schema = mongoose.Schema;
// Schemas
const { ProductSchema } = require('./Product');

const CategorySchema = new Schema({
    name: String,
    photo: String,
    products: [ProductSchema],
    totalProducts: Number,
});

const Category = mongoose.model('Category', CategorySchema);

exports.Category = Category;
exports.CategorySchema = CategorySchema;