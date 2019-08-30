// Dependencies
const express = require('express');
const mongoose = require('mongoose');
// Router
const router = express.Router();
// Models
const { Department } = require('../models/Department');
const { User } = require('../models/User');

router.get('/', (req, res) => {
    User.find().exec((err, users) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: users, error: false, message: 'fetch_success' });
    });
});

router.get('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    User.findOne().where({ _id: req.params.id }).exec((err, user) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: user, error: false, message: 'fetch_success' });
    });
});

router.post('/', (req, res) => {
    const { name, lastname, photo, departmentId } = req.body;

    if (!departmentId || !mongoose.Types.ObjectId.isValid(departmentId)) {
        return res.status(404).send({ data: [], error: true, message: 'department_not_found' });
    }

    Department.findOne().where({ _id: departmentId }).exec((depErr, department) => {
        if (depErr) return res.status(400).send({ data: depErr, error: true, message: 'bad_request' });
        if (!department) return res.status(404).send({ data: [], error: true, message: 'department_not_found' });

        User.findOne().where({ name, lastname }).exec((err, user) => {
            if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
            if (user) return res.send({ data: user, error: false, message: 'user_exists' });

            const newUser = new User({
                name,
                lastname,
                photo,
                department,
            });

            newUser.save({}, (newErr, resp) => {
                if (newErr) return res.status(400).send({ data: newErr, error: true, message: 'bad_request' });
                return res.send({ data: resp, error: false, message: 'user_created' });
            })
        });
    });
});

router.delete('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    User.deleteOne().where({ _id: req.params.id }).exec(err => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: [], error: false, message: 'user_deleted' });
    });
});

router.put('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    const updateUser = body => {
        User.updateOne({ _id: req.params.id }, body).exec(err => {
            if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
            User.findOne().where({ _id: req.params.id }).exec((error, user) => {
                if (err) return res.status(400).send({ data: error, error: true, message: 'bad_request' });
                return res.send({ data: user, error: false, message: 'user_updated' });
            });
        });
    }

    const body = req.body;

    if (!body.departmentId) {
        return updateUser();
    }

    Department.findOne().where({ _id: body.departmentId }).exec((depErr, department) => {
        if (depErr) return res.status(400).send({ data: depErr, error: true, message: 'bad_request' });
        if (!department) return res.status(404).send({ data: [], error: true, message: 'department_not_found' });

        body.department = department;
        return updateUser(body);
    });
});

module.exports = router;