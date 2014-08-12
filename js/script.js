// Random number, js choice
function randomChoice(min, max)
{
	var random = Math.floor( Math.random() * ( max - min + 1 ) + min );
	return random;
}

function Play(UserChoice)
{
	var opt = ["rock", "paper", "scissors", "lizard", "spock"];
	var User = opt[UserChoice]; // The click brings a number, translate it to a powerful weapon
	var Js = opt[randomChoice(0, 4)]; // So Js only has 5 options too, and they are also translated to powerful weapons
	
	// Shows the weapons of choice
 	var choices = document.getElementById("choice");
 	choices.appendChild(document.createTextNode("Your choice is: " + User + ", and Js choice is: " + Js));
 	// Clears tp show again without overlaping
 	choices.removeChild(choices.firstChild);

 	// Let the battle begin!
	if (User == "rock")
	{
		if(Js == "rock")
		{
			document.getElementById('tie').style.display="block";
			document.getElementById('win').style.display="none";
			document.getElementById('lose').style.display="none";
		}
		else if(Js == "scissors" || Js == "lizard")
		{
			document.getElementById('tie').style.display="none";
			document.getElementById('win').style.display="block";
			document.getElementById('lose').style.display="none";
		}
		else if(Js == "paper" || Js == "spock")
		{
			document.getElementById('tie').style.display="none";
			document.getElementById('win').style.display="none";
			document.getElementById('lose').style.display="block";
		}
	}
	
	else if (User == "paper")
	{
		if(Js == "rock" || Js == "spock")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="block";
		document.getElementById('lose').style.display="none";
		}
		else if(Js == "scissors" || Js == "lizard")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="block";
		}
		else if(Js == "paper")
		{
		document.getElementById('tie').style.display="block";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="none";
		}
	}

	else if (User == "scissors")
	{
		if(Js == "rock" || Js == "spock")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="block";
		}
		else if(Js == "scissors")
		{
		document.getElementById('tie').style.display="block";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="none";
		}
		else if(Js == "paper" || Js == "lizard")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="block";
		document.getElementById('lose').style.display="none";
		}
	}

	else if (User == "lizard")
	{
		if(Js == "rock"  || Js == "scissors")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="block";
		}
		else if(Js == "lizard")
		{
		document.getElementById('tie').style.display="block";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="none";
		}
		else if(Js == "paper" || Js == "spock")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="block";
		document.getElementById('lose').style.display="none";
		}
	}

	else if (User == "spock")
	{
		if(Js == "paper"  || Js == "lizard")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="block";
		}
		else if(Js == "spock")
		{
		document.getElementById('tie').style.display="block";
		document.getElementById('win').style.display="none";
		document.getElementById('lose').style.display="none";
		}
		else if(Js == "rock" || Js == "scissors")
		{
		document.getElementById('tie').style.display="none";
		document.getElementById('win').style.display="block";
		document.getElementById('lose').style.display="none";
		}
	}

	//That was fun =)

}