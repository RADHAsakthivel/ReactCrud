const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8000

// Express data

const employeedata = require('../backend/routes/emprouts')


mongoose.connect('mongodb://0.0.0.0:27017/sakthivel')
.then((x)=>{
    console.log(`connected to mongo database: ${x.connections[0].name}`)
})
.catch((err)=>{
    console.log("errr connecting to Mongo", err)
})


//Middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))

app.use(cors())

// localhost:8000/emp/create-employee
app.use('/emp',employeedata)
console.log("employeedata=>",employeedata)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})