const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description: {type:String, required: true},
    duration: {type: Number, required: true},
    date: Date
})

module.exports= mongoose.model('Exercise', exerciseSchema);