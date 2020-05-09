let testAnswer = document.querySelectorAll('.answer__input');
const btnEndTest = document.querySelector('.finish-btn');
let count = 0;

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
let modalText = document.querySelector('.modal__text');
const modalBtn = document.querySelector('.modal__btn');

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
	for (let key in testAnswer) {
		chooseCorrect(testAnswer[key], 'question-1', 'b');
		chooseCorrect(testAnswer[key], 'question-2', 'c');
		chooseCorrect(testAnswer[key], 'question-3', 'a');
		chooseCorrect(testAnswer[key], 'question-4', 'b');
		chooseCorrect(testAnswer[key], 'question-5', 'c');
		chooseCorrect(testAnswer[key], 'question-6', 'a');
		chooseCorrect(testAnswer[key], 'question-7', 'b');
		chooseCorrect(testAnswer[key], 'question-8', 'c');
		chooseCorrect(testAnswer[key], 'question-9', 'a');
		chooseCorrect(testAnswer[key], 'question-10', 'b');
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
function openOverlay(event, overlay,modal) {
	let testResult = document.querySelector('.modal__number');

	event.preventDefault();
	modal.onclick = (e) => e.stopPropagation();

	overlay.classList.remove('none-transition');
	overlay.style.display = 'block';

	showResult(document.querySelector('.modal__text_top'));
	testResult.innerText = count * 10 + '%';

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

// BACK TO MAIN

document.querySelector('.header__link').onclick = () => {
	const overlayBack = document.querySelector('.overlay-back');
	const modalBack = document.querySelector('.modal-back');
	const btnBack = document.querySelector('.btn-back__right');
	
	for (let key in testAnswer) {
		if (testAnswer[key].checked === true) {
			event.preventDefault();
			openOverlay(event, overlayBack, modalBack);
		}	
	}
	overlayBack.onclick = () => closeOverlay(overlayBack);
	btnBack.onclick = () => closeOverlay(overlayBack);
	
	window.addEventListener('keyup', function (e) {
		e.preventDefault();
		overlayBack.classList.remove('block-transition');
		  if (e.keyCode === 27) {
		    overlayBack.classList.add('none-transition');
		  }
	});		
}

