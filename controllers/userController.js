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
            // console.log(newUser);
            const userExist = await UserModel.findOne({username: req.body.username})
            if(!userExist){
    
            // const newUserSaved = 
            await newUser.save();
            const _idAndNameOnly = { username: newUser.username,_id:newUser._id};
            // console.log(_idAndNameOnly);
            // console.log(newUser);
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
            // console.log(usersList);
            const arrayWith_idsAndNamesOnly = usersList.map(({_id:id,username:user}) => ({id,user}));
            // console.log(arrayWith_idsAndNamesOnly);
            return usersList;
        } catch(error){
            throw error
        }

    },//{"_id":"603541cae2f17305e4681c8c","username":"maxipad1hh",
      //"date":"Tue Feb 23 2021","duration":60,"description":"Horror Phase 2"}
    createExercise: async(exercise)=>{
     
        const newExercise = new ExerciseModel({
            description: exercise.description,
            duration: exercise.duration,
            date: exercise.date
        })
        console.log(exercise.date);
        

        let currentTime; 
        if(newExercise.date === null){
            currentTime = dayjs().format('ddd MMM D YYYY'); 
            newExercise.date = currentTime;
            console.log(currentTime);
            console.log(newExercise.date);
        }

        currentTime = exercise.date;
        
        // Tu Feb 23 2021
        try{
            const user = await UserModel.findOne({_id: exercise.userId})
            // console.log(user);
            user.log.push(newExercise)
            // console.log(newExercise);
            console.log(user);
            user.save();
            let testing = {_id:user._id,username:user.username, description:newExercise.description, duration:newExercise.duration, date:currentTime};
            // console.log(testing);
            return testing;
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