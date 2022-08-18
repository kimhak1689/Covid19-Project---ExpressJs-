const TypeFaq = require("../model/type_faq");

const create = async(req,res)=>{
  const {type,description,creator_id} = req.body;

  const news_data = new TypeFaq({
    type:type,
    description:description,
    create_by:creator_id,
  });

  const faq_create = await news_data.save();
  if(faq_create){
    res.status(201).json({msg:'success'});
  }else{
    res.status(400).json({msg:'error', message: err.message });
  }

}
const list = async(req,res)=>{
    try {
      const getting = await TypeFaq.find({status:true}).populate('create_by');;

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
  const {type,description} = req.body;

  try {
    const edit_typefaq = await TypeFaq.findById(id);

    edit_typefaq.type = type;
    edit_typefaq.description = description;
    await edit_typefaq.save();

    res.status(200).json({ msg:'success', command: "Edit success" });

  } catch (error) {
    res.json({ msg:'error',command:"Errors"});
  }
}

const deletetypefaq = async (req,res)=>{
  var id = req.params.id;
  try {
    const where = {_id:id};
    const setValue = {status:false};
    const delete_typefaq = await TypeFaq.updateOne(where,setValue);
    if(delete_typefaq){
        res.status(200).json({msg:'success',command:'Already Delete News.'});
    }else{
       res.status(200).json({msg:'error',command:'Error'});
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
const recovertypefaq = async (req,res)=>{
  var id = req.params.id;
  try {
    const where = {_id:id};
    const setValue = {status:true};
    const recover_typefaq = await TypeFaq.updateOne(where,setValue);
    if(recover_typefaq){
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
  deletetypefaq,
  recovertypefaq
}