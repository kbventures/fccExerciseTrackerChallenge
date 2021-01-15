const { Mongoose } = require('mongoose');
const User = require('../models/user');



module.exports = {
    createUser: async(user) => {
        const user = new User({
            _id: new Mongoose.Types.ObjectId();
            name: user
        })
       
        try{
            const newUser = await user.save();
            return newUser; 
        } catch (error){
            throw error
        }
    
    }

}