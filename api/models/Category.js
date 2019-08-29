// Dependencies
const mongoose = require('./Models');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String,
});

const Category = mongoose.model('Category', CategorySchema);

exports.Category = Category;
exports.CategorySchema = CategorySchema;