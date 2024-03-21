const express = require("express");
const logger = require('morgan');
const session = require("express-session")
const cookieParser = require("cookie-parser")
const passport = require("passport")

const app = express();
const profileRouter = require('./routes/profile');
const authRouter = require('./routes/auth');
const quoteRouter = require('./routes/quote')

// automatic middleware logging
app.use(logger('dev'))

// parse all json bodies and attach to the request object
app.use(express.json());

// recognizes objects as strings or arrays
app.use(express.urlencoded({ extended: false }))

// parses cookie objects automatically
app.use(cookieParser());

// attach resources stored in public folder, accessible by all files e.g. site.com/about-page.html
app.use(express.static('public'));

// session secret key, to encrypt user data on client-side
app.use(session({
    secret: 'silly billy goose',
    resave: false, 
    saveUninitialized: false,
}))

// initialize passport middleware and session setup, we can get user information here
// to be honest, there is some black magic abstraction here that I don't fully understand
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate("session"))

// attach routers to the application
app.use("/profile", profileRouter);
app.use("/auth", authRouter);
app.use("/quote", quoteRouter);

// export
module.exports = app;
