const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)


// module.exports = [{
//     name: 'CSS BBQ',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Korean BBQ', s
//     pic: '/images/bbq-rest.jpg'
//   }, {
//     name: 'Smoking Java',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Southern BBQ',
//     pic: '/images/smoker.jpg'
//   }]

