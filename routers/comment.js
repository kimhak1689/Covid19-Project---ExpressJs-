const router = require("express").Router();
const {
  create,
  list,
  update,
  deleteCom,
  listbynewid
}=require("../controllers/comment");
//check auto
const checkAuth = require("../middleware/auth");
const {checkUserLogin} = require("../middleware/auth_each");


router.get("/",list);
router.get("/:id",listbynewid);
router.post("/",create);
router.put("/:id",update);
router.delete("/:id",deleteCom);

//
// router.get("/",list);
// router.get("/:id",listbynewid);
// router.post("/",checkAuth,checkUserLogin,create);
// router.put("/:id",checkAuth,checkUserLogin,update);
// router.delete("/:id",checkAuth,checkUserLogin,deleteCom);


module.exports= router;