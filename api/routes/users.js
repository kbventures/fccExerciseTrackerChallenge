const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.post('/api/exercise/new-user', async (req,res)=>{
    console.log(req.body);
    const newUser = await userController.createUser(req.body.username);
    return res.send(newUser);
})




module.exports = router;