<?php

namespace DbApi\Controller;

require_once "../dbapi/model/class.dbexecute.inc";

class ControllerApi
{
    public $conn;

    public function __construct()
    {
        $this->conn = new \DbApi\Model\DbExecute();
    }

    public function returnMovieLikeCount($movieId)
    {
        $matchString = "
            MATCH (a:User)-[:LIKES]->(b:Movie)
            WHERE b.movieId = {$movieId} 
            RETURN count(a) 
        ";

        $cur = $this->conn->Execute($matchString);

        return $cur->getRecords();
    }

    public function createNewUser($username, $password)
    {
        error_log($username);
        $existQuery = "
            MATCH (p:User)
            WHERE p.loginId = '{$username}'
            RETURN p
        ";

        $conn = $this->conn->Execute($existQuery);

        $response = $conn->records();

        if (!empty($reponse)) {
            return '1';
        }

        $createString = "";


    }
}


?>