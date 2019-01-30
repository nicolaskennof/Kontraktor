const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

router.route("/")
.post(reviewController.insertReview);

router.route("/:id")
  .post(reviewController.editReview);

module.exports = router;