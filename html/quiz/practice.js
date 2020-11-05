const typeTest = document.querySelector('.category-box_left');
const typeTestList = document.querySelector('.category-list');
const typeTestItem = document.querySelectorAll('.category-item');
const categoryBox = document.querySelector('.category-box__name');
const categoryBoxAnswer = document.querySelector('.practice-box__left');
const categoryBoxExample = document.querySelector('.practice-box__right');
const questionTitle = document.querySelector('.question-text');
const answerField = document.querySelector('.practice-answer');
const answerCorrect = document.querySelector('.practice-correct');
const example = document.querySelector('.practice-example');
const questionProgress = document.querySelector('.progress-counter');
const questionMark = document.querySelector('.show-mark');
const questionBtn = document.querySelector('.question-btn');
let category = 0;

typeTest.onclick = () => typeTestList.classList.remove('hidden');
typeTestItem.forEach(element => {
	element.onclick = () => {
		categoryBox.innerText = element.innerText;
		typeTestList.classList.add('hidden');
	}
});

document.querySelector('.question-start__btn').onclick = () => {
	document.querySelector('.question-start').hidden = true;
	document.querySelector('.question-wrap').hidden = false;
	category = categoryBox.innerText;
	if (category == 'html') category = 0;
	if (category == 'css') category = 1;
	if (category == 'all')  {
		makeAllArr();
		category = 2;
	}
	makequestionArr();
	makeQuestion();
}

let questionArr = [];
let answersArr = [];
let count = 0;
let countResult = 0;


function makeQuestion() {
	questionTitle.innerText = practiceMain[category].question[questionArr[count]];
	answerField.innerHTML = practiceMain[category].answerField[questionArr[count]];
	categoryBoxExample.style.display = 'none';
	categoryBoxAnswer.classList.remove('practice-box__left_short');
	categoryBoxAnswer.classList.add('practice-box__left_long');
	questionMark.style.backgroundImage = 'none';

	questionProgress.innerText = `${count + 1} / ${questionArr.length}`;
}

questionBtn.onclick = () => checkAnswer(practiceMain[category].answers[questionArr[count]], practiceMain[category].correct[questionArr[count]], practiceMain[category].exampleEnd[questionArr[count]]);

function checkAnswer(answers, correct, exampleEnd) {
	let practiceValue = document.querySelectorAll('.practice-answer input');
	answersArr = [];
	if (questionBtn.innerText == 'Проверить') {
		practiceValue.forEach(element => {
			element.value = element.value.toLowerCase().trim();
			answersArr.push(element.value);
			element.disabled = true;
		});
		if (answers.toString() == answersArr.toString()) {
			console.log('yes');
			questionMark.style.backgroundImage = 'url(img/checked.svg)';
			countResult += 10;
		}
		else {
			questionMark.style.backgroundImage = 'url(img/unchecked.svg)';
			console.log(answersArr);
			console.log(answers);
		}	
		answerCorrect.innerHTML = correct;
		categoryBoxExample.style.display = 'block';
		categoryBoxAnswer.classList.remove('ppractice-box__left_long');
		categoryBoxAnswer.classList.add('practice-box__left_short');
		example.innerHTML = exampleEnd;

		if (count < (questionArr.length - 1)) questionBtn.innerText = 'Далее';
		else questionBtn.innerText = 'Завершить';
	}
	else if (questionBtn.innerText == 'Далее') {
		practiceValue.forEach(element => {
			element.value = '';
			element.disabled = false;
		});
		questionBtn.innerText = 'Проверить';
		answerCorrect.innerText = '';
		count++;
		makeQuestion();
	}
	else if (questionBtn.innerText == 'Завершить') showoverlay();
}

function getRandom() {
	return Math.floor(Math.random() * practiceMain[category].question.length);
}

function makequestionArr() {
	while (questionArr.length < 10) {
		questionArr.push(getRandom());
		questionArr = Array.from(new Set(questionArr));
	}
}

function makeAllArr() {
	practiceMain[2].question = practiceMain[2].question.concat(practiceMain[0].question, practiceMain[1].question);
	practiceMain[2].answerField = practiceMain[2].answerField.concat(practiceMain[0].answerField, practiceMain[1].answerField);
	practiceMain[2].answers = practiceMain[2].answers.concat(practiceMain[0].answers, practiceMain[1].answers);
	practiceMain[2].correct = practiceMain[2].correct.concat(practiceMain[0].correct, practiceMain[1].correct);
	practiceMain[2].exampleEnd = practiceMain[2].exampleEnd.concat(practiceMain[0].exampleEnd, practiceMain[1].exampleEnd);
}

// // OVERLAY
function showoverlay() {
	const overlay = document.querySelector('.overlay');
	const modal = document.querySelector('.modal');
	let testResult = document.querySelector('.modal__number');

	overlay.classList.remove('none-transition');
	overlay.style.display = 'block';
	showResult(document.querySelector('.modal__text_top'));
	testResult.innerText = `${countResult} %`;

	if (overlay) overlay.classList.add('block-transition');
	localStorage.setItem('html-test3', `${countResult}%`);
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
