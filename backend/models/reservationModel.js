const mongoose = require('mongoose')

reservationSchema = mongoose.Schema({
    userName:{
        type:String,
        required: [true, 'name required']
    },
    bookName:{
        type:String,
        required: [true, 'book name required']
    },
    reservedUntil:{
        type: Date,
        required:[true, 'absolutely need a reservationDate']
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})



module.exports = mongoose.model('Reservation', reservationSchema)
