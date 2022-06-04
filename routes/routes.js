const express = require('express');

const routes = express.Router();

const comentsController = require('../controllers/ComentsController');
const login = require('../controllers/login');

routes.post('/login', login);

routes.get('/', comentsController.getAllComents);
routes.post('/', comentsController.createComents);
routes.delete('/:id', comentsController.deleteComents);
routes.put('/:id', comentsController.statusComents);

module.exports = routes;