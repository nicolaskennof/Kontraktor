const router = require("express").Router();
const imageRoutes = require("./image");
const kontratadoRoutes = require("./kontratado");
const costRateRoutes = require("./costRate");
const facebookRoutes = require("./facebookLogin");

router.use("/image", imageRoutes);

router.use("/kontratado",kontratadoRoutes);

router.use("/costRate", costRateRoutes);

router.use("/v1/auth/facebook", facebookRoutes);


module.exports = router;