<?php

	class Admin extends Controller{
		protected $model;
		protected $view;

		function __construct($params){
			parent::__construct($params);
			$this -> model = new mAdmin();
			$this -> view = new vAdmin();
		}

		function home(){
			
		}
		
		function listall(){
			$list = $this -> model -> selectall($pag);
			$this -> ajax_set($list);
		}

		/*Listamos todos los usuarios, hacemos la llamada de la funcion y el retorno de array*/
		function listuser(){
			if(!empty($_GET['paginado'])){
				$pag = $_GET['paginado'];
				$list = $this -> model -> selectuser($pag);
			}else{
				$list = $this -> model -> selectuser();
			}
			$this -> ajax_set($list);
		}

		/*Hacemos un bucle para borrar a tantos usuarios como de grande sea el array 'usuario' pasado por POST*/
		function deleteuser(){
			if(!empty($_POST['usuario'])){
				foreach ($_POST['usuario'] as $user => $value){
					$list = $this -> model -> deluser($value);
				}
			}
			$this -> ajax_set(array('redirect'=>APP_W.'admin'));
		}

		/*Revisamos todos los input que no esten vacios y realizamos un bucle para actualizarlos todos*/
		function updateuser(){
			if(!empty($_POST['upemail'])){
				$email = filter_input(INPUT_POST,'upemail',FILTER_SANITIZE_STRING);
			}
			if(!empty($_POST['upnombre'])){
				$nombre = filter_input(INPUT_POST,'upnombre',FILTER_SANITIZE_STRING);
			}
			if(!empty($_POST['uprol'])){
				$rol = filter_input(INPUT_POST,'uprol',FILTER_SANITIZE_STRING);
			}
			if(!empty($_POST['usuario'])){
				foreach ($_POST['usuario'] as $user => $value){
					$list = $this -> model -> upuser($email,$nombre,$rol,$value);
				}
			}
			$this -> ajax_set(array('redirect'=>APP_W.'admin'));
		}

		/*Creamos nuevo usuario como el registro normal a diferencia de poder escoger rol*/
		function newuser(){
			if(!empty($_POST['newemail']) && !empty($_POST['newpassword']) && !empty($_POST['newnombre']) && !empty($_POST['newpoblacion']) && !empty($_POST['newrol'])){
				$poblacion = filter_input(INPUT_POST,'newpoblacion',FILTER_SANITIZE_STRING);
				$nombre = filter_input(INPUT_POST,'newnombre',FILTER_SANITIZE_STRING);
				$password = filter_input(INPUT_POST,'newpassword',FILTER_SANITIZE_STRING);
				$email = filter_input(INPUT_POST,'newemail',FILTER_SANITIZE_STRING);
				$rol = filter_input(INPUT_POST,'newrol',FILTER_SANITIZE_STRING);
				$list = $this -> model -> adduser($nombre,$password,$email,$poblacion,$rol);
         		$this -> ajax_set(array('redirect'=>APP_W.'admin'));
			}
		}
	}