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
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('It should have been High-fi-rush!', 'success')
  })
}
