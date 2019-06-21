const express = require('express');
const routes = new express.Router();
const userController = require("./Controllers/userController");
const movieController = require("./Controllers/movieController");

routes.post('/user/authenticate', userController.authenticate);
routes.post('/user/create', userController.createUser);

routes.post('/movie/create', movieController.createMovie);
routes.post('/movie/delete', movieController.deleteMovie);
routes.post('/movie/getall', movieController.getAllMovies);
routes.post('/movie/getbygenre/:type', movieController.getMovieByGenre);
const authMiddleware = require("./Middlewares/auth");

routes.use(authMiddleware);

module.exports = routes;