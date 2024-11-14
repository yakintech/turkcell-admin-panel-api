const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const AdminUser = require("../models/AdminUser");
const jwt = require("jsonwebtoken");




router.post("/login", async (req, res) => {
    let { email, password } = req.body;


    let adminUser = await AdminUser.findOne({ email, password, isDeleted: false })

    if (adminUser) {
        const token = jwt.sign({ id: adminUser._id }, "my_secret_key", {
            expiresIn: "1h",
        })

        res.cookie("token", token, {
            httpOnly: true,
        })
        return res.json({ status: "success", message: "Login successful" })
    }
    else{
        return res.status(404).json({ status: "error", message: "Invalid email/password" })
    }
})



module.exports = router;