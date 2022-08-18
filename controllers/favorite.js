const Favorite = require("../model/favorite");


const addFavorite = async (req, res) => {
  const { news_id, user_id } = req.body;


  const Favorite_Data = new Favorite({
    news: news_id,
    create_by: user_id,
  });
  try {
    //save comment to table comments
    const newFavorite = await Favorite_Data.save();
    //check if cannot save
    if (newFavorite) {
      res.status(201).json({ msg: 'success' });
    } else {
      res.json({ msg: 'error' });
    }
  } catch (err) {
    res.json({ msg: 'error', message: err.message });
  }

}

const RemoveFavorite = async (req, res) => {

  const news_id = req.params.newsid;
  const user_id = req.params.userid;
  if (news_id && user_id) {
    try {
      const deleteFavorite = await Favorite.deleteOne({ "news": news_id, "create_by": user_id });
      if (deleteFavorite) {
       // console.log("success");
        res.status(200).json({ msg: 'success', command: 'Already Unfavorite Comments.' });
      } else {
        console.log("error");
        res.status(200).json({ msg: 'error', command: 'Error' });
      }
    } catch (err) {
      console.log(err);
      res.json({ message: err.message });
    }
  }else{
    res.json({ msg: 'error', command: 'Error' });
  }

}

const listAll = async (req, res) => {
  try {
    const getting = await Favorite.find().populate([
      {
        path: 'create_by',
        model: 'User'
      },
      {
        path: 'news',
        model: 'News'
      }
    ]);
    res.json({ msg: 'success', datas: getting });
  } catch (error) {
    res.json({ msg: 'error', error: error });
  }
}
const listfavoteUserid = async (req, res) => {
  var id = req.params.id;
  
  try {
    const getting = await Favorite.find({create_by:id}).populate([
      {
        path: 'create_by',
        model: 'User'
      },
      {
        path: 'news',
        model: 'News'
      }
    ]);
    res.json({ msg: 'success', datas: getting });
  } catch (error) {
    res.json({ msg: 'error', error: error });
  }
}


module.exports = {
  addFavorite,
  RemoveFavorite,
  listAll,
  listfavoteUserid
}