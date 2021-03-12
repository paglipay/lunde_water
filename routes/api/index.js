const router = require("express").Router();
const path = require('path');
const authRoutes = require('./auth');
const userRoutes    = require('./users');
const orderRoutes = require("./orders");
const profileRoutes = require("./profiles");
const stripeRoutes = require("./stripe");

router.use('/auth', authRoutes);
router.use("/orders", orderRoutes);
router.use("/profiles", profileRoutes);
router.use("/invoices", stripeRoutes);
router.use("/stripe", stripeRoutes);
router.use("/users", userRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
