const router = require("express").Router();
const toursRoutes = require("./tours");

// Saved Tours routes
router.use("/tours", toursRoutes);

module.exports = router;
