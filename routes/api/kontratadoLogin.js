const router = require("express").Router();
const kontratadoLoginController = require("../../controllers/kontratadoLoginController");

router.route("/")
.post(kontratadoLoginController.login)

module.exports = router;