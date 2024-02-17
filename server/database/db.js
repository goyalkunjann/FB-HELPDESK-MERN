const mongoose = require("mongoose");

const DB = process.env.MONGO_DB_URI;

mongoose
    .connect(DB)
    .then(() => {
        console.log("DB connection successful");
    })
    .catch((err) => console.log("DB connection failed"));