const mongoose = require('mongoose')

const TypeFaqSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, 'must provide question'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status:{
    type: Boolean,
    default:true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  create_by:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  create_at:{
    type: Date,
		default: Date.now,
  },
  versionKey: false 
})

module.exports = mongoose.model('Typefaq', TypeFaqSchema)
