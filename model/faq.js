const mongoose = require('mongoose')

const FaqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'must provide question'],
    trim: true,
  },
  answer: {
    type: String,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "typefaq",
  },
  resource: {
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
  client_view:{
    type: Boolean,
  },
  versionKey: false 
})

module.exports = mongoose.model('Faq', FaqSchema)
