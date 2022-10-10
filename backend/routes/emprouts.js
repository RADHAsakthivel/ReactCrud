const mongoose= require('mongoose')
const express = require('express')
const router = express.Router()

let employeeSchema = require('../Models/Employee')
const { application } = require('express')


// POST method handler
router.route('/create-employee').post((req,res,next)=>{
    employeeSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log("data=>",data)
            res.json(data)
        }
    })
})

// GET method handler
router.route('/').get((req,res)=>{
    employeeSchema.find((error,data)=>{
        if(error){
            return next (error)
        }else{
            res.json(data)
        }
    })
})

// Put method
// router.route('/:id').put((req,res)=>{
//     employeeSchema.find((error,data)=>{
//         if(error){
//             return next (error)
//         }else{
//             res.json(data)
//         }
//     })
// })

// DELETE method
// router.delete('http://localhost:8000/emp/delete-employee', (req, response) => {
//     let itemId = req.body._id;
//     console.log("itemId=>",itemId)
//     employeeSchema.findByIdAndRemove(itemId, function(err){
//         if(err){
//             response.send("/Could not delete the item...");
//         } else {
//             response.send("/Expenses and amount item was deleted succesfully...");
//         }
//      });
// });

module.exports = router