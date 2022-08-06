const db = require('../models')

db.Place.create([{
    name: 'CSS BBQ',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Korean BBQ',
    pic: '/images/bbq-rest.jpg',
    founded: 1989
  }, {
    name: 'Smoking Java',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Southern BBQ',
    pic: '/images/smoker.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})