const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/orders"
router.route("/")
    .get(ordersController.findAll)
    .post(ordersController.create);

router
    .route("/:id")
    .get(ordersController.findById)
    .put(ordersController.update)
    .delete(ordersController.remove);

module.exports = router;
