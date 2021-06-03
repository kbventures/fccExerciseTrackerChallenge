const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');


// POST Add a new user
router.post('/api/users', async (req,res)=>{
    const newUser = await userController.createUser(req,res);
    return newUser;
})

// GET all users
router.get('/api/users', async (req, res)=>{
    const usersList = await userController.getAllUsers();
    return res.json(usersList);
})

// POST ADD EXERCISE
router.post('/api/users/:_id/exercises', async(req,res)=>{
    const updatedExerciseLise = await userController.createExercise(req.params, req.body);
    return res.status(200).json(updatedExerciseLise);
})


// GET ALL LOGS
router.get('/api/exercise/log', async(req,res)=>{
    if(req.query.userId === undefined){
        return res.send('Unknown userId');
    }
    const userExerciseLogs = await userController.getUserLogs(req.query);
    return res.json(userExerciseLogs);
  
})



/*
    You can make a GET request to /api/exercise/log with a parameter of userId=_id
    to retrieve a full exercise log of any user. The returned response will be the 
    user object with a log array of all the exercises added. Each log item has the
    description, duration, and date properties.
*/




// {"_id":"5ffd82a8c5b5cf05d0805d5d","username":"kbzzz","date":"Tue Jan 26 2021","duration":60,"description":"ffffff"}
// {"username":"tizzy1234","_id":"60301e42e2f17305e4681ab2"}
// https://exercise-tracker.freecodecamp.rocks/api/exercise/log?userId=603036bbe2f17305e4681ada

// {"_id":"603036bbe2f17305e4681ada","username":"tizzy12345","count":3,
// "log":[{"description":"Math","duration":60,"date":"Fri Feb 19 2021"},
// {"description":"English","duration":60,"date":"Fri Feb 19 2021"},
// {"description":"testing","duration":60,"date":"Fri Feb 19 2021"}]}


/*
You can POST to /api/exercise/add with form data 
userId=_id,description, duration, and optionally date. If no date is
supplied, the current date will be used. The response
returned will be the user object with the exercise fields 
added.
*/


// https://medium.com/@vcarl/handling-errors-with-async-await-and-promises-cd2fea534f08#:~:text=With%20async%2Fawait%2C%20a%20common,exceptions%20thrown%20will%20be%20caught.

module.exports = router;