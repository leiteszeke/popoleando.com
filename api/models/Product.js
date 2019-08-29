// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schemas
const { CategorySchema } = require('./Category');

mongoose.connect('mongodb://localhost:27017/popoleando', (err, db) => {
    if (err) throw err;
    console.log('Connected');
});

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