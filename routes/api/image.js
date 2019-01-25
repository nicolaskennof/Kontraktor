const router = require("express").Router();
const imageController = require("../../controllers/pocImageController");
const multer = require("multer");

var uploading = multer({
  dest: './uploads/',
});
// Matches with "/api/books"
router.route("/")
  .post(uploading.single('uploadFile'), imageController.create)

router.route("/:id")
  .get(imageController.getImage)

module.exports = router;