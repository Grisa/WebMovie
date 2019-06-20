const express = require('express');
const routes = new express.Router();
const userController = require("./Controllers/userController");

routes.post('/user/validate', userController.validUser);
routes.post('/user/create', userController.createUser);

module.exports = routes;