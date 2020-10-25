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
	for (let key in testAnswer) {
		chooseCorrect(testAnswer[key], 'question-1', 'a');
		chooseCorrect(testAnswer[key], 'question-2', 'c');
		chooseCorrect(testAnswer[key], 'question-3', 'a');
		chooseCorrect(testAnswer[key], 'question-4', 'c');
		chooseCorrect(testAnswer[key], 'question-5', 'b');
		chooseCorrect(testAnswer[key], 'question-6', 'c');
		chooseCorrect(testAnswer[key], 'question-7', 'b');
		chooseCorrect(testAnswer[key], 'question-8', 'a');
		chooseCorrect(testAnswer[key], 'question-9', 'b');
		chooseCorrect(testAnswer[key], 'question-10', 'a');
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

	previousResult.innerText = testResult.innerText;
	previousResultRow.style.display = 'block';
	localStorage.setItem('sql-test0', previousResult.innerText);
	showMainProgress();

	  if (overlay) overlay.classList.add('block-transition');
	}

function closeOverlay(overlay) {
	overlay.classList.remove('block-transition');
	if (overlay)  overlay.classList.add('none-transition');
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
if (localStorage.getItem('sql-test0')) {
	previousResultRow.style.display = 'block';
	previousResult.innerText = localStorage.getItem('sql-test0');
}
else {
	previousResultRow.style.display = 'none';
}

//Show main progress
function showMainProgress() {
	const progressBar = document.querySelector('.progress-main__bar');
	progressBar.value = 5;
	let previousResult0 = parseInt(localStorage.getItem("sql-test0"));
	let previousResult1 = parseInt(localStorage.getItem("sql-test1"));
	let previousResult2 = parseInt(localStorage.getItem("sql-test2"));
	let previousResult3 = parseInt(localStorage.getItem("sql-test3"));
	let previousResult4 = parseInt(localStorage.getItem("sql-test4"));

	checkprogress(previousResult0);
	checkprogress(previousResult1);
	checkprogress(previousResult2);
	checkprogress(previousResult3);
	checkprogress(previousResult4);
	function checkprogress(item) {
		if (item >= 80) progressBar.value += 20;
	}
}
showMainProgress();

function showStatistic() {
	const progress = document.querySelector('.progress-main');
	const statisticOverlay = document.querySelector('.progress-overlay');
	const statisticWrap = document.querySelector('.progress-table-wrap');
	const statisticBtn = document.querySelector('.progress-table__btn');
	
	progress.onclick = () => {
		const statisticTable = document.querySelector('.progress-table');
		openProgressOverlay(event, statisticOverlay, statisticWrap);
		statisticTable.innerHTML = `<tr><th>Название</th><th>Последний результат</th></tr><tr><td>Тест - 1 (теория)</td>
		<td class="progress-table__result">${localStorage.getItem("sql-test0")}</td></tr><tr><td>Тест - 2 (теория)</td><td class="progress-table__result">${localStorage.getItem("sql-test1")}</td>
		</tr><tr><td>Тест на время</td><td class="progress-table__result">${localStorage.getItem("sql-test2")}</td>
		</tr><tr><td>Тест-практика (лёгкий)</td><td class="progress-table__result">${localStorage.getItem("sql-test3")}</td></tr><tr><td>Тест-практика (сложный)</td><td class="progress-table__result">${localStorage.getItem("sql-test4")}</td></tr>`;
		let progressResult = document.querySelectorAll('.progress-table__result');
		nullResult(progressResult[0]);
		nullResult(progressResult[1]);
		nullResult(progressResult[2]);
		nullResult(progressResult[3]);
		nullResult(progressResult[4]);

		let resultTest = [parseInt(progressResult[0].innerText),parseInt(progressResult[1].innerText),parseInt(progressResult[2].innerText),parseInt(progressResult[3].innerText),parseInt(progressResult[4].innerText)];
		let awardMedal = document.querySelector('.progress-table__award');
		let width = 0;
		const awardText = document.querySelector('.progress-table__link');
		const awardLink = document.querySelector('.progress-table__link a');
		for (let i = 0; i < progressResult.length; i++) {
			if (parseInt(progressResult[i].innerText) >= 80) {
				width += 30;
				awardMedal.style.width = `${width}px`;
			}
			if (resultTest[0] == 100 && resultTest[1] == 100 && resultTest[2] == 100 && resultTest[3] == 100 && resultTest[4] == 100) {
				statisticWrap.style.backgroundImage = 'url(img/cup.svg)';
				awardText.style.display = 'block';
				awardLink.href = 'https://youtu.be/vuisTw450p4';
			}
			else statisticWrap.style.backgroundImage = 'none';
		}
	}

	function nullResult(item) {
		if (item.innerText == 'null') item.innerText = '-';
	}

	function openProgressOverlay(event, overlay, modal) {
		event.preventDefault();
		modal.onclick = (e) => e.stopPropagation();

		overlay.classList.remove('none-transition');
		overlay.style.display = 'block';
		if (overlay) overlay.classList.add('block-transition');
	}

	statisticBtn.onclick = () => closeOverlay(statisticOverlay);
	statisticOverlay.onclick = () => closeOverlay(statisticOverlay);
	
	window.addEventListener('keyup', function (e) {
	e.preventDefault();
	statisticOverlay.classList.remove('block-transition');
	  if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) {
	    statisticOverlay.classList.add('none-transition');
	  }
	});	
}

showStatistic();