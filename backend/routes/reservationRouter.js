const Router = require('express').Router()
const reservationController = require('../controllers/reservationController')

Router.route('/').
post(reservationController.createReservation)

module.exports = Router