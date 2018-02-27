<?php
	
	class Game extends Controller{
		protected $model;
		protected $view;
		
		function __construct($params){
			parent::__construct($params);
			$this->model=new mGame();
			$this->view= new vGame();
			
			//echo 'Hello controller!';
		}
		function home(){
			//Coder::codear($this->conf);
	}

	function selectgame(){
	 $juego=filter_input(INPUT_POST, 'game', FILTER_SANITIZE_STRING);
     $nivel=filter_input(INPUT_POST, 'level', FILTER_SANITIZE_STRING);
     $result=$this->model->selectgame($juego,$nivel);
     $this->json($result);
  }

	function rangoup(){
	$nivel=filter_input(INPUT_POST, 'level', FILTER_SANITIZE_STRING);
    $result=$this->model->rangoup($nivel);
    $this->json($result);
  }
}
	?>