const router = require('express').Router()
const places = require('../models/places.js')



router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })

//DELETE ROUTE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        console.log('DELETEerror1')
      res.render('error404')
    }
    else if (!places[id]) {
        console.log('DELETEerror2')
      res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
  })
  

  // PUT ROUTE
  router.put('/:id/', (req, res) => {
    let id = Number(req.params.id)
           console.log(req.body)

    if (isNaN(id)) {
        res.render('error404')
        console.log('PUTerror1')
    }
    else if (!places[id]) {
        console.log('PUTerror2')
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`) 
    }
  })
  
  
//EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        console.log('EDITerror1')
        res.render('error404')
    }
    else if (!places[id]) {
        console.log('EDITerror2')
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id] })
    }
  })
  
  router.get('/', (req, res) => {
    res.render('places/index', { places })
});  

//   SHOW ROUTE
  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        console.log('SHOWerror1')
        res.render('error404')
    }
    else if (!places[id]) {
        console.log('SHOWerror2')
        res.render('error404')
    }
    else {
        res.render('places/show', {place: places[id], id})

    }
  })
  
module.exports = router
