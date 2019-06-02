<?php

namespace DbApi\Controller;

require_once "../dbapi/model/class.dbexecute.inc";

class ControllerViewApi
{
    
    public $conn;

    public function __construct()
    {
        $this->conn = new \DbApi\Model\DbExecute();
    }

    public function getMoviesByGenre($genreId)
    {
        
        $queryString = "
            MATCH(a:Genre)-[:DEFINE]->(b:Movie)
            WHERE a.genreId = '{$genreId}'
            RETURN b:Movie
        ";

        $cur = $this->conn->Execute($queryString);

        $records = $cur->getRecords(); // Validar saida deste objeto


    }

}


?>