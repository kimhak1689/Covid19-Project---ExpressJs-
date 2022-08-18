const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'must provide title'],
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "typefaq",
  },
  resource: {
    type: String,
  },
  description: {
    type:String,
    require: [true, 'must provide Description']
  },
  date: {
    type: Date,
    default: Date.now
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
  image:{
    type:String,
  },
  versionKey: false 
})

module.exports = mongoose.model('News', newsSchema)
