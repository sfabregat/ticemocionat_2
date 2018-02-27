<?php

	class DB extends PDO{
		static $_instance;

		public function __construct(){
			//recuperar dades configuracion de Config.json
			$config = Registry::getInstance();
			$dbconf=(array)$config->dbconf;
			$dsn=$dbconf['driver'];
			//Coder::codear($config);
			try{
				parent::__construct($dsn,$usr,$pwd);
			}catch(PDOException $e){
				echo $e->getMessage();
			}
		}

		static function singleton(){
			if(!(self::$_instance instanceof self)){
				self::$_instance = new self();
			}
			return self::$_instance;
		}
	}