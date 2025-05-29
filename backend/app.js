const express = require('express')
const reservationRouter = require('./routes/reservationRouter')



const app = express()
app.use(express.json())
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.use('/api/v0/reservation', reservationRouter)

module.exports = app