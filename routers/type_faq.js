const router = require("express").Router();
const {
  create,
  list,
  update,
  deletetypefaq,
  recovertypefaq
}=require("../controllers/type_faq");

const checkAuth = require("../middleware/auth");
const {checkUserLogin} = require("../middleware/auth_each");

router.get("/",list);
router.post("/",create);
router.put("/:id",update);
router.delete("/:id",deletetypefaq);
router.put("/recover/:id",recovertypefaq);



// router.get("/",checkAuth,checkUserLogin,list);
// router.post("/",checkAuth,checkUserLogin,create);
// router.put("/:id",checkAuth,checkUserLogin,update);
// router.delete("/:id",checkAuth,checkUserLogin,deletetypefaq);
// router.put("/recover/:id",checkAuth,checkUserLogin,recovertypefaq);



module.exports= router;

