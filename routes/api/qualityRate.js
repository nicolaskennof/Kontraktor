const router = require("express").Router();
const qualityRateController = require("../../controllers/qualityRateController");


router.route("/")
.post(qualityRateController.insertQualityRate);


router.route("/:id")
  .post(qualityRateController.editQualityRate);


module.exports = router;