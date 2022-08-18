const router = require("express").Router();
const {
  create,
  list,
  update,
  deleteNews,
  RecoverNews,
  listClient,
  listClientById,
  clientCreate
}=require("../controllers/news");
const checkAuth = require("../middleware/auth");
const {checkUserLogin} = require("../middleware/auth_each");

const multer  = require('multer');
var storage = multer.diskStorage({   
  destination: function(req, file, cb) { 
     cb(null, './uploads');    
  }, 
  filename: function (req, file, cb) { 
     cb(null , Date.now()+file.originalname);   
  }
});

const upload = multer({
  storage: storage,
  limits : {fileSize : 1000000}
});

//admin part
router.get("/",list);
router.post("/",upload.single("image"),create);
router.put("/:id",upload.single("image"),update);
router.delete("/:id",deleteNews);
router.put("/recover/:id",RecoverNews);

//client part
router.get("/client",listClient);
router.get("/client/:id",listClientById);
router.post("/client",clientCreate);



//// ៊authentication
// router.get("/",checkAuth,checkUserLogin,list);
// router.post("/",checkAuth,checkUserLogin,upload.single("image"),create);
// router.put("/:id",checkAuth,checkUserLogin,upload.single("image"),update);
// router.delete("/:id",checkAuth,checkUserLogin,deleteNews);
// router.put("/recover/:id",checkAuth,checkUserLogin,RecoverNews);



module.exports= router;


