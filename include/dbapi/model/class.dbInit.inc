<?php

namespace DbApi\Model;

require_once 'vendor/autoload.php';

use DbApi\Model\IDbInit;
use GraphAware\Neo4j\Client\ClientBuilder;

class DbInit implements IDbInit
{
    private $client;

    public function initConnection() {
        $client = ClientBuilder::create()->addConnection('bolt', $this->getConnectionPath())->build();

        return $client;
    }

    public function getConnectionPath() {
        return 'bolt://neo4j:password@localhost:7687';
    }

    public function  getClient() {
        if (empty($this->client)) {
            $this->client = $this->initConnection();
        }
        return $this->client;
    }
}



?>