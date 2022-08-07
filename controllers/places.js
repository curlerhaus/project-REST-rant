const router = require('express').Router()
const db = require('../models')
const places = require('../models/places.js')


router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router


// router.get('/new', (req, res) => {
//     res.render('places/new')
// })

// router.post('/', (req, res) => {
//     if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//       req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//       req.body.state = 'USA'
//     }
//     places.push(req.body)
//     res.redirect('/places')
//   })

// // PUT ROUTE
//   router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//            console.log(id)
//            console.log(req.body)
//            console.log(req.params.id)

//     if (isNaN(id)) {
//         res.render('error404')
//         console.log('PUTerror1')
//     }
//     else if (!places[id]) {
//         console.log('PUTerror2')
//         res.render('error404')
//     }
//     else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//             // Default image if one is not provided
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'USA'
//         }
  
//         // Save the new data into places[id]
//         places[id] = req.body
//         res.redirect(`/places/${id}`) 
//     }
//   })

// //DELETE ROUTE
// router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         console.log('DELETEerror1')
//       res.render('error404')
//     }
//     else if (!places[id]) {
//         console.log('DELETEerror2')
//       res.render('error404')
//     }
//     else {
//         places.splice(id, 1)
//         res.redirect('/places')
//     }
//   })
  

  
// //EDIT ROUTE
// router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         console.log('EDITerror1')
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         console.log('EDITerror2')
//         res.render('error404')
//     }
//     else {
//       res.render('places/edit', { place: places[id] })
//     }
//   })
  
//   router.get('/', (req, res) => {
//     res.render('places/index', { places })
// });  

// //   SHOW ROUTE
//   router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         console.log('SHOWerror1')
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         console.log('SHOWerror2')
//         res.render('error404')
//     }
//     else {
//         res.render('places/show', {place: places[id], id})

//     }
//   })
  
// module.exports = router
