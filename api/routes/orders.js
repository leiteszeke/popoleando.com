// Dependencies
const express = require('express');
const moment = require('moment');
const mongoose = require('mongoose');
// Router
const router = express.Router();
// Models
const { Order } = require('../models/Order');
const { User } = require('../models/User');

router.get('/', (req, res) => {
    Order.find().exec((err, orders) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: orders, error: false, message: 'fetch_success' });
    });
});

router.get('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    Order.findOne().where({ _id: req.params.id }).exec((err, order) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: order, error: false, message: 'fetch_success' });
    });
});

router.post('/', (req, res) => {
    const date = moment().format('YYYY-MM-DD');
    const { ordererId } = req.body;

    if (!ordererId || !mongoose.Types.ObjectId.isValid(ordererId)) {
        return res.status(404).send({ data: [], error: true, message: 'user_not_found' });
    }

    User.findOne().where({ _id: ordererId }).exec((userErr, user) => {
        if (userErr) return res.status(400).send({ data: userErr, error: true, message: 'bad_request' });
        if (!user) return res.status(404).send({ data: [], error: true, message: 'user_not_found' });

        Order.findOne().where({ date, opened: true }).exec((err, order) => {
            if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
            if (order) return res.send({ data: order, error: false, message: 'order_exists' });

            const newOrder = new Order({
                orderer: user,
                date,
                opened: true,
                delivered: false,
            });

            newOrder.save({}, (newErr, resp) => {
                if (newErr) return res.status(400).send({ data: newErr, error: true, message: 'bad_request' });
                return res.send({ data: resp, error: false, message: 'order_created' });
            })
        });
    });
});

router.put('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    const updateOrder = body => {
        Order.updateOne({ _id: req.params.id }, req.body).exec(err => {
            if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
            Order.findOne().where({ _id: req.params.id }).exec((error, order) => {
                if (err) return res.status(400).send({ data: error, error: true, message: 'bad_request' });
                return res.send({ data: order, error: false, message: 'order_updated' });
            });
        });
    }

    const body = req.body;

    if (!body.ordererId) {
        return updateOrder(body);
    }

    User.findOne().where({ _id: body.ordererId }).exec((err, user) => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        if (!user) return res.status(404).send({ data: [], error: true, message: 'user_not_found' });

        body.orderer = user;
        return updateOrder(body);
    });
});

router.delete('/:id', (req, res) => {
    if (!req.params || !req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    Order.deleteOne().where({ _id: req.params.id }).exec(err => {
        if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
        return res.send({ data: [], error: false, message: 'order_deleted' });
    });
});

module.exports = router;