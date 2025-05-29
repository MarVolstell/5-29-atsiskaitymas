const Reservation = require('../models/reservationModel')

exports.getReservations = async (req, res)=>{
    try {
        const Reservations = await Reservation.find()

        res.status(200).json({
            status: 'success',
            results: Reservations.length,
            data: {Reservations}
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }
}

exports.getReservation = async (req, res)=>{
    try {
        const reservations = await Reservation.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {reservations}
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }
}

exports.createReservation = async (req, res)=>{
    try {
        const reservation = await Reservation.create(req.body)
            res.status(200).json({
            status: 'success',
            data: {reservation}
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }
}

exports.updateReservation = async (req, res)=>{
        try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        });
            res.status(200).json({
            status: 'success',
            data: {Reservation}
        })
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            error: error.message
        })
    }
}

exports.deleteReservation = async (req, res)=>{
        try {
        await reservation.findByIdAndDelete(req.params.id);
            res.status(200).json({
            status: 'success',
            data: null
        })
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            error: error.message
        })
    }
}