<?php

class Sql {
  public $conn;

    public function __construct(){
      return $this->conn = mysql_connect('127.0.0.1:...', 'root', 'senha', 'hcode_shop');
    }

    public function query ($string_query){
      return mysqli_query($this->conn, $string_query)
    }

    public function __destruct(){
      mysqli_close($this->conn);
    }
}
?>
