const express = require('express');
const logger = require('./logger');

const app = express();

// req => middleware => res

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', logger, (req, res) => {
  res.send('About');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});