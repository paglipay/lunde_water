const router = require("express").Router();
const profilesController = require("../../controllers/profilesController");

// Matches with "/api/profiles"
router.route("/")
    .get(profilesController.findAll)
    .post(profilesController.create);

router
    .route("/:id")
    .get(profilesController.findById)
    .put(profilesController.update)
    .delete(profilesController.remove);

module.exports = router;
