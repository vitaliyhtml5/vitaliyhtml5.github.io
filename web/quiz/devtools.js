const btnStart = document.querySelectorAll('.question-start__btn');
const wizardOverlay = document.querySelector('.devtools-wizard-overlay');
const wizardModal = document.querySelector('.devtools-wizard-modal');
const question = document.querySelector('.question-text');
const answerBox = document.querySelector('.devtools-box');
let questionArr = [];
let questionIndex = 0;
let index;
let answerElement;
let answerValue;
const questionProgress = document.querySelector('.progress-counter');
const answerBtn = document.querySelector('.question-btn');
const questionMark = document.querySelector('.show-mark');

let countResult = 0;

makeArr();
showTest();

btnStart[0].onclick = () => openOverlay(event, wizardOverlay, wizardModal);
document.querySelector('.devtools-wizard__btn').onclick = () => closeOverlay(wizardOverlay);
wizardOverlay.onclick = () => closeOverlay(wizardOverlay);

btnStart[1].onclick = () => {
	document.querySelector('.question-start').hidden = true;
	document.querySelector('.question-wrap').hidden = false;
}

function showTest() {
	index = questionArr[questionIndex];

	question.innerText = devToolsMain.question[index];
	answerBox.innerHTML = devToolsMain.element[index];
	answerValue = devToolsMain.value[index];
	answerElement = document.querySelector('.answer');

	questionMark.style.backgroundImage = 'none';
	questionProgress.innerText = `${questionIndex+1} / ${questionArr.length}`;
	questionIndex++;
}

answerBtn.onclick = checkTest;

function checkTest() {
	if (answerBtn.innerText == 'Далее') {
		answerElement = 0;
		answerBtn.innerText = 'Проверить';
		showTest();
	}
	else if (answerBtn.innerText == 'Проверить' && questionIndex < questionArr.length) {
		correctAnswer();
		answerBtn.innerText = 'Далее';
	}
	else if (answerBtn.innerText == 'Проверить' && questionIndex == questionArr.length) {
		correctAnswer();
		answerBtn.innerText = 'Завершить';
	}
	else if (answerBtn.innerText == 'Завершить') showoverlay();
}

function correctAnswer() {
	const property = [answerElement.style.height, answerElement.style.width, answerElement.style.width, answerElement.style.fontFamily, answerElement.style.fontFamily, answerElement.style.fontSize, answerElement.style.fontSize, answerElement.style.fontWeight, answerElement.style.lineHeight, answerElement.style.fontStyle, answerElement.style.textDecoration, answerElement.style.color, answerElement.style.color, answerElement.style.backgroundColor, answerElement.style.backgroundColor, answerElement.style.display, answerElement.style.display, answerElement.style.display, answerElement.style.border,  answerElement.style.borderRadius, answerElement.style.paddingTop, answerElement.style.paddingLeft, answerElement.style.marginTop, answerElement.style.marginBottom, answerElement.style.textAlign];
	if (property[index] == answerValue) {
		showMark('checked');
		countResult += 10;
	}
	else {
		showMark('unchecked');
	}
}

function showMark(type) {
	questionMark.hidden = false;
	questionMark.style.backgroundImage = `url(img/${type}.svg)`;
}

function makeRandom() {
	let random = Math.floor(Math.random() * devToolsMain.question.length);
	return random;
}
function makeArr() {
	while (questionArr.length < 10) {
		questionArr.push(makeRandom());
		questionArr = Array.from(new Set(questionArr));
	}
}

// OVERLAY
function showoverlay() {
	const overlay = document.querySelector('.overlay');
	const modal = document.querySelector('.modal');
	let testResult = document.querySelector('.modal__number');

	overlay.classList.remove('none-transition');
	overlay.style.display = 'block';
	showResult(document.querySelector('.modal__text_top'));
	testResult.innerText = `${countResult} %`;

	if (overlay) overlay.classList.add('block-transition');
	localStorage.setItem('html-test4', `${countResult}%`);
	showMainProgress(); 
}

function showResult(text) {
	if (countResult == 100) {
		text.classList.add('modal__text_animation');
		text.innerText = 'Поздравляем!!!';
	}
	else if (countResult >= 80) {
		text.classList.remove('modal__text_animation');
		text.innerText = 'Вы успешно прошли тест';
	}
	else {
		text.classList.remove('modal__text_animation');
		text.innerText = 'Пройдите тест ещё раз';
	}
}

document.querySelector('.modal__btn').onclick = () => window.location.reload(true);


function openOverlay(event, overlay, modal) {
	event.preventDefault();
	modal.onclick = (e) => e.stopPropagation();

	overlay.classList.remove('none-transition');
	overlay.style.display = 'block';
	if (overlay) overlay.classList.add('block-transition');
}

function closeOverlay(overlay) {
	overlay.classList.remove('block-transition');
	if (overlay) overlay.classList.add('none-transition');
}
window.addEventListener('keyup', function (e) {
	e.preventDefault();
	wizardOverlay.classList.remove('block-transition');
	  if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32)	wizardOverlay.classList.add('none-transition');
});