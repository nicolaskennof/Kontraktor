const router = require("express").Router();
const favouriteController = require("../../controllers/favouriteController");

router.route("/")
.post(favouriteController.insertFavourite);

router.route("/:id")
.get(favouriteController.getFavourite);

router.route("/delete/:id")
.delete(favouriteController.deleteFavourite);

module.exports = router;