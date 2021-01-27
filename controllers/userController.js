const mongoose = require('mongoose');
const UserModel = require('../models/user');
const UserLogModel = require('../models/userLog');
const ExerciseModel = require('../models/exercise');


module.exports = {
    createUser: async(req,res) => {
        
        const newUser = new UserModel({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.username,
            log:[]
        })
       
        try{
            const userExist = await UserModel.findOne({name: req.body.username})
            // if(userExist) return 'Username already taken';
            if(!userExist){
            console.log('doesnt exist');
            const newUserSaved = await newUser.save();
            const _idAndNameOnly = { username: newUserSaved.name,_id:newUserSaved._id};
            return res.send(_idAndNameOnly); 
        }
            return res.status(400).send('Username already taken');

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
            const arrayWith_idsAndNamesOnly = usersList.map(({_id:id,name:user}) => ({id,user}));
            
            console.log(arrayWith_idsAndNamesOnly);
            return arrayWith_idsAndNamesOnly;
        } catch(error){
            console.log(error);
            throw error
        }
c
    }

}