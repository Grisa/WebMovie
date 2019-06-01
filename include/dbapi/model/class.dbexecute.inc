<?php

namespace DbApi\Model;

require_once '../dbapi/model/class.dbinit.inc';

class DbExecute
{
    public $client;

    function __construct() {
        $class = new \DbApi\Model\DbInit();
        $this->client = $class->getClient();

    }

    public function Execute($query)
    {
        return $this->client->run($query);
    }
}


?>