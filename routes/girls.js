const express = require('express')
const router = express.Router()
const Girl = require('../models/girls')


//read
router.get('/girls', (req, res, next) => {
    console.log('route GET')
    Girl.find().then(girl => {
        //console.log(girl)
        res.send(girl)
    })
})

//create
router.post('/girls', (req, res, next) => {
    console.log('route POST')
    console.log(req.body)
    Girl.create(req.body)
        .then(girl => {
            res.send(girl)
        })
        .catch(next)
})

//update
router.put('/girls/:id', (req, res, next) => {
    console.log('route PUT')
    Girl.findByIdAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(() => {
            Girl.findOne({
                    _id: req.params.id
                })
                .then(girl => {
                    res.send(girl)
                })
        })
})

//delete
router.delete('/girls/:id', (req, res, next) => {
    console.log('route DELETE')
    Girl.findByIdAndRemove({
            _id: req.params.id
        })
        .then(girl => {
            res.send(girl)
        })
})

module.exports = router
