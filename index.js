var express = require('express');
// var logger = require('morgan');
var app = express();
const port = 3001;

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to My Express App!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});