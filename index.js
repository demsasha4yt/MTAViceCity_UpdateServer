const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan')

// set up express application
const app = express();

// connect to mongodb

mongoose.connect('lol');
mongoose.Promise = global.Promise;

app.use('/static', express.static('dist/static'))
app.use('/administration', express.static('dist'));

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  if (req.method === 'OPTIONS')
  {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// listen for requests
const port = process.env.PORT || 1337;

app.use('/api', require('./app/routes/api'));

// error handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({error: err.message})
});

app.listen(port, function () {
    console.log(`Applications started on port ${port}`)
});
