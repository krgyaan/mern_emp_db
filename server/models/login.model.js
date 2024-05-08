const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true, // Ensure email is unique
            trim: true, // Remove whitespace from both ends of the string
            lowercase: true, // Convert email to lowercase
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'] // Validate email format
        },
        password: {
            type: String,
            required: true,
            trim: true, // Remove whitespace from both ends of the string
            minlength: [6, 'Password must be at least 6 characters long'], // Minimum password length
            // You can add more password validation logic as needed
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Login", loginSchema);