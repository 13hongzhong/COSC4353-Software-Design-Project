const express = require('express');
const passport = require('passport');
const router = express.Router();
const profileController = require('../controllers/profileController');
const validation = require("../utils/validation")

router.post("/getUserData", validation.isLoggedIn, profileController.getProfile)
router.post("/updateUserData", validation.isLoggedIn, validation.validateProfile, profileController.updateProfile)

module.exports = router