var id;
var contEmpate=0;
var contVictorias=0;
var contDerrotas=0;

if (contVictorias==0 || contDerrotas==0)
{
	document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:100%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"10 / 10"+
              											 "</div>";

    document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:100%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"10 / 10"+
              											 "</div>";
}
//--------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------//

function fjuego()
{
	if (contVictorias==10 || contDerrotas==10)
	{
		if (contVictorias==10)
		{
			finJuego=prompt("Ganaste! ¿Deseas jugar de nuevo? \nSi: 0\nNo: 1", 0);
			if (finJuego==undefined)
			{
	   			alert("Elije una opción correcta")
	   			return fjuego();
			}

			else if(finJuego>=2)
			{
	   		alert("Elije una opción correcta")
	  		return fjuego();
			}
	
			else if(finJuego==0)
			{
			   	window.location.reload();
			}

			else if(finJuego==1)
		    {
			  	document.getElementById('caja').innerHTML = "<div class='box1'> <img scr='' height='35px'> </div>";
		   	}	
		}

		else if (contDerrotas==10)
		{
			finJuego=prompt("Perdiste! ¿Deseas intentarlo de nuevo? \nSi: 0\nNo: 1", 0);
			if (finJuego==undefined)
			{
	   			alert("Elije una opción correcta")
	   			return fjuego();
			}

			else if(finJuego>=2)
			{
	   		alert("Elije una opción correcta")
	  		return fjuego();
			}
	
			else if(finJuego==0)
			{
			   	window.location.reload();
			}

			else if(finJuego==1)
		    {
			  	document.getElementById('caja').innerHTML = "<div class='box1'> <img scr='' height='35px'> </div>";
		   	}	
		}
	}	
}
//--------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------//

function vidaMaquina()
{
	if (contVictorias==1)
	{
		document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:90%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"9 / 10"+
              											 "</div>";
	}

	else if (contVictorias==2)
	{
		document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:80%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"8 / 10"+
              											 "</div>";
	}

	else if (contVictorias==3)
	{
		document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:70%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"7 / 10"+
              											 "</div>";
	}

	else if (contVictorias==4)
	{
		document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:60%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"6 / 10"+
              											 "</div>";
	}

	else if (contVictorias==5)
	{
		document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:50%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"5 / 10"+
              											 "</div>";
	}

	else if (contVictorias==6)
	{
		document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:40%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"4 / 10"+
              											 "</div>";
	}

	else if (contVictorias==7)
	{
		document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:30%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"3 / 10"+
              											 "</div>";
	}

	else if (contVictorias==8)
	{
		document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:20%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"2 / 10"+
              											 "</div>";
	}

	else if (contVictorias==9)
	{
		document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:10%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"1 / 10"+
              											 "</div>";
	}

	else if (contVictorias==10)
	{
		document.getElementById('vidaRival').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:0%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			" / 10"+
              											 "</div>";
         fjuego();
	}
}

//--------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------//

function vidaUser()
{
	if (contDerrotas==1)
	{
		document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:90%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"9 / 10"+
              											 "</div>";
	}

	else if (contDerrotas==2)
	{
		document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:80%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"8 / 10"+
              											 "</div>";
	}

	else if (contDerrotas==3)
	{
		document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:70%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"7 / 10"+
              											 "</div>";
	}

	else if (contDerrotas==4)
	{
		document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:60%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"6 / 10"+
              											 "</div>";
	}

	else if (contDerrotas==5)
	{
		document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:50%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"5 / 10"+
              											 "</div>";
	}

	else if (contDerrotas==6)
	{
		document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:40%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"4 / 10"+
              											 "</div>";
	}

	else if (contDerrotas==7)
	{
		document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:30%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"3 / 10"+
              											 "</div>";
	}

	else if (contDerrotas==8)
	{
		document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:20%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"2 / 10"+
              											 "</div>";
	}

	else if (contDerrotas==9)
	{
		document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:10%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			"1 / 10"+
              											 "</div>";
	}

	else if (contDerrotas>=10)
	{
		document.getElementById('vidaUsuario').innerHTML = "<div class='progress-bar' role='progressbar' aria-valuenow='20'"+
        												 "aria-valuemin='0' aria-valuemax='100'"+
              										     "style='width:0%' height:'100%'> "+      
                						    			    "<span class='sr-only'></span>"+
                 									 			" / 10"+
              											 "</div>";    
		    fjuego();
	}
}
//--------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------//

function opcionU(id)
{
	var piedra = 0;
	var papel = 1;                                                             
	var tijera = 2;
	var lagarto = 3;
	var spock = 4;
	var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
	var opcionUsuario=id;
	var opcionMaquina = aleatorio(0,4);
	
		function aleatorio(minimo, maximo)
		{
			var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo)
			return numero;
		}
//---------------------------------------------------------------------------------------------------------------------------------
		function asigna_empate()
		{ 
			document.formulario1.emp.value=contEmpate; 
		}

		function asigna_ganaste()
		{ 
			document.formulario1.vic.value=contVictorias; 
		}

		function asigna_perdiste()
		{ 
			document.formulario1.der.value=contDerrotas; 
		}
//--------------------------------------------------------------------------------------------------------------------------------

	if (opcionUsuario==0 || opcionUsuario==1 || opcionUsuario==2 || opcionUsuario==3 || opcionUsuario==4)
	{
		if(opcionUsuario == opcionMaquina)
		{
			document.getElementById('usuario').src ="img/"+ opcionUsuario+".jpg";
			document.getElementById('rival').src ="img/"+ opcionMaquina+".jpg";
			contEmpate++;
			asigna_empate();
		}

		else if(opcionUsuario==piedra && opcionMaquina==tijera ||
			    opcionUsuario==piedra && opcionMaquina==lagarto ||
			    opcionUsuario==papel && opcionMaquina==piedra ||
			    opcionUsuario==papel && opcionMaquina==spock ||
			    opcionUsuario==tijera && opcionMaquina==papel ||
			    opcionUsuario==tijera && opcionMaquina==lagarto ||
			    opcionUsuario==lagarto && opcionMaquina==papel ||
			    opcionUsuario==lagarto && opcionMaquina==spock ||
			    opcionUsuario==spock && opcionMaquina==piedra ||
			    opcionUsuario==spock && opcionMaquina==tijera)
		{
			document.getElementById('usuario').src ="img/"+ opcionUsuario +".jpg";
			document.getElementById('rival').src ="img/"+ opcionMaquina +".jpg";
			contVictorias++;
			vidaMaquina();
			asigna_ganaste();
		}

		else
		{
			document.getElementById('usuario').src ="img/"+ opcionUsuario+".jpg";
			document.getElementById('rival').src ="img/"+ opcionMaquina+".jpg";
			contDerrotas++;
			vidaUser();
			asigna_perdiste();
		}	
	}	
}