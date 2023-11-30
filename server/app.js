const express = require('express');
const cors = require('cors');

const { getAllMessages } = require('./controllers/messages.controller');
const { createOrFindUser } = require('./controllers/user.controller');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', getAllMessages);
app.post('/users', createOrFindUser);

app.use((err, req, res, next) => {
  console.log('err---->>>', err);
  res.status(500).send({ errors: [err] });
});

module.exports = app;
