const express = require('express');
const router = express.Router();

router.post('/api/exercise/new-user', (req,res)=>{
    res.send('Stub')
})


// app.post('/api/exercise/new-user',(req,res)=>{
//     // console.log(req);
//     const test = req.body; 
//     console.log(test);
//     console.log(req.body);
//     const {username} = req.body;
//     res.send('Stub')
//   })


module.exports = router;