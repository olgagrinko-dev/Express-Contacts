const express = require('express');
const { getAllDataUser, getDataUserById, createDataUser, upDataUserById, deleteUserById, patchData } = require('../service/user.service');
const { buildResponse } = require('../helper/buildResponse');
const { isValidationUserId, isValidUserBody } = require('../helper/validation');

const route = express.Router();

route.get('/', async (request, response) => {
  try {
    const data = await getAllDataUser();
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.get('/:id', isValidationUserId, async (request, response) => {
  try {
    const { id } = request.params;
    const data = await getDataUserById(id);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.post('/', isValidUserBody, async (request, response) => {
  try {
    const { name, surname, birth, city, age } = request.body;
    const data = await createDataUser(name, surname, birth, city, age);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.put('/:id', isValidationUserId, isValidUserBody, async (request, response) => {
  try {
    const { id } = request.params;
    const { name, surname, birth, city, age } = request.body;
    const data = await upDataUserById(id, name, surname, birth, city, age);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.delete('/:id', isValidationUserId, async (request, response) => {
  try {
    const { id } = request.params;
    const data = await deleteUserById(id);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const clientData = request.body;
    const data = await patchData(id, clientData);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

module.exports = route;
