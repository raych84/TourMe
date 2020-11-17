const router = require("express").Router();
const savedRoutes = require("./saved");

// Saved Tours routes
router.use("/saved", savedRoutes);

module.exports = router;
