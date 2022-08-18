const router = require("express").Router();

const {
  create,
  list,
  listClient,
  update,
  deletefaq,
  recoverfaq,
  admincreate,
  listbyid,
  listClientByType
}=require("../controllers/faq");
const checkAuth = require("../middleware/auth");
const {checkUserLogin} = require("../middleware/auth_each");

router.get("/",list);
router.get("/client",listClient);
router.get("/client/:typeid",listClientByType);
router.get("/:id",listbyid);

router.post("/",create);
router.post("/admin",admincreate);
router.put("/:id",update);
router.delete("/:id",deletefaq);
router.put("/recover/:id",recoverfaq);

// //authentication
// router.post("/",checkAuth,checkUserLogin,create);
// router.post("/admin",checkAuth,checkUserLogin,admincreate);
// router.put("/:id",checkAuth,checkUserLogin,update);
// router.delete("/:id",checkAuth,checkUserLogin,deletefaq);
// router.put("/recover/:id",checkAuth,checkUserLogin,recoverfaq);



module.exports= router;

