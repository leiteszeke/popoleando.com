// Dependencies
const express = require('express');
const mongoose = require('mongoose');
// Router
const router = express.Router();
// Models
const { Order } = require('../models/Order');
const { OrderItem } = require('../models/OrderItem');
const { User } = require('../models/User');
const { Product } = require('../models/Product');

router.post('/', (req, res) => {
    const { orderId, ordererId, productId, quantity } = req.body;

    if (
        !mongoose.Types.ObjectId.isValid(orderId)
        || !mongoose.Types.ObjectId.isValid(productId)
        || !mongoose.Types.ObjectId.isValid(ordererId)
    ) {
        return res.status(400).send({ data: [], error: true, message: 'bad_request' });
    }

    Order.findOne().where({ _id: orderId }).exec((orderErr, order) => {
        if (orderErr || !order) return res.status(404).send({ data: orderErr || [], error: true, message: 'order_not_found' });

        Product.findOne().where({ _id: productId }).exec((prodErr, product) => {
            if (prodErr || !order) return res.status(404).send({ data: prodErr || [], error: true, message: 'product_not_found' });

            User.findOne().where({ _id: ordererId }).exec((userErr, user) => {
                if (userErr || !order) return res.status(404).send({ data: userErr || [], error: true, message: 'user_not_found' });

                OrderItem.findOne().where({ order, product, orderer: user }).exec((itemErr, item) => {
                    if (itemErr) return res.status(400).send({ data: itemErr, error: true, message: 'bad_request_1' });

                    if (item) {
                        item.quantity = quantity;
                        OrderItem.updateOne({ _id: item._id }, item).exec(err => {
                            if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request_2' });
                            OrderItem.findOne().where({ _id: item._id }).exec((error, oi) => {
                                if (err) return res.status(400).send({ data: error, error: true, message: 'bad_request_3' });
                                return res.send({ data: oi, error: false, message: 'order_item_updated' });
                            });
                        })
                    } else {
                        const orderItem = new OrderItem({
                            quantity,
                            order,
                            product,
                            orderer: user,
                        });

                        orderItem.save((err, oi) => {
                            if (err) return res.status(400).send({ data: err, error: true, message: 'bad_request' });
                            return res.send({ data: oi, error: false, message: 'order_item_created' });
                        });
                    }
                })
            })
        })
    })
});

module.exports = router;