<?php

	class mUser extends Model{

		function __construct(){
			parent::__construct();
			
		}
	
		function selectall(){
			try{
				$sql = "SELECT * FROM anuncio";
				$this -> query($sql);
				$this -> execute();
		     if($this -> rowCount() >= 1){
		           return $this -> resultSet();
		     }else {
		         	return FALSE;
		     }
		    }catch(PDOException $e){
		       echo "Error:".$e->getMessage();
		   }
		}

		function selectimage(){
			try{
				$sql = "SELECT * FROM fotografia";
				$this -> query($sql);
				$this -> execute();
		     if($this -> rowCount() >= 1){
		           return $this -> resultSet();
		     }else {
		         	return FALSE;
		     }
		    }catch(PDOException $e){
		       echo "Error:".$e->getMessage();
		   }
		}

		function addnew(){
			try{
				$sql = "SELECT * FROM fotografia";
				$this -> query($sql);
				$this -> execute();
		     if($this -> rowCount() >= 1){
		           return $this -> resultSet();
		     }else {
		         	return FALSE;
		     }
		    }catch(PDOException $e){
		       echo "Error:".$e->getMessage();
		   }
		}

	}