const express = require('express');
const routes = new express.Router();
const userController = require("./Controllers/userController");
const movieController = require("./Controllers/movieController");
const movieViewController = require("./Controllers/movieViewController");
const commentController = require("./Controllers/commentController");

// Ações de CRUD de usuarios
routes.post('/user/authenticate', userController.authenticate);
routes.post('/user/create', userController.createUser);
routes.post('/user/validate', userController.validateCreate);

// Ações de CRUD de filmes
routes.post('/movie/create', movieController.createMovie);
routes.post('/movie/delete', movieController.deleteMovie);
routes.post('/movie/update', movieController.updateMovie);
routes.post('/movie/favorite', movieController.favoriteMovie);

// Ações de consulta
routes.post('/movie/getall', movieViewController.getAllMovies);
routes.post('/movie/getbyname', movieViewController.getMovieByName);
routes.post('/movie/getbygenre', movieViewController.getMovieByGenre);

// Pega apenas pelo nome
routes.post('/movie/getbytype/', movieViewController.getMoviesList);
routes.post('/anime/getbytype/', movieViewController.getAnimeList);
routes.post('/serie/getbytype/', movieViewController.getSerieList);

// Ao utilizar o filtro
routes.post('/movie/getbytype/filter/', movieViewController.getMoviesListFilter);
routes.post('/anime/getbytype/filter/', movieViewController.getAnimeListFilter);
routes.post('/serie/getbytype/filter/', movieViewController.getSerieListFilter);

// Comentarios
routes.post('/comment/add/', commentController.addComment);
routes.post('/comment/view/', commentController.viewComment);

const authMiddleware = require("./Middlewares/auth");
routes.use(authMiddleware);

module.exports = routes;