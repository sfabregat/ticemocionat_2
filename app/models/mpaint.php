<?php

class mPaint extends Model{

		function __construct(){
			parent::__construct();
		}

		function guardar($paint){
			$id = $_SESSION['id_usuario'];
			$query="SELECT nombre FROM usuarios WHERE id_usuario=:iduser";
		    $this->query($query);
		    $this->bind(':iduser',$id);
		    $this->execute();
		    $row = $this -> resultSet();
		    $name= $row[0]['nombre'];
		    $datenow = new DateTime();
			$fecha = $datenow->format('Y-m-d H:i:s');
			$img = $paint;
			$img = str_replace('data:image/jpeg;base64,', '', $img);
			$img = str_replace(' ', '+', $img);
			$fileData = base64_decode($img);
			$im = imagecreatefromstring($fileData);  //convertir a imagen
			if ($im !== false) {
			    imagejpeg($im, '../M-master/pub/images/dibujo/'.$name.'.jpg'); //guardar a disco      '../M-master/pub/images/dibujo/'+    
			    imagedestroy($im); //liberar memoria
			    //imagejpeg($im, 'textosimple.jpg'+$name+$fecha+'.jpg');
			}
			try{ 
					$imagen = '/M-master/pub/images/dibujo/'.$name.'.jpg';
					$query2='INSERT INTO multimedia (fuente,nombre) VALUES (:imagen, "test");';
		            $this->query($query2);
		            $this->bind(':imagen',$imagen);
					$this->execute();
					$lastId = $this->lastInsertId();
					$query3='INSERT INTO detalle_imagen_usuario (usuarios_idusuarios,multimedia_idmultimedia) VALUES (:iduser, :idmagen);';
		            $this->query($query3);
		            $this->bind(':iduser',$id);
		            $this->bind(':idmagen',$lastId);
					$this->execute();
				return TRUE;
		    }catch(PDOException $e){
		       echo "Error:".$e->getMessage();
			}
		}
	}
?>	