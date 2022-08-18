const Faq = require("../model/faq");
const Typefaq = require("../model/type_faq");

const admincreate = async(req,res)=>{
  const {question,answer,resource,typefaq_id} = req.body;
  
  //create by will get from token
    const new_data = new Faq({
      question:question,
      answer:answer,
      type:typefaq_id,
      resource:resource,
      create_by:'6285a52b357e727b1e95d074',
      client_view:true,
    });

    try {
      //save comment to table comments
      const newFaq = await new_data.save();
      //check if cannot save
      if(newFaq){
        res.status(201).json({msg:'success'});
      }else{
        res.status(400).json({msg:'error'});
      }
   
    } catch (err) {
      res.status(500).json({msg:'error', message: err.message });
    }

}
const create = async(req,res)=>{
  const {question,user_id} = req.body;


    const new_data = new Faq({
      question:question,
      create_by:user_id,
      client_view:false,
    });

    try {
      //save comment to table comments
      const newFaq = await new_data.save();
      //check if cannot save
      if(newFaq){
        res.status(201).json({msg:'success'});
      }else{
        res.status(400).json({msg:'error'});
      }
   
    } catch (err) {
      res.status(500).json({msg:'error', message: err.message });
    }

}
const update = async(req,res)=>{
  var id = req.params.id;
  const {question,answer,resource,typefaq_id} = req.body;

  try {
    const edit_faq = await Faq.findById(id);

    if(edit_faq){
      edit_faq.question=question;
      edit_faq.answer=answer;
      edit_faq.type=typefaq_id;
      edit_faq.resource=resource;
      edit_faq.client_view= true;

      await edit_faq.save();
      res.status(200).json({ msg:'success', command: "Edit success" });
    }else{
      res.status(400).json({ msg:'error', command: "Cannot Edit" });
    }

  } catch (error) {
    res.json({ msg:'error',command:"Errors"});
  }
  
}
const deletefaq = async (req,res)=>{
  var id = req.params.id;
  try {
    const where = {_id:id};
    const setValue = {status:false};
    const DeleteFaq = await Faq.updateOne(where,setValue);
    if(DeleteFaq){
        res.status(200).json({msg:'success',command:'Already Delete.'});
    }else{
       res.status(200).json({msg:'error',command:'Error'});
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
const recoverfaq = async (req,res)=>{
  var id = req.params.id;
  try {
    const where = {_id:id};
    const setValue = {status:true};
    const DeleteFaq = await Faq.updateOne(where,setValue);
    if(DeleteFaq){
        res.status(200).json({msg:'success',command:'Already Recover.'});
    }else{
       res.status(200).json({msg:'error',command:'Error'});
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const list = async (req,res)=>{
  try {
    const getting = await Faq.find({status:true}).populate([
            {
                path: 'create_by',
                model: 'User'
            }, 
            {
                path: 'type',
                model: 'Typefaq'
            }
    ]);
    res.json({ msg: 'success', datas: getting });
  } catch (error) {
    res.json({ msg: 'error', error: error });
  }
}
const listClient = async (req,res)=>{
  try {
    const getting = await Faq.find({client_view:true,status:true}).populate('create_by');
    res.json({ msg: 'success', datas: getting });
  } catch (error) {
    res.json({ msg: 'error', error: error });
  }
}
const listClientByType = async (req,res)=>{
  var typeid = req.params.typeid;
  try {
    const getting = await Faq.find({client_view:true,status:true,type:typeid}).populate('create_by');
    res.json({ msg: 'success', datas: getting });
  } catch (error) {
    res.json({ msg: 'error', error: error });
  }
}
const listbyid = async (req,res)=>{
  var id = req.params.id;
  try {
    const getting = await Faq.findById(id).populate('create_by');
    res.json({ msg: 'success', datas: getting });
  } catch (error) {
    res.json({ msg: 'error', error: error });
  }
}

module.exports={
  create,
  list,
  listClient,
  update,
  deletefaq,
  listbyid,
  recoverfaq,
  admincreate,
  listClientByType
}