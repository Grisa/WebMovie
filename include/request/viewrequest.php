<?php

header("Access-Control-Allow-Origin: *");

require_once "../dbapi/controller/class.controllerapi.inc";

$controller = new \DbApi\Controller\ControllerViewApi();

if (!empty($_REQUEST['restType'])) {
    switch ($_REQUEST['restType']) {
        case 'listMovieByGenre':
            $response = $controller->getMoviesByGenre($_REQUEST['genre']);
        break;
        case 'listMovieByType':
            // Lista filmes por tipo de filme, anime ou serie
        break;
        case 'listFavoriteMovies':
            // Lista filmes favoritados pelo usuario
        break;
        case 'listLikedMovies':
            // Lista filmes em que o usuario deu like
        break;
        case 'listDislikedMovies':
            // Lista filme em que o usuario deu dislike
        break;
        case '':
        break;
        case '':
        break;
        case '':
        break;
        default:
            $response = 'restType is wrong!';
        break;
    }
    echo $response;
}

?>