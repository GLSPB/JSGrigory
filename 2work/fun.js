

function sum(){
	const s1 = parseInt(document.getElementById("first").value);
	switch (s1) {
		case 7:
			alert("prime number");
		
		break;
		case 666:
			alert("devil number");

		break;
		case 42:
			alert("answer for everything");
		
		break;
		default:
			alert("just a number");
		  
		break;
	}
  }

const button = document.querySelector("button");
button.addEventListener("click", sum);