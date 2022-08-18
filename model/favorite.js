const mongoose = require('mongoose')

const FavoriteSchema = new mongoose.Schema({
  create_by:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  create_at:{
    type: Date,
		default: Date.now,
  },
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "news",
  },
  versionKey: false 
})

module.exports = mongoose.model('favorite', FavoriteSchema)
