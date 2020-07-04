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
	document.querySelector('.hamburger-open').onclick = function () {
		burger.openBurger();
	}
	document.querySelector('.hamburger-close').onclick = function () {
		burger.closeBurger();
	}
	
	let burger = {
		open: document.querySelector('.hamburger-open').style,
		close: document.querySelector('.hamburger-close').style,
		list: document.querySelector('.sidebar__list'),
		items: document.querySelectorAll( ".sidebar__item" ),
		openBurger: function() {
			if (burger.open.zIndex = 12) {
				burger.close.display = 'block';
				burger.list.classList.remove('sidebar-disappear');
				burger.list.classList.add('sidebar-appear');
				burger.open.zIndex = -5;
				burger.close.zIndex = 12;
				burger.open.display = 'none';
				
				burger.list.onmousedown = function () {
  					for( let i = 0; i < burger.items.length; i++){ 
    					burger.items[i].onmouseup = function() {
    						burger.closeBurger();
    					}
	  				}
	  				window.scrollTo(0,0);		
				}
			}	
		},
		closeBurger: function() {
			if (burger.close.zIndex = 12) {
				burger.open.display = 'block';
				burger.list.classList.remove('sidebar-appear');
				burger.list.classList.add('sidebar-disappear');
				burger.open.zIndex = 12;
				burger.close.zIndex = -5;
				burger.close.display = 'none';
			}
		},
	};
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