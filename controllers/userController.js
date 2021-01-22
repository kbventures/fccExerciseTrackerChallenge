const mongoose = require('mongoose');
const UserModel = require('../models/user');

module.exports = {
    createUser: async(user) => {
        const newUser = new UserModel({
            _id: new mongoose.Types.ObjectId(),
            name: user
        })
       
        try{
            const newUserSaved = await newUser.save();
            return newUserSaved; 
        } catch (error){
            throw error
        }
    
    },
    getAllUsers: async()=>{
        try{
            const usersList = await UserModel.find({});
            return usersList;
        } catch(error){
            console.log(error);
            throw error
        }

    }

}