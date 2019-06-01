<?php

header("Access-Control-Allow-Origin: *");

require_once "../dbapi/controller/class.controllerapi.inc";

//$jsonFormat = new DbApi\Controller\JsonFormatter();
$controller = new \DbApi\Controller\ControllerApi();

if (!empty($_REQUEST['restType'])) {
    switch ($_REQUEST['restType']) {
        case 'createUser':
            $response = $controller->createNewUser($_REQUEST['username'], $_REQUEST['password']);
        break;
        case 'validUser':

        break;
        case 'likeCount':

        break;
    }
    error_log($response);
    echo $response;
}

?>