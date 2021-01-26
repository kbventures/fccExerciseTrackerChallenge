const mongoose = require('mongoose');
const UserModel = require('../models/user');
const UserLogModel = require('../models/userLog');
const ExerciseModel = require('../models/exercise');

module.exports = {
    createUser: async(user) => {
        const newUser = new UserModel({
            _id: new mongoose.Types.ObjectId(),
            name: user,
            log:[]
        })
       
        try{
            const newUserSaved = await newUser.save();
            const _idAndNameOnly = {_id:newUserSaved._id, name: newUserSaved.name};
            return _idAndNameOnly; 

        } catch (error){
            throw error
        }
    
    },
    createExercise: async(exercise)=>{
        const newExercise = new ExerciseModel({
            _id: exercise.userId,
            description: exercise.description,
            duration: exercise.duration,
            date: exercise.date
        })

        try{
            const newExerciseSaved = await newExercise.save();
            return newExerciseSaved;
        } catch(error){
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
c
    }

}