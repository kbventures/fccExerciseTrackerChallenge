const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{type:String, required: true, unique: true},
    log: [{description: String, duration:String, date: String}]
})


module.exports= mongoose.model('User', userSchema);


