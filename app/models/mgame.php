<?php

class mGame extends Model{

		function __construct(){
			parent::__construct();
			
		}

		function selectgame($juego,$nivel){
    try{
     $query="SELECT multimedia.fuente, multimedia.nombre, niveles.idniveles
     FROM multimedia 
     inner join detalle_multimedia_juego ON multimedia.idmultimedia=detalle_multimedia_juego.multimedia_idmultimedia
     inner join niveles ON multimedia_detalle_juegos.niveles_idniveles=niveles.idniveles
     inner join  juegos ON juegos.idjuegos=niveles.juegos_idjuegos
     where juegos.nombre=:juego AND nivel=:nivel";
     $this->query($query);
     $this->bind(':juego',$juego);
     $this->bind(':nivel',$nivel);
     $this->execute();
     $row=$this->resultSet();
     return $row;
	}catch(PDOException $e){
       echo "Error:".$e->getMessage();
   }
  }

function rangoup($nivel){
try{ 
            $id = $_SESSION['id_usuario'];
            $query='SELECT * FROM detalle_niveles where usuarios_idusuarios=:iduser;';
            $this->query($query);
            $this->bind(':iduser',$id);
            $this->execute();
            $row=$this->resultSet();
            if(empty($row)){
            $query='UPDATE usuarios SET puntos = puntos + 50 where id_usuario = :iduser;';
            $this->query($query);
            $this->bind(':iduser',$id);
            $this->execute();
            $query2='INSERT INTO detalle_niveles (niveles_idniveles, usuarios_idusuarios) VALUES (:idgame, :idusernivel);';
            $this->query($query2);
            $this->bind(':idgame',$nivel);
            $this->bind(':idusernivel',$id);
			$this->execute();
            }
           return TRUE;
    }catch(PDOException $e){
       echo "Error:".$e->getMessage();
}
}

}
		?>