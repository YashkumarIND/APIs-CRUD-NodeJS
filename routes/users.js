const router=require("express").Router();
const users_controller = require('../controllers/users_controller.js');

//define different routes
router.post("/",users_controller.users_add);
router.put("/:userID",users_controller.users_update);
router.get("/:userID",users_controller.users_any);
router.delete("/:userID",users_controller.users_delete);
router.get("/",users_controller.users_all);

module.exports = router;