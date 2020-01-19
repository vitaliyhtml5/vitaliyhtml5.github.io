//TABS
function changeTabs() {	
	let tabs = {
		htmlTable: document.getElementById('html-table'),
		cssTable: document.getElementById('css-table'),
		filesTable: document.getElementById('files-table'),
		showHideTabs(show, hideFirst, hideSecond) {
			show.style.display = 'block';
			hideFirst.style.display = 'none';
			hideSecond.style.display = 'none';
		},
	};
	let sidebar = {
		htmlSide: document.querySelector('.sidebar__item_html'),
		cssSide: document.querySelector('.sidebar__item_css'),
		filesSide: document.querySelector('.sidebar__item_files'),
		changeSidebar(selected, unselectedFirst, unselectedSecond) {
			selected.classList.add('sidebar__item_selected');
			unselectedFirst.classList.remove('sidebar__item_selected');
			unselectedSecond.classList.remove('sidebar__item_selected');
			unselectedFirst.classList.add('sidebar__item');
			unselectedSecond.classList.add('sidebar__item');
		},
	};
	let links = {
		htmlLink: document.querySelector('.tutorial-html'),
		cssLink: document.querySelector('.tutorial-css'),
		filesLink: document.querySelector('.tutorial-files'),
		showHideLinks(show, hideFirst, hideSecond) {
			show.style.display = 'block';
			hideFirst.style.display = 'none';
			hideSecond.style.display = 'none';
		},
	};
	sidebar.htmlSide.onclick = function() {
		tabs.showHideTabs(tabs.htmlTable, tabs.cssTable, tabs.filesTable);
		sidebar.changeSidebar(sidebar.htmlSide, sidebar.cssSide, sidebar.filesSide);
		links.showHideLinks(links.htmlLink, links.cssLink, links.filesLink);
	}
	sidebar.cssSide.onclick = function() {
		tabs.showHideTabs(tabs.cssTable, tabs.htmlTable, tabs.filesTable);
		sidebar.changeSidebar(sidebar.cssSide, sidebar.htmlSide, sidebar.filesSide);
		links.showHideLinks(links.cssLink, links.htmlLink, links.filesLink);
	}
	sidebar.filesSide.onclick = function() {
		tabs.showHideTabs(tabs.filesTable, tabs.htmlTable, tabs.cssTable);
		sidebar.changeSidebar(sidebar.filesSide, sidebar.htmlSide, sidebar.cssSide);
		links.showHideLinks(links.filesLink, links.htmlLink, links.cssLink);
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
	let btnFile = document.querySelector('.files-text');
	let allFile = document.querySelector('.files-all');
	let arrowDown = document.querySelector('.arrow-down');

	btnFile.onclick = function () {
		allFile.classList.toggle('show-file');
		arrowDown.classList.toggle('arrow-up');
	}
}

changeTabs();
openCloseBurger();
showHideFiles();