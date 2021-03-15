require('dotenv').config();
const app = require('./app');

const listener = app.listen(3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });



/*
MONGO_URI=mongodb+srv://m001-student:HU62sQ20FWKERV0w@sandbox.bvkcb.mongodb.net/fccExerciseTracker?retryWrites=true&w=majority
*/

// killall node

// https://github.com/cmccormack/fcc-exercise-tracker/blob/master/routes.js