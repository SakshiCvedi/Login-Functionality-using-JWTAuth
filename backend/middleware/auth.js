const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

function auth(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            message: "Token Missing"
        });
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(
            token,
            SECRET
        );
        req.user = decoded;

        next();
    }catch{
        res.status(401).json({
            message: "Invalid Token"
        });
    }
}

module.exports = auth;