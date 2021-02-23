const router = require("express").Router();
const orderRoutes = require("./orders");
const stripeRoutes = require("./stripe");


// Appointments routes
router.use("/orders", orderRoutes);
router.use("/stripe", stripeRoutes);


module.exports = router;
