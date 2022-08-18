const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'must provide Your name']
  },
  email:{
    type: String,
    required: [true, 'must provide Your email']
  },
  contactno:{
    type: String,
    required: [true, 'must provide Your info']
  },
  message:{
    type: String,
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

module.exports = mongoose.model('Contact', contactSchema)
