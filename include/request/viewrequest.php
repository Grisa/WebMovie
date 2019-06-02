<?php

header("Access-Control-Allow-Origin: *");

require_once "../dbapi/controller/class.controllerapi.inc";

$controller = new \DbApi\Controller\ControllerViewApi();

if (!empty($_REQUEST['restType'])) {
    switch ($_REQUEST['restType']) {
        case 'listMovieByGenre':
            $response = $controller->getMoviesByGenre($_REQUEST['genre']);
        break;
    }
    echo $response;
}

?>