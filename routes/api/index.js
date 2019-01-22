const router = require("express").Router();
const imageRoutes = require("./image");

router.use("/image", imageRoutes);

module.exports = router;