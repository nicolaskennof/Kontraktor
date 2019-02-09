const router = require("express").Router();
const imageRoutes = require("./image");
const kontratadoRoutes = require("./kontratado");
const costRateRoutes = require("./costRate");
const review = require("./review");
const message = require ("./message");
const qualityRate = require ("./qualityRate");
const hire = require ("./hire");
const favouriteRoutes = require("./favourite");;
const facebookRoutes = require("./facebookLogin");
const stateRoutes = require("./state");
const professionRoutes = require("./profession");
const kontratadoLoginRoutes = require("./kontratadoLogin");


router.use("/image", imageRoutes);
router.use("/kontratado",kontratadoRoutes);
router.use("/costRate", costRateRoutes);
router.use("/review", review);
router.use("/message", message);
router.use("/qualityRate", qualityRate);
router.use("/hire", hire);
router.use("/v1/auth/facebook", facebookRoutes);
router.use("/favourite", favouriteRoutes);
router.use("/state", stateRoutes);
router.use("/profession", professionRoutes);
router.use("/login", kontratadoLoginRoutes);


module.exports = router;