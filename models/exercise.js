const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    
    description: {type:String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date}
})

//     date: {type: Date, default: new Date()}

module.exports= mongoose.model('Exercise', exerciseSchema);