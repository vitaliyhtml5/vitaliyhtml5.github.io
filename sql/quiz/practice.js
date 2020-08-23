const questionText = ['Сделайте выборку всех значений таблицы ducks', 'Выведите столбец value из таблицы color, где value равен gold', 'Сделайте выборку всех столбцов таблицы ducks, где возраст меньше либо равно 10', 'Выведите name и age в таблице ducks, где имя равно ponochka, а возраст равен 7','Сделайте выборку значений столбца name в ducks,  где name равен zigzag или willy','Упорядочьте персонажей таблицы  ducks по возрасту в порядке возрастания (вывести все значения)', 'Выведите имена двух самых старших персонажей из таблицы  ducks', 'Посчитайте средний возраст в таблице ducks', 'В таблице color переименуйте значение grey в purple (в столбце value)', 'Выведите name и value из таблиц ducks и color только для тех, у кого есть соответствие цвета'];

const answer = [
"select * from ducks;", 
"select * from ducks",

"select value from color where value = 'gold';", 
"select value from color where value = 'gold'",
"select value from color where value='gold';", 
"select value from color where value='gold'",
`select value from color${'\n'}where value = 'gold';`,
`select value from color${'\n'}where value = 'gold'`,
`select value from color${'\n'}where value='gold';`,
`select value from color${'\n'}where value='gold'`,
`select value from color  where value = 'gold';`,
`select value from color  where value = 'gold'`,
`select value from color  where value='gold';`,
`select value from color  where value='gold'`,

"select * from ducks where age <= 10;", 
"select * from ducks where age <= 10",
"select * from ducks where age<=10;", 
"select * from ducks where age<=10",
`select * from ducks${'\n'}where age <= 10;`,
`select * from ducks${'\n'}where age <= 10`,
`select * from ducks${'\n'}where age<=10;`,
`select * from ducks${'\n'}where age<=10`,
"select * from ducks  where age <= 10;", 
"select * from ducks  where age <= 10",
"select * from ducks  where age<=10;", 
"select * from ducks  where age<=10",
"select * from ducks  where age < = 10;", 
"select * from ducks where age < = 10;", 
`select * from ducks${'\n'}where age < = 10;`,

"select name, age from ducks where name = 'ponochka' and age = 7;",
"select name, age from ducks where name = 'ponochka' and age = 7",
"select name, age from ducks where name='ponochka' and age=7;",
"select name, age from ducks where name='ponochka' and age=7",
"select name, age from ducks where age = 7 and name = 'ponochka';",
"select name, age from ducks where age = 7 and name = 'ponochka'",
"select name, age from ducks where age=7 and name='ponochka';",
"select name, age from ducks where age=7 and name='ponochka'",
"select name, age from ducks  where name = 'ponochka' and age = 7;",
"select name, age from ducks  where name = 'ponochka' and age = 7",
"select name, age from ducks  where name='ponochka' and age=7;",
"select name, age from ducks  where name='ponochka' and age=7",
"select name, age from ducks  where name = 'ponochka'  and age = 7;",
"select name, age from ducks  where name = 'ponochka'  and age = 7",
"select name, age from ducks  where name='ponochka'  and age=7;",
"select name, age from ducks  where name='ponochka'  and age=7",
"select name,age from ducks where name = 'ponochka' and age = 7;",
"select name,age from ducks where name = 'ponochka' and age = 7",
"select name,age from ducks where name='ponochka' and age=7;",
"select name,age from ducks where name='ponochka' and age=7",
"select name,age from ducks where age = 7 and name = 'ponochka';",
"select name,age from ducks where age = 7 and name = 'ponochka'",
"select name,age from ducks where age=7 and name='ponochka';",
"select name,age from ducks where age=7 and name='ponochka'",
"select name,age from ducks  where name = 'ponochka' and age = 7;",
"select name,age from ducks  where name = 'ponochka' and age = 7",
"select name,age from ducks  where name='ponochka' and age=7;",
"select name,age from ducks  where name='ponochka' and age=7",
"select name,age from ducks  where name = 'ponochka'  and age = 7;",
"select name,age from ducks  where name = 'ponochka'  and age = 7",
"select name,age from ducks  where name='ponochka'  and age=7;",
"select name,age from ducks  where name='ponochka'  and age=7",

"select name from ducks where name = 'zigzag' or name = 'willy';",
"select name from ducks where name = 'zigzag' or name = 'willy'",
"select name from ducks where name='zigzag' or name='willy';",
"select name from ducks where name='zigzag' or name='willy'",
"select name from ducks where name = 'willy' or name = 'zigzag';",
"select name from ducks where name = 'willy' or name = 'zigzag'",
"select name from ducks where name='willy' or name='zigzag';",
"select name from ducks where name='willy' or name='zigzag'",
"select name from ducks  where name = 'zigzag' or name = 'willy';",
"select name from ducks  where name = 'zigzag' or name = 'willy'",
"select name from ducks  where name='zigzag' or name='willy';",
"select name from ducks  where name='zigzag' or name='willy'",
"select name from ducks  where name = 'zigzag'  or name = 'willy';",
"select name from ducks  where name = 'zigzag'  or name = 'willy'",
"select name from ducks  where name='zigzag'  or name='willy';",
"select name from ducks  where name='zigzag'  or name='willy'",

"select * from ducks order by age;", 
"select * from ducks order by age",
"select * from ducks  order by age;", 
"select * from ducks  order by age",
"select * from ducks order by age asc;", 
"select * from ducks order by age asc",
"select * from ducks  order by age asc;", 
"select * from ducks  order by age asc",

"select name from ducks order by age desc limit 2;", 
"select name from ducks order by age desc limit 2",
"select name from ducks  order by age desc  limit 2;", 
"select name from ducks  order by age desc  limit 2",
"select name from ducks  order by age desc limit 2;", 
"select name from ducks  order by age desc limit 2",

"select avg(age) from ducks;",
"select avg(age) from ducks",

"update color set value = 'purple' where value = 'grey';",
"update color set value = 'purple' where value = 'grey'",
"update color set value='purple' where value='grey';",
"update color set value='purple' where value='grey'",
"update color  set value = 'purple'  where value = 'grey';",
"update color  set value = 'purple'  where value = 'grey'",
"update color  set value='purple'  where value='grey';",
"update color  set value='purple'  where value='grey'",
"update color set value = 'purple' where id = 4;",
"update color set value = 'purple' where id = 4",
"update color set value='purple' where id=4;",
"update color set value='purple' where id=4",
"update color  set value = 'purple'  where id = 4;",
"update color  set value = 'purple'  where id = 4",
"update color  set value='purple'  where id=4;",
"update color  set value='purple'  where id=4",
"update color set value = 'purple' where id_ducks = 8;",
"update color set value = 'purple' where id_ducks = 8",
"update color set value='purple' where id_ducks=8;",
"update color set value='purple' where id_ducks=8",
"update color  set value = 'purple'  where id_ducks = 8;",
"update color  set value = 'purple'  where id_ducks = 8",
"update color  set value='purple'  where id_ducks=8;",
"update color  set value='purple'  where id_ducks=8",
"update color set value = 'purple'  where value = 'grey';",
"update color  set value = 'purple' where value = 'grey';",

"select ducks.name, color.value from ducks inner join color on color.id_ducks = ducks.id;",
"select ducks.name, color.value from ducks inner join color on color.id_ducks = ducks.id",
"select ducks.name, color.value from ducks inner join color on color.id_ducks=ducks.id;",
"select ducks.name, color.value from ducks inner join color on color.id_ducks=ducks.id",
"select ducks.name, color.value from ducks inner join color on ducks.id = color.id_ducks;",
"select ducks.name, color.value from ducks inner join color on ducks.id = color.id_ducks",
"select ducks.name, color.value from ducks inner join color on ducks.id=color.id_ducksd;",
"select ducks.name, color.value from ducks inner join color on ducks.id=color.id_ducksd",
"select ducks.name,color.value from ducks inner join color on color.id_ducks = ducks.id;",
"select ducks.name,color.value from ducks inner join color on color.id_ducks = ducks.id",
"select ducks.name,color.value from ducks inner join color on color.id_ducks=ducks.id;",
"select ducks.name,color.value from ducks inner join color on color.id_ducks=ducks.id",
"select ducks.name,color.value from ducks inner join color on ducks.id = color.id_ducks;",
"select ducks.name,color.value from ducks inner join color on ducks.id = color.id_ducks",
"select ducks.name,color.value from ducks inner join color on ducks.id=color.id_ducksd;",
"select ducks.name,color.value from ducks inner join color on ducks.id=color.id_ducksd",
"select ducks.name, color.value from color inner join color on color.id_ducks = ducks.id;",
"select ducks.name, color.value from color inner join ducks on color.id_ducks = ducks.id",
"select ducks.name, color.value from color inner join ducks on color.id_ducks=ducks.id;",
"select ducks.name, color.value from color inner join ducks on color.id_ducks=ducks.id",
"select ducks.name, color.value from color inner join ducks on ducks.id = color.id_ducks;",
"select ducks.name, color.value from color inner join ducks on ducks.id = color.id_ducks",
"select ducks.name, color.value from color inner join ducks on ducks.id=color.id_ducksd;",
"select ducks.name, color.value from color inner join ducks on ducks.id=color.id_ducksd",
"select ducks.name,color.value from color inner join ducks on color.id_ducks = ducks.id;",
"select ducks.name,color.value from color inner join ducks on color.id_ducks = ducks.id",
"select ducks.name,color.value from color inner join ducks on color.id_ducks=ducks.id;",
"select ducks.name,color.value from color inner join ducks on color.id_ducks=ducks.id",
"select ducks.name,color.value from color inner join ducks on ducks.id = color.id_ducks;",
"select ducks.name,color.value from color inner join ducks on ducks.id = color.id_ducks",
"select ducks.name,color.value from color inner join ducks on ducks.id=color.id_ducksd;",
"select ducks.name,color.value from color inner join ducks on ducks.id=color.id_ducksd",
"select ducks.name, color.value from ducks join color on color.id_ducks = ducks.id;",
"select ducks.name, color.value from ducks join color on color.id_ducks = ducks.id",
"select ducks.name, color.value from ducks join color on color.id_ducks=ducks.id;",
"select ducks.name, color.value from ducks join color on color.id_ducks=ducks.id",
"select ducks.name, color.value from ducks join color on ducks.id = color.id_ducks;",
"select ducks.name, color.value from ducks join color on ducks.id = color.id_ducks",
"select ducks.name, color.value from ducks join color on ducks.id=color.id_ducksd;",
"select ducks.name, color.value from ducks join color on ducks.id=color.id_ducksd",
"select ducks.name,color.value from ducks join color on color.id_ducks = ducks.id;",
"select ducks.name,color.value from ducks join color on color.id_ducks = ducks.id",
"select ducks.name,color.value from ducks join color on color.id_ducks=ducks.id;",
"select ducks.name,color.value from ducks join color on color.id_ducks=ducks.id",
"select ducks.name,color.value from ducks join color on ducks.id = color.id_ducks;",
"select ducks.name,color.value from ducks join color on ducks.id = color.id_ducks",
"select ducks.name,color.value from ducks join color on ducks.id=color.id_ducksd;",
"select ducks.name,color.value from ducks join color on ducks.id=color.id_ducksd",
"select ducks.name, color.value from color join color on color.id_ducks = ducks.id;",
"select ducks.name, color.value from color join ducks on color.id_ducks = ducks.id",
"select ducks.name, color.value from color join ducks on color.id_ducks=ducks.id;",
"select ducks.name, color.value from color join ducks on color.id_ducks=ducks.id",
"select ducks.name, color.value from color join ducks on ducks.id = color.id_ducks;",
"select ducks.name, color.value from color join ducks on ducks.id = color.id_ducks",
"select ducks.name, color.value from color join ducks on ducks.id=color.id_ducksd;",
"select ducks.name, color.value from color join ducks on ducks.id=color.id_ducksd",
"select ducks.name,color.value from color join ducks on color.id_ducks = ducks.id;",
"select ducks.name,color.value from color join ducks on color.id_ducks = ducks.id",
"select ducks.name,color.value from color join ducks on color.id_ducks=ducks.id;",
"select ducks.name,color.value from color join ducks on color.id_ducks=ducks.id",
"select ducks.name,color.value from color join ducks on ducks.id = color.id_ducks;",
"select ducks.name,color.value from color join ducks on ducks.id = color.id_ducks",
"select ducks.name,color.value from color join ducks on ducks.id=color.id_ducksd;",
"select ducks.name,color.value from color join ducks on ducks.id=color.id_ducksd",
"select ducks.name, color.value from ducks  inner join color  on color.id_ducks = ducks.id;",
"select ducks.name, color.value from ducks  inner join color  on color.id_ducks = ducks.id",
"select ducks.name, color.value from ducks  inner join color  on color.id_ducks=ducks.id;",
"select ducks.name, color.value from ducks  inner join color  on color.id_ducks=ducks.id",
"select ducks.name, color.value from ducks  inner join color  on ducks.id = color.id_ducks;",
"select ducks.name, color.value from ducks  inner join color  on ducks.id = color.id_ducks",
"select ducks.name, color.value from ducks  inner join color  on ducks.id=color.id_ducksd;",
"select ducks.name, color.value from ducks  inner join color  on ducks.id=color.id_ducksd",
"select ducks.name,color.value from ducks  inner join color  on color.id_ducks = ducks.id;",
"select ducks.name,color.value from ducks  inner join color  on color.id_ducks = ducks.id",
"select ducks.name,color.value from ducks  inner join color  on color.id_ducks=ducks.id;",
"select ducks.name,color.value from ducks  inner join color  on color.id_ducks=ducks.id",
"select ducks.name,color.value from ducks  inner join color  on ducks.id = color.id_ducks;",
"select ducks.name,color.value from ducks  inner join color  on ducks.id = color.id_ducks",
"select ducks.name,color.value from ducks  inner join color  on ducks.id=color.id_ducksd;",
"select ducks.name,color.value from ducks  inner join color  on ducks.id=color.id_ducksd",
"select ducks.name, color.value from color  inner join color  on color.id_ducks = ducks.id;",
"select ducks.name, color.value from color  inner join ducks  on color.id_ducks = ducks.id",
"select ducks.name, color.value from color  inner join ducks  on color.id_ducks=ducks.id;",
"select ducks.name, color.value from color  inner join ducks  on color.id_ducks=ducks.id",
"select ducks.name, color.value from color  inner join ducks  on ducks.id = color.id_ducks;",
"select ducks.name, color.value from color  inner join ducks  on ducks.id = color.id_ducks",
"select ducks.name, color.value from color  inner join ducks  on ducks.id=color.id_ducksd;",
"select ducks.name, color.value from color  inner join ducks  on ducks.id=color.id_ducksd",
"select ducks.name,color.value from color  inner join ducks  on color.id_ducks = ducks.id;",
"select ducks.name,color.value from color  inner join ducks  on color.id_ducks = ducks.id",
"select ducks.name,color.value from color  inner join ducks  on color.id_ducks=ducks.id;",
"select ducks.name,color.value from color  inner join ducks  on color.id_ducks=ducks.id",
"select ducks.name,color.value from color  inner join ducks  on ducks.id = color.id_ducks;",
"select ducks.name,color.value from color  inner join ducks  on ducks.id = color.id_ducks",
"select ducks.name,color.value from color  inner join ducks  on ducks.id=color.id_ducksd;",
"select ducks.name,color.value from color  inner join ducks  on ducks.id=color.id_ducksd",
"select ducks.name, color.value from ducks  join color  on color.id_ducks = ducks.id;",
"select ducks.name, color.value from ducks  join color  on color.id_ducks = ducks.id",
"select ducks.name, color.value from ducks  join color  on color.id_ducks=ducks.id;",
"select ducks.name, color.value from ducks  join color  on color.id_ducks=ducks.id",
"select ducks.name, color.value from ducks  join color  on ducks.id = color.id_ducks;",
"select ducks.name, color.value from ducks  join color  on ducks.id = color.id_ducks",
"select ducks.name, color.value from ducks  join color  on ducks.id=color.id_ducksd;",
"select ducks.name, color.value from ducks  join color  on ducks.id=color.id_ducksd",
"select ducks.name,color.value from ducks  join color  on color.id_ducks = ducks.id;",
"select ducks.name,color.value from ducks  join color  on color.id_ducks = ducks.id",
"select ducks.name,color.value from ducks  join color  on color.id_ducks=ducks.id;",
"select ducks.name,color.value from ducks  join color  on color.id_ducks=ducks.id",
"select ducks.name,color.value from ducks  join color  on ducks.id = color.id_ducks;",
"select ducks.name,color.value from ducks  join color  on ducks.id = color.id_ducks",
"select ducks.name,color.value from ducks  join color  on ducks.id=color.id_ducksd;",
"select ducks.name,color.value from ducks  join color  on ducks.id=color.id_ducksd",
"select ducks.name, color.value from color  join color  on color.id_ducks = ducks.id;",
"select ducks.name, color.value from color  join ducks  on color.id_ducks = ducks.id",
"select ducks.name, color.value from color  join ducks  on color.id_ducks=ducks.id;",
"select ducks.name, color.value from color  join ducks  on color.id_ducks=ducks.id",
"select ducks.name, color.value from color  join ducks  on ducks.id = color.id_ducks;",
"select ducks.name, color.value from color  join ducks  on ducks.id = color.id_ducks",
"select ducks.name, color.value from color  join ducks  on ducks.id=color.id_ducksd;",
"select ducks.name, color.value from color  join ducks  on ducks.id=color.id_ducksd",
"select ducks.name,color.value from color  join ducks  on color.id_ducks = ducks.id;",
"select ducks.name,color.value from color  join ducks  on color.id_ducks = ducks.id",
"select ducks.name,color.value from color  join ducks  on color.id_ducks=ducks.id;",
"select ducks.name,color.value from color  join ducks  on color.id_ducks=ducks.id",
"select ducks.name,color.value from color  join ducks  on ducks.id = color.id_ducks;",
"select ducks.name,color.value from color  join ducks  on ducks.id = color.id_ducks",
"select ducks.name,color.value from color  join ducks  on ducks.id=color.id_ducksd;",
"select ducks.name,color.value from color  join ducks  on ducks.id=color.id_ducksd",
"select ducks.name, color.value  from color  inner join color  on color.id_ducks = ducks.id;",
"select ducks.name, color.value  from color  inner join color  on color.id_ducks=ducks.id;",
"select ducks.name, color.value  from color  join color  on color.id_ducks = ducks.id;",
"select ducks.name, color.value  from color  join color  on color.id_ducks=ducks.id;",
];
const answerAll = ['SELECT * FROM ducks;', `SELECT value FROM color${'\n'}WHERE value = 'gold';`, `SELECT * FROM ducks${'\n'}WHERE age <= 10;`, `SELECT name, age FROM ducks${'\n'}WHERE name = 'ponochka'${'\n'}AND age = 7;`, `SELECT name FROM ducks${'\n'}WHERE name = 'zigzag'${'\n'}OR name = 'willy';`, `SELECT * FROM ducks${'\n'}ORDER BY age;`, `SELECT name FROM ducks${'\n'}ORDER BY age DESC${'\n'}LIMIT 2;`, 'SELECT AVG(age) FROM ducks;', `UPDATE color${'\n'}SET value = 'purple'${'\n'}WHERE value = 'grey';`, `SELECT ducks.name, color.value FROM ducks${'\n'}INNER JOIN color${'\n'}ON color.id_ducks = ducks.id;`
];
const btnNext = document.querySelector('.button-answer_right');
const btnCheck = document.querySelector('.button-answer_left');

let questionCurrent = document.querySelector('.question');
let answerInput = document.querySelector('.answer');
let result = document.querySelector('.result');
let progress = document.querySelector('.progress');
let showAnswer = document.querySelector('.show-answer');
let signAnswer = document.querySelector('.sign-answer');
let tableAnswer = document.querySelector('.table-answer');
let errorText = document.querySelector('.error-answer');

let counter = 0;
let resultCounter = 0;

questionCurrent.innerText = questionText[0];
progress.innerText = `${counter + 1} / 10`;
result.innerText = `${resultCounter} %`;

btnNext.onclick = () => {
	btnCheck.disabled = false;
	answerInput.value = '';
	removeAnswer();
	counter++;
	questionCurrent.innerText = questionText[counter];
	progress.innerText = `${counter + 1} / 10`;

	if(counter == 9) {
		btnNext.innerText = 'Завершить';
		btnNext.onclick = () => {
			openOverlay(event, overlay, modal);
			showResult(modalText);
		}
	}
}

btnCheck.onclick = checkAnswer;

function checkAnswer() {
	let answerInput = document.querySelector('.answer').value;
	answerInput = answerInput.toLowerCase();
	answerInput = answerInput.replace(/"/g, "'");
	answerInput = answerInput.replace(/`/g, "");
	answerInput = answerInput.replace(/  /g, " ");
	answerInput = answerInput.replace(/\n/g, " ");
	answerInput = answerInput.replace(/ \n/g, " ");

	if (answerInput != '') {
		if (counter == 0) {
			if(answerInput == answer[0] || answerInput == answer[1]) {
				chooseTrue();
				tableAnswer.innerHTML = `<table class="table_main table_answer"><tr><th class="column_bold">id</th><th>name</th><th>age</th></tr><tr><td class="column_bold">1</td><td>scrooge</td><td>80</td></tr><tr><td class="column_bold">2</td><td>billy</td><td>10</td></tr><tr><td class="column_bold">3</td><td>willy</td><td>10</td></tr><tr><td class="column_bold">4</td><td>dilly</td><td>10</td></tr><tr><td class="column_bold">5</td><td>ponochka</td><td>7</td></tr><tr><td class="column_bold">6</td><td>zigzag</td><td>28</td></tr></table>`;
			}
			else {
				chooseFalse();
			}
		}		
		else if (counter == 1) {
			if(answerInput == answer[2] || answerInput == answer[3] || answerInput == answer[4] || answerInput == answer[5] || answerInput == answer[6] || answerInput == answer[7] || answerInput == answer[8] || answerInput == answer[9] || answerInput == answer[10] || answerInput == answer[11] || answerInput == answer[12] || answerInput == answer[13]) {
				chooseTrue();
				tableAnswer.innerHTML = `<table class="table_main table_answer"><tr><th class="column_bold">value</th></tr><tr><td>gold</td></tr></table>`;
			}
			else {
				chooseFalse();
			}
		}
		else if (counter == 2) {
			if(answerInput == answer[14] || answerInput == answer[15] || answerInput == answer[16] || answerInput == answer[17] || answerInput == answer[18] || answerInput == answer[19] || answerInput == answer[20] || answerInput == answer[21] || answerInput == answer[22] || answerInput == answer[23] || answerInput == answer[24] || answerInput == answer[25] || answerInput == answer[26] || answerInput == answer[27] || answerInput == answer[28]) {
				chooseTrue();
				tableAnswer.innerHTML = `<table class="table_main table_answer"><tr><th class="column_bold">id</th><th>name</th><th>age</th></tr><tr><tr><td class="column_bold">2</td><td>billy</td><td>10</td></tr><tr><td class="column_bold">3</td><td>willy</td><td>10</td></tr><tr><td class="column_bold">4</td><td>dilly</td><td>10</td></tr><tr><td class="column_bold">5</td><td>ponochka</td><td>7</td></tr></table>`;
			}
			else {
				chooseFalse();
			}
		}
		else if (counter == 3) {
			if(answerInput == answer[29] || answerInput == answer[30] || answerInput == answer[31] || answerInput == answer[32] || answerInput == answer[33] || answerInput == answer[34] || answerInput == answer[35] || answerInput == answer[36] || answerInput == answer[37] || answerInput == answer[38] || answerInput == answer[39] || answerInput == answer[40] || answerInput == answer[41]|| answerInput == answer[42]|| answerInput == answer[43]|| answerInput == answer[44]|| answerInput == answer[45]|| answerInput == answer[46]|| answerInput == answer[47]|| answerInput == answer[48]|| answerInput == answer[49]|| answerInput == answer[50]|| answerInput == answer[51]|| answerInput == answer[52]|| answerInput == answer[53]|| answerInput == answer[54]|| answerInput == answer[55]|| answerInput == answer[56]|| answerInput == answer[57]|| answerInput == answer[58]|| answerInput == answer[59]|| answerInput == answer[60]) {
				chooseTrue();
				tableAnswer.innerHTML = `<table class="table_main table_answer"><tr><th class="table_answer_two">name</th><th class="table_answer_two">age</th></tr><tr><td>ponochka</td><td>7</td></tr></table>`;
			}
			else {
				chooseFalse();
			}
		}
		else if (counter == 4) {
			if(answerInput == answer[61] || answerInput == answer[62] || answerInput == answer[63] || answerInput == answer[64] || answerInput == answer[65] || answerInput == answer[66] || answerInput == answer[67] || answerInput == answer[68] || answerInput == answer[69] || answerInput == answer[70] || answerInput == answer[71] || answerInput == answer[72] || answerInput == answer[73] || answerInput == answer[74]|| answerInput == answer[75]|| answerInput == answer[76]) {
				chooseTrue();
				tableAnswer.innerHTML = `<table class="table_main table_answer"><tr><th>name</th></tr><tr><td>zigzag</td></tr><tr><td>willy</td></tr></table>`;
			}
			else {
				chooseFalse();
			}
		}
		else if (counter == 5) {
			if(answerInput == answer[77] || answerInput == answer[78] || answerInput == answer[79] || answerInput == answer[80] || answerInput == answer[81] || answerInput == answer[82] || answerInput == answer[83] || answerInput == answer[84]) {
				chooseTrue();
				tableAnswer.innerHTML = `<table class="table_main table_answer"><tr><th class="column_bold">id</th><th>name</th><th>age</th></tr><tr><td class="column_bold">5</td><td>ponochka</td><td>7</td></tr><tr><td class="column_bold">2</td><td>billy</td><td>10</td></tr><tr><td class="column_bold">3</td><td>willy</td><td>10</td></tr><tr><td class="column_bold">4</td><td>dilly</td><td>10</td></tr><tr><td class="column_bold">6</td><td>zigzag</td><td>28</td></tr><tr><td class="column_bold">1</td><td>scrooge</td><td>80</td></tr></table>`;
			}
			else {
				chooseFalse();
			}
		}
		else if (counter == 6) {
			if(answerInput == answer[85] || answerInput == answer[86] || answerInput == answer[87] || answerInput == answer[88] || answerInput == answer[89] || answerInput == answer[90]) {
				chooseTrue();
				tableAnswer.innerHTML = `<table class="table_main table_answer"><tr><th>name</th></tr><tr><td>scrooge</td></tr><tr><td>zigzag</td></tr></table>`;
			}
			else {
				chooseFalse();
			}
		}
		else if (counter == 7) {
			if(answerInput == answer[91] || answerInput == answer[92]) {
				chooseTrue();
				tableAnswer.innerHTML = `<table class="table_main table_answer"><tr><th>AVG(age)</th></tr><tr><td>24</td></tr></table>`;
			}
			else {
				chooseFalse();
			}
		}
		else if (counter == 8) {
			if(answerInput == answer[93] || answerInput == answer[94] || answerInput == answer[95] || answerInput == answer[96] || answerInput == answer[97] || answerInput == answer[98] || answerInput == answer[99] || answerInput == answer[100] || answerInput == answer[101] || answerInput == answer[102] || answerInput == answer[103] || answerInput == answer[104] || answerInput == answer[105]|| answerInput == answer[106]|| answerInput == answer[107]|| answerInput == answer[108]|| answerInput == answer[109]|| answerInput == answer[110]|| answerInput == answer[111]|| answerInput == answer[112]|| answerInput == answer[113]|| answerInput == answer[114]|| answerInput == answer[115]|| answerInput == answer[116] || answerInput == answer[117] || answerInput == answer[118]) {
				chooseTrue();
				tableAnswer.innerHTML = `<table class="table_main table_answer"><tr><th>id</th><th>value</th><th>id_ducks</th></tr><tr><td>1</td><td>blue</td><td>2</td></tr><tr><td>2</td><td>gold</td><td>1</td></tr><tr><td>3</td><td>green</td><td>2</td></tr><tr><td>4</td><td>purple</td><td>8</td></tr><tr><td>5</td><td>red</td><td>4</td></tr><tr><td>6</td><td>pink</td><td>5</td></tr></table>`;
			}
			else {
				chooseFalse();
			}
		}
		else if (counter == 9) {
			if(answerInput == answer[119] || answerInput == answer[120] || answerInput == answer[121] || answerInput == answer[122] || answerInput == answer[123] || answerInput == answer[124] || answerInput == answer[125] || answerInput == answer[126] || answerInput == answer[127] || answerInput == answer[128] || answerInput == answer[129] || answerInput == answer[130] || answerInput == answer[131]|| answerInput == answer[132]|| answerInput == answer[133]|| answerInput == answer[134]|| answerInput == answer[135]|| answerInput == answer[136]|| answerInput == answer[137]|| answerInput == answer[138]|| answerInput == answer[139]|| answerInput == answer[140]|| answerInput == answer[141]|| answerInput == answer[142]|| answerInput == answer[143]|| answerInput == answer[144]|| answerInput == answer[145]|| answerInput == answer[146]|| answerInput == answer[147]|| answerInput == answer[148]|| answerInput == answer[149]|| answerInput == answer[150] || answerInput == answer[151] || answerInput == answer[152] || answerInput == answer[153] || answerInput == answer[154] || answerInput == answer[155] || answerInput == answer[156] || answerInput == answer[157] || answerInput == answer[158] || answerInput == answer[159] || answerInput == answer[160] || answerInput == answer[161]|| answerInput == answer[162]|| answerInput == answer[163]|| answerInput == answer[164]|| answerInput == answer[165]|| answerInput == answer[166]|| answerInput == answer[167] || answerInput == answer[168] || answerInput == answer[169]|| answerInput == answer[170]|| answerInput == answer[171]|| answerInput == answer[172]|| answerInput == answer[173]|| answerInput == answer[174]|| answerInput == answer[175]|| answerInput == answer[176]|| answerInput == answer[177]|| answerInput == answer[178]|| answerInput == answer[179]|| answerInput == answer[180] || answerInput == answer[181] || answerInput == answer[182] || answerInput == answer[183] || answerInput == answer[184] || answerInput == answer[185] || answerInput == answer[186] || answerInput == answer[187] || answerInput == answer[188] || answerInput == answer[189] || answerInput == answer[190] || answerInput == answer[191] || answerInput == answer[192]|| answerInput == answer[193]|| answerInput == answer[194]|| answerInput == answer[195]|| answerInput == answer[196]|| answerInput == answer[197]|| answerInput == answer[198]|| answerInput == answer[199]|| answerInput == answer[200] || answerInput == answer[201]|| answerInput == answer[202]|| answerInput == answer[203]|| answerInput == answer[204]|| answerInput == answer[205]|| answerInput == answer[206]|| answerInput == answer[207]|| answerInput == answer[208]|| answerInput == answer[209]|| answerInput == answer[210] || answerInput == answer[211]|| answerInput == answer[212]|| answerInput == answer[213]|| answerInput == answer[214]|| answerInput == answer[215]|| answerInput == answer[216]|| answerInput == answer[217]|| answerInput == answer[218]|| answerInput == answer[219]|| answerInput == answer[220] || answerInput == answer[221]|| answerInput == answer[222]|| answerInput == answer[223]|| answerInput == answer[224]|| answerInput == answer[225]|| answerInput == answer[226]|| answerInput == answer[227]|| answerInput == answer[228]|| answerInput == answer[229]|| answerInput == answer[230] || answerInput == answer[231]|| answerInput == answer[232]|| answerInput == answer[233]|| answerInput == answer[234]|| answerInput == answer[235]|| answerInput == answer[236]|| answerInput == answer[237]|| answerInput == answer[238]|| answerInput == answer[239]|| answerInput == answer[240] || answerInput == answer[241]|| answerInput == answer[242]|| answerInput == answer[243]|| answerInput == answer[244]|| answerInput == answer[245]|| answerInput == answer[246] || answerInput == answer[247]|| answerInput == answer[248]|| answerInput == answer[249]|| answerInput == answer[250]) {
				chooseTrue();
				tableAnswer.innerHTML = `<table class="table_main table_answer"><tr><th class="table_answer_two">name</th><th class="table_answer_two">value</th></tr><tr><td>scrooge</td><td>gold</td></tr><tr><td>billy</td><td>green</td></tr><tr><td>willy</td><td>blue</td></tr><tr><td>dilly</td><td>red</td></tr><tr><td>ponochka</td><td>pink</td></tr></table>`;		
			}
			else {
				chooseFalse();
			}
		}
	}
	else if (answerInput == '') {
		errorText.style.display = 'block';
	}		
}

document.addEventListener('keydown', function(e) {
	if (e.keyCode) {
		errorText.style.display = 'none';
	}
});

function chooseTrue() {
	showAnswerAll();
	resultCounter = resultCounter + 10;
	result.innerText = `${resultCounter} %`;
	document.querySelector('.answer').classList.add('textarea-correct');
	signAnswer.classList.add('sign-correct');
}

function chooseFalse() {
	showAnswerAll();
	document.querySelector('.answer').classList.add('textarea-incorrect');
	signAnswer.classList.add('sign-incorrect');
}

function showAnswerAll() {
	btnCheck.disabled = true;
	showAnswer.hidden = false;
	signAnswer.hidden = false;
	showAnswer.innerText = answerAll[counter];
	showAnswer.classList.add('answer-correct');
	document.querySelector('.answer').disabled = true;
}

function removeAnswer() {
	showAnswer.hidden = true;
	signAnswer.hidden = true;
	document.querySelector('.answer').disabled = false;
	showAnswer.classList.remove('answer-correct');
	showAnswer.classList.remove('answer-incorrect');
	document.querySelector('.answer').classList.remove('textarea-correct');
	document.querySelector('.answer').classList.remove('textarea-incorrect');
	signAnswer.classList.remove('sign-correct');
	signAnswer.classList.remove('sign-incorrect');
	tableAnswer.innerHTML = '';
}

// OVERLAY
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal__btn');
let modalText = document.querySelector('.modal__text');

function openOverlay(event, overlay, modal) {
	let testResult = document.querySelector('.modal__number');

	event.preventDefault();
	modal.onclick = (e) => e.stopPropagation();

	overlay.classList.remove('none-transition');
	overlay.style.display = 'block';
	  if (overlay) {
	    overlay.classList.add('block-transition');
	  }
	}

function showResult(text) {
	document.querySelector('.modal__number').innerText = `${resultCounter} %`;
	if (resultCounter == 100) {
		text.classList.add('modal__text_animation');
		text.innerText = 'Вау, это круто!!!';
	}
	else if (resultCounter >= 80) {
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

overlay.onclick = () => closeOverlay(overlay);

// RELOAD TEST
document.querySelector('.modal__btn').onclick = () => {
	setTimeout( () =>  {
		window.location.reload(true);
	}, 
	10);
}
