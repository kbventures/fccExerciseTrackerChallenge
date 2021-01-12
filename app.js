const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/testing1', (req, res) => {
  res.send({ hello: 'world' }).status(200);
});

// app.get('/testing2', (req, res) => {
//   res.send('Hello World!');
// });

module.exports = app;
