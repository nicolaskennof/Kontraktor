const router = require("express").Router();
const imageRoutes = require("./image");
const kontratadoRoutes = require("./kontratado");
const costRateRoutes = require("./costRate");
const review = require("./review");
const message = require ("./message");
const qualityRate = require ("./qualityRate");
const hire = require ("./hire")


router.use("/image", imageRoutes);
router.use("/kontratado",kontratadoRoutes);
router.use("/costRate", costRateRoutes);
router.use("/review", review);
router.use("/message", message);
router.use("/qualityRate", qualityRate);
router.use("/hire", hire);


module.exports = router;