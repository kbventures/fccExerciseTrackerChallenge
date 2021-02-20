const mongoose = require('mongoose');
const UserModel = require('../models/user');
const UserLogModel = require('../models/userLog');
const ExerciseModel = require('../models/exercise');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


module.exports = {
    createUser: async(req,res) => {
        
        const newUser = new UserModel({
            name: req.body.username,
            log:[]
        })
       
        try{
            const userExist = await UserModel.findOne({name: req.body.username})
         
            if(!userExist){
          
            const newUserSaved = await newUser.save();
            const _idAndNameOnly = { username: newUserSaved.name,_id:newUserSaved._id};
            return res.send(_idAndNameOnly); 
        }
            
            return res.status(400).send({error:'Username already taken'});

        } catch (error){
            throw error
        }
    
    },
    getAllUsers: async()=>{
        try{
            const usersList = await UserModel.find({});
            const arrayWith_idsAndNamesOnly = usersList.map(({_id:id,name:user}) => ({id,user}));
            return arrayWith_idsAndNamesOnly;
        } catch(error){
            throw error
        }

    },
    createExercise: async(exercise)=>{
        const newExercise = new ExerciseModel({
            description: exercise.description,
            duration: exercise.duration,
            date: exercise.date
        })
       

        try{
            
            console.log(exercise.userId)
            const user = await UserModel.findOne({_id: exercise.userId}) 
            console.log(`Testing ${user}`)
            user.log.push(newExercise)
            user.save();
            
            return newExerciseSaved;
        } catch(error){
            console.log('haha');
            console.log(error);
            throw error
        }
    }

}

/*
You can POST to /api/exercise/add with form data userId=_id,
 description, duration, and optionally date. If no date is supplied,
  the current date will be used. The response returned will be the user
   object with the exercise fields added.
*/