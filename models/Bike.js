const mongoose = require('mongoose')

const BikeSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  frameMaterial: {
    type: String,
    required: true,
  },
  wheelSize: {
    type: Number,
    required: true,
  },
  frontTravel: {
    type: Number,
    required: true,
  },
  rearTravel: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: false,
  },
  headTubeAngle: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Bike', BikeSchema)
