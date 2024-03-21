const express = require('express');
const passport = require('passport');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post("/getUserData", profileController.getProfile)

router.post("/updateUserData", profileController.updateProfile)

module.exports = router