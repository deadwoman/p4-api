const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  altOption: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  veg: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Food', foodSchema)
