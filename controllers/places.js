const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'CSS BBQ',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Korean BBQ',
        pic: '/images/bbq-rest.jpg'
      }, {
        name: 'Smoking Java',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Southern BBQ',
        pic: '/images/smoker.jpg'
      }]
          res.render('places/index', { places })
});

router.get('/new', (req, res) => {
    res.render('places/new')
})



module.exports = router
