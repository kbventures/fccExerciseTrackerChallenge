require('dotenv').config();
const app = require('./app');

const listener = app.listen(3003, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});



/*
MONGO_URI=mongodb+srv://m001-student:HU62sQ20FWKERV0w@sandbox.bvkcb.mongodb.net/fccExerciseTracker?retryWrites=true&w=majority
*/

