//TABS
function changeTabs() {	
	let tabs = {
		htmlTable: document.getElementById('html-table'),
		cssTable: document.getElementById('css-table'),
		advancedTable: document.getElementById('advanced-table'),
		filesTable: document.getElementById('files-table'),
		showHideTabs(show, hideFirst, hideSecond, hideThird) {
			show.style.display = 'block';
			hideFirst.style.display = 'none';
			hideSecond.style.display = 'none';
			hideThird.style.display = 'none';
		},
	};
	let sidebar = {
		htmlSide: document.querySelector('.sidebar__item_html'),
		cssSide: document.querySelector('.sidebar__item_css'),
		advancedSide: document.querySelector('.sidebar__item_advanced'),
		filesSide: document.querySelector('.sidebar__item_files'),
		changeSidebar(selected, unselectedFirst, unselectedSecond, unselectedThird) {
			selected.classList.add('sidebar__item_selected');
			unselectedFirst.classList.remove('sidebar__item_selected');
			unselectedSecond.classList.remove('sidebar__item_selected');
			unselectedThird.classList.remove('sidebar__item_selected');
			unselectedFirst.classList.add('sidebar__item');
			unselectedSecond.classList.add('sidebar__item');
			unselectedThird.classList.add('sidebar__item');
		},
	};
	let links = {
		htmlLink: document.querySelector('.tutorial-html'),
		cssLink: document.querySelector('.tutorial-css'),
		advancedLink: document.querySelector('.tutorial-advanced'),
		filesLink: document.querySelector('.tutorial-files'),
		showHideLinks(show, hideFirst, hideSecond, hideThird) {
			show.style.display = 'block';
			hideFirst.style.display = 'none';
			hideSecond.style.display = 'none';
			hideThird.style.display = 'none';
		},
	};
	sidebar.htmlSide.onclick = function() {
		tabs.showHideTabs(tabs.htmlTable, tabs.cssTable, tabs.advancedTable, tabs.filesTable);
		sidebar.changeSidebar(sidebar.htmlSide, sidebar.cssSide, sidebar.advancedSide, sidebar.filesSide);
		links.showHideLinks(links.htmlLink, links.cssLink, links.advancedLink, links.filesLink);
	}
	sidebar.cssSide.onclick = function() {
		tabs.showHideTabs(tabs.cssTable, tabs.htmlTable, tabs.advancedTable, tabs.filesTable);
		sidebar.changeSidebar(sidebar.cssSide, sidebar.htmlSide, sidebar.advancedSide, sidebar.filesSide);
		links.showHideLinks(links.cssLink, links.htmlLink, links.advancedLink, links.filesLink);
	}
	sidebar.advancedSide.onclick = function() {
		tabs.showHideTabs(tabs.advancedTable, tabs.htmlTable, tabs.cssTable, tabs.filesTable);
		sidebar.changeSidebar(sidebar.advancedSide, sidebar.htmlSide, sidebar.cssSide, sidebar.filesSide);
		links.showHideLinks(links.advancedLink, links.htmlLink, links.cssLink, links.filesLink);
	}
	sidebar.filesSide.onclick = function() {
		tabs.showHideTabs(tabs.filesTable, tabs.htmlTable, tabs.cssTable, tabs.advancedTable);
		sidebar.changeSidebar(sidebar.filesSide, sidebar.htmlSide, sidebar.cssSide, sidebar.advancedSide);
		links.showHideLinks(links.filesLink, links.htmlLink, links.cssLink, links.advancedLink);
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
	let btnFiles = [
			document.querySelector('.files-mockup_first'),
			document.querySelector('.files-mockup_second'),
			document.querySelector('.files-mockup_third'),
			document.querySelector('.files-site_first'),
			document.querySelector('.files-site_second'),
			document.querySelector('.files-site_third'),
	];
	let listFiles = [
			document.querySelector('.show-mockup_first'),
			document.querySelector('.show-mockup_second'),
			document.querySelector('.show-mockup_third'),
			document.querySelector('.show-site_first'),
			document.querySelector('.show-site_second'),
			document.querySelector('.show-site_third'),
		];
	let arrow = document.querySelectorAll('.arrow-down');

	let toggleAnsw = answ => {
		answ.classList.toggle('show-file');
		for (let i=0; i<arrow.length; i++) {
		}
	}

	btnFiles[0].onclick = function () {
		toggleAnsw(listFiles[0]);
		arrow[0].classList.toggle('arrow-up');
		this.classList.toggle('color-orange');
	}
	btnFiles[1].onclick = function () {
		toggleAnsw(listFiles[1]);
		arrow[1].classList.toggle('arrow-up');
		this.classList.toggle('color-orange');
	}
	btnFiles[2].onclick = function () {
		toggleAnsw(listFiles[2]);
		arrow[2].classList.toggle('arrow-up');
		this.classList.toggle('color-orange');
	}
	btnFiles[3].onclick = function () {
		toggleAnsw(listFiles[3]);
		arrow[3].classList.toggle('arrow-up');
		this.classList.toggle('color-orange');
	}
	btnFiles[4].onclick = function () {
		toggleAnsw(listFiles[4]);
		arrow[4].classList.toggle('arrow-up');
		this.classList.toggle('color-orange');
	}
	btnFiles[5].onclick = function () {
		toggleAnsw(listFiles[5]);
		arrow[5].classList.toggle('arrow-up');
		this.classList.toggle('color-orange');
	}
}

changeTabs();
openCloseBurger();
showHideFiles();