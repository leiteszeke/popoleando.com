// Dependencies
const express = require('express');
const mongoose = require('mongoose');
// Router
const router = express.Router();
// Models
const { Category } = require('../models/Category');

router.get('/', (req, res) => {
  Category.find().exec((err, categories) => {
    if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
    return res.send({ data: categories, error: false, message: 'fetch_success' });
  });
});

router.get('/:id', (req, res) => {
  if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ data: [], error: true, message: 'bad_request' });
  }

  Category.findOne().where({ _id: req.params.id }).exec((err, category) => {
    if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
    return res.send({ data: category, error: false, message: 'fetch_success' });
  });
});

router.post('/', (req, res) => {
  const { name } = req.body;

  Category.findOne().where({ name }).exec((err, category) => {
    if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
    if (category) return res.send({ data: category, error: false, message: 'category_exists' });

    const newCategory = new Category({
      name,
    });

    newCategory.save({}, (err, resp) => {
      if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
      return res.send({ data: resp, error: false, message: 'category_created' });
    });
  });
});

router.delete('/:id', (req, res) => {
  if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ data: [], error: true, message: 'bad_request' });
  }

  Category.deleteOne().where({ _id: req.params.id }).exec(err => {
    if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
    return res.send({ data: [], error: false, message: 'category_deleted' });
  });
});

router.put('/:id', (req, res) => {
  if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ data: [], error: true, message: 'bad_request' });
  }

  Category.updateOne({ _id: req.params.id }, req.body).exec(err => {
    if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
    Category.findOne().where({ _id: req.params.id }).exec((err, category) => {
      if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
      return res.send({ data: category, error: false, message: 'category_updated' });
    });
  });
});

module.exports = router;