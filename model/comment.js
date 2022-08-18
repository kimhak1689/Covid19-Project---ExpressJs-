const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text:{
    type: String,
    required: [true, 'must provide Your comment']
  },
  status:{
    type: Boolean,
    default:true
  },
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

module.exports = mongoose.model('Comment', commentSchema)
