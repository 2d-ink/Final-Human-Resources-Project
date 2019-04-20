const router = require("express").Router();
const addUser = require("../../controllers/UserController");

router.route("/")
    .get(addUser.findAll)
    .post(addUser.create);
router
    .route("/:id")
    .get(addUser.findById)
    .put(addUser.update)
    .delete(addUser.remove);

module.exports = router;
