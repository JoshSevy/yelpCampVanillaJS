const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const CampGroundSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String
});

module.exports = mongoose.model('Campground', CampGroundSchema);