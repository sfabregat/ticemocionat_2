

		<?php 
	$variable = "Tus anuncios";
	

		if(isset($_SESSION['islogged']) && $_SESSION['islogged']==TRUE){
echo '<div id="padreanun"><div><input type="button" value="Crear anuncio" id="dispad">
<div id="addad">
	Titulo <input type="text" id="titadd">
	Descripcion<input type="text" id="descadd">
	imagenes<input type="text" id="img1add">
	imagenes<input type="text" id="img2add">
	imagenes<input type="text" id="img3add">
	<input type="button" method="post" value="insertar" id="insertarad"></div>
</div><div id="anuncios"></div><div id="control"><a id="back">Back</a><a  id="next">Next</a></div></div>';
}
else{
	echo '<h1>DEBES LOGUEARTE PARA PODER VER TUS ANUNCIOS</h1>';
}
?>