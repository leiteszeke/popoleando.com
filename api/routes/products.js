// Dependencies
const express = require('express');
const mongoose = require('mongoose');
// Router
const router = express.Router();
// Models
const { Category } = require('../models/Category');
const { Product } = require('../models/Product');

router.get('/', (req, res) => {
  Product.find().exec((err, products) => {
    if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
    return res.send({ data: products, error: false, message: 'fetch_success' });
  });
});

router.get('/:id', (req, res) => {
  if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ data: [], error: true, message: 'bad_request' });
  }

  Product.findOne().where({ _id: req.params.id }).exec((err, product) => {
    if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
    return res.send({ data: product, error: false, message: 'fetch_success' });
  });
});

router.post('/', (req, res) => {
  const { categoryId, name } = req.body;

  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    return res.status(404).send({ data: [], error: true, message: 'category_not_found' });
  }

  Category.findOne().where({ _id: categoryId }).exec((err, category) => {
    if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });

    Product.findOne().where({ name }).exec((err, product) => {
      if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
      if (product) return res.send({ data: product, error: false, message: 'product_exists' });

      const data = { ...req.body, category };
      const newProduct = new Product(data);

      newProduct.save({}, (err, resp) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });

        Product.find().where({ category }).exec((err, products) => {
          Category
            .updateOne({ _id: category._id }, { products, totalProducts: products.length })
            .exec();
        });

        return res.send({ data: resp, error: false, message: 'product_created' });
      });
    });
  });

});

router.delete('/:id', (req, res) => {
  if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ data: [], error: true, message: 'bad_request' });
  }

  Product.deleteOne().where({ _id: req.params.id }).exec(err => {
    if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
    return res.send({ data: [], error: false, message: 'product_deleted' });
  });
});

router.put('/:id', (req, res) => {
  if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
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