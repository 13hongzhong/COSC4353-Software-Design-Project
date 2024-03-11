const express = require('express')
const passport = require("passport")
const argon2 = requre("argon2");
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

router.post("/isloggedin", (req, res) => {
    if (req.isAuthenticated()) {
        res.send("good")
    }
    res.redirect("/login-Registration-page.html")
})

router.post('/login', passport.authenticate('local', {
    successReturnToOrRedirect: '/client-profile-management.html',
    failureRedirect: '/login-Registration-page.html',
    failureMessage: true
}));

router.post('/register', (req, res) => {
    var info = req.body;

    // add req.username, req.fullName, and req.password to database, then redirect to profile management
    
    const username = req.body.username;
    const fullName = req.body.fullName;
    const password = req.body.password;

    //check if the username and password is not null

    if (!username || !password) {
        res.status(400).send({message: "Must have a username and password", data: null});
        return;
    }

    // TO DO: Need to create a connection pool. All variables used are placeholders

    // creates a database query which insert the username and full name into user
    
    pool.query("INSERT INTO user (username, full_name) VALUES(?, ?)",
    [username, full_name],

    // callback function for error and the result. Checks if error is empty, if error is present then
    // there was an error during the call

    async (err, result) => {
        if(err) {
            console.error(err);
            res.status(500).send({ message: "Failed to register", data: null });
            return;
        }

        // get back the id of the user we just inserted
       
        const id = result.insertID;

        //hash the password (this portion requires argon2)

        const hashedPassword = await argon2.hash(password);

        //insert password into user auth table

        pool.query("INSERT INTO user_auth (username, password) VALUES (?,?)",
        [username, hashedPassword,
        ], (err, result2) => {
            if(err) {
                console.error(err);
                res.status(500).send({ message: "Failed to register", data: null });
                return;
            }

            // send back user info to the client with the ID
            res.status(201).send({ message: "Registeration Successful", data: {id, username, fullName,}});
    });
})


router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/frontpage.html');
    })
})

module.exports = router