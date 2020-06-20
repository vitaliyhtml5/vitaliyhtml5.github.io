//TABS
function changeTabs() {	
	let tab = document.querySelectorAll('.tab-section');
	let sidebarItem = document.querySelectorAll('.sidebar__item');
	let aside = document.querySelectorAll('.tutorial-aside');

	sidebarItem[0].onclick = () => selecteTabs(0,1,2,3,4);
	sidebarItem[1].onclick = () => selecteTabs(1,0,2,3,4);
	sidebarItem[2].onclick = () => selecteTabs(2,1,0,3,4);
	sidebarItem[3].onclick = () => selecteTabs(3,1,2,0,4);
	sidebarItem[4].onclick = () => selecteTabs(4,1,2,3,0);

	function selecteTabs(a,b,c,d,e) {
		tab[a].hidden = false;
		tab[b].hidden = true;
		tab[c].hidden = true;
		tab[d].hidden = true;
		tab[e].hidden = true;

		sidebarItem[a].classList.add('sidebar__item_selected');
		sidebarItem[b].classList.remove('sidebar__item_selected');
		sidebarItem[c].classList.remove('sidebar__item_selected');
		sidebarItem[d].classList.remove('sidebar__item_selected');
		sidebarItem[e].classList.remove('sidebar__item_selected');

		aside[a].hidden = false;
		aside[b].hidden = true;
		aside[c].hidden = true;
		aside[d].hidden = true;
		aside[e].hidden = true;
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

//TASKS
function showHideAnsw() {
	let answer = document.querySelectorAll('.task-answer');
	let dropdown = document.querySelectorAll('.dropdown-answer');
	let arrow = document.querySelectorAll('.arrow-down');

	answer[0].onclick = () => openDropdown(0);
	answer[1].onclick = () => openDropdown(1);
	answer[2].onclick = () => openDropdown(2);
	answer[3].onclick = () => openDropdown(3);
	answer[4].onclick = () => openDropdown(4);
	answer[5].onclick = () => openDropdown(5);

	function openDropdown(index) {
		dropdown[index].classList.toggle('show-answer');
		arrow[index].classList.toggle('arrow-up');
	}
}	

changeTabs();
openCloseBurger();
showHideAnsw();