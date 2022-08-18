const router = require("express").Router();
const {
  create,
  list,
  update,
  deleteRole,
  recoverRole
}=require("../controllers/role");

const checkAuth = require("../middleware/auth");
const {checkUserLogin} = require("../middleware/auth_each");

router.get("/",list);
router.post("/",create);
router.put("/:id",update);
router.delete("/:id",deleteRole);
router.put("/recover/:id",recoverRole);


module.exports= router;

