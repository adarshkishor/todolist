const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3001
const userRoute = require('./routes/user.routes')
const mongoose = require('mongoose')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/users',userRoute)
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log('Database connections succesful')
    }
    )
    .catch(err => {
        console.error(err)
        console.error('Database connection error')
    }
    )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})