// Dependencies
const mongoose = require('./Models');
const Schema = mongoose.Schema;
// Schemas
const { OrderSchema } = require('./Order');
const { UserSchema } = require('./User');
const { ProductSchema } = require('./Product');

const OrderItemSchema = new Schema({
    order: OrderSchema,
    orderer: UserSchema,
    product: ProductSchema,
    quantity: Number,
});

const OrderItem = mongoose.model('OrderItem', OrderItemSchema);

exports.OrderItem = OrderItem;
exports.OrderItemSchema = OrderItemSchema;