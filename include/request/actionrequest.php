<?php

header("Access-Control-Allow-Origin: *");

require_once "../dbapi/controller/class.controllerapi.inc";

$controller = new \DbApi\Controller\ControllerApi();

if (!empty($_REQUEST['restType'])) {
    switch ($_REQUEST['restType']) {
        case 'createUser':
            $response = $controller->createNewUser($_REQUEST['username'], $_REQUEST['displayName'], $_REQUEST['password'], $_REQUEST['yold'], $_REQUEST['mail']);
        break;
        case 'createMovie':
            $response = $controller->createNewMovie($_REQUEST['movieName'], $_REQUEST['dsMovie'], $_REQUEST['date'], $_REQUEST['duration'], $_REQUEST['type']);
        break;
        case 'createGenre':
            $response = $controller->createNewGenre($_REQUEST['genreId'], $_REQUEST['dsGenre']);
        break;
        case 'validUser':
            $response = $controller->validateUserLogin($_REQUEST['username'], $_REQUEST['password']);
        break;
        case 'generateLink':
            $response = $controller->createLink($_REQUEST['idLeft'], $_REQUEST['idRight'], $_REQUEST['leftObject'], $_REQUEST['rightObject'], $_REQUEST['linkName']);
        break;
        default:
            $response = 'Define restType request for class use';
        break;
    }
    echo $response;
} else {
    echo 'Define restType request for class use';
}

?>