const router = require("express").Router();
const costRateController = require("../../controllers/costRateController");

router.route("/")
  .post(costRateController.insertcostRate);

router.route("/:id")
  .post(costRateController.editCostRate);

router.route("/delete/:id")
  .delete(costRateController.deleteCostRate);


module.exports = router;