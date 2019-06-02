<?php

header("Access-Control-Allow-Origin: *");

require_once "../dbapi/controller/class.controllerapi.inc";

$controller = new \DbApi\Controller\ControllerApi();

if (!empty($_REQUEST['restType'])) {
    switch ($_REQUEST['restType']) {
        case 'createUser':
            $response = $controller->createNewUser($_REQUEST['username'], $_REQUEST['password'], $_REQUEST['yold']);
        break;
        case 'createMovie':
            $response = $controller->createNewMovie($_REQUEST['movieName'], $_REQUEST['dsMovie'], $_REQUEST['date'], $_REQUEST['duration']);
        break;
        case 'createGenre':
            $response = $controller->createNewGenre($_REQUEST['genreId'], $_REQUEST['dsGenre']);
        break;
        case 'validUser':
            $response = $controller->validateUserLogin($_REQUEST['username'], $_REQUEST['password']);
        break;
        case 'likeCount':
            $response = $controller->returnMovieLikeCount($_REQUEST['movieName']);
        break;
        case 'linkGenre':
            $response = $controller->createGenreRelation($_REQUEST['genreId'], $_REQUEST['movieId']);
        break;
    }
    echo $response;
} else {
    echo 'Define restType request for class use';
}

?>