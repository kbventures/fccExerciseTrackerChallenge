const mongoose = require('mongoose');
const UserModel = require('../models/user');
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
            const userExist = await UserModel.findOne({username: req.body.username})
            if(!userExist){
            await newUser.save();
            const _idAndNameOnly = { username: newUser.username,_id:newUser._id};
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
            const arrayWith_idsAndNamesOnly = usersList.map(({_id:id,username:user}) => ({id,user}));
            return usersList;
        } catch(error){
            throw error
        }
    },
    getUserLogs: async(query)=>{

        let userId = query.userId;
        let fromDate = query.from;
        let toDate = query.to; 
        let logAmountLimit = query.limit; 

        try {
              const user = await UserModel.findById(userId);
              let log = user.log;
              let logListReturnObject = {_id: user._id, username:user.username,count:user.log.length, log: user.log}
              
            if(toDate || fromDate){

                var startDate = new Date(fromDate);
                var endDate = new Date(toDate);


                var dateRangeLog = log.filter((a)=>{

                        let tempDate = new Date(a.date); 

                        if(toDate && fromDate){
                        return tempDate <= endDate && tempDate >= startDate;
                        }
                        
                        if(toDate === undefined ){
                            return tempDate >= startDate;
                            }
                        if(fromDate === undefined ){
                            return tempDate <= endDate;
                            }
                })
                logListReturnObject = {_id: user._id, username:user.username,count:user.log.length, log: dateRangeLog}
            }


              if(logAmountLimit != undefined){
                  log.splice(logAmountLimit);
                  let logListReturnObject = {_id: user._id, username:user.username,count:user.log.length, log: log}
                  return logListReturnObject; 
              }
     

              return logListReturnObject; 
          }catch(error){
              throw error;
          }
      },
    createExercise: async(exercise)=>{
     
        const newExercise = new ExerciseModel({
            description: exercise.description,
            duration: exercise.duration,
            date: exercise.date
        })

        
         let currentTime;
        if(newExercise.date != null){
            let dateFromRequest = dayjs(exercise.date).format('ddd MMM D YYYY');
            currentTime= dateFromRequest;
            
        }

        if(newExercise.date === null){
            currentTime = dayjs().format('ddd MMM D YYYY'); 
            newExercise.date = currentTime;
        }

        try{
            console.log(exercise);
            console.log(exercise[':_id']); 
            // console.log(exercise.body[':_id']); 
            // console.log(exercise.params._id);
            const user = await UserModel.findOne({_id: exercise[':_id']})
            console.log(user);
            user.log.push(newExercise)
            user.save();
            let exerciseAdded = {_id:user._id,username:user.username, date:new Date(currentTime).toDateString(), duration:newExercise.duration ,description:newExercise.description};
            return exerciseAdded;
        } catch(error){;
            throw error
        }
    }

}

