// NUmero aleatorio, eleccion de Js
function eleccionAleatoria(min, max)
{
	var aleatorio = Math.floor( Math.random() * ( max - min + 1 ) + min );
	return aleatorio;
}

function Play(eleccionUser)
{
	var opcion = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
	var User = opcion[eleccionUser]; // Click trae un numero y lo transforma en un arma!
	var Js = opcion[eleccionAleatoria(0, 4)]; // Js tambien tiene 5 opciones, aleatorias, que tambien se transforman en armas
	
	// Muestra el arma elegida
 	var elecciones = document.getElementById("choice");
 	elecciones.appendChild(document.createTextNode("Elegiste: " + User + ", y Js elegio: " + Js));
 	// Limpia para mostrar de nuevo las selecciones si sobre poner los datos
 	elecciones.removeChild(elecciones.firstChild);

 	// Que inicie la batalla!
	if (User == "Piedra")
	{
		if(Js == "Piedra")
		{
			document.getElementById('tie').style.display="block";
			document.getElementById('win').style.display="none";
			document.getElementById('lose').style.display="none";
		}
		else if(Js == "Tijeras" || Js == "Lagarto")
		{
			document.getElementById('tie').style.display="none";
			document.getElementById('win').style.display="block";
			document.getElementById('lose').style.display="none";
		}
		else if(Js == "Papel" || Js == "Spock")
		{
			document.getElementById('tie').style.display="none";
			document.getElementById('win').style.display="none";
			document.getElementById('lose').style.display="block";
		}
	}
	
	else if (User == "Papel")
	{
		if(Js == "Piedra" || Js == "Spock")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="block";
		document.getElementById('lose').style.display="none";
		}
		else if(Js == "Tijeras" || Js == "Lagarto")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="block";
		}
		else if(Js == "Papel")
		{
		document.getElementById('tie').style.display="block";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="none";
		}
	}

	else if (User == "Tijeras")
	{
		if(Js == "Piedra" || Js == "Spock")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="block";
		}
		else if(Js == "Tijeras")
		{
		document.getElementById('tie').style.display="block";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="none";
		}
		else if(Js == "Papel" || Js == "Lagarto")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="block";
		document.getElementById('lose').style.display="none";
		}
	}

	else if (User == "Lagarto")
	{
		if(Js == "Piedra"  || Js == "Tijeras")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="block";
		}
		else if(Js == "Lagarto")
		{
		document.getElementById('tie').style.display="block";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="none";
		}
		else if(Js == "Papel" || Js == "Spock")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="block";
		document.getElementById('lose').style.display="none";
		}
	}

	else if (User == "Spock")
	{
		if(Js == "Papel"  || Js == "Lagarto")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="block";
		}
		else if(Js == "Spock")
		{
		document.getElementById('tie').style.display="block";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="none";
		}
		else if(Js == "Piedra" || Js == "Tijeras")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="block";
		document.getElementById('lose').style.display="none";
		}
	}

	// Eso fue divertido =)

}