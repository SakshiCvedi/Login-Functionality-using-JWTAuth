const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");



app.use(cors());


const SECRET = "mysecretkey";

app.post("/login", (req, res) => {
    console.log("Login route hit");
    console.log(req.body);

    const {username, password} = req.body;
    

    if(
        username === "sakshi" &&
        password === "1234"
    ){
        const token = jwt.sign(
            {
                username
            },
            SECRET,
            {
                expiresIn: "1h"
            }
        );

        return res.json({
            token
        });
    }

    res.status(401).json({
        message: "Invalid Credentials"
    });
});

app.get("/profile", auth, (req, res) => {
    res.json({
        message: "Protected Data",
        user: req.user
    });
});

app.get("/", (req, res) => {
    res.send("Backend is working");
});

app.listen(3000, () => {
    console.log("server running");
});