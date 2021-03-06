function showMainProgress() {
	const progressBar = document.querySelector('.progress-main__bar');
	progressBar.value = 5;
	let previousResult0 = parseInt(localStorage.getItem("html-test0"));
	let previousResult1 = parseInt(localStorage.getItem("html-test1"));
	let previousResult2 = parseInt(localStorage.getItem("html-test2"));
	let previousResult3 = parseInt(localStorage.getItem("html-test3"));
	let previousResult4 = parseInt(localStorage.getItem("html-test4"));

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
		openOverlay(event, statisticOverlay, statisticWrap);
		
		statisticTable.innerHTML = `<tr><th>Название</th><th>Последний результат</th></tr><tr><td>Тест - 1 (теория)</td>
		<td class="progress-table__result">${localStorage.getItem("html-test0")}</td></tr><tr><td>Тест - 2 (теория)</td><td class="progress-table__result">${localStorage.getItem("html-test1")}</td>
		</tr><tr><td>Тест на время</td><td class="progress-table__result">${localStorage.getItem("html-test2")}</td></tr><tr><td>Практические задания</td><td class="progress-table__result">${localStorage.getItem("html-test3")}</td></tr><tr><td>Тест в DevTools<br>(доступен на ПК)</td><td class="progress-table__result">${localStorage.getItem("html-test4")}</td></tr>`;
		
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
				awardLink.href = 'https://youtu.be/4c-BVXUdbmY';
			}
			else statisticWrap.style.backgroundImage = 'none';
		}
	}

	function nullResult(item) {
		if (item.innerText == 'null') item.innerText = '-';
	}

	statisticBtn.onclick = () => closeOverlay(statisticOverlay);
	statisticOverlay.onclick = () => closeOverlay(statisticOverlay);

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
		statisticOverlay.classList.remove('block-transition');
		  if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) statisticOverlay.classList.add('none-transition');
		});	
}
showStatistic();