<?php

	class User extends Controller{
		protected $model;
		protected $view;

		function __construct($params){
			parent::__construct($params);
			$this -> model = new mUser();
			$this -> view = new vUser();
		}
		
		function home(){
			
		}

		function listall(){
			$list = $this -> model -> selectall();
			$this -> ajax_set($list);
		}

		function listimage(){
			$list = $this -> model -> selectimage();
			$this -> ajax_set($list);
		}

		function newadd(){
			$list = $this -> model -> addnew();
			$this -> ajax_set($list);
		}

	}