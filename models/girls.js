const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GirlSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Name field is required']
    },
    rank:{
        type:String
    },
    available:{
        type: Boolean,
        default:false
    }
})

const Girl = mongoose.model('girl', GirlSchema)

module.exports = Girl