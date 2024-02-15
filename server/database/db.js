const mongoose = require("mongoose");
require("dotenv").config();

const DBConnection = async() => {
    const MONGO_URL = process.env.MONGO_URL;
    console.log(MONGO_URL);
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database ", error.message);
    }
};

module.exports = { DBConnection };