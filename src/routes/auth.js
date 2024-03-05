const express = require('express')
const passport = require("passport")
var LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(function verify(username, password, cb) {
    if (username == "user" && password == "password") {
        return cb(null, { user: username })
    }
    return cb(null, false, { message: 'Incorrect username or password.' })
}));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, user);
    });
});
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});


const router = express.Router();

router.post('/login', passport.authenticate('local', {
    successReturnToOrRedirect: '/client-profile-management.html',
    failureRedirect: '/login-Registration-page.html',
    failureMessage: true
}));

module.exports = router
