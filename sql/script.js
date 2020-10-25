//TABS
function changeTabs() {	
	let tab = document.querySelectorAll('.tab-section');
	let sidebarItem = document.querySelectorAll('.sidebar__item');
	let aside = document.querySelectorAll('.tutorial-aside');
	let currentTab = 0;

	sidebarItem.forEach((element, arr) => {
		element.onclick = () => {
			tab[currentTab].hidden = true;
			sidebarItem[currentTab].classList.remove('sidebar__item_selected');
			aside[currentTab].hidden = true;

			tab[arr].hidden = false;
			sidebarItem[arr].classList.add('sidebar__item_selected');
			aside[arr].hidden = false;

			currentTab = arr;
		}
	});
}
changeTabs();	

//HAMBURGER
function openCloseBurger() {
	let list = document.querySelector('.sidebar__list');
	let listItem = document.querySelectorAll('.sidebar__item');
	let hamburgerOpen = document.querySelector('.hamburger-open'); 
	let hamburgerClose = document.querySelector('.hamburger-close'); 
	
	hamburgerOpen.onclick = () => {
		list.classList.remove('sidebar-disappear');
		list.classList.add('sidebar-appear');
		hamburgerOpen.classList.add('hamburger-close');
		hamburgerClose.classList.remove('hamburger-close');
	}

	hamburgerClose.onclick = closeHamburger;
	function closeHamburger() {
		list.classList.remove('sidebar-appear');
		list.classList.add('sidebar-disappear');
		hamburgerClose.classList.add('hamburger-close');
		hamburgerOpen.classList.remove('hamburger-close');
	}

	listItem.forEach((element) => {
		element.onmouseup = () => closeHamburger();
		element.onmousedown = () => window.scrollTo(0,0);
	});
}
openCloseBurger();

//TASKS
function showHideAnsw() {
	let answer = document.querySelectorAll('.task-answer');
	let dropdown = document.querySelectorAll('.dropdown-answer');
	let arrow = document.querySelectorAll('.arrow-down');

	answer.forEach((element, arr) => {
		element.onclick = () => {
			dropdown[arr].classList.toggle('show-answer');
			arrow[arr].classList.toggle('arrow-up');
		}
	});
}	
showHideAnsw();

// New tooltip
function showNewTooltip() {
	const newTooltipBtn = document.querySelectorAll('.new-tooltip__storage');
	const newTooltip = document.querySelector('.new-tooltip');
	const summaryModal = document.querySelector('.test-summary');
	const summaryBtn = document.querySelectorAll('.test-summary__btn');
	if (localStorage.getItem('newTooltipSql')) newTooltip.style.display = 'none';

	newTooltipBtn.forEach(element => {
		element.onclick = () => {
			localStorage.setItem('newTooltipSql', 'shown'); 
			closeElement(newTooltip);
		}
	});
	newTooltipBtn[0].addEventListener('click', () => {
		summaryModal.hidden = false;
		closeElement(newTooltip);
	});

	summaryBtn.forEach(element => {
		element.onclick = () => {
			closeElement(summaryModal);
		}
	});

	function closeElement(item) {
		item.style.animation = 'closetooltip 1s';
		setTimeout(() => {item.hidden = true;},1000);
	}
}
showNewTooltip();