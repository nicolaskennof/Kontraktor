const router = require("express").Router();
const imageRoutes = require("./image");
const kontratadoRoutes = require("./kontratado");
const costRateRoutes = require("./costRate");

router.use("/image", imageRoutes);

router.use("/kontratado",kontratadoRoutes);

router.use("/costRate", costRateRoutes);


module.exports = router;