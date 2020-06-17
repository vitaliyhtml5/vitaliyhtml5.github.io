//TABS
function changeTabs() {
	let tab = document.querySelectorAll('.section-tab');
	let aside = document.querySelectorAll('.tutorial-section');
	let tabLink = document.querySelectorAll('.sidebar__item');

	tabLink[0].onclick = () => selectTabs(0,1,2,3);
	tabLink[1].onclick = () => selectTabs(1,2,3,0);
	tabLink[2].onclick = () => selectTabs(2,0,1,3);
	tabLink[3].onclick = () => selectTabs(3,0,1,2);

	function selectTabs(a, b, c, d) {
		tab[a].hidden = false;
		tab[b].hidden = true;
		tab[c].hidden = true;
		tab[d].hidden = true;

		aside[a].hidden = false;
		aside[b].hidden = true;
		aside[c].hidden = true;
		aside[d].hidden = true;

		tabLink[a].classList.add('sidebar__item_selected');
		tabLink[b].classList.remove('sidebar__item_selected');
		tabLink[c].classList.remove('sidebar__item_selected');
		tabLink[d].classList.remove('sidebar__item_selected');
	}
}

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

// FILES
function showHideFiles() {
	let file = document.querySelectorAll('.files-text');
	let dropdown = document.querySelectorAll('.files-all');
	let arrow = document.querySelectorAll('.arrow-down');

	file[0].onclick = () => openDropdown(0);
	file[1].onclick = () => openDropdown(1);
	file[2].onclick = () => openDropdown(2);
	file[3].onclick = () => openDropdown(3);
	file[4].onclick = () => openDropdown(4);
	file[5].onclick = () => openDropdown(5);

	function openDropdown(index) {
		dropdown[index].classList.toggle('show-file');
		file[index].classList.toggle('color-orange');
		arrow[index].classList.toggle('arrow-up');
	}
}	

changeTabs();
openCloseBurger();
showHideFiles();