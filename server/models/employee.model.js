const mongoose = require("mongoose");

const empSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true // Remove whitespace from both ends of the string
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
      trim: true, // Remove whitespace from both ends of the string
      lowercase: true, // Convert email to lowercase
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'] // Validate email format
    },
    mobile: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(value); // Validate mobile number format
        },
        message: props => `${props.value} is not a valid mobile number!`
      }
    },
    designation: {
      type: String,
      required: true,
      trim: true
    },
    gender: {
      type: String,
      required: true,
      enum: ['Male', 'Female', 'Other'] // Specify allowed values for gender
    },
    course: {
      type: String,
      required: true,
      trim: true
    },
    img: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return !!value.trim();
        },
        message: props => `${props.value} is not a valid image URL!`
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Emoloyee", empSchema);
