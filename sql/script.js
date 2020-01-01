function changeTabs() {	
	let tabs = {
		createTable: document.getElementById('create-table'),
		selectTable: document.getElementById('choose-table'),
		changeTable: document.getElementById('change-table'),
		joinTable: document.getElementById('join-table'),
		showHideTabs(show, hideFirst, hideSecond, hideThird) {
			show.style.display = 'block';
			hideFirst.style.display = 'none';
			hideSecond.style.display = 'none';
			hideThird.style.display = 'none';
		},
	};
	let sidebar = {
		createSide: document.querySelector('.sidebar__item_create'),
		selectSide: document.querySelector('.sidebar__item_choose'),
		changeSide: document.querySelector('.sidebar__item_change'),
		joinSide: document.querySelector('.sidebar__item_join'),
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
		createLink: document.querySelector('.tutorial-create'),
		selectLink: document.querySelector('.tutorial-select'),
		changeLink: document.querySelector('.tutorial-change'),
		joinLink: document.querySelector('.tutorial-join'),
		showHideLinks(show, hideFirst, hideSecond, hideThird) {
			show.style.display = 'block';
			hideFirst.style.display = 'none';
			hideSecond.style.display = 'none';
			hideThird.style.display = 'none';
		},
	};
	sidebar.createSide.onclick = function() {
		tabs.showHideTabs(tabs.createTable, tabs.selectTable, tabs.changeTable, tabs.joinTable);
		sidebar.changeSidebar(sidebar.createSide, sidebar.selectSide, sidebar.changeSide, sidebar.joinSide);
		links.showHideLinks(links.createLink, links.selectLink, links.changeLink, links.joinLink);
	}
	sidebar.selectSide.onclick = function() {
		tabs.showHideTabs(tabs.selectTable, tabs.createTable, tabs.changeTable, tabs.joinTable);
		sidebar.changeSidebar(sidebar.selectSide, sidebar.createSide, sidebar.changeSide, sidebar.joinSide);
		links.showHideLinks(links.selectLink, links.createLink, links.changeLink, links.joinLink);
	}
	sidebar.changeSide.onclick = function() {
		tabs.showHideTabs(tabs.changeTable, tabs.createTable, tabs.selectTable, tabs.joinTable);
		sidebar.changeSidebar(sidebar.changeSide, sidebar.selectSide, sidebar.createSide, sidebar.joinSide);
		links.showHideLinks(links.changeLink, links.createLink, links.selectLink, links.joinLink);
	}
	sidebar.joinSide.onclick = function() {
		tabs.showHideTabs(tabs.joinTable, tabs.createTable, tabs.selectTable, tabs.changeTable);
		sidebar.changeSidebar(sidebar.joinSide, sidebar.selectSide, sidebar.createSide, sidebar.changeSide);
		links.showHideLinks(links.joinLink, links.createLink, links.selectLink, links.changeLink);
	}
}
changeTabs();
