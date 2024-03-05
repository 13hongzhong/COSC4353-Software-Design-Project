const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post("/getUserData", (req, res) => {
    res.json({
        fullName: "Alice Bob",
        address: "5128 Gotham Park Lane",
        city: "Arkham City",
        state: "NY",
        zipcode: "93958"
    })
})

router.post("/updateUserData", (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect('/login-Registration-page.html');
    }
    console.log(req.body)
    // add db call to update data
    res.send("success!")
})

module.exports = router