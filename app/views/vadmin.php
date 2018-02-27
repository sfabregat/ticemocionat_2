<?php
	/**
	 *  vHome
	 *  Prepares and loads the corresponding Template
	 *  @author Carlos
	 * 
	 * */
	class vAdmin extends View{

		function __construct(){
			parent::__construct();
			
			$this->tpl=Template::load('admin',$this->view_data);	
		}
	}