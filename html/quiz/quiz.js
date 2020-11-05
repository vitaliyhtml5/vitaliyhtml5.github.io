let testAnswer = document.querySelectorAll('.answer__input');
const btnEndTest = document.querySelector('.finish-btn');
let count = 0;

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
let modalText = document.querySelector('.modal__text');
const modalBtn = document.querySelector('.modal__btn');

let previousResultRow = document.querySelector('.previous-result');
let previousResult = document.querySelector('.previous-result__value');

function chooseCorrect(element, name1, item) {
	if (element.value === item && element.name === name1 && element.checked === true) {
		element.previousElementSibling.style.background = "url(img/checked.svg) no-repeat";
		element.nextElementSibling.classList.add('answer-correct');
		count++;
	}
	else if (element.value !== item && element.name === name1 && element.checked === true) {
		element.previousElementSibling.style.background = "url(img/unchecked.svg) no-repeat";
		element.nextElementSibling.classList.add('answer-incorrect');
	}
}

function calculateTotal() {
	let i = -1;
	let j = 0;

	while (j < 10 || i < 29) {
		i++;
		if (i%3 == 0) j++;
		if(i == 30) break;
		chooseCorrect(testAnswer[i], `question-${j}`, quizAnswers[testNumber].answers[j-1]);	
	}
}

btnEndTest.onclick = () => {
	window.scrollTo(0,0);
	calculateTotal();
	document.querySelector('.result__number').innerText = count * 10 + '%';

	openOverlay(event, overlay, modal);
	btnEndTest.style.display = 'none';
	document.querySelector('.result-box').style.display = 'flex';

	let btnAnswer = document.querySelectorAll('.answer__btn');
	for (let key in btnAnswer) {
		btnAnswer[key].hidden = true;
	}
}

// OVERLAY
function openOverlay(event, overlay, modal) {
	let testResult = document.querySelector('.modal__number');

	event.preventDefault();
	modal.onclick = (e) => e.stopPropagation();

	overlay.classList.remove('none-transition');
	overlay.style.display = 'block';

	showResult(document.querySelector('.modal__text_top'));
	testResult.innerText = count * 10 + '%';

	previousResult.innerText = testResult.innerText;
	previousResultRow.style.display = 'block';
	localStorage.setItem(`html-test${testNumber}`, previousResult.innerText);
	showMainProgress();

	if (overlay) {
		overlay.classList.add('block-transition');
	}
}

function closeOverlay(overlay) {
	overlay.classList.remove('block-transition');

	if (overlay) {
	  overlay.classList.add('none-transition');
	}
}
window.addEventListener('keyup', function (e) {
e.preventDefault();
overlay.classList.remove('block-transition');
  if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) {
    overlay.classList.add('none-transition');
  }
});

function showResult(text) {
	if (count == 10) {
		text.classList.add('modal__text_animation');
		text.innerText = 'Поздравляем!!!';
	}
	else if (count >= 8) {
		text.classList.remove('modal__text_animation');
		text.innerText = 'Вы успешно прошли тест';
	}
	else {
		text.classList.remove('modal__text_animation');
		text.innerText = 'Вы можете пройти тест ещё раз';
	}
}

overlay.onclick = () => closeOverlay(overlay);
modalBtn.onclick = () => closeOverlay(overlay);

// RELOAD TEST

document.querySelector('.result__btn_right').onclick = () => {
	setTimeout( () =>  {
		window.location.reload(true);
	}, 
	10);
}

// Previous result from Local Storage
if (localStorage.getItem(`html-test${testNumber}`)) {
	previousResultRow.style.display = 'block';
	previousResult.innerText = localStorage.getItem(`html-test${testNumber}`);
}
else {
	previousResultRow.style.display = 'none';
}

