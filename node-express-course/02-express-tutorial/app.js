const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');

const app = express();

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// app.use calls a middleware function whenever the base of the route matches the path provided
app.use(morgan('tiny'));
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/people', (req, res) => {
  res.send('People');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});