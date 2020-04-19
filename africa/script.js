// Hamburger

function openHamburger() {
	let hamburgerBtn = document.querySelector('.hamburger');
	let hamburgerBorder = document.querySelector('.hamburger__btn');
	let hamburgerBorderRight = document.querySelector('.hamburger__btn_right');
	let hamburgerBorderLeft = document.querySelector('.hamburger__btn_left');
	let hamburgerClose = document.querySelector('.hamburger-close');

	let hamburgerOverlay = document.querySelector('.hamburger-menu');
	let hamburgerList = document.querySelector('.hamburger-menu__list');

	hamburgerBtn.onclick = () => {
		hamburgerOverlay.classList.remove('none-transition');
		hamburgerOverlay.classList.add('block-transition');
		hamburgerBorderRight.classList.add('hamburger__border_right');
		hamburgerBorderLeft.classList.add('hamburger__border_left');
		hamburgerOverlay.style.display = 'block';
		hamburgerBtn.style.zIndex = '30';
		hamburgerClose.style.zIndex = '31';
		hamburgerBorder.style.opacity = '0';
	};
	
	hamburgerClose.onclick = closeHamburger;

		function closeHamburger() {
			hamburgerOverlay.classList.remove('block-transition');
			hamburgerBorderRight.classList.remove('hamburger__border_right');
			hamburgerBorderLeft.classList.remove('hamburger__border_left');
			hamburgerOverlay.classList.add('none-transition');	
			hamburgerBtn.style.zIndex = '30';
			hamburgerClose.style.zIndex = '0';
			hamburgerBorder.style.opacity = '1';
	}

	hamburgerList.onclick = () => closeHamburger();
}

openHamburger();
// Package-tabs

function changePackage() {
	let packageTab = document.querySelectorAll('.tour__item');
	let packageInfo = [
		document.querySelector('.package_first'),
		document.querySelector('.package_second'),
		document.querySelector('.package_third'),
	];

	for (let i = 0; i < packageTab.length; i++) {
		changeTabs(packageTab[0], packageTab[1], packageTab[2]);
		changeTabs(packageTab[1], packageTab[0], packageTab[2]);
		changeTabs(packageTab[2], packageTab[0], packageTab[1]);
	}

	function changeTabs(active, nonActive, nonActive2) {
		active.onclick = () => {
			active.classList.add('tour__item_active');
			nonActive.classList.remove('tour__item_active');
			nonActive2.classList.remove('tour__item_active');
			nonActive.classList.add('tour__item');
			nonActive2.classList.add('tour__item');

			if (packageTab[0].classList.contains('tour__item_active')) {
				changeList(packageInfo[0], packageInfo[1], packageInfo[2]);
			} 
			else if (packageTab[1].classList.contains('tour__item_active')) {
				changeList(packageInfo[1], packageInfo[0], packageInfo[2]);
			} 
			else if (packageTab[2].classList.contains('tour__item_active')) {
				changeList(packageInfo[2], packageInfo[0], packageInfo[1]);
			}

			function changeList(visible, hidden, hidden2) {
				visible.classList.remove('none-transition');
				visible.classList.add('block-transition');
				hidden.classList.remove('block-transition');
				hidden2.classList.remove('block-transition');
				hidden.classList.add('none-transition');
				hidden2.classList.add('none-transition');
			}	
		};
	}		
}
changePackage();

// Dropdown for list of package

function chooseDropdown() {

	let dropdownBtn = document.querySelectorAll('.dots');
	let dropdownList = document.querySelectorAll('.dropdown__list');
	let dropdownItem = document.querySelectorAll('.dropdown__item');

	for(let i = 0; i < dropdownBtn.length; i++) {
		for(let j = 0; j < dropdownList.length; j++) {
		}
		openDropdown(dropdownBtn[0], dropdownList[0], dropdownBtn[1], dropdownList[1], dropdownBtn[2], dropdownList[2]);
		openDropdown(dropdownBtn[1], dropdownList[1], dropdownBtn[0], dropdownList[0], dropdownBtn[2], dropdownList[2]);
		openDropdown(dropdownBtn[2], dropdownList[2], dropdownBtn[0], dropdownList[0], dropdownBtn[1], dropdownList[1]);

		openDropdown(dropdownBtn[3], dropdownList[3], dropdownBtn[4], dropdownList[4], dropdownBtn[5], dropdownList[5]);
		openDropdown(dropdownBtn[4], dropdownList[4], dropdownBtn[3], dropdownList[3], dropdownBtn[5], dropdownList[5]);
		openDropdown(dropdownBtn[5], dropdownList[5], dropdownBtn[3], dropdownList[3], dropdownBtn[4], dropdownList[4]);

		openDropdown(dropdownBtn[6], dropdownList[6], dropdownBtn[7], dropdownList[7], dropdownBtn[8], dropdownList[8]);
		openDropdown(dropdownBtn[7], dropdownList[7], dropdownBtn[6], dropdownList[6], dropdownBtn[8], dropdownList[8]);
		openDropdown(dropdownBtn[8], dropdownList[8], dropdownBtn[6], dropdownList[6], dropdownBtn[7], dropdownList[7]);
	}

	for (let key in dropdownList) {
		dropdownList[key].onclick = (e) => {
			e.stopPropagation();
			openOverlay(event);
		};	
	}

	function openDropdown(activeBtn, activeList, hiddenBtn, hiddenList, hiddenBtn2, hiddenList2) {
		activeBtn.onclick = () => {
			activeList.classList.toggle('block-transition');
			hiddenList.classList.remove('block-transition');
			hiddenList2.classList.remove('block-transition');

			document.querySelector('.tour').onclick = event  => {
				if (!event.target.classList.contains('dots')) {
					activeList.classList.remove('block-transition');
					hiddenList.classList.remove('block-transition');
					hiddenList2.classList.remove('block-transition');
				}
			}		
		};
	};
}

chooseDropdown();

// Pagination

function changePagunation() {
	let paginationBtn = document.querySelectorAll('.pagination__btn');
	const table = document.querySelector('.package__table');
	let tableDate = document.querySelectorAll('.dropdown__text');

	for (let i = 0; i < paginationBtn.length; i++) {
		for (let j = 0; j < tableDate.length; j++) {
		}
		
		changeBtn(paginationBtn[0], paginationBtn[1], paginationBtn[2]);
		changeBtn(paginationBtn[1], paginationBtn[0], paginationBtn[2]);
		changeBtn(paginationBtn[2], paginationBtn[0], paginationBtn[1]);
	}

	function changeBtn(active, nonActive, nonActive2) {
		active.onclick = () => {
			active.classList.add('pagination__btn_active');
			nonActive.classList.remove('pagination__btn_active');
			nonActive2.classList.remove('pagination__btn_active');

			changeDates(paginationBtn[0], paginationBtn[1], paginationBtn[2]);
			
			function changeDates(active, hidden, hidden2) {
				if (active.classList.contains('pagination__btn_active')) {
					reloadTable();
					tableDate[0].innerText = '12 мая';
					tableDate[1].innerText = '15 мая';
					tableDate[2].innerText = '18 мая';
				}
				else if (hidden.classList.contains('pagination__btn_active')) {
					reloadTable();
					tableDate[0].innerText = '17 мая';
					tableDate[1].innerText = '20 мая';
					tableDate[2].innerText = '23 мая';
				}
				else if (hidden2.classList.contains('pagination__btn_active')) {
					reloadTable();
					tableDate[0].innerText = '22 мая';
					tableDate[1].innerText = '24 мая';
					tableDate[2].innerText = '28 мая';
				}

				function reloadTable() {
					table.style.animation = 'fadeIn ease-out 0.8s';
					setTimeout( () => table.style.animation = 'none', 800);
				}
			}
		};	
	}
}

changePagunation();

// Accordion

function chooseAccordion() {
	let accordion = document.querySelectorAll('.accordion__title');
	let accordionText = document.querySelectorAll('.accordion__text');
	let arrow = document.querySelectorAll('.accordion-arrow');

	function openAccordion() {
		accordion[0].onclick = function() {
			accordionText[0].classList.toggle('block-transition');
			arrow[0].classList.toggle('arrow-up');
		};
	}
	function openAccordion2() {
		accordion[1].onclick = function() {
			accordionText[1].classList.toggle('block-transition');
			arrow[1].classList.toggle('arrow-up');
		};
	}
	
	function splitArr(elem) {
		for (let i = 0; i < elem.length; i++) {
		}
	}

	openAccordion();
	openAccordion2();
	splitArr(accordion);
	splitArr(accordionText);
	splitArr(arrow);	
}

chooseAccordion();

// Slider

function selectSlider() {
	let imgSlider = document.querySelectorAll('.slider__img');
	let currentImg = 0;

	function slideImg() {
		for (let i = 0; i < imgSlider.length; i++) {
			imgSlider[i].classList.add('img-transparent');
		}
		imgSlider[currentImg].classList.remove('img-transparent');
	}
	slideImg();
	document.querySelector('.slider__btn_left').onclick = function() {
		if (currentImg - 1 == -1) {
			currentImg = imgSlider.length - 1;
		}
		else {
			currentImg--;
		}
		slideImg();
	};
	document.querySelector('.slider__btn_right').onclick = function() {
		if (currentImg + 1 == imgSlider.length) {
			currentImg = 0;
		}
		else {
			currentImg++;
		}
		slideImg();
	};
}

selectSlider();

// Overlay

const overlay = document.querySelector('.overlay');
const contactsBtn = document.querySelector('.contacts__btn');
let modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal__btn');

function openOverlay(event) {
	event.preventDefault();
	overlay.classList.remove('none-transition');
	overlay.style.display = 'block';
		if (overlay) {
			overlay.classList.add('block-transition');
		}
}

function closeOverlay() {
	modal.onclick = (e) => e.stopPropagation();
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

contactsBtn.onclick = openOverlay;
overlay.onclick = closeOverlay;
modalBtn.onclick = closeOverlay;





