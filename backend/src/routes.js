const express = require('express');
const routes = new express.Router();
const userController = require("./Controllers/userController");
const authMiddleware = require("./Middlewares/auth");

routes.post('/user/authenticate', userController.authenticate);
routes.post('/user/create', userController.createUser);

routes.use(authMiddleware);

module.exports = routes;