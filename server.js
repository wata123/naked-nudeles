'use strict'
const express = require('express');
const mongoose = require('mongoose');
const pug = require('pug');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const CONFIG = require('./config.json');

// SET UP CONNECTION TO MONGO DATABASE //
mongoose.connect(CONFIG.MONGO_URI);

// CHECK MONGODB CONNECTION ONCE MONGOOSE CONNECTS //
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(){
  console.log("Connected to MongoDB");
});

// CREATE SCHEMA & MODEL FOR 'Nake Nudeles'
const Schema = mongoose.Schema;
const docSchema = new Schema({
  id: Number,
  img: String,
  rating: Number,
  description: String,
});

let Doc = mongoose.model('Doc', docSchema);

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', express.static(path.join(__dirname, 'website')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
  Doc.find()
  .then(function (data){
  return res.render('index', {data: data});
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

const server = app.listen(6969, () => {
  console.log(`Connected on port ${server.address().port}`);
});

module.exports = Doc;