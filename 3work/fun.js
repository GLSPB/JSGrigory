
//** 
function sum(){
	
let text = prompt("Enput xext: ");
const encrypt = () => {
	let result = '';
	for (let i = 0; i < text.length; i += 2){
		const nextChar = text[i+1] || '';
		result = `${result}${nextChar}${text[i]}`;
	}
	alert(result);
}
encrypt();

}

const button = document.querySelector("button");
button.addEventListener("click", sum);

