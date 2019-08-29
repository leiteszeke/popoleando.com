// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/popoleando', (err, db) => {
    if (err) throw err;
    console.log('Connected');
});

const DepartmentSchema = new Schema({
    name: String,
});

const Department = mongoose.model('Department', DepartmentSchema);

exports.Department = Department;
exports.DepartmentSchema = DepartmentSchema;