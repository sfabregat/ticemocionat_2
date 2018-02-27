<?php

	class Username{
		public $email;
		public $rol;
		public $username;
		public $iduser;

		function __construct($email,$rol,$username,$iduser){
			$this -> email = $email;
			$this -> rol = $rol;
			$this -> username = $username;
			$this -> iduser = $iduser;
		}
	}