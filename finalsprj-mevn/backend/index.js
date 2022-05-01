/*
Name: David, Vincent Jericho C.
WD-201 (GROUP 6)
*/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose
  .connect('mongodb://127.0.0.1:27017/MyDb')
  .then((x) => {
    console.log(`MongoDB Connected! Database Name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('MongoDB Connection Have An Unlikely Error', err.reason)
  })
const travelAPI = require('../backend/routes/travel.route')

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())

app.use('/api', travelAPI)

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Port Connected On ' + port)
})

app.use((req, res, next) => {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
