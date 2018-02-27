<?php
	/**
	 *  vHome
	 *  Prepares and loads the corresponding Template
	 *  @author Toni
	 * 
	 * */
	class vEmociones extends View{

		function __construct(){
			parent::__construct();
			$this->tpl=Template::load('emociones',$this->view_data);
		}

	}