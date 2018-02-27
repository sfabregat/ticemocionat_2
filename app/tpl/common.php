<!DOCTYPE html>
<html>
<head>
	<title><?= $title; ?></title>
	<link href='https://fonts.googleapis.com/css?family=Lato|Raleway|Indie+Flower' rel='stylesheet' type='text/css'>
    <link rel="stylesheet"  type="text/css" href="<?= APP_W.'pub/css/final.css'; ?>">
    <script src="<?= APP_W.'pub/js/jquery.min.js'; ?>"></script>
    <script src="<?= APP_W.'pub/js/jquery-ui.min.js'; ?>"></script>
    <script src="<?= APP_W.'pub/js/parallax.min.js'; ?>"></script>
    <script src="<?= APP_W.'pub/js/app.js'; ?>"></script>
</head>
<body>
	<header>
	        <div class="head-column">
	            <div>
	                <a href="<?= APP_W; ?>"><h1>TICemocionat</h1><img src="/M-master/pub/images/logo.png" /></a>
	            </div>
	            <form id="searcher" method="POST">
	                <input id="fsearch" type="text" name="search" placeholder="Busca juegos..." />
	                <input id="fsubmit" type="image" src="/M-master/pub/images/icon_search2.png" />
	            </form>
		<?php 
			if(isset($_SESSION['user']) == FALSE){
				echo '<div id="black-screen"></div>
					  <div id="dialog-login" title="Accede">
				          <form class="form-log" method="POST" action="../M-master/home/login">
				                <label>Usuario </label><input type="text" name="email" />
				                <label>Contraseña </label><input type="password" name="password" />
				                <input type="submit" value="Enviar" />
				          </form>
			          </div>

				<div id="user-account">
	                <div id="login">INICIA SESIÓN</div>
	            </div>';
			}else{
				echo '<div id="user-account">
	                	<a href="/M-master/perfil"><span>'.$_SESSION['user'].'</span></a>
	            	</div><a id="logout" href="/M-master/home/logout">Salir</a>';
			}
		?>		
		</div>
	</header>