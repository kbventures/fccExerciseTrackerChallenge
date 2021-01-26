const mongoose = require('mongoose');


const userSchemaLog = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String, required: true},
    log:[{type:mongoose.Schema.ObjectId, ref: 'exercises'}]
})

module.exports= mongoose.model('UserLog', userSchemaLog);