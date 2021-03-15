require('dotenv').config();
const app = require('./app');

const listener = app.listen(3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });


