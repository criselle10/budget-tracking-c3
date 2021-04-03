const mongoose = require('mongoose');
const Category = require('./Category');

const recordSchema = new mongoose.Schema({
    category: [
        Category
    ],
    amount: {
        type: Double,
        required: [true, "Amount is required"]
    },
    Description: {
        type: String,
        required: [true, "Description is required"]
    }
})

module.exports = mongoose.model("Record", recordSchema);