const router = require("express").Router();
const {
  addFavorite,
  RemoveFavorite,
  listAll,
  listfavoteUserid
}=require("../controllers/favorite");
//check auto
const checkAuth = require("../middleware/auth");
const {checkUserLogin} = require("../middleware/auth_each");


router.get("/",listAll);
router.get("/:id",listfavoteUserid);
router.post("/",addFavorite);
router.delete("/:userid/:newsid",RemoveFavorite);


// router.get("/",checkAuth,checkUserLogin,listAll);
// router.get("/:id",checkAuth,checkUserLogin,listfavoteUserid);
// router.post("/",checkAuth,checkUserLogin,addFavorite);
// router.delete("/:userid/:newsid",checkAuth,checkUserLogin,RemoveFavorite);

module.exports= router;