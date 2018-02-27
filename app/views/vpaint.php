<?php
	/**
	 *  vHome
	 *  Prepares and loads the corresponding Template
	 *  @author Toni
	 * 
	 * */
	class vPaint extends View{

		function __construct(){
			parent::__construct();
			
			$this->tpl=Template::load('paint',$this->view_data);
			
		}

	}