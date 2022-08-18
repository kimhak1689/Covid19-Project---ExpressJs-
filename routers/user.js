const router = require("express").Router();
 const {
  register,
  login,
  userinfo,
  changePassword,
  deleteUser,
  updateUSer,
  logout
 } = require("../controllers/user");

 const checkAuth = require("../middleware/auth");
 const {checkUserLogin,checkBeforeLogout,checkBeforeLogin} = require("../middleware/auth_each");

router.get("/",userinfo);
router.get("/:id",userinfo);
router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.put("/changepassword/:id",changePassword);
router.delete("/delete/:id",deleteUser);
router.put("/information/:id",updateUSer);


//Authentication
// router.get("/",userinfo);
// router.get("/:id",userinfo);
// router.post("/register",register);
// router.post("/login",checkAuth,checkBeforeLogin,login);
// router.post("/logout",checkAuth,checkBeforeLogout,logout);
// router.put("/changepassword/:id",checkAuth,checkUserLogin,changePassword);
// router.delete("/delete/:id",checkAuth,checkUserLogin,deleteUser);
// router.put("/information/:id",checkAuth,checkUserLogin,updateUSer);


module.exports = router;