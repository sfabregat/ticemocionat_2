<?php

	class mHome extends Model{

		function __construct(){
			parent::__construct();
			
		}

		/*Realizamos sentencias SQL de login que retorna un 1 si es Admin, un 2 si es usuario normal y un 0 si no es valido*/
		function login($email,$password){
			try{
		     	$sql = "SELECT * FROM usuarios WHERE email=:email AND password=:password";
		     	$this -> query($sql);
		     	$this -> bind(":email",$email);
		     	$this -> bind(":password",$password);
		     	$this -> execute();
		     	$user = $this -> single();

			     if($this -> rowCount() == 1){
			     	//Session::set('user',new Username($user['email'],$user['rol'],$user['nombre'],$user['id_usuario']));
			     	//Session::set('id_usuario',$user[0]['id_usuario']);//seteamos id            		
			     	Session::set('id_usuario',$user[0]['id_usuario']);  
				    Session::set('islogged',TRUE);
				    if($user[0]['rol'] == 1){
				    	return 1;
				    }else{
				    	return 2;
			           //Session::set('user',new user($user['email'],$user['rol'],$user['nombre'],$user['id_usuario']));
				    }
			     }else{
			         Session::set('islogged',FALSE);
			          return 0;
			     }
		    }catch(PDOException $e){
		       echo "Error:".$e->getMessage();
		   }
		}

		function perfil($id){
		    try{
				$sql = "SELECT multimedia.fuente FROM ((usuarios INNER JOIN detalle_imagen_usuario ON usuarios.id_usuario=detalle_imagen_usuario.usuarios_idusuarios)INNER JOIN multimedia ON detalle_imagen_usuario.multimedia_idmultimedia=multimedia.idmultimedia) WHERE id_usuario=:id AND foto_perfil = TRUE"; 
				$this -> query($sql);
			    $this -> bind(":id",$id);
			    $this -> execute();
			     if($this -> rowCount() >= 1){
			           return $this -> resultSet();//lo pasamos como array al controller
			     }else {
			         	return FALSE;
			     }
		    }catch(PDOException $e){
		       echo "Error:".$e->getMessage();
		   }
		}

		function top_jugadores(){
			try{
				$sql = "SELECT multimedia.fuente,usuarios.nombre,usuarios.puntos FROM ((usuarios INNER JOIN detalle_imagen_usuario ON usuarios.id_usuario=detalle_imagen_usuario.usuarios_idusuarios)INNER JOIN multimedia ON detalle_imagen_usuario.multimedia_idmultimedia=multimedia.idmultimedia) WHERE foto_perfil = TRUE ORDER BY puntos DESC LIMIT 5"; 
				$this -> query($sql);
			    $this -> execute();
			     if($this -> rowCount() >= 1){
			           return $this -> resultSet();//lo pasamos como array al controller
			     }else {
			         	return FALSE;
			     }
		    }catch(PDOException $e){
		       echo "Error:".$e->getMessage();
		   }
		}

		function show_juegos($id){
		    try{
			     $query="SELECT multimedia.fuente, juegos.nombre, juegos.descripcion FROM juegos 
			     inner join niveles ON juegos.idjuegos=niveles.juegos_idjuegos 
			     inner join detalle_niveles ON niveles.idniveles=detalle_niveles.niveles_idniveles 
			     inner join usuarios ON detalle_niveles.usuarios_idusuarios=usuarios.id_usuario
                 inner join detalle_multimedia_juego ON niveles.idniveles=detalle_multimedia_juego.niveles_idniveles  
                 inner join multimedia ON detalle_multimedia_juego.multimedia_idmultimedia=multimedia.idmultimedia
                 where usuarios_idusuarios=:id";
			     $this -> query($query);
			     $this -> bind(":id",$id);
			     $this->execute();
		     	if($this -> rowCount() >= 1){
					return $this -> resultSet();//lo pasamos como array al controller
				}else {
					return FALSE;
				}
			}catch(PDOException $e){
		       echo "Error:".$e->getMessage();
		   }
	  	}
	}
//base
	/*function selectgame($id){
    try{
     $query="SELECT *
     FROM multimedia 
     inner join detalle_multimedia_juego ON idmultimedia=multimedia_idmultimedia
     inner join niveles ON niveles_idniveles=idniveles
     inner join  juegos ON idjuegos = niveles.juegos_idjuegos
     where juegos.nombre=:juego AND nivel=:nivel AND usuarios_idusuarios=:id" ;
     $this -> query($query);
     $this -> bind(':juego',$juego);
     $this -> bind(':nivel',$nivel);
     $this -> bind(":id",$id);
     $this->execute();
     $row=$this->resultSet();
     return $row;
	}catch(PDOException $e){
       echo "Error:".$e->getMessage();
   }
  }*/

  /*function filter_juegos($juegos){
		    try{
			     $query="SELECT multimedia.fuente, juegos.nombre FROM juegos 
			     inner join niveles ON juegos.idjuegos=niveles.juegos_idjuegos 
			     inner join detalle_niveles ON niveles.idniveles=detalle_niveles.niveles_idniveles 
			     inner join usuarios ON detalle_niveles.usuarios_idusuarios=usuarios.id_usuario
                 inner join detalle_multimedia_juego ON niveles.idniveles=detalle_multimedia_juego.niveles_idniveles  
                 inner join multimedia ON detalle_multimedia_juego.multimedia_idmultimedia=multimedia.idmultimedia
                 where juegos.nombre LIKE :juego";
			     $this -> query($query);
			     $this -> bind(":juego",$juegos);
			     $this->execute();
		     	if($this -> rowCount() >= 1){
					return $this -> resultSet();//lo pasamos como array al controller
				}else {
					return FALSE;
				}
			}catch(PDOException $e){
		       echo "Error:".$e->getMessage();
		   }
	  	}*/

		/*function show_juegos($id){
		    try{
				$sql = "SELECT multimedia.fuente FROM ((usuarios INNER JOIN detalle_imagen_usuario ON usuarios.id_usuario=detalle_imagen_usuario.usuarios_idusuarios)INNER JOIN multimedia ON detalle_imagen_usuario.multimedia_idmultimedia=multimedia.idmultimedia) WHERE id_usuario=:id"; 
				$this -> query($sql);
			    $this -> bind(":id",$id);
			    $this -> execute();
			     if($this -> rowCount() >= 1){
			           return $this -> resultSet();//lo pasamos como array al controller
			     }else {
			         	return FALSE;
			     }
		    }catch(PDOException $e){
		       echo "Error:".$e->getMessage();
		   }
		}*/