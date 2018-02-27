$(document).ready(function(){
	
	juego = "Memory";
	nivel = "1";
	var mem=new Array;
	cargresources(juego,nivel,mem);
	}
);
	function cargresources(juego,nivel,mem){
		$.ajax({
		  url:'/M-master/memory/selectgame',
		  type:'POST',
		  datatype:'json',
		  data:{game: juego, level: nivel},
		  success:function(respuesta){
		  	i=0;
			cont=0;
			band=-1;
		  	var numOccurences=0;
			var mem2 = new Array;
			var comp = new Array;
			$(".container").append("<div id='caja'></div>");
		 	var data = JSON.parse(respuesta);
		 	var comprobante=0;
		 	var numeros = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez"];
		 	for(j=0;j<data.length;j++){
				if(j==0){
				$("#caja").append("<div id="+numeros[j]+"></div>");
				$("#caja").append("<div id="+numeros[j+1]+"></div>");
				ultinum=j+2;
				}
				else{		
				$("#caja").append("<div id="+numeros[ultinum]+"></div>");
				$("#caja").append("<div id="+numeros[ultinum+1]+"></div>");
				ultinum=ultinum+2;
				}
		 		mem.push(data[j].fuente);
		 	}
		 	mem.sort(function() { return 0.5 - Math.random() });
		 	$( "#caja div" ).each(function() {
		num=Math.floor((Math.random() * mem.length-1) + 1);
		ruta=mem[num];
		if(jQuery.inArray(ruta, mem2) !== -1){
			for(i=0;i<mem2.length;i++){
				if(mem2[i]===ruta){
					numOccurences++;
					}
				}
			if(numOccurences===2){
			while(numOccurences!==0){
				num=Math.floor((Math.random() * mem.length-1) + 1);
				ruta=mem[num];
				band=$.inArray(ruta,mem2);
				numOccurences=0;
				for(j=0;j<mem2.length;j++){
				if(mem2[j]===ruta){
					numOccurences++;
					}
				}
				if(numOccurences<2){
					numOccurences=0;
					mem2.push(ruta);
					var id = $(this).attr('id');
  					$(this).append( "<img class='inc' id=img"+id+" src='"+ruta+"'>" );
					}
				}
			}
			else{
			numOccurences=0;
			mem2.push(ruta);
			var id = $(this).attr('id');
  			$(this).append( "<img class='inc' id=img"+id+" src='"+mem[num]+"'>" );
			}
			
			}
			else{
			mem2.push(ruta);
			var id = $(this).attr('id');
  			$(this).append( "<img class='inc' id=img"+id+" src='"+mem[num]+"'>" );
			}
		
});
i=0;
	$("img").hide();
	$("#caja div").click(function(){
		cont = cont+1;
		var id = $(this).attr('id');
		if(cont==2){
			$("#img"+id).show("clip",1500);
			comp.push($("#img"+id).attr('src'));
			cad1=comp[0];
			cad2=comp[1];
			if(cad1===cad2){
			$("#img"+id).switchClass( "inc", "cor", 1000 );
			$("#"+idant).switchClass( "inc", "cor", 1000 );
			comprobante=comprobante+1;
				}
			else{
				$(".inc").hide("clip",1500);
					}
			cont=0;
			comp=[];
			}
		else if(cont<2){
			idant="img"+id;
			comp.push($("#img"+id).attr('src'));
			$("#img"+id).show("clip",1500);
			}
		if(comprobante==data.length){
			
			alert("correcto");
		  

		}
		
		});
		  },
		  error:function(data){
		    alert(JSON.stringify(data));
		  }
		  })
};