const router = require("express").Router();
const imageController = require("../../controllers/pocImageController");

// Matches with "/api/books"
router.route("/")
  .post(imageController.create);

module.exports = router;