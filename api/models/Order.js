// Dependencies
const mongoose = require('./Models');
const Schema = mongoose.Schema;
// Schemas
const { UserSchema } = require('./User');

const OrderSchema = new Schema({
    orderer: UserSchema,
    date: Date,
    opened: Boolean,
    delivered: Boolean,
});

const Order = mongoose.model('Order', OrderSchema);

exports.Order = Order;
exports.OrderSchema = OrderSchema;