const mongoose = require('mongoose');

const databaseURL = process.env.MONGO_DB_URI;

mongoose
    .connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to the database.'))
    .catch((error) => console.error('Database connection error:', error));