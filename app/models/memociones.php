<?php

class mEmociones extends Model{

		function __construct(){
			parent::__construct();
			
		}
//funcion que carga las emociones con nombre y descripcion y su respectiva imagen
		function cargdiccionario(){
			try{
				
				  $query="SELECT Distinct emociones.nombre,emociones.descripcion,multimedia.fuente
			     FROM multimedia 
			     inner join detalle_multimedia_juego ON idmultimedia=multimedia_idmultimedia
			     inner join niveles ON niveles_idniveles=idniveles
			     inner join  juegos ON idjuegos = niveles.juegos_idjuegos
			     inner join detalle_emociones_juegos ON idjuegos=detalle_emociones_juegos.juegos_idjuegos
			     inner join emociones ON idemociones=emociones.idemociones
			     where juegos.nombre='Diccionario' AND nivel=1";
				 $this->query($query);
				 $this->execute();
				 $row=$this->resultSet();
				 return $row;
			}
			catch(PDOException $e){
				echo "Error:".$e->getMessage();
			}
		}
}
?>