// Dependencies
const express = require('express');
const mongoose = require('mongoose');
// Router
const router = express.Router();
// Models
const { Product } = require('../models/Product');

router.get('/', (req, res) => {
    Product.find().exec((err, products) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: products, error: false, message: 'fetch_success' });
    });
});

router.get('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(!req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    Product.findOne().where({ _id: req.params.id }).exec((err, product) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: product, error: false, message: 'fetch_success' });
    });
});

router.post('/', (req, res) => {
    const { name } = req.body;

    Product.findOne().where({ name }).exec((err, product) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        if (product) return res.send({ data: product, error: false, message: 'product_exists' });

        const newProduct = new Product(req.body);

        newProduct.save({}, (newErr, resp) => {
            if (newErr) return res.status(400).send({ data: newErr, error: true, message: 'bad_request' });
            return res.send({ data: resp, error: false, message: 'product_created' });
        })
    });
});

router.delete('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(!req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    Product.deleteOne().where({ _id: req.params.id }).exec(err => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: [], error: false, message: 'product_deleted' });
    });
});

router.put('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(!req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    Product.updateOne({ _id: req.params.id }, req.body).exec(err => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        Product.findOne().where({ _id: req.params.id }).exec((error, product) => {
            if (err) return res.status(400).send({ data: error, error: true, message: 'bad_request' });
            return res.send({ data: product, error: false, message: 'product_updated' });
        });
    });
});

module.exports = router;