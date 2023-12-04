function checkAnswer() {
	var selectedAnswer = document.querySelector('input[name="answer"]:checked');
	
	if (selectedAnswer !== null) {
		if (selectedAnswer.value === 'b') {
			document.getElementById('feedback').innerHTML = 'Correct!';
		} else {
			document.getElementById('feedback').innerHTML = 'Wrong answer. Try again!';
		}
	} else {
		document.getElementById('feedback').innerHTML = 'Please select an answer.';
	}
}
