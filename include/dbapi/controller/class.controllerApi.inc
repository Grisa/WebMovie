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
    public function createNewUser($username, $password, $yold)
    {
        $existQuery = "
            MATCH (p:User)
            WHERE p.username = '{$username}'
            RETURN p
        ";

        $cur = $this->conn->Execute($existQuery);

        $records = $cur->getRecords();

        // Caso nao esteja vazia a consulta, retorna um erro.
        if (!empty($records)) {
            return '{success:false}';
        }

        $createString = "CREATE (a:User {name: '{$username}', username: '{$username}', password: '{$password}', yold: {$yold}})";

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
    public function createNewMovie($movieName, $dsMovie, $date, $duration)
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

        $createString = "CREATE (a:Movie {name: '{$movieName}', dsMovie: '{$dsMovie}', date: '{$date}', vlduration: {$duration}})";

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
     * Gera o relacionamento do genero com o filme
     * @param $genreId -> Identificador do genero
     * @param $movieId -> Identificador do filme
     * @return Object JSON de resposta
     */
    public function createGenreRelation($genreId, $movieId)
    {
        $validLink = "
            MATCH (a:Genre)-[:DEFINE]->(b:Movie)
            WHERE a.name = '{$genreId}' AND b.name = '{$movieId}'
            RETURN b
        ";

        $cur = $this->conn->Execute($validLink);

        try {
            $record = $cur->getRecord();
        } catch (\RuntimeException $e) {
            $record = [];
        }

        if (!empty($record)) {
            return "{success:false, msg:'Filme ja possui este genero relacionado'}";
        }

        $linkString = "
            MATCH (a:Genre), (b:Movie)
            WHERE a.name = '{$genreId}' AND b.name = '{$movieId}'
            CREATE (a)-[:DEFINE]->(b)
            RETURN a        
        ";

        $this->conn->Execute($linkString);

        return '{success: true}';
    }
}
?>