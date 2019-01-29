'use strict';

var db = require("./models");
var passport = require('passport');
var User = db.User;
var FacebookTokenStrategy = require('passport-facebook-token');
var config = require('./config');

module.exports = function () {
    passport.use(new FacebookTokenStrategy({
        clientID: config.facebookAuth.clientID,
        clientSecret: config.facebookAuth.clientSecret
    },
        function (accessToken, refreshToken, profile, done) {
            User.upsertFbUser(accessToken, refreshToken, profile, function (err, user) {
                return done(err, user);
            });
        }));
};