const router = require("express").Router();
const Contact = require("../model/contact");
//check auto
const checkAuth = require("../middleware/auth");
const { checkUserLogin } = require("../middleware/auth_each");


router.post("/", async (req, res) => {
  const { name, email, contactno, message } = req.body;
  const Contact_data = new Contact({
    name: name,
    email: email,
    contactno: contactno,
    message: message,
    create_by: '6285a52b357e727b1e95d074',
  });

  const contact_new = await Contact_data.save();
  if (contact_new) {
    res.status(201).json({ msg: 'success' });
  } else {
    res.status(400).json({ msg: 'error', message: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const getting = await Contact.find({ status: true });
    res.json({ msg: 'success', datas: getting });
  } catch (error) {
    console.log(error);
    res.json({ msg: 'error', error: error });
  }
});


//control can comment only 2 in one post

module.exports = router;