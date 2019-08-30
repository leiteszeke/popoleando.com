// Models
const { Department } = require('../models/Department');
const { User } = require('../models/User');
const { Category } = require('../models/Category');
const { Product } = require('../models/Product');
// Seeds
const departments = require('./departments.json');
const users = require('./users.json');
const categories = require('./categories.json');
const products = require('./products.json');

const Seeds = [
    { model: Department, seed: departments },
    { model: User, seed: users },
    { model: Category, seed: categories },
    { model: Product, seed: products },
];

module.exports = Seeds;