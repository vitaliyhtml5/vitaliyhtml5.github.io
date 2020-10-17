//TABS
function changeTabs() {
	let tab = document.querySelectorAll('.section-tab');
	let aside = document.querySelectorAll('.tutorial-section');
	let tabLink = document.querySelectorAll('.sidebar__item');
	let currentTab = 0;

	tabLink.forEach((element, arr) => {		
		element.onclick = () => {
			tab[currentTab].hidden = true;
			aside[currentTab].hidden = true;
			tabLink[currentTab].classList.remove('sidebar__item_selected');

			tab[arr].hidden = false;
			aside[arr].hidden = false;
			tabLink[arr].classList.add('sidebar__item_selected');

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

// FILES
function showHideFiles() {
	let file = document.querySelectorAll('.files-text');
	let dropdown = document.querySelectorAll('.files-all');
	let arrow = document.querySelectorAll('.arrow-down');

	file.forEach((element,arr) => {
		element.onclick = () => {
			dropdown[arr].classList.toggle('show-file');
			file[arr].classList.toggle('color-orange');
			arrow[arr].classList.toggle('arrow-up');
		}
	});
}
showHideFiles();

// New tooltip
function showNewTooltip() {
	const newTooltipBtn = document.querySelectorAll('.new-tooltip__storage');
	const newTooltip = document.querySelector('.new-tooltip');
	if (localStorage.getItem('newTooltip')) newTooltip.style.display = 'none';

	newTooltipBtn.forEach(element => {
		element.onclick = () => {
			localStorage.setItem('newTooltip', 'shown'); 
			newTooltip.style.display = 'none';
		}
	});
}
showNewTooltip();