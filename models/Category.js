const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, "Category is required"]
    },
    categoryType: {
        type: String,
        required: [true, "Category type is required"]
    }
})

module.exports = mongoose.model("Category", categorySchema);