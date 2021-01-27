const express = require('express'),
  users = require('./api/routes/usersApi');
const app = express();
const cors = require('cors');
const db = require('./database');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(users);

 
db._connect;


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});





module.exports = app;





/*
{"username":"kbzzz123","_id":"5ffef4790aa40e05f2b89264"}
https://exercise-tracker.freecodecamp.rocks/api/exercise/log?userId=5ffef4790aa40e05f2b89264
*/
