const mongoose = require('mongoose');
const UserModel = require('../models/user');
const UserLogModel = require('../models/userLog');
const ExerciseModel = require('../models/exercise');
const dayjs = require('dayjs');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


module.exports = {
    createUser: async(req,res) => {
        
        const newUser = new UserModel({
            username: req.body.username,
            log:[]
        })
       
        try{
            console.log(newUser);
            const userExist = await UserModel.findOne({username: req.body.username})
            if(!userExist){
    
            // const newUserSaved = 
            await newUser.save();
            // const _idAndNameOnly = { username: newUserSaved.username,_id:newUserSaved._id};
            // console.log(_idAndNameOnly);
            console.log(newUser);
            return res.send(newUser); 
        }
            
            return res.status(400).send({error:'Username already taken'});

        } catch (error){
            throw error
        }
    
    },
    getAllUsers: async()=>{
        try{
            const usersList = await UserModel.find({});
            console.log(usersList);
            const arrayWith_idsAndNamesOnly = usersList.map(({_id:id,username:user}) => ({id,user}));
            // console.log(arrayWith_idsAndNamesOnly);
            return usersList;
        } catch(error){
            throw error
        }

    },
    createExercise: async(exercise)=>{
        const now = dayjs();
        const newExercise = new ExerciseModel({
            description: exercise.description,
            duration: exercise.duration,
            date: exercise.date
        })
        console.log(now.format("dd MMM D YYYY"));
        if(newExercise.date === null){
            newExercise.date = now.format('dd MMM D YYYY'); 
            console.log(newExercise);
        }
        
        // Tu Feb 23 2021
        try{
            const user = await UserModel.findOne({_id: exercise.userId})
            user.log.push(newExercise)
            user.save();
            
            return user;
        } catch(error){;
            throw error
        }
    }

}

// Tu Feb 23 2021

/*
You can POST to /api/exercise/add with form data userId=_id,
 description, duration, and optionally date. If no date is supplied,
  the current date will be used. The response returned will be the user
   object with the exercise fields added.
*/