<div id="game-cont">
<div class="container-home">

<nav class="nav-juegos"><ul><li><img src="/M-master/pub/images/juegos.png" /><a href="<?= APP_W.''; ?>">Juegos</a></li><li><img src="/M-master/pub/images/cuentos.png" /><a href="">Cuentos</a></li><li><img src="/M-master/pub/images/dibuja.png" /><a href="<?= APP_W.'paint'; ?>">Dibuja</a></li><li><img src="/M-master/pub/images/diccionario.png" /><a href="<?= APP_W.'emociones'; ?>">Diccionario</a></li></ul></nav>

<div class="jpaint">
	<canvas id="can" width="1142" height="600" ></canvas><!-- 1142 -->
	<div id="clr">
		<div style="background-color:black;"></div>
		<div style="background-color:red;"></div>
		<div style="background-color:green;"></div>
		<div style="background-color:orange;"></div>
		<div style="background-color:#FFFF00;"></div>
		<div style="background-color:#F43059;"></div>
		<div style="background-color:#ff00ff;"></div>
		<div style="background-color:#9ecc3b;"></div>
		<div style="background-color:#fbd;"></div>
		<div style="background-color:#fff460;"></div>
		<div style="background-color:#F43059;"></div>
		<div style="background-color:#82B82C;"></div>
		<div style="background-color:#0099FF;"></div>
		<div style="background-color:#ff00ff;"></div>
		<div style="background-color:rgb(128,0,255);"></div>
		<div style="background-color:rgb(255,128,0);"></div>
		<div style="background-color:rgb(153,254,0);"></div>
		<div style="background-color:rgb(18,0,255);"></div>
		<div style="background-color:rgb(255,28,0);"></div>
		<div style="background-color:rgb(13,54,0);"></div>
	</div>
	<div id="controles">
		<a class="control-paint" id="limpiar"><img src="../M-master/pub/images/paint/hoja_doblada.png" /></a>
		<a class="control-paint" id="pincel"><img src="../M-master/pub/images/paint/apple-icon-60x60.png" /></a>
		<a class="control-paint" id="borrador"><img src="../M-master/pub/images/paint/Goma-Borrar-Kawaii-86342.png" /></a>
		<a class="control-paint" id="guardar"><img src="../M-master/pub/images/guardar.png" /></a>
		<a id="circulo" href="#"><div id="circle"></div></a>
		<a id="cuadrado" href="#"><div id="cuadrado"></div></a>
		<a id="rectangulo" href="#"><div id="rectangulo"></div></a>
	</div>
	<img id="test" src="">
</div>


</div>
</div>