const router = require("express").Router();
const kontratadoController = require("../../controllers/kontratadoController");

// Matches with "/api/books"
router.route("/")
  .post(kontratadoController.register)
  
router.route("/filter")  
  .post(kontratadoController.getKontratadoByFilter);

router.route("/update")
  .post(kontratadoController.updateKontratado);

router.route("/:id")
  .get(kontratadoController.getbyId);

module.exports = router;