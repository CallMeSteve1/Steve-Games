function checkAnswer() {
	var selectedAnswer = document.querySelector('input[name="answer"]:checked');
	
	if (selectedAnswer !== null) {
		if (selectedAnswer.value === 'b') {
			document.getElementById('feedback').innerHTML = "I'm sorry you didn't enjoy it!";
		} else {
			document.getElementById('feedback').innerHTML = 'Thank you very much for enjoying my list!';
		}
	} else {
		document.getElementById('feedback').innerHTML = 'Please select an answer.';
	}
}
