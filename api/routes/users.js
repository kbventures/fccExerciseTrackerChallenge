const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.post('/api/exercise/new-user', async (req,res)=>{
    console.log(req.body);
    const newUser = await userController.createUser(req.body.username);
    console.log(newUser);
    return res.send(newUser);
})


// https://medium.com/@vcarl/handling-errors-with-async-await-and-promises-cd2fea534f08#:~:text=With%20async%2Fawait%2C%20a%20common,exceptions%20thrown%20will%20be%20caught.

module.exports = router;