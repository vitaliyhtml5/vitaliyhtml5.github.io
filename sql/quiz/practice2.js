function passQuize() {
	const question = document.querySelector('.question');
	const operators = document.querySelectorAll('.parts__answer');
	const operatorsWrap = document.querySelector('.parts-wrap');
	const inputRow = document.querySelector('.answer-field');
	const btnClear = document.querySelector('.button-answer_left');
	const btnCheck = document.querySelector('.button-answer_right');
	const answerShow = document.querySelector('.answer-show');
	const answerTable = document.querySelector('.table-answer');
	const signAnswer = document.querySelector('.sign-field');
	const progress = document.querySelector('.progress');
	const result = document.querySelector('.result');

	let inputs;
	let counterInput = 0;
	let counterAnswer = 0;
	let counterCorrect = 0;

	btnClear.disabled = true;
	btnCheck.disabled = true;
	result.innerText = `${counterCorrect} %`;
	progress.innerText = `1 / ${questionArr.length}`;

	operators.forEach(element => {
		element.onclick = () => {
			inputs = document.querySelectorAll('.answer-field_empty');
			if (counterInput < inputs.length) {
				inputs[counterInput].innerText = element.innerText;
				inputs[counterInput].style.border = 'none';
				counterInput++;
			}
			if (counterInput == inputs.length) {
				operators.forEach(element => {
					element.classList.add('parts__answer_opacity');
					btnClear.classList.remove('btn_clear');
					btnClear.disabled = false;
					btnCheck.classList.remove('btn_clear');
					btnCheck.disabled = false;
					return;
				});	
			}
		}
	});

	btnClear.onclick = () => {
		clearInputs();
		btnClear.classList.add('btn_clear');
		btnClear.disabled = true;
		btnCheck.classList.add('btn_clear');
		btnCheck.disabled = true;
	}

	btnCheck.onclick = () => {
		if (btnCheck.innerText == 'Далее') {
			clearInputs();
			clearAnswer();
			question.innerText = questionArr[counterAnswer];
			inputRow.innerHTML = questionFieldArr[counterAnswer];
			progress.innerText = `${counterAnswer + 1} / ${questionArr.length}`;
		}
		else if (btnCheck.innerText == 'Завершить') {
			openOverlay(event, overlay, modal);
			showResult(modalText);
		}
		else {
			if (counterAnswer == 0) {
				if (inputs[0].innerText == 'SELECT' && inputs[1].innerText == 'FROM') {
					chooseCorrect(counterAnswer);
				}
				else {
					chooseWrong(counterAnswer);
				}
			}
			if (counterAnswer == 1) {
				if (inputs[0].innerText == 'SELECT' && inputs[1].innerText == 'WHERE' && inputs[2].innerText == '>=') {
					chooseCorrect(counterAnswer);
				}
				else {
					chooseWrong(counterAnswer);
				}
			}
			if (counterAnswer == 2) {
				if (inputs[0].innerText == 'FROM' && inputs[1].innerText == 'WHERE' && inputs[2].innerText == 'AND') {
					chooseCorrect(counterAnswer);
				}
				else {
					chooseWrong(counterAnswer);
				}
			}
			if (counterAnswer == 3) {
				if (inputs[0].innerText == 'DISTINCT' && inputs[1].innerText == 'name' && inputs[2].innerText == 'ORDER BY' && inputs[3].innerText == 'DESC') {
					chooseCorrect(counterAnswer);
				}
				else {
					chooseWrong(counterAnswer);
				}
			}
			if (counterAnswer == 4) {
				if (inputs[0].innerText == 'SELECT' && inputs[1].innerText == 'WHERE' && inputs[2].innerText == 'LIKE') {
					chooseCorrect(counterAnswer);
				}
				else {
					chooseWrong(counterAnswer);
				}
			}
			if (counterAnswer == 5) {
				if (inputs[0].innerText == 'MAX' && inputs[1].innerText == 'age') {
					chooseCorrect(counterAnswer);
				}
				else {
					chooseWrong(counterAnswer);
				}
			}
			if (counterAnswer == 6) {
				if (inputs[0].innerText == 'AVG' && inputs[1].innerText == 'GROUP BY' && inputs[2].innerText == 'name' && inputs[3].innerText == 'HAVING') {
					chooseCorrect(counterAnswer);
				}
				else {
					chooseWrong(counterAnswer);
				}
			}
			if (counterAnswer == 7) {
				if (inputs[0].innerText == 'UPDATE' && inputs[1].innerText == 'SET' && inputs[2].innerText == 'age' && inputs[3].innerText == 'WHERE') {
					chooseCorrect(counterAnswer);
				}
				else {
					chooseWrong(counterAnswer);
				}
			}
			if (counterAnswer == 8) {
				if (inputs[0].innerText == 'SELECT' && inputs[1].innerText == 'JOIN' && inputs[2].innerText == 'ON' && inputs[3].innerText == 'id_singer' && inputs[4].innerText == '<') {
					chooseCorrect(counterAnswer);
				}
				else {
					chooseWrong(counterAnswer);
				}
			}
			if (counterAnswer == 9) {
				if (inputs[0].innerText == 'SELECT' && inputs[1].innerText == 'LEFT JOIN' && inputs[2].innerText == 'ON' && inputs[3].innerText == 'id' && inputs[4].innerText == 'id_singer') {
					chooseCorrect(counterAnswer);
				}
				else {
					chooseWrong(counterAnswer);
				}
			}			
		counterAnswer++;
		result.innerText = `${counterCorrect} %`;	
		}	
	}
	
	function clearInputs() {
		operators.forEach(element => {
			element.classList.remove('parts__answer_opacity');
		});	
		inputs.forEach(element => {
			element.style.border = '1.5px solid #269cc0';
			element.innerText = '';
		});
		counterInput = 0;
	}

	function chooseCorrect(order) {
		counterCorrect +=10;
		answerShow.innerHTML = answerArr[order];
		inputRow.classList.add('answer-correct_light');
		inputs.forEach(element => {
			element.classList.add('answer-correct_light');
		});
		signAnswer.hidden = false;
		signAnswer.classList.add('sign-field-correct');
		operatorsWrap.style.display = 'none';
		answerTable.hidden = false;
		answerTable.innerHTML = resultArr[order];
		btnClear.classList.add('btn_clear');
		btnClear.disabled = true;
		if (counterAnswer == 9) {
			btnCheck.innerText = 'Завершить';
		}
		else {
			btnCheck.innerText = 'Далее';
		}
	}

	function chooseWrong(order) {
		answerShow.innerHTML = answerArr[order];
		inputRow.classList.add('error-answer_light');
		inputs.forEach(element => {
			element.classList.add('error-answer_light');
		});
		signAnswer.hidden = false;
		signAnswer.classList.add('sign-field-incorrect');
		operatorsWrap.style.display = 'none';
		answerTable.hidden = false;
		answerTable.innerHTML = resultArr[order];
		btnClear.classList.add('btn_clear');
		btnClear.disabled = true;
		if (counterAnswer == 9) {
			btnCheck.innerText = 'Завершить';
		}	
		else {
			btnCheck.innerText = 'Далее';
		}			
	}

	function clearAnswer() {
		answerShow.innerText = '';
		inputRow.classList.remove('answer-correct_light');
		inputRow.classList.remove('error-answer_light');
		inputs.forEach(element => {
			element.classList.remove('error-answer_light');
			element.classList.remove('answer-correct_light');
		});
		signAnswer.hidden = true;
		signAnswer.classList.remove('sign-field-incorrect');
		signAnswer.classList.remove('sign-field-correct');
		operatorsWrap.style.display = 'block';
		answerTable.hidden = true;
		btnCheck.innerText = 'Проверить';
		btnCheck.classList.add('btn_clear');
		btnCheck.disabled = true;
	}

	// OVERLAY
	const overlay = document.querySelector('.overlay');
	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelector('.modal__btn');
	let modalText = document.querySelector('.modal__text');

	function openOverlay(event, overlay, modal) {
		let testResult = document.querySelector('.modal__number');
		localStorage.setItem('sql-test3', `${counterCorrect} %`);
		showMainProgress();

		event.preventDefault();
		modal.onclick = (e) => e.stopPropagation();

		overlay.classList.remove('none-transition');
		overlay.style.display = 'block';
		if (overlay) overlay.classList.add('block-transition');
	}

	function showResult(text) {
		document.querySelector('.modal__number').innerText = `${counterCorrect} %`;
		if (counterCorrect == 100) {
			text.classList.add('modal__text_animation');
			text.innerText = 'Вау, это круто!!!';
		}
		else if (counterCorrect >= 80) {
			text.classList.remove('modal__text_animation');
			text.innerText = 'Вы успешно прошли тест';
		}
		else {
			text.classList.remove('modal__text_animation');
			text.innerText = 'Вы можете пройти тест ещё раз';
		}
	}	

	function closeOverlay(overlay) {
		overlay.classList.remove('block-transition');
		if (overlay) overlay.classList.add('none-transition');
	}

	window.addEventListener('keyup', function (e) {
	e.preventDefault();
	overlay.classList.remove('block-transition');
	  if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) {
	    overlay.classList.add('none-transition');
	  }
	});

	overlay.onclick = () => closeOverlay(overlay);

	// RELOAD TEST
	document.querySelector('.modal__btn').onclick = () => {
		setTimeout( () =>  {
			window.location.reload(true);
		}, 
		10);
	}
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
		for (let i = 0; i < progressResult.length; i++) {
			if (parseInt(progressResult[i].innerText) >= 80) {
				width += 30;
				awardMedal.style.width = `${width}px`;
			}
			if (resultTest[0] == 100 && resultTest[1] == 100 && resultTest[2] == 100 && resultTest[3] == 100 && resultTest[4] == 100) {
				statisticWrap.style.backgroundImage = 'url(img/cup.svg)';
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

	function closeOverlay(overlay) {
		overlay.classList.remove('block-transition');
		if (overlay) overlay.classList.add('none-transition');
	}
	
	window.addEventListener('keyup', function (e) {
	e.preventDefault();
	statisticOverlay.classList.remove('block-transition');
	  if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) {
	    statisticOverlay.classList.add('none-transition');
	  }
	});	
}

showStatistic();

const questionArr = [
'Сделайте выборку значений столбца value в таблице country',
'Выведите все значения из таблицы singer, где возраст = 45 и выше',
'Выведите строку со всеми значениями, где имя = Iglesias и возраст = 77',
'Сделайте выборку уникальных значений в столбце name и упорядочьте их по возрасту в порядке убывания',
'Добавьте команду для выборки стран, которые начинаются с буквы C',
'Какой самый большой возраст представлен в таблице singer',
'Посчитайте средний возраст для певцов Iglesias',
'Измените возраст для Zibrov с 63 на 64',
'Выведите значения столбцов name и value, где возраст певцов будет меньше 70 и будет информация по странам для них',
'Сделайте выборку всех певцов и их стран (даже если данных по стране нет)'
];

const questionFieldArr = [`<p class="answer-field"><span
class="answer-field_empty"></span> name <span
class="answer-field_empty"></span> country;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field"><span
class="answer-field_empty"></span> * FROM singer<br><span
class="answer-field_empty"></span> age &#160;<span
class="answer-field_empty" style="text-align:center;"></span> 45;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field">SELECT * <span
class="answer-field_empty"></span> singer<br><span
class="answer-field_empty"></span> name = 'Iglesias'<br><span
class="answer-field_empty"></span> age = 77;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field">SELECT <span
class="answer-field_empty"></span> <span
class="answer-field_empty"></span> FROM singer<br><span
class="answer-field_empty"></span> age <span
class="answer-field_empty" style="margin-right:2px;"></span>;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field"><span
class="answer-field_empty"></span> value FROM  country<br><span
class="answer-field_empty"></span> value <span
class="answer-field_empty" style="text-align: center"></span> 'C%';<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field">SELECT <span
class="answer-field_empty" style="text-align: center"></span>( <span
class="answer-field_empty" style="text-align: center"></span>) FROM  singer;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field">SELECT <span
class="answer-field_empty" style="text-align: center"></span>(age) FROM  singer<br><span
class="answer-field_empty"></span> <span
class="answer-field_empty"></span><br><span
class="answer-field_empty"></span> name = 'Iglesias';<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field"><span
class="answer-field_empty"></span> singer<br><span
class="answer-field_empty"></span> <span
class="answer-field_empty"></span> = 64<br><span
class="answer-field_empty"></span> id = 5;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field"><span
class="answer-field_empty"></span> singer.name, country.value FROM singer<br><span
class="answer-field_empty"></span> country<br><span
class="answer-field_empty"></span> singer.id = country.<span
class="answer-field_empty"></span><br>WHERE singer.age <span
class="answer-field_empty" style="text-align: center"></span>70;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field"><span
class="answer-field_empty"></span> singer.name, country.value FROM singer<br><span
class="answer-field_empty"></span> country<br><span
class="answer-field_empty"></span> singer.<span
class="answer-field_empty" style="min-width:30px;"></span> = country.<span
class="answer-field_empty"></span>;<span class="sign-answer
sign-field" hidden=""></span></p>`
];

const answerArr = [
`<div class="answer-wrap answer-show">SELECT value FROM country;</div>`,
`<div class="answer-wrap answer-show">SELECT * FROM singer<br>WHERE age >= 45;</div>`,
`<div class="answer-wrap answer-show">SELECT * FROM singer<br>WHERE name = 'Iglesias'<br>AND age = 77;</div>`,
`<div class="answer-wrap answer-show">SELECT DISTINCT name FROM singer<br>ORDER BY age DESC;</div>`,
`<div class="answer-wrap answer-show">SELECT value FROM country<br>WHERE value LIKE 'C%';</div>`,
`<div class="answer-wrap answer-show">SELECT MAX(age) FROM singer;</div>`,
`<div class="answer-wrap answer-show">SELECT AVG(age) FROM singer<br>GROUP BY name<br>HAVING name = 'Iglesias';</div>`,
`<div class="answer-wrap answer-show">UPDATE singer<br>SET age = 64<br>WHERE id = 5;</div>`,
`<div class="answer-wrap answer-show">SELECT singer.name, country.value FROM singer<br>JOIN country<br>ON singer.id = country.id_singer<br> WHERE singer.age < 70;</div>`,
`<div class="answer-wrap answer-show">SELECT singer.name, country.value FROM singer<br>LEFT JOIN country<br>ON singer.id = country.id_singer;</div>`
];

const resultArr = [ `<table class="table_main table_answer"><tr><th
class="column_bold">value</th></tr><tr><td>Italy</td></tr><tr><td>USA</td></tr><tr><td>Ukraine</td></tr><tr><td>Spain</td></tr><tr><td>England</td></tr><tr><td>Canada</td></tr></table>`,

`<table class="table_main table_answer"><tr><th
class="column_bold">id</th><th>name</th><th>age</th></tr><tr><td
class="column_bold">1</td><td>Iglesias</td><td>77</td></tr><tr><td
class="column_bold">2</td><td>Chelentano</td><td>82</td></tr><tr><td
class="column_bold">4</td><td>Dion</td><td>52</td></tr><tr><td
class="column_bold">5</td><td>Zibrov</td><td>63</td></tr><tr><td
class="column_bold">6</td><td>Iglesias</td><td>45</td></tr></table>`,

`<table class="table_main table_answer"><tr><th
class="column_bold">id</th><th>name</th><th>age</th></tr><tr><td
class="column_bold">1</td> <td>Iglesias</td> <td>77</td></tr>
</table>`,

`<table class="table_main table_answer"><tr><th>name</th></tr><tr>
<td>Chelentano</td></tr><tr><td>Iglesias</td></tr><tr>
<td>Zibrov</td></tr><tr><td>Dion</td></tr><tr><td>Sheeran</td>
</tr></table>`,

`<table class="table_main table_answer"><tr><th>value</th></tr><tr><td>Canada</td></tr></table>`,

`<table class="table_main table_answer"><tr><th>MAX(age)</th></tr><tr><td>82</td></tr></table>`,

`<table class="table_main table_answer"><tr><th>AVG(age)</th></tr><tr><td>61</td></tr></table>`,

`<table class="table_main table_answer"><tr><th
class="column_bold">id</th><th>name</th><th>age</th></tr> <tr><td
class="column_bold">1</td><td>Iglesias</td><td>77</td></tr><tr><td
class="column_bold">2</td><td>Chelentano</td> <td>82</td></tr><tr><td
class="column_bold">3</td><td>Sheeran</td><td>29</td></tr><tr><td
class="column_bold">4</td> <td>Dion</td><td>52</td></tr><tr><td
class="column_bold">5</td><td>Zibrov</td><td>64</td></tr><tr><td
class="column_bold">6</td> <td>Iglesias</td><td>45</td></tr></table>`,

`<table class="table_main table_answer"><tr><th style="width:50%;">name</th><th>value</th></tr><tr><td>Sheeran</td><td>England</td></tr><tr>
<td>Dion</td><td>Canada</td></tr><tr><td>Zibrov</td><td>Ukraine</td></tr></table>`,


`<table class="table_main table_answer"><tr><th style="width:50%;">name</th><th>value</th></tr><tr><td>Iglesias</td><td>Spain</td></tr><tr>
<td>Chelentano</td><td>Italy</td></tr><tr><td>Sheeran</td><td>England</td></tr><tr><td>Dion</td><td>Canada</td></tr>
<tr><td>Zibrov</td><td>Ukraine</td></tr><tr><td>Iglesias</td><td>NULL</td></tr></table>`
];

passQuize();