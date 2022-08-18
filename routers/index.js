const router = require("express").Router();
//require another route
const news = require("./news");
const user = require("./user");
const comment= require("./comment");
const typefaq = require("./type_faq");
const faq = require("./faq");
const role = require('./role');
const contact = require("./contact");
const favorite = require("./favorite");

router.use("/user",user);
router.use("/news",news);
router.use("/comment",comment);
router.use("/typefaq",typefaq);
router.use("/faq",faq);
router.use("/role",role);
router.use("/contact",contact);
router.use("/favorite",favorite);


module.exports = router;