const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.post('/api/exercise/new-user', async (req,res)=>{
    const newUser = await userController.createUser(req,res);
    return newUser;
})

router.post('/api/exercise/add', async(req,res)=>{
    const newExercise = await userController.createExercise(req.body);
    return res.send(newExercise);
})


router.get('/api/exercise/users', async (req, res)=>{
    const usersList = await userController.getAllUsers();
    console.log(usersList);
    return res.json(usersList);
})


// https://medium.com/@vcarl/handling-errors-with-async-await-and-promises-cd2fea534f08#:~:text=With%20async%2Fawait%2C%20a%20common,exceptions%20thrown%20will%20be%20caught.

module.exports = router;