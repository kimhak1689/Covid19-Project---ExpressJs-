const User = require('../model/user');
//for encrypt
const bcrypt = require('bcryptjs');

//token
const jwt = require("jsonwebtoken");
const store = require('store2');

const register = async (req, res) => {

  const username = req.body.username;
  try {
    const userExist = await User.findOne({ username: username, email: req.body.email });
    if (userExist) {
      res.status(400).json({ msg: 'success', command: 'Username or Your Email is already exits' });
    } else {
      //encryp password
      const hashPass = await bcrypt.hash(req.body.password, 12);

      var role = '62a9f4c329a305b3252724a1';
      if (req.body.role) {
        role = req.body.role;
      }

      const user = new User({
        username: req.body.username,
        password: hashPass,
        email: req.body.email,
        phone: req.body.phone,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        role: role,
      });

      try {
        await user.save();
        res.status(201).json({ msg: 'success', command: "Your Register Success" });

      } catch (err) {
        res.status(500).json({ msg: 'error', message: err.message });
      }

    }

  } catch (err) {
    res.status(500).json({ msg: 'error', message: err.message });
  }

}

const login = async (req, res) => {

  const { username, password } = req.body;

  try {
    const check = await User.findOne({ $or:[{ username: username, status: true},{ email: username, status: true}]}).populate('role');
    // const check_email= await User.findOne({ email: nameFind, status: true }).populate('role');

    if (check && check.status == true) {
      var info = check;
      //bcrypt 
      const checkPass = await bcrypt.compare(password, info.password);
      if (checkPass) {
       
          const token = await jwt.sign({ username: check.username, role: check.role }, process.env.SECRETE, { expiresIn: '8h' });
          store.set(process.env.SECRETE, token);
     
          res.status(200).json({ msg: 'success', command: 'Login success', role: check.role.name, user_id: check._id });
      
      } else {
        console.log("Password is false");
        res.json({ msg: 'Error', command: 'Wrong password' });
      }
    } else {
      console.log("Log in false");
      res.json({ msg: 'error', command: 'User account is not exists' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

}

const userinfo = async (req, res) => {
  try {
    const user = await User.find({status:true}).populate('role');
    if (user) {
      res.status(200).json({ msg: 'success', datas: user });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const changePassword = async (req, res) => {
  const { password, new_password } = req.body;
  var _id = req.params.id;
  const hashPass = await bcrypt.hash(new_password, 12);
  try {
    const where = { _id: _id, password: password };
    const setValue = { password: hashPass };
    const user = await User.updateOne(where, setValue);
    if (user) {
      res.status(200).json({ msg: 'success', command: 'Already update' });
    } else {
      res.status(500).json({ msg: 'success', command: 'Error' });
    }
  } catch (err) {
    res.status(500).json({ msg: 'success', message: err.message });
  }
}

const updateUSer = async (req, res) => {
  var id = req.params.id;
  const { username, phone, first_name, last_name, email } = req.body;

  try {
    const edit_user = await User.findById(id);

    edit_user.username = username;
    edit_user.phone = phone;
    edit_user.first_name = first_name;
    edit_user.last_name = last_name;
    edit_user.email = email;
    var role = '62a9f4c329a305b3252724a1';
    if (req.body.role) {
      role = req.body.role;
      edit_user.role = role;
    }
    await edit_user.save();

    res.status(200).json({ msg: 'success', command: "Edit success" });

  } catch (error) {
    res.json({ msg: 'error', command: "Errors" });
  }
}

const deleteUser = async (req, res) => {
  var id = req.params.id;
  try {
    const where = { _id: id };
    const setValue = { status: false };
    const user = await User.updateOne(where, setValue);
    if (user) {
      res.status(200).json({ msg: 'success', command: 'Already Delete User.' });
    } else {
      res.status(200).json({ msg: 'error', command: 'Error' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const logout = async (req, res) => {
    store.clear();
    res.json({ msg: 'success'})
}


module.exports = {
  register,
  login,
  userinfo,
  changePassword,
  deleteUser,
  updateUSer,
  logout
}

