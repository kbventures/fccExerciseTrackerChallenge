const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String, required: true, unique: true},
    log: [{desription: String, duration:String, date: Date}]
})


module.exports= mongoose.model('User', userSchema);


