const express = require("express");
const logger = require('morgan');
const session = require("express-session")
const cookieParser = require("cookie-parser")
const passport = require("passport")

const app = express();
const profileRouter = require('./routes/profile');
const authRouter = require('./routes/auth');
const quoteRouter = require('./routes/quote')

app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static('public'));
app.use(session({
    secret: 'silly billy goose',
    resave: false, 
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate("session"))

app.use("/profile", profileRouter);
app.use("/auth", authRouter);
app.use("/quote", quoteRouter);

module.exports = app;
