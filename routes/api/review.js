const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

router.route("/")
.post(reviewController.insertReview);

router.route("/:id")
  .post(reviewController.editReview);

 router.route("/delete/:id")
  .delete(reviewController.deleteReview);

module.exports = router;