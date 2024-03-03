const express = require('express')
const router = express.Router();

router.post("/getUserData", (req, res) => {
    res.json({
        fullName: "Alice Bob",
        address: "5128 Gotham Park Lane",
        city: "Arkham City",
        state: "NY",
        zipCode: "93958"
    })
})


module.exports = router