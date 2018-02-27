<?php

	class Model{
		protected $db;
		protected $stmt;

		function __construct(){
			$this -> db = DB::singleton();
		}

	    function query($query){
			$this -> stmt = $this -> db -> prepare($query);
		}

		function execute(){
			return $this -> stmt -> execute();
		}

		function bind($param,$value,$type=null){
			switch($value){
				case is_null($value):
					$type=PDO::PARAM_NULL;
					break;
				case is_int($value):
					$type=PDO::PARAM_INT;
					break;
				case is_string($value):
					$type=PDO::PARAM_STR;
					break;
			}
			$this -> stmt -> bindValue($param,$value,$type);
		}

		function resultSet(){
			return $this -> stmt -> fetchAll(PDO::FETCH_ASSOC);
		}

		function single(){
			return $this -> stmt -> fetchAll(PDO::FETCH_ASSOC);
		}

		function rowCount(){
			return $this -> stmt -> rowCount();
		}

		function lastInsertId(){
			return $this -> stmt -> lastInsertId();
		}

		function beginTransaction(){
			$this -> stmt -> beginTransaction();
		}

		function endTransaction(){
			$this -> stmt -> commit();
		}

		function cancelTransaction(){
			$this -> stmt -> rollback();
		}

		function debugDumpParams(){
			$this -> stmt -> debugDumpParams();
		}

	}