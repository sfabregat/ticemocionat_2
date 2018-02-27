<?php

		class Register extends Controller{
			protected $model;
			protected $view;
		
		function __construct($params){
			parent::__construct($params);
			$this -> model = new mRegister();
			$this -> view = new vRegister();
		}

		/*Funcion de registro*/
		function register(){
			//revisamos inputs que no esten vacios
			if(!empty($_POST['new_email']) && !empty($_POST['new_password']) && !empty($_POST['new_nombre']) && !empty($_POST['new_poblacion'])){
				//filtramos datos de los inputs
				$poblacion = filter_input(INPUT_POST,'new_poblacion',FILTER_SANITIZE_STRING);
				$nombre = filter_input(INPUT_POST,'new_nombre',FILTER_SANITIZE_STRING);
				$password = filter_input(INPUT_POST,'new_password',FILTER_SANITIZE_STRING);
				$email = filter_input(INPUT_POST,'new_email',FILTER_SANITIZE_STRING);
				
				//utilizamos la funcion register del model, los usuarios registrador en frontend son todos de rol Usuario normal
				$new_user = $this -> model -> register($nombre,$password,$email,$poblacion);
				
				//si ha sido correcto seteamos valores de user y rol en session, ponemos cookie
				if($new_user == true){
					Session::set('user',$email);
					Session::set('rol',2);
             		setcookie('user',Session::get('user'),0,APP_W);
         			$this -> ajax_set(array('redirect'=>APP_W.'user'));//redireccionamos a site de usuario
				}else{
					$output = array('redirect' => APP_W);
             		$this -> ajax_set($output);
				}
			}
		}

	}