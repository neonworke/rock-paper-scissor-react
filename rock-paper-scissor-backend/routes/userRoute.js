const express = require('express');
const router = express.Router();
const userModel = require("../models/userModel");

router.post("/login", async function (req, res) {
    const { email, password } = req.body
    userModel.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user });
            } else {
                res.send({ message: "Login Failed" });
            }
        } else {
            res.send({message: "User not registered"});
        }
    })
})

router.post("/register", async function (req, res) {
    const { name, email, password } = req.body
    userModel.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({message: "Your email address is already registered"})
        } else {
            const user = new userModel({
                name,
                email,
                password
            })
        user.save(err => {
            if (err) {
                res.send(err)
            } else {
                res.send({message: "Successfully Registered"})
            }
        })
        }
    })
       
})

module.exports = router;