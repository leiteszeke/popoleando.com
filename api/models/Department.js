// Dependencies
const mongoose = require('./Models');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    name: String,
});

const Department = mongoose.model('Department', DepartmentSchema);

exports.Department = Department;
exports.DepartmentSchema = DepartmentSchema;