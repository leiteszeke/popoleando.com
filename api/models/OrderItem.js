// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schemas
const { OrderSchema } = require('./Order');
const { UserSchema } = require('./User');
const { ProductSchema } = require('./Product');

mongoose.connect('mongodb://localhost:27017/popoleando', (err, db) => {
    if (err) throw err;
    console.log('Connected');
});

const OrderItemSchema = new Schema({
    order: OrderSchema,
    orderer: UserSchema,
    product: ProductSchema,
    quantity: Number,
});

const OrderItem = mongoose.model('OrderItem', OrderItemSchema);

exports.OrderItem = OrderItem;
exports.OrderItemSchema = OrderItemSchema;