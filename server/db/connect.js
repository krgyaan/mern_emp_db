const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    return console.log("MongoDB Connected...");
  } catch (err) {
    return console.log("While DB connection:", err);
  }
};

module.exports = connectDB;
