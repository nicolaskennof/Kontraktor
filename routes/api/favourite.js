const router = require("express").Router();
const favouriteController = require("../../controllers/favouriteController");

router.route("/")
.post(favouriteController.insertFavourite);

module.exports = router;