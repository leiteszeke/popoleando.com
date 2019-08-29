// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/popoleando', (err, db) => {
    if (err) throw err;
    console.log('Connected');
});

const CategorySchema = new Schema({
    name: String,
});

const Category = mongoose.model('Category', CategorySchema);

exports.Category = Category;
exports.CategorySchema = CategorySchema;