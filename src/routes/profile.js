const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post("/getUserData", (req, res) => {
    console.log(req.user);
    res.json({
        fullName: "Alice Bob",
        address: "5128 Gotham Park Lane",
        city: "Arkham City",
        state: "NY",
        zipcode: "93958"
    })
})

router.post("/updateUserData", (req, res) => {
    console.log(req.body)
})

module.exports = router