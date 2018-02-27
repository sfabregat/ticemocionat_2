<?php
	
	class Paint extends Controller{
		protected $model;
		protected $view;
		
		function __construct($params){
			parent::__construct($params);
			$this->model=new mPaint();
			$this->view= new vPaint();
			
			//echo 'Hello controller!';
		}
		function home(){
			//Coder::codear($this->conf);
		}

		function guardar(){
			$paint = filter_input(INPUT_POST, 'paint', FILTER_SANITIZE_STRING);
			$result = $this -> model -> guardar($paint);
	     	$this -> ajax_set($result);
		}
	}
?>