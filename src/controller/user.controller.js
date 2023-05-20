const express = require('express');
const { getAllDataUser, getDataUserById } = require('../service/user.service');

const route = express.Router();

route.get('/', async (request, response) => {
    try {
        const data = await getAllDataUser();
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
})

route.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data = await getDataUserById(id);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
})



module.exports = route;
