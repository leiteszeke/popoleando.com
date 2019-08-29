// Dependencies
const express = require('express');
const mongoose = require('mongoose');
// Router
const router = express.Router();
// Models
const { Department } = require('../models/Department');

router.get('/', (req, res) => {
    Department.find().exec((err, departments) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: departments, error: false, message: 'fetch_success' });
    });
});

router.get('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(!req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    Department.findOne().where({ _id: req.params.id }).exec((err, department) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: department, error: false, message: 'fetch_success' });
    });
});

router.post('/', (req, res) => {
    const { name } = req.body;

    Department.findOne().where({ name }).exec((err, department) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        if (department) return res.send({ data: department, error: false, message: 'department_exists' });

        const newDepartment = new Department({
            name,
        });

        newDepartment.save({}, (newErr, resp) => {
            if (newErr) return res.status(400).send({ data: newErr, error: true, message: 'bad_request' });
            return res.send({ data: resp, error: false, message: 'department_created' });
        })
    });
});

router.delete('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(!req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    Department.deleteOne().where({ _id: req.params.id }).exec(err => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: [], error: false, message: 'department_deleted' });
    });
});

router.put('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(!req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    Department.updateOne({ _id: req.params.id }, req.body).exec(err => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        Department.findOne().where({ _id: req.params.id }).exec((error, department) => {
            if (err) return res.status(400).send({ data: error, error: true, message: 'bad_request' });
            return res.send({ data: department, error: false, message: 'department_updated' });
        });
    });
});

module.exports = router;