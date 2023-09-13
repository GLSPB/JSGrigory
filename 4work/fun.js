
//** 
function index(){
let n = prompt("Enput n: ");
let text = prompt("Enput text: ");
const makeItFunny = () => {
	let result = '';
	let i=0;
	while (i < text.length) {
		const current= text[i];
		if((i+1) % n === 0){
			result = `${result}${current.toUpperCase()}`;
		}else{
			result= `${result}${current}`;
		}
		i++;
	}
	alert(result);
	
}
makeItFunny();





}

const button = document.querySelector("button");
button.addEventListener("click", index);

