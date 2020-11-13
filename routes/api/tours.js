const router = require("express").Router();
const toursController = require("../../controllers");

router.route("/")
.get(toursController.findAll)
.post(toursController.create);


router
  .route("/:id")
  .get(toursController.findById)
  .put(toursController.update)
  .delete(toursController.remove);

module.exports = router;