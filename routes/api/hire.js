const router = require("express").Router();
const hireController = require("../../controllers/hireController");

router.route("/")
.post(hireController.insertHire);

module.exports = router;