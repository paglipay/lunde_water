const router = require("express").Router();
const path          = require('path');
const authRoutes    = require('./auth');
const orderRoutes = require("./orders");
const stripeRoutes = require("./stripe");

router.use('/auth', authRoutes);
router.use("/orders", orderRoutes);
router.use("/stripe", stripeRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;