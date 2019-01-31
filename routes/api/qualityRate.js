const router = require("express").Router();
const qualityRateController = require("../../controllers/qualityRateController");


router.route("/")
.post(qualityRateController.insertQualityRate);


router.route("/:id")
  .post(qualityRateController.editQualityRate);


  router.route("/delete/:id")
  .delete(qualityRateController.deleteQualityRate);

module.exports = router;