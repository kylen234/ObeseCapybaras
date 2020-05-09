// Require Express Router
const router = require("express").Router();

// Require Routes here.
const employeeRoutes = require('./employees');
const reviewRoutes = require('./reviews');

// Use Routes
// Employee Routes
router.use("/collection2", employeeRoutes);

// Review Routes
router.use("/reviews", reviewRoutes);

// Export Router
module.exports = router;