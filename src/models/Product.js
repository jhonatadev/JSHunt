const mongoose = require('mongoose')
const mongoosPaginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  }
})

ProductSchema.plugin(mongoosPaginate)

mongoose.model("Product", ProductSchema)