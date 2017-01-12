'use strict'
const express = require('express');
const mongoose = require('mongoose');
const pug = require('pug');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const CONFIG = require('./config.json');

// SET UP CONNECTION TO MONGO DATABASE
mongoose.connect(CONFIG.MONGO_URI);

// CHECK MONGODB CONNECTION ONCE MONGOOSE CONNECTS
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(){
  console.log("Connected to MongoDB");
});


const Schema = mongoose.Schema;
const docSchema = new Schema({
  id: Number,
  img: String,
  overallRating: Number,
  rating: Number,
  description: String,
  numRates: Number
});

let Doc = mongoose.model('Doc', docSchema);

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', express.static(path.join(__dirname, 'website')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
  return res.render('verify', {});
});

app.get('/api/images', (req, res) =>{
  Doc.find({})
  .then((results) => {
  return res.json(results);
  });
});

app.get('/image/:id', (req, res) => {
  console.log(req.params);
  Doc.find({
    id: req.params.id
  })
  .then((results) => {
    console.log(results);
    return res.json(results);
  });
});

app.post('/verify', (req, res) => {
  let locals = req.body;
  if (!locals) {
    return res.send('FAIL!');
  }
  if (locals.age < 18) {
    return res.redirect('http://mylittlepony.hasbro.com/en-us');
  }
  Doc.find()
  .then((results) => {
    return res.render('index', {data: results});
  });
});

app.get('/rating/:id/:value', (req, res) => {
  Doc.find({
    id: req.params.id
  }).then((result) => {
    let totalRating = result[0].overallRating + parseInt(req.params.value);
    let newRating = Math.round(totalRating/(result[0].numRates + 1));
    Doc.update({ id: req.params.id }, {
      rating: newRating,
      overallRating: totalRating,
      numRates: result[0].numRates + 1,
    }, function(err, image) {
        if (err) throw err;
        res.json({ rating: newRating, id: req.params.id });
    });
  });
});

app.get('/newNudele', (req, res) => {
  res.render('newNudele');
});

app.get('/successNudele', (req, res) => {
  res.render('successNudele');
})

app.post('/newNudele', (req, res) => {
  Doc.create({
    img: req.body.url,
    rating: req.body.rating,
    description: req.body.description,
  })
  .then(function (result) {
    res.render('successNudele');
  })
});

const server = app.listen(6969, () => {
  console.log(`Connected on port ${server.address().port}`);
});

module.exports = Doc;
