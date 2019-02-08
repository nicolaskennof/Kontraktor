const router = require("express").Router();
const stateController = require("../../controllers/stateController");

router.route("/")
.get(stateController.getStates);

module.exports = router;