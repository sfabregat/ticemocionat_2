<?php
	/**
	 *  Controller
	 *  
	 *  @author Toni
	 *  @package sys
	 * 
	 * 
	 * */
	
	class Controller{
		protected $model;
		protected $view; 
		protected $params;
		protected $conf;
		function __construct($params){
			$this->params=$params;
			$this->conf=Registry::getInstance();
		}

		//funcion para que al cargar los acentos de la base de datos no haya ningun problema
		function utf8_converter($array)
		{
		    array_walk_recursive($array, function(&$item, $key){
		        if(!mb_detect_encoding($item, 'utf-8', true)){
		                $item = utf8_encode($item);
		        }
		    });
		    return $array;
		}

		function ajax_set($output){
			ob_clean();
			$test = $this->utf8_converter($output);
			if(is_array($test)){
			    echo json_encode($test);
			}
		}
	}