<?php
namespace DbApi\Controller;

require_once "../dbapi/model/class.dbexecute.inc";

/**
 * Classe resposavel por gerar cadastros, deletes e updates dentro da base de dados
 */

class ControllerApi
{
    /**
     * @var conn Conexao com a base de dados
     */
    public $conn;

    /**
     * Construtor da classe
     */
    public function __construct()
    {
        $this->conn = new \DbApi\Model\DbExecute();
    }

    /**
     * Metodo que gera uma nova conta do usuario.
     * @param $username -> texto de login do usuario
     * @param $password -> senha utilizando hash md5
     * @param $yold     -> idade do usuario
     * @return Objeto JSON de resposta
     */
    public function createNewUser($username, $displayName, $password, $yold, $mail)
    {
        $existQuery = "
            MATCH (p:User)
            WHERE p.name = '{$username}'
            RETURN p
        ";

        $cur = $this->conn->Execute($existQuery);

        $records = $cur->getRecords();

        // Caso nao esteja vazia a consulta, retorna um erro.
        if (!empty($records)) {
            return '{success:Usuario ja existente}';
        }

        $createString = "CREATE (a:User {name: '{$username}', email:'{$mail}',  displayName: '{$displayName}', password: '{$password}', yold: {$yold}})";

        $this->conn->Execute($createString);

        return "{success: true}";
    }

    /**
     * Cria um no de um filme
     * @param $movieName -> Nome do filme
     * @param $dsMovie   -> Descricao do filme
     * @param $date      -> Data de lancamento do filme
     * @param $duration  -> Duracao do filme
     * @return Objeto JSON de resposta
     */
    public function createNewMovie($movieName, $dsMovie, $date, $duration, $type)
    {
        $existQuery = "
            MATCH (p:Movie)
            WHERE p.name = '{$movieName}'
            RETURN p
        ";

        $cur = $this->conn->Execute($existQuery);

        $records = $cur->getRecords();

        // Caso nao esteja vazia a consulta, retorna um erro.
        if (!empty($records)) {
            return '{success:false}';
        }

        $createString = "CREATE (a:Movie {name: '{$movieName}', dsMovie: '{$dsMovie}', date: '{$date}', type: {$type}, vlduration: {$duration}})";

        $this->conn->Execute($createString);

        return "{success: true}";
    }

    /**
     * Gera um no de um genero
     * @param $genreId -> Nome do genero
     * @param $dsGenre -> Descricao do genero
     * @return Objeto JSON de resposta
     */
    public function createNewGenre($genreId, $dsGenre)
    {
        $existQuery = "
            MATCH (p:Genre)
            WHERE p.name = '{$genreId}'
            RETURN p
        ";

        $cur = $this->conn->Execute($existQuery);

        $records = $cur->getRecords();

        // Caso nao esteja vazia a consulta, retorna um erro.
        if (!empty($records)) {
            return '{success:false}';
        }

        $createString = "CREATE (a:Genre {name: '{$genreId}', dsGenre: '{$dsGenre}'})";

        $this->conn->Execute($createString);

        return "{success: true}";
    }

    /**
     * Valida o login do usuario
     * @param $username -> login do usuario
     * @param $password -> Senha utilizando hash md5
     * @return Objeto JSON
     */
    public function validateUserLogin($username, $password)
    {
        $validQuery = "
            MATCH(a:User)
            WHERE a.loginId = '{$username}'
            RETURN a.password
        ";

        $cur = $this->conn->Execute($validQuery);

        $record = $cur->getRecord()->values();

        if (empty($record)) {
            return "{success:false, msg: 'Conta invalida'}";
        }

        if ($record->value('password') == $password) {
            return "{succes:true}";
        } 

        return "{success:false, msg:'Senha invalida'}";
    }

    /**
     * Gera um relacionamento entre dois diferentes nos
     * @param uniqueIdLeft  -> identificador unico do no da esquerda
     * @param uniqueIdRight -> identificador unico do no da direita
     * @param leftObject    -> Tipo do no da esquerda
     * @param rightObject   -> Tipo do no da direita 
     * @param linkName      -> Nome do relacionamento
     * @return Objecto JSON de resposta
     */
    public function createLink($uniqueIdLeft, $uniqueIdRight, $leftObject, $rightObject, $linkName)
    {
        $validLink = "
            MATCH (a:{$leftObject})-[:{$linkName}]->(b:{$rightObject})
            WHERE a.name = '{$uniqueIdLeft}' AND b.name = '{$uniqueIdRight}'
            RETURN b
        ";

        $cur = $this->conn->Execute($validLink);

        try {
            $record = $cur->getRecord();
        } catch (\RuntimeException $e) {
            $record = [];
        }

        if (!empty($record)) {
            return "{success:false, msg:'Relacionamento ja existente'}";
        }

        $linkString = "
            MATCH (a:{$leftObject}), (b:{$rightObject})
            WHERE a.name = '{$uniqueIdLeft}' AND b.name = '{$uniqueIdRight}'
            CREATE (a)-[:{$linkName}]->(b)
            RETURN a
        ";

        $this->conn->Execute($linkString);

        return '{success: true}';        
    }
}
?>