const express = require('express');
const app = express();
const cors = require('cors');
const nocache = require('nocache');

app.use(cors());

app.use(nocache());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/testing1', (req, res) => {
  res.send({ hello: 'world' }).status(200);
});

app.post('/api/exercise/new-user',(req,res)=>{
  // console.log(req);
  console.log(req.body);
  res.send('Stub')
})

// app.get('/testing2', (req, res) => {
//   res.send('Hello World!');
// });

module.exports = app;

/*
{"username":"kbzzz123","_id":"5ffef4790aa40e05f2b89264"}
https://exercise-tracker.freecodecamp.rocks/api/exercise/log?userId=5ffef4790aa40e05f2b89264
*/
