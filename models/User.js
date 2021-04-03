const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
		type:String,
		required: [true, "First name is required"]
	},
	lastName: {
		type: String,
		required: [true, "Last name is required"]
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: [true, "Email is already exists"]
	},
	password: {
		type: String,
		required: [ true, "Password is required"]
	},
	mobileNo: {
		type: String,
		required: [true, "Mobile number is required"]
	},
    currency: {
        type: String,
        required: [true, "Currency is required"]
    }
})

module.exports = mongoose.model("User", userSchema);