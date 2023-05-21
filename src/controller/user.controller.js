const express = require('express');
const { getAllDataUser, getDataUserById, createDataUser, upDataUserById, deleteUserById } = require('../service/user.service');

const route = express.Router();

route.get('/', async (request, response) => {
  try {
    const data = await getAllDataUser();
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
});

route.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const data = await getDataUserById(id);
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
});

route.post('/', async (request, response) => {
  try {
    const { name, surname, birth, city, age } = request.body;
    const data = await createDataUser(name, surname, birth, city, age);
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
});

route.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { name, surname, birth, city, age } = request.body;
    const data = await upDataUserById(id, name, surname, birth, city, age);
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
});

route.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const data = await deleteUserById(id);
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
});

module.exports = route;
