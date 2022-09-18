const express = require('express')
const router = express.Router()
const bikeController = require('../controllers/bike') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, bikeController.getBike)

router.post('/createBike', todosController.createBike)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteBike', bikeController.deleteTodo)

module.exports = router