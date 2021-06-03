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


// GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
router.get('/api/users/:_id/logs', async(req,res)=>{
    if(req.params._id === undefined){
        return res.send('Unknown userId');
    }

    console.log(req.query);
    console.log(req.params);
    const userExerciseLogs = await userController.getUserLogs(req.query, req.params);
    return res.json(userExerciseLogs);
})


module.exports = router;