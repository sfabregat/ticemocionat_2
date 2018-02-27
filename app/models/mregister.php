<?php

	class mRegister extends Model{

		function __construct(){
			parent::__construct();
			
		}

		/*Realizamos sentencia SQL para el registro de usuario*/
		function register($nombre,$password,$email,$poblacion){
			try{
				$sql = "SELECT * FROM usuarios WHERE email=:email";
				$this -> query($sql);
				$this -> bind(':email',$email);
				$this -> execute();
		     if($this -> rowCount() == 0){//no coincide con otros usuarios de la base de datos
		     	   $pob_sql = "SELECT id_poblacion FROM poblacion WHERE nombre=:nombre";//sacamos id de la poblacion mediante el texto pasado por input
				   $this -> query($pob_sql);
				   $this -> bind(':nombre',$poblacion);
				   $this -> execute();
				   $pob = $this -> single();

				    $add = "INSERT INTO usuarios(poblacion,rol,nombre,password,email) VALUES(:poblacion,2,:nombre,:password,:email)";//llama al procedimiento
				    //CALL insert_user(:nombre,:password,:email,:poblacion,2) NO PROCEDIMIENTO EN VESTA
					$this -> query($add);
					$this -> bind(':nombre',$nombre);
					$this -> bind(':password',$password);
					$this -> bind(':email',$email);
					$this -> bind(':poblacion',$pob[0]['id_poblacion']);
					$this -> execute();
					Session::set('islogged',TRUE);
		           return TRUE;//devolvemos true si el insert fue correcto
		     }
		     else {
		         Session::set('islogged',FALSE);
		          return FALSE;
		      }
		    }catch(PDOException $e){
		       echo "Error:".$e->getMessage();
		   }
		}
	}

//para sacar nombre de usuario conectado
	//$_SESSION['user'];