const mongoose = require("mongoose");

// driver

const dbURL = `mongodb+srv://ayushrajsd:28Wca5DmXC6Q9BDW@cluster0.vg5saeo.mongodb.net/`;
// once

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
