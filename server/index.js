require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const { DBConnection } = require("./database/db");

const User = require("./models/userSchema.js");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

DBConnection();
app.get("/", (req, res) => {
    res.send("Welcome to the Online Judge Platform!");
});
// Register API endpoint
app.post("/Signup", async(req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body;

        if (!firstname || !lastname || !username || !email || !password) {
            return res.status(400).send("Please enter all the required details");
        }

        const doesUserExist = await User.findOne({ username });
        if (doesUserExist) {
            return res.status(200).send(`User ${username} already exists`);
        }


        const hashedPassword = await bcrypt.hash(password, 12);

        const userData = await User.create({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: userData._id, username },
            process.env.SECRET_KEY, { expiresIn: "1h" }
        );

        userData.password = undefined;

        res.status(200).json({ message: "You have successfully registered!", userData });
    } catch (error) {
        console.log("Error:" + error.message);
    }
});

// Login API endpoint
app.post("/login", async(req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send("Please enter all the required details");
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(200).send(`User ${username} does not exist. Please register.`);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send("Incorrect Password.");
        }

        const token = jwt.sign({ id: user._id, username }, process.env.SECRET_KEY, {
            expiresIn: "1h"
        });

        user.password = undefined;

        const options = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        res.status(200).cookie("token", token, options).json({
            message: "You have successfully logged In!",
            success: true,
            token
        });
    } catch (error) {
        console.log("Error:" + error.message);
    }
});

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});