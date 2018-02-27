<?php
	
	require 'vendor/autoload.php';
	require 'db.php';

	\Slim\Slim::registerAutoloader();
	$app = new \Slim\Slim();

    $app -> get('/users/','getUsers');
	$app -> post('/users/','createUser');	

	function getUsers(){
		$app = \Slim\Slim::getInstance();

		$sql = "SELECT * FROM usuarios";
		$dbh = GetDB();
		$stmt = $dbh -> prepare($sql);
		$stmt -> execute();
		$result = $stmt -> fetchAll();
		header('Content-Type','application/json');

		$app -> response -> setStatus(200);
		$app -> response -> headers -> set('Content-Type','application/json');

		echo json_encode($result);
	}

	function createUser(){
		$sql = "INSERT INTO usuarios(poblacion,rol,nombre,password,email) VALUES(1,2,:nombre,:password,:email)";
		$request =  \Slim\Slim::getInstance() -> request();
		$user = $request -> params();
		$nombre = $user['nombre'];
		$password = $user['password'];
		$email = $user['email'];
		try{
			$dbh = getDB();
			$stmt = $dbh -> prepare($sql);
			$stmt -> bindParam(':nombre',$nombre);
			$stmt -> bindParam(':password',$password);
			$stmt -> bindParam(':email',$email);
			$stmt -> execute();
		}catch (MySQLException $e) {
		    $e->getMessage();
		}
	}

	$app->run();