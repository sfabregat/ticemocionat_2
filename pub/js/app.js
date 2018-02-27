$(document).ready(function(){
	console.log("ready!");

	$("#black-screen").hide();

	$(".emocion div").hide();
  
  $(".emocion").on('click',function(){
    $(this).children("div").toggle("slow");
  });


  $("#login").on('click',function(){
    $("#black-screen").show();
  });
  
  $("#dialog-login").dialog({
      autoOpen: false,
    draggable: false,
    height: "350",
      width: "290",
      resizable: false,
      show: {
        effect: "blind",
        duration: 400
      }
    });
 
    $("#login").on('click',function(){
      $("#dialog-login").dialog("open");
    });
  
  $(".ui-dialog-titlebar-close").on('click',function(){
      $("#dialog-login").dialog("close");
    $("#black-screen").hide();
    });
  
  $("#black-screen").on('click',function(){
      $("#dialog-login").dialog("close");
    $("#black-screen").hide();
    });
  
  var a = 1;
  
  $(".button-slider").eq(a-1).css("background-color","rgba(34, 167, 240,1)");
  
  setInterval(function next(){
    $(".button-slider").css("background-color","rgba(204,204,204,0.6)");
    a++;
    $('#slide-image').fadeOut(250, function() {
      if(a == 1){
        $("#slide-image").attr("src","../M-master/pub/images/215245_5.jpg");
      }else if(a == 2){
        $("#slide-image").attr("src","../M-master/pub/images/214511_6.jpg");
      }else if(a == 3){
        $("#slide-image").attr("src","../M-master/pub/images/207942_7.jpg");
        a = 0;
      }
      $('#slide-image').fadeIn(250);
    });
    $(".button-slider").eq(a-1).css("background-color","rgba(34, 167, 240,1)");
  },7000);
  
  
  
  $(".button-slider").on('click',function(){
    $(".button-slider").css("background-color","rgba(204,204,204,0.6)");
    $(".button-slider").removeClass("selected");
    $(this).addClass("selected");
      if($(this).attr('id') == "button1"){
        $('#slide-image').fadeOut(250, function() {
          $("#slide-image").attr("src","../M-master/pub/images/215245_5.jpg");
          $('#slide-image').fadeIn(250);
        });
        a = 1;  
      }else if($(this).attr('id') == "button2"){
        $('#slide-image').fadeOut(250, function() {
          $("#slide-image").attr("src","../M-master/pub/images/214511_6.jpg");
          $('#slide-image').fadeIn(250);
        }); 
        a = 2;
      }else if($(this).attr('id') == "button3"){
        $('#slide-image').fadeOut(250, function() {
          $("#slide-image").attr("src","../M-master/pub/images/207942_7.jpg");
          $('#slide-image').fadeIn(250);
        });
        a = 0;
      }
    $(".button-slider").eq(a-1).css("background-color","rgba(34, 167, 240,1)"); 
  });

  $(".control-paint").on('click',function(){
      $(".control-paint").css('opacity','1');
      $(this).css('opacity','0.6');
  });

  $("#clr div").on('click',function(){
      $("#clr div").css('opacity','1');
      $(this).css('opacity','0.6');
  });

	$(window).load(function() {
		var postData = $(this).serialize();
		     $.ajax({
		       url:"../M-master/home/avatar",
		       data:postData,
		       method:'post',
		       dataType:'json',
		       success:function(output){
		       		$("#user-account").append("<a href='/M-master/perfil'><img src='"+output[0]['fuente']+"' /></a>");
		       }
		});
	});

	 $('.form-log').on('submit',function(){
	     console.log('click');
	     var postData = $(this).serialize();
	     var formURL = $(this).attr("action");
	     $.ajax({
	       url:formURL,
	       data:postData,
	       method:'post',
	       dataType:'json',
	       error: function(){
	          show_mesg('Error inicio de sesion');
	       },
	       success: function(output){
	          console.log(output);
	          window.location.href=output.redirect; 
	       }
	    });
	    return false;
 	 });

	 $('.form-reg').on('submit',function(){
	     console.log('click');
	     var postData = $(this).serialize();
	     var formURL = $(this).attr("action");
	     $.ajax({
	       url:formURL,
	       data:postData,
	       method:'post',
	       dataType:'json',
	       error: function(){
	          show_mesg('Error registro');
	       },
	       success:function(output){
	          console.log(output);
	          window.location.href=output.redirect; 
	       }
	    });
	    return false;
 	 });

	 $("#form-delete").on('click',function(){
	 	  $('.form-admin').on('submit',function(){
			     var postData = $(this).serialize();
			     $.ajax({
			       url:"../M-master/admin/deleteuser",
			       data:postData,
			       method:'post',
			       dataType:'json',
			       success:function(output){
			          window.location.href=output.redirect; 
			       }
			    });
	 	 });
 	  });

	 var pathname = window.location.pathname;
	 aux_path = pathname.split('/');
	 
   if(aux_path[aux_path.length-1] == 'home' || aux_path[aux_path.length-1] == ''){
      var postData = $(this).serialize();
         $.ajax({
           url:"../M-master/home/show_juegos",
           data:postData,
           method:'post',
           dataType:'json',
           success:function(output){
              for(i = 0; i < output.length; i++){
                $(".juegos").append("<div class='item-juego' id='"+output[i]['nombre']+"'><img class='imagen-juego' src='"+output[i]['fuente']+"' /><a href='<?= APP_W.'juegos'; ?>'><span>"+output[i]['nombre']+"</span></a><span>"+output[i]['descripcion']+"</span></div>");
              }
           }
        });

         var postData = $(this).serialize();
         $.ajax({
           url:"../M-master/home/top_jugadores",
           data:postData,
           method:'post',
           dataType:'json',
           success:function(output){
              for(i = 0; i < output.length; i++){
                $(".top-jugadores").append("<div class='item-jugador'><img class='imagen-jugador' src='"+output[i]['fuente']+"' /><div><span>"+(i+1)+'. '+output[i]['nombre']+"</span><span>Puntos "+output[i]['puntos']+"</span></div></div>");
              }
           }
        });
   }

   /*$("#searcher").on('submit',function(){
      var postData = $(this).serialize();
         $.ajax({
           url:"../M-master/home/show_juegos",
           data:postData,
           method:'post',
           dataType:'json',
           success:function(output){
              for(i = 0; i < output.length; i++){
                $(".juegos").append("<div class='item-juego'><img class='imagen-juego' src='"+output[i]['fuente']+"' /><span>"+output[i]['nombre']+"</span></div>");
              }
           }
        });
   });*/

	 if(aux_path[aux_path.length-1] == 'admin'){
	     var postData = $(this).serialize();
	     $.ajax({
	       url:"../M-master/admin/listuser",
	       data:postData,
	       method:'post',
	       dataType:'json',
	       success:function(output){
	       	var tipo, poblacion;

	          for(i = 0; i < output.length; i++){
		          	if(output[i]['rol'] == 1){
		          		tipo = "Administrador";
		          	}else{
		          		tipo = "Usuario";
		          	}

		          	if(output[i]['poblacion'] == 1){
		          		poblacion = "Gava";
		          	}else if(output[i]['poblacion'] == 2){
		          		poblacion = "Viladecans";
		          	}else if(output[i]['poblacion'] == 3){
		          		poblacion = "Castelldefels";
                }

	          		$(".form-user").append("<tr><td>"+output[i]['id_usuario']+"</td><td>"+output[i]['email']+"</td><td>"+output[i]['nombre']+"</td><td>"+poblacion+"</td><td>"+tipo+"</td><td><input type='checkbox' name='usuario[]' value='"+output[i]['id_usuario']+"' /></td></tr>");
	      	  }
	      	  $(".form-user").append("<tr style='text-align:center;background-color:rgba(32,32,32,0.8);color:rgba(244,244,244,1);'><td style='text-align:end;' colspan='5'><input type='button' id='admin-todos' value='Seleccionar todos' /></td><td><input type='button' id='admin-quitar' value='Quitar todos' /></td></tr>");
		       	  
		       	  $("#admin-todos").on('click',function(){
						$('input[type=checkbox]').each(function(){ 
							this.checked = true; 
						});
				  });
				  $("#admin-quitar").on('click',function(){
						$('input[type=checkbox]').each(function(){ 
							this.checked = false; 
						});
				  });
	       }
	    });
	}

	if(aux_path[aux_path.length-1] == 'user'){
	     var postData = $(this).serialize();
	     $.ajax({
	       url:"../M-master/user/listall",
	       data:postData,
	       method:'post',
	       dataType:'json',
	       success:function(output){
	          for(i = 0; i < output.length; i++){
	          		$(".content-anuncios").append("<div id='"+output[i]['id_anuncio']+"' class='container-anuncio'><h2>"+output[i]['titulo']+"</h2>"+output[i]['fecha']+"<div class='descripcion'>"+output[i]['descripcion']+"</div></div>");
	      	  }
		       	  
	       },
	    });

	     $.ajax({
	       url:"../M-master/user/listimage",
	       data:postData,
	       method:'post',
	       dataType:'json',
	       success:function(output){
	          for(i = 0; i < output.length; i++){
	          		$("#"+output[i]['anuncio']).append("<img src='"+output[i]['ruta']+"' />");
	      	  }
		       	  
	       },
	    });
	}

$("#form-insert").on('click',function(){
 	 $(".form-admin div label").remove();
 	 $(".form-admin div input").remove();
 	 $(".form-admin div select").remove();
 	 $(".form-admin div").append("<label>Email* </label><input type='text' name='newemail' /><label> Nombre* </label><input type='text' name='newnombre' /><label> Contraseña* </label><input type='text' name='newpassword' /><label> Poblacion* </label><select name='newpoblacion'><option value=''>Selecciona</option><option value='Gava'>Gava</option><option value='Viladecans'>Viladecans</option><option value='Castelldefels'>Castelldefels</option><option value='Sitges'>Sitges</option><option value='Sant Boi'>Sant Boi</option></select><label> Permisos* </label><select name='newrol'><option value=''>Selecciona</option><option value='administrador'>Administrador</option><option value='usuario'>Usuario</option></select><input type='submit' id='adduser' value='Añadir' /><input type='button' id='form-del' value='Cancelar' />");

	 $('.form-admin').on('submit',function(){
		     var postData = $(this).serialize();
		     $.ajax({
		       url:"../M-master/admin/newuser",
		       data:postData,
		       method:'post',
		       dataType:'json',
		       success:function(output){
		          window.location.href=output.redirect; 
		       }
		    });
 	 });

 	 $("#form-del").on('click',function(){
		$(".form-admin div label").remove();
 		$(".form-admin div input").remove();
 		$(".form-admin div select").remove();
	 });
});

$("#form-update").on('click',function(){
 	 $(".form-admin div label").remove();
 	 $(".form-admin div input").remove();
 	 $(".form-admin div select").remove();
 	 $(".form-admin div").append("<label>Email </label><input type='text' name='upemail' /><label> Nombre </label><input type='text' name='upnombre' /><label> Permisos </label><select name='uprol'><option value=''>Selecciona</option><option value='administrador'>Administrador</option><option value='usuario'>Usuario</option></select><input type='submit' id='update' value='Actualizar' /><input type='button' id='form-del' value='Cancelar' />");
 	 
 	 $('.form-admin').on('submit',function(){
		     var postData = $(this).serialize();
		     $.ajax({
		       url:"../M-master/admin/updateuser",
		       data:postData,
		       method:'post',
		       dataType:'json',
		       success:function(output){
		          window.location.href=output.redirect; 
		       }
		    });
 	 });

 	 $("#form-del").on('click',function(){
		$(".form-admin div label").remove();
 		$(".form-admin div input").remove();
 		$(".form-admin div select").remove();
	 });
});

$("#link-sesion").on('click',function(){
	$(".form-reg").hide(200);
	$(".form-log").toggle(200);
});

$("#link-registro").on('click',function(){
	$(".form-log").hide(200);
	$(".form-reg").toggle(200);
});

var show_mesg = function(str){
	$('body').append('<div class="message">' + str + '<div>');
	setTimeout(function(){
		$('.message').remove();
	},5000);
}


//------------------------------------------------------------------------------


if(location[4]=='game'){
var mem=new Array;
juego = "Memory";
nivel = "1";
cargmemory(juego,nivel,mem);

}

if(aux_path[aux_path.length-1] == 'paint'|| aux_path[aux_path.length-1] == 'paint#'){
  cargpaint();
}

if(aux_path[aux_path.length-1] == 'emociones'|| aux_path[aux_path.length-1] == 'emociones#'){
  cargardic();
}

function cargmemory(juego,nivel,mem){
    $.ajax({
      url:'../M-master/game/selectgame',
      type:'POST',
      datatype:'json',
      data:{game: juego, level: nivel},
      success:function(respuesta){
      i=0;
      cont=0;
      band=-1;
      var numOccurences=0;
      var mem2 = new Array;
      var name = new Array;
      var comp = new Array;
      $(".container").append("<div id='caja'></div>");
      var data = JSON.parse(respuesta);
      var comprobante=0;
      var numeros = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez"];
      idnivel=data[0].idniveles;
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
        name.push(data[j].nombre);
      }
      
      $( "#caja div" ).each(function() {
    num=Math.floor((Math.random() * mem.length-1) + 1);
    ruta=mem[num];
    nombre=name[num];
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
        nombre=name[num];
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
            $(this).append( "<img class='inc' id='img"+id+"' src='"+ruta+"' name='"+nombre+"'>" );
          }
        }
      }
      else{
      numOccurences=0;
      mem2.push(ruta);
      var id = $(this).attr('id');
        $(this).append( "<img class='inc' id='img"+id+"' src='"+mem[num]+"' name='"+nombre+"'>" );
      }
      
      }
      else{
      mem2.push(ruta);
      var id = $(this).attr('id');
        $(this).append( "<img class='inc' id='img"+id+"' src='"+mem[num]+"' name='"+nombre+"'>" );
      }
    
});
i=0;
  $("img").hide();
  $("#caja div").click(function(){
    cont = cont+1;
    var id = $(this).attr('id');
    if(cont==2){
      $("#img"+id).show("clip",1500);
      comp.push($("#img"+id).attr('name'));
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
      comp.push($("#img"+id).attr('name'));
      $("#img"+id).show("clip",1500);
      }
    if(comprobante==data.length){
      
      alert("correcto");
      $.ajax({
          url:'../M-master/game/rangoup',
          type:'POST',
          datatype:'json',
          data:{level: idnivel},
          success:function(respuesta){
                            }
                          });

    }
    
    });
      },
      error:function(data){
        alert(JSON.stringify(data));
      }
      })
};

$("#Memory").on('click',function(){
                //if(location[4]=='game'){
                  var mem=new Array;
                  juego = "Memory";
                  nivel = "1";
                  cargmemory(juego,nivel,mem);
                //}
                });

function cargrelaciona(juego,nivel,mem){
    $.ajax({
      url:'../M-master/game/selectgame',
      type:'POST',
      datatype:'json',
      data:{game: juego, level: nivel},
      success:function(respuesta){
      var data = JSON.parse(respuesta);
      var easy = 4;
      var win = easy;
      var arrayo = Array();
      var arrayo2 = Array();
      var arraynombres = Array();
      var arraynombres2 = Array();
      var arrayo3 = Array();
      var arrayo4 = Array();
      var no = false;
      idnivel=data[0].idniveles;
       $(".container").append("<div id='caja'></div>");
        $(".container").append("<div id='caja2'></div>");
        $(".container").append("<div id='caja3'></div>");
      for(j=0;j<data.length;j++){
      arrayo.push(data[j].fuente);
      arraynombres.push(data[j].nombre);
      }
    arrayo2.push(1);
    for(i = 0; i < easy; i++){
    do{
    var alea = Math.floor(Math.random()*7);
    no = false;
    for(j = 0; j < arrayo2.length; j++){
      if(alea == arrayo2[j])
      {
        no = true;
        break;
      }
    }
  }while(no == true);
  arrayo2.push(alea);
  var imagen = arrayo[alea];
  var nombre = arraynombres[alea];
    $('#caja').append('<div id="'+i+'">'+nombre+'</div>');
    arrayo3.push('<div id="'+i+'"><img src="'+imagen+'" width="100%" height="100%" /></div>');
}
arrayo4.push(Math.floor(Math.random()*4));
$("#caja3").append(arrayo3[arrayo4[0]]);
for(i = 0; i < arrayo3.length-1; i++){
  
  do{
    var alea = Math.floor(Math.random()*4);
    no = false;
    for(j = 0; j < arrayo4.length; j++){
      if(alea == arrayo4[j])
      {
        no = true;
        break;
      }
    }
  }while(no == true);
  arrayo4.push(alea);
  
  $("#caja3").append(arrayo3[alea]);  
}

$("#caja div").on('mouseover',function(){
  $(this).on('click',function(){
    $("#caja div").css('background-color','white');
    $(this).css('background-color','#FCC');
  });
});

$("#caja3 div").on('mouseover',function(){
  $(this).on('click',function(){
    $("#caja div").css('background-color','white');
  });
});

$("#caja2").on('mouseover',function(){
  $(this).on('click',function(){
    $("#caja div").css('background-color','white');
  });
});

var temp;

$("#caja div").on('click',function(){
  temp = $(this).attr("id");
});

$("#caja3 div").on('click',function(){
  if(temp == $(this).attr("id")){
    $("#caja #"+temp).css('-webkit-filter','opacity(0%)');
    $("#caja #"+temp).css('filter','opacity(0%)');
    $(this).css('-webkit-filter','opacity(0%)');
    $(this).css('filter','opacity(0%)');
    win=win-1;
    if(win==0)
    {
      alert("MOLT BE ETS UN CAMPIÓ"); 
      $.ajax({
         url:'../M-master/game/rangoup',
         type:'POST',
         datatype:'json',
         data:{level: idnivel},
         success:function(respuesta){ 
          }
               });
    }
  }
});
      },
      error:function(data){
        alert(JSON.stringify(data));
      }
      });
};

function carghistoria(juego,nivel,mem){
    $.ajax({
      url:'../M-master/game/selectgame',
      type:'POST',
      datatype:'json',
      data:{game: juego, level: nivel},
      success:function(respuesta){
      var data = JSON.parse(respuesta);
      tam_width = window.innerWidth - 20;
    tam_height = window.innerHeight - 20;
    idnivel=data[0].idniveles;
    //Control de escenas
    var scene = 1;//ini con la primera escena

    var lost, next, fin; //timers
    var ini_video;//videos
    var f_accion, next; //flags

    call_scene();//primer call a la primera escena del juego

    function call_scene(){
      //clear
      clearTimeout(next);
      clearTimeout(fin);
      clearTimeout(lost);
      
      $("div").remove();
      f_accion = false;
      next = false;

      if(scene == 1){
        ini_video = data[0].fuente;
        scene = 1;//next_scene
        cierto = data[0].nombre;
        timer_action = 10300;//tiempo donde se inicia la accion
      }else if(scene == 2){
        ini_video = data[1].fuente;
        scene = 2;//next_scene
        cierto = data[1].nombre;
        timer_action = 2500;//tiempo donde se inicia la primera accion
      }else if(scene == 3){
        ini_video = data[2].fuente;
        scene = 3;//next_scene
        cierto = data[2].nombre;
        timer_action = 2500;//tiempo donde se inicia la accion
      }else if(scene == 4){
        ini_video = data[3].fuente;
        scene = 4;//next_scene
        cierto = data[3].nombre;
        timer_action = 2500;//tiempo donde se inicia la accion
      }

        //ini video
        $("body").append("<div id='video'><video width='"+tam_width+"' height='"+tam_height+"' currentTime='3s' autoplay><source src='"+ini_video+"' type='video/webm'></video></div>");

          
          $("video").on('ended', function(){
            f_accion = true;
            $("body").append("<div id='Alegria' class='accion'>Alegria</div>");
            $("body").append("<div id='Calma' class='accion'>Calma</div>");
            $("body").append("<div id='Rabia' class='accion'>Rabia</div>");
            $("body").append("<div id='Por' class='accion'>Por</div>");
            $("body").append("<div id='Simpatia' class='accion'>Simpatia</div>");
            
                $(".accion").on('click',function(){
                  if($(this).attr('id') == cierto){//error
                    $("div").remove();
                    alert("Ganaste!! :) Pasemos a la siguiente escena");
                    scene++;
                    if(scene == 4){
                      var win = true;
                      scene = 1;  
                    }
                          if(scene == 1 && win == true){
                            alert("Ganaste!! :) No hay mas escenas pero a continuación puedes volver a jugar");
                            win = false;
                            $.ajax({
                            url:'/M-master/game/rangoup',
                            type:'POST',
                            datatype:'json',
                            data:{level: idnivel},
                            success:function(respuesta){
                              
                            }
                          });
                          }
                          //next scene ini if win
                          call_scene();
                  }else{
                    $("div").remove();
                    scene = scene;
                    alert("Perdiste volveremos a empezar :(");
                    //next scene ini if win
                    call_scene();
                  }
                });
          });

    }
    }
    });
  };


  function cargpaint(){

    var clic=false;
   var xCoord,yCoord="";
   var canvas=document.getElementById("can");
   window.addEventListener("keydown", pincelmas, false);
   window.addEventListener("keydown", pincelmenos, false);
   var cntx=canvas.getContext("2d");
   var colorant="red";
   mode='pincel';
   cntx.strokeStyle="red";
   cntx.lineWidth=10;
   cntx.lineCap="round";
   cntx.fillStyle="#fff";
 cntx.fillRect(0,0,canvas.width,canvas.height);
$("#can").mousedown(function(canvas){
   clic=true;
   cntx.save();
   xCoord=canvas.pageX-this.offsetLeft;
   yCoord=canvas.pageY-this.offsetTop;
   if(mode=='circulo'){
      cntx.beginPath();
        cntx.arc(xCoord, yCoord, 60, 0, 2*Math.PI);
    cntx.fillStyle=colorant;
    cntx.fill();
    cntx.closePath();
       }
       if(mode=='cuadrado'){
              cntx.beginPath();
       cntx.rect(xCoord, yCoord, 100, 100);
       cntx.fillStyle=colorant;
       cntx.fill();
       cntx.closePath();
       }
       if(mode=='rectangulo'){
       cntx.beginPath();
       cntx.rect(xCoord, yCoord, 200, 100);
       cntx.fillStyle=colorant;
       cntx.fill();
       cntx.closePath();
       }
       if(mode=='triangulo'){
        cntx.beginPath();
    cntx.moveTo(100,110);
    cntx.lineTo(200,10);
    cntx.lineTo(300,110);
    cntx.closePath();
    cntx.fillStyle=colorant;
    cntx.fill();
       }
});

$(document).mouseup(function(){
   clic=false
});

$(document).click(function(){
   clic=false
});
$("#can").mousemove(function(canvas){
   if(clic==true){
       if(mode=="pincel" || mode=="borrador"){
        cntx.beginPath();
       cntx.moveTo(canvas.pageX-this.offsetLeft,canvas.pageY-this.offsetTop);
       cntx.lineTo(xCoord,yCoord);
       cntx.stroke();
       cntx.closePath();
       xCoord=canvas.pageX-this.offsetLeft;
       yCoord=canvas.pageY-this.offsetTop;
      cntx.lineCap="round";
      cntx.fillStyle="#fff";
    cntx.fillRect(0,0,canvas.width,canvas.height);
       }
       
   }
});
$("#clr > div").click(function(){
  cntx.lineWidth=10;
  $("canvas").css("cursor","url('../M-master/resources/image/paint/apple-icon-60x60 (1).ico'), auto");
   cntx.strokeStyle=$(this).css("background-color");
   colorant=cntx.strokeStyle;
});
          
$("#borrador").click(function(){
  mode="borrador";
  cntx.lineWidth=10;
  colorant=cntx.strokeStyle;
$("canvas").css("cursor","url('../M-master/resources/image/paint/Goma-Borrar-Kawaii-86342.ico'), auto");
   cntx.strokeStyle="#fff";
});

$("#limpiar").click(function(){
   cntx.fillStyle="#fff";
   cntx.fillRect(0,0,canvas.width, canvas.height);
});

$("#circulo").click(function(){
  $("canvas").css("cursor","url('../M-master/resources/image/paint/apple-icon-60x60 (1).ico'), auto");
mode='circulo';
});

$("#cuadrado").click(function(){
  $("canvas").css("cursor","url('../M-master/resources/paint/apple-icon-60x60 (1).ico'), auto");
mode='cuadrado';
});

$("#rectangulo").click(function(){
  $("canvas").css("cursor","url('../M-master/resources/image/paint/apple-icon-60x60 (1).ico'), auto");
mode='rectangulo';
});

$("#pincel").click(function(){
  $("canvas").css("cursor","url('../M-master/resources/image/paint/apple-icon-60x60 (1).ico'), auto");
  cntx.lineWidth=10;
  mode='pincel';
  $("canvas").css("cursor","url('../M-master/resources/image/paint/apple-icon-60x60 (1).ico'), auto");
   cntx.strokeStyle=colorant;
});

$("#guardar").click(function(){
  imagen=canvas.toDataURL("image/jpeg");
   $.ajax({
      url:'../M-master/paint/guardar',
      type:'POST',
      datatype:'json',
      data:{paint: imagen},
      error:function(){
        show_mesg('No se pudo subir el dibujo');
      },
      success:function(respuesta){  
        $(".control-paint").css('opacity','1');
        show_mesg('Dibujo añadido :)');
      }
    })
});

function pincelmas(e) {
    if (e.keyCode == "107") {
        cntx.lineWidth=cntx.lineWidth+15;
    }
}

function pincelmenos(e) {
    if (e.keyCode == "109") {
        cntx.lineWidth=cntx.lineWidth-5;
    }
}
  }

  //carga el diccionario y con append meto las section con sus respectivos divs y con la funcion cargdiccionario meto la fuente, nombre de la emocion y su descripcion
        function cargardic(){
    $.ajax({
      url:'../M-master/emociones/cargdiccionario',
      type:'POST',
      datatype:'json',
      success:function(respuesta){
           var data = JSON.parse(respuesta);
           for(i=0;i<data.length;i++){
            $("#container").append("<section><div class='parallax-window' data-parallax='scroll' data-image-src='"+data[0].fuente+"'></div><div class='emocion'><span>Que es la "+data[0].descripcion+"?</span><div>"+data[0].nombre+"</div></div></section>");
           }
      }
    })
  }

});