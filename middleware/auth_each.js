const checkBeforeLogout = (req,res,next)=>{
  if(req.user){
      //  console.log(req.user);
      return next();
  }else{
    return res.status(401).send("Attem to sign out fial.");
  }
}

const checkBeforeLogin = (req,res,next)=>{
    if(!req.user){
      return next();
    }else{
      return res.status(401).send("You cannot sign in again. Please sign out before sign in again.");
    }
}

const checkUserLogin= (req,res,next)=>{
  if(req.user){
    console.log('User');
    return next();
  }else{
    return res.status(401).send("You cannot access this page. PLease log in.");
  }
}

const checkAdminLogin= (req,res,next)=>{
  if(req.user.role.name == "Admin"){
    console.log('Admin Login');
    return next();
  }else{
    return res.status(401).send("You cannot do this actions.");
  }
}

module.exports = {checkUserLogin,checkBeforeLogout,checkBeforeLogin,checkAdminLogin};