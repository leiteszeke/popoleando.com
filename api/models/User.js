// Depenendencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schemas
const { DepartmentSchema } = require('./Department');

mongoose.connect('mongodb://localhost:27017/popoleando', (err, db) => {
    if (err) throw err;
    console.log('Connected');
});

const UserSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    photo: String,
    department: DepartmentSchema,
});

const User = mongoose.model('User', UserSchema);

exports.User = User;
exports.UserSchema = UserSchema;