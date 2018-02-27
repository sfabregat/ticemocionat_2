<?php
	
	class Emociones extends Controller{
		protected $model;
		protected $view;
		
		function __construct($params){
			parent::__construct($params);
			$this->model=new mEmociones();
			$this->view= new vEmociones();
			
			//echo 'Hello controller!';
		}
		function home(){
			//Coder::codear($this->conf);
			
	}

	function cargdiccionario(){
     		$result=$this->model->cargdiccionario();
     		$this->ajax_set($result);
  		}

  	}
?>