// Dependencies
const mongoose = require('./Models');
const Schema = mongoose.Schema;
// Schemas
const { DepartmentSchema } = require('./Department');

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