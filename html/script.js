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

// Full site
const overlayForget = document.querySelector('.test-summary');
const modalForget = document.querySelector('.test-summary__modal');

document.querySelector('.full__btn').onclick = () => showOverlay(overlayForget, modalForget);
document.querySelector('.sidebar__item_full').onclick = () => showOverlay(overlayForget, modalForget);

document.querySelector('.new-tooltip__link').onclick = () => closeOverlay(overlayForget);

function showOverlay(overlay, modal) {
	overlay.classList.remove('overlay-close');
	overlay.classList.add('overlay-show');
	overlay.style.display = 'block';
	modal.onclick = (e) => e.stopPropagation();
	overlay.onclick = () => closeOverlay(overlay);

	window.addEventListener('keyup', function (e) {
		e.preventDefault();
		if (e.keyCode === 27) closeOverlay(overlay);
	});
}

function closeOverlay(overlay) {
	event.preventDefault();
	overlay.classList.add('overlay-close');
	setTimeout(() => {
		overlay.style.display = 'none';
	}, 500);
}