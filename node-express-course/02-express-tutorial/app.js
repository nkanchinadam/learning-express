const express = require('express');
const app = express();

const {products, people} = require('./data')

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});