// Dependencies
const express = require('express');
const mongoose = require('mongoose');
// Router
const router = express.Router();
// Routes
const departments = require('./departments');
const items = require('./orderItem');
const orders = require('./orders');
const products = require('./products');
const users = require('./users');

router.use('/departments', departments);
router.use('/items', items);
router.use('/orders', orders);
router.use('/products', products);
router.use('/users', users);

module.exports = router;