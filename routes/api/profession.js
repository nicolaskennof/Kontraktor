const router = require("express").Router();
const professionController = require("../../controllers/professionController");

router.route("/")
.get(professionController.getProfession);

router.route("/:id")
.get(professionController.getprofession1)

module.exports = router;