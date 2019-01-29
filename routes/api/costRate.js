const router = require("express").Router();
const costRateController = require("../../controllers/costRateController");

router.route("/")
.post(costRateController.insertcostRate);

module.exports = router;