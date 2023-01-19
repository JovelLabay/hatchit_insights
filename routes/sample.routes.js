const express = require('express');
const { getUsers, addUser } = require('../controller/sample.controller');

const routes = express.Router();

routes.get('/', (req, res) => {
  getUsers()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

routes.post('/:lastName/:firstName', (req, res) => {
  const { firstName, lastName } = req.params;
  const { token, id } = req.query;

  // DATA AS PAYLOAD
  const { sampleData } = req.body;

  console.log(sampleData)

  addUser({ firstName, lastName, id, token })
    .then((user) => {
      res.status(user.status).send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = routes;
