const getRandomNumber = () => Math.round(Math.random() * 10);
const isEvent = (number) => !(number );
const playRound = () => {
	let number = getRandomNumber();
    let numberT = getRandomNumber();
    
	const correctAnswer = isEvent(number);
	const userAnswer = prompt(
		`Суммв чисел ${number} + ${numberT} = Пожалуйста ответьте: `
	);
    const numb = parseInt(userAnswer);
    let otv = number + numberT;
    
	if (!userAnswer) {
		alert("нет ответа! игра окончена");
		return false;
	} else if (numb === otv) {
		alert("Правильно! круто! супер!");
		return true;
	} else {
		alert("неправильно");
		return false;
	}
};

const playGame = () => {
	
		const isCorrect = playRound();
		if (!isCorrect) {
			return;
		}
	}
	alert("Победа");
const button = document.querySelector("button");
button.addEventListener("click", playGame);
