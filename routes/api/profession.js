const router = require("express").Router();
const professionController = require("../../controllers/professionController");

router.route("/")
.get(professionController.getProfession);

module.exports = router;