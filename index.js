const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const girlsRoutes = require('./routes/girls')
const db = require('./db')

var cors = require('cors')



const app = express()

app.use(cors())

//connect to mongodb
mongoose.connect(db.url)

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
});


app.use(express.static('public'))

app.use(bodyParser.json())

app.use('/', girlsRoutes)

//error handling middleware
app.use((err, req, res, next) => {

    res.status(422).send({
        error: err.errors.name.message
    })
})

const serverPort = 3000;
const port = process.env.PORT || serverPort;

app.listen(port, () => {
    console.log('App started, now listening for requests')
})