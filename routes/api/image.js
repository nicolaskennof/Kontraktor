const router = require("express").Router();
const imageController = require("../../controllers/imageController");
const multer = require("multer");

var uploading = multer({
  dest: './uploads/',
});

router.route("/")
  .post(uploading.single('uploadFile'), imageController.create)

router.route("/:id")
  .get(imageController.getImage)
  .post(uploading.single('uploadFile'), imageController.create)

module.exports = router;