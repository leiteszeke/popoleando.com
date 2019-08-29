// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schemas
const { UserSchema } = require('./User');

mongoose.connect('mongodb://localhost:27017/popoleando', (err, db) => {
    if (err) throw err;
    console.log('Connected');
});

const OrderSchema = new Schema({
    orderer: UserSchema,
    date: Date,
    opened: Boolean,
    delivered: Boolean,
});

const Order = mongoose.model('Order', OrderSchema);

exports.Order = Order;
exports.OrderSchema = OrderSchema;