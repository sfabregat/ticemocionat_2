<?php

	function GetDB(){
		$dsn = 'mysql:dbname=cbianchi_anuncios;host=92.222.38.97';
		$usuario = 'cbianchi_root';
		$contrasena = 'OFw9wfNyBt';

		try {
		    $gbd = new PDO($dsn, $usuario, $contrasena);
		} catch (PDOException $e) {
		    echo 'Falló la conexión: '  . $e->getMessage();
		}
		return $gbd;
	}
	