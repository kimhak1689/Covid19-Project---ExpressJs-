const Role = require("../model/role");

const create = async(req,res)=>{
  const {name,description} = req.body;

  const news_data = new Role({
    name:name,
    description:description,
  });

  const role_create = await news_data.save();
  if(role_create){
    res.status(201).json({msg:'success'});
  }else{
    res.status(400).json({msg:'error', message: err.message });
  }

}
const list = async(req,res)=>{
    try {
      const getting = await Role.find({status:true});
      if(getting){
        res.json({ msg: 'success', datas: getting });
      }else{
        res.json({ msg: 'error', error: error });
      }
      
    } catch (error) {
      res.json({ msg: 'error', error: error });
    }
  
}

const update = async(req,res)=>{
  var id = req.params.id;
  const {name,description} = req.body;

  try {
    const edit_role = await Role.findById(id);

    edit_role.name = name;
    edit_role.description = description;
    await edit_role.save();

    res.status(200).json({ msg:'success', command: "Edit success" });

  } catch (error) {
    res.json({ msg:'error',command:"Errors"});
  }
}

const deleteRole = async (req,res)=>{
  var id = req.params.id;
  try {
    const where = {_id:id};
    const setValue = {status:false};
    const delete_Role = await Role.updateOne(where,setValue);
    if(delete_Role){
        res.status(200).json({msg:'success',command:'Already Delete.'});
    }else{
       res.status(200).json({msg:'error',command:'Error'});
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
const recoverRole = async (req,res)=>{
  var id = req.params.id;
  try {
    const where = {_id:id};
    const setValue = {status:true};
    const recover_role= await Role.updateOne(where,setValue);
    if(recover_role){
        res.status(200).json({msg:'success',command:'Already recovered.'});
    }else{
       res.status(200).json({msg:'error',command:'Error'});
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports={
  create,
  list,
  update,
  deleteRole,
  recoverRole
}