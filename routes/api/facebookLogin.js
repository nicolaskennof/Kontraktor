const router = require("express").Router();
const facebookLoginController = require("../../controllers/facebookLoginController");
var passport = require('passport');
require("../../passport")();
var {generateToken, sendToken} = require("../../utils/token.utils");

router.route("/")
.post(passport.authenticate('facebook-token', {session: false}),
    facebookLoginController.login, generateToken, sendToken);

router.route("/:id")
  .get(facebookLoginController.getUserById);

module.exports = router;