<?php

namespace DbApi\Model;

interface IDbInit
{
    public function initConnection();
    public function getConnectionPath();
}
?>