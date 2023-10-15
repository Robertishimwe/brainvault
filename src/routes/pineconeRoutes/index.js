const { Router } = require("express");
const uploadRoutes = require("./uploadRoutes");
const askRoutes = require("./askRoutes");

const router = Router();

router.use("/upload", uploadRoutes);
router.use("/ask", askRoutes);

module.exports = router;
