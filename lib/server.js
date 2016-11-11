let express = require('express');
let morgan = require('morgan');

let app = express();

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('Hello...... ini tutorial ke 9, setup app di Node js');
});

module.exports = app;
