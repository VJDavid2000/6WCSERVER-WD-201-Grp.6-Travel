/*
Name: David, Vincent Jericho C.
WD-201 (GROUP 6)
*/

const express = require('express');
const travelRoute = express.Router();

let TravelModel = require('../models/Travel');
travelRoute.route('/create-travel').post((req, res, next) => {
  TravelModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

travelRoute.route('/').get((req, res, next) => {
    TravelModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

travelRoute.route('/edit-travel/:id').get((req, res, next) => {
   TravelModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

travelRoute.route('/update-travel/:id').put((req, res, next) => {
  TravelModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Your Travel Log Has Finally Updated!')
    }
  })
})

travelRoute.route('/delete-travel/:id').delete((req, res, next) => {
  TravelModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = travelRoute;
