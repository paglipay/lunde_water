const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/orders"
router.route("/")
    // .get((req, res) => {
    //     return (res.json(
    //         { message: "hello World" }
    //     )
    //     )
    // })
    .get(ordersController.findAll)
    .post(ordersController.create);



router
    .route("/:id")
    .get(ordersController.findById)
    .put(ordersController.update)
    .delete(ordersController.remove);



module.exports = router;
