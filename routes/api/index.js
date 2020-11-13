const router = require("express").Router();
const searchRoutes = require("./search");

// Tours routes
router.use("/search", searchRoutes);

module.exports = router;
