const express = require('express')
const passport = require('passport')

// Require model:
const Food = require('../models/food')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX:
router.get('/foods', requireToken, (req, res, next) => {
  Food.find({ owner: req.user.id })
    .then(foods => {
      return foods.map(food => food.toObject())
    })
    .then(foods => res.status(200).json({ foods: foods }))
    .catch(next)
})

// SHOW:
router.get('/foods/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  Food.findById(id)
    .then(handle404)
    .then(food => res.status(200).json({ food: food.toObject() }))
    .catch(next)
})

// CREATE:
router.post('/foods', requireToken, (req, res, next) => {
  req.body.food.owner = req.user.id

  // Accept data from request:
  const food = req.body.food
  Food.create(food)
    .then(food => {
      res.status(201).json({ food: food.toObject() })
    })
    .catch(next)
})

// UPDATE:
router.patch('/foods/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.food.owner
  const id = req.params.id
  const data = req.body.food
  Food.findById(id)
    .then(handle404)
    .then(food => {
      requireOwnership(req, food)
      return food.updateOne(data)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// destroy:
router.delete('/foods/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  Food.findById(id)
    .then(handle404)
    .then(food => {
      requireOwnership(req, food)
      food.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
