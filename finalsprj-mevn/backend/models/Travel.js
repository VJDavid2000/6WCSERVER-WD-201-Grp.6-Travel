/*
Name: David, Vincent Jericho C.
WD-201 (GROUP 6)
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let travelSchema = new Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  num: {
    type: Number
  },
  phone: {
    type: Number
  },
}, {
  collection: 'travels'
})
module.exports = mongoose.model('Travel', travelSchema)
