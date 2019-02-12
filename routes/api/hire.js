const router = require("express").Router();
const hireController = require("../../controllers/hireController");

router.route("/")
.post(hireController.insertHire);

router.route("/:id")
.delete(hireController.deleteHire);

module.exports = router;