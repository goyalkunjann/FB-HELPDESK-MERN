const jwt = require("jsonwebtoken");
const Client = require("../model/userschema");

const authenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send("Unauthorized: No token provided");
        }

        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await Client.findOne({
            _id: verifyToken._id,
            "tokens.token": token,
        });

        if (!rootUser) {
            throw new Error("User not Found");
        }

        req.userdata = rootUser;

        next();
    } catch (err) {
        res.status(401).send("Unauthorized: Invalid token");
    }
};

module.exports = authenticate;