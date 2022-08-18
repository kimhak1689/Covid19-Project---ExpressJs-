const jwt = require("jsonwebtoken");
const store = require("store2")
require("dotenv").config();

const verifyToken = (req, res,next) => {
  const token = store.get(process.env.SECRETE);
  // console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.SECRETE);
    req.user = decoded;

  } catch (e) {}
  return next();
};
module.exports = verifyToken
