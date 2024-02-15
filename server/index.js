const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const app = express();

dotenv.config({ path: "./config.env" });

require("./db/connect");

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

app.use(require("./routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});