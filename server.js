const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(6969, () => {
  console.log(`Connected on port ${server.address().port}`);
});