//TABS
function changeTabs() {	
	let tabs = {
		createTable: document.getElementById('create-table'),
		selectTable: document.getElementById('choose-table'),
		changeTable: document.getElementById('change-table'),
		joinTable: document.getElementById('join-table'),
		tasks: document.getElementById('tasks'),
		showHideTabs(show, hideFirst, hideSecond, hideThird, hideForth) {
			show.style.display = 'block';
			hideFirst.style.display = 'none';
			hideSecond.style.display = 'none';
			hideThird.style.display = 'none';
			hideForth.style.display = 'none';
		},
	};
	let sidebar = {
		createSide: document.querySelector('.sidebar__item_create'),
		selectSide: document.querySelector('.sidebar__item_choose'),
		changeSide: document.querySelector('.sidebar__item_change'),
		joinSide: document.querySelector('.sidebar__item_join'),
		tasksSide: document.querySelector('.sidebar__item_tasks'),
		changeSidebar(selected, unselectedFirst, unselectedSecond, unselectedThird, unselectedForth) {
			selected.classList.add('sidebar__item_selected');
			unselectedFirst.classList.remove('sidebar__item_selected');
			unselectedSecond.classList.remove('sidebar__item_selected');
			unselectedThird.classList.remove('sidebar__item_selected');
			unselectedForth.classList.remove('sidebar__item_selected');
			unselectedFirst.classList.add('sidebar__item');
			unselectedSecond.classList.add('sidebar__item');
			unselectedThird.classList.add('sidebar__item');
			unselectedForth.classList.add('sidebar__item');
		},
	};
	let links = {
		createLink: document.querySelector('.tutorial-create'),
		selectLink: document.querySelector('.tutorial-select'),
		changeLink: document.querySelector('.tutorial-change'),
		joinLink: document.querySelector('.tutorial-join'),
		tasksLink: document.querySelector('.tutorial-task'),
		showHideLinks(show, hideFirst, hideSecond, hideThird, hideForth) {
			show.style.display = 'block';
			hideFirst.style.display = 'none';
			hideSecond.style.display = 'none';
			hideThird.style.display = 'none';
			hideForth.style.display = 'none';
		},
	};
	sidebar.createSide.onclick = function() {
		tabs.showHideTabs(tabs.createTable, tabs.selectTable, tabs.changeTable, tabs.joinTable, tabs.tasks);
		sidebar.changeSidebar(sidebar.createSide, sidebar.selectSide, sidebar.changeSide, sidebar.joinSide, sidebar.tasksSide);
		links.showHideLinks(links.createLink, links.selectLink, links.changeLink, links.joinLink, links.tasksLink);
	}
	sidebar.selectSide.onclick = function() {
		tabs.showHideTabs(tabs.selectTable, tabs.createTable, tabs.changeTable, tabs.joinTable, tabs.tasks);
		sidebar.changeSidebar(sidebar.selectSide, sidebar.createSide, sidebar.changeSide, sidebar.joinSide, sidebar.tasksSide);
		links.showHideLinks(links.selectLink, links.createLink, links.changeLink, links.joinLink, links.tasksLink);
	}
	sidebar.changeSide.onclick = function() {
		tabs.showHideTabs(tabs.changeTable, tabs.createTable, tabs.selectTable, tabs.joinTable, tabs.tasks);
		sidebar.changeSidebar(sidebar.changeSide, sidebar.selectSide, sidebar.createSide, sidebar.joinSide, sidebar.tasksSide);
		links.showHideLinks(links.changeLink, links.createLink, links.selectLink, links.joinLink, links.tasksLink);
	}
	sidebar.joinSide.onclick = function() {
		tabs.showHideTabs(tabs.joinTable, tabs.createTable, tabs.selectTable, tabs.changeTable, tabs.tasks);
		sidebar.changeSidebar(sidebar.joinSide, sidebar.selectSide, sidebar.createSide, sidebar.changeSide, sidebar.tasksSide);
		links.showHideLinks(links.joinLink, links.createLink, links.selectLink, links.changeLink, links.tasksLink);
	}
	sidebar.tasksSide.onclick = function() {
		tabs.showHideTabs(tabs.tasks, tabs.createTable, tabs.selectTable, tabs.changeTable, tabs.joinTable);
		sidebar.changeSidebar(sidebar.tasksSide, sidebar.selectSide, sidebar.createSide, sidebar.changeSide, sidebar.joinSide);
		links.showHideLinks(links.tasksLink, links.createLink, links.selectLink, links.changeLink, links.joinLink);
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
	let btnTasks = [
		document.querySelector('.task-answer_first'),
		document.querySelector('.task-answer_second'),
		document.querySelector('.task-answer_third'),
		document.querySelector('.task-answer_forth'),
		document.querySelector('.task-answer_fifth'),
		document.querySelector('.task-answer_sixth'),
	];
	let answTasks = [
		document.querySelector('.show-answer_first'),
		document.querySelector('.show-answer_second'),
		document.querySelector('.show-answer_third'),
		document.querySelector('.show-answer_forth'),
		document.querySelector('.show-answer_fifth'),
		document.querySelector('.show-answer_sixth'),
	];
	
	let arrow = document.querySelectorAll('.arrow-down');
	let toggleAnsw = answ => {
		answ.classList.toggle('show-answer');
		for (let i=0; i<arrow.length; i++) {
		}
	}

	btnTasks[0].onclick = function () {
		toggleAnsw(answTasks[0]);
		arrow[0].classList.toggle('arrow-up');
	}
	btnTasks[1].onclick = function () {
		toggleAnsw(answTasks[1]);
		arrow[1].classList.toggle('arrow-up');
	}
	btnTasks[2].onclick = function () {
		toggleAnsw(answTasks[2]);
		arrow[2].classList.toggle('arrow-up');
	}
	btnTasks[3].onclick = function () {
		toggleAnsw(answTasks[3]);
		arrow[3].classList.toggle('arrow-up');
	}
	btnTasks[4].onclick = function () {
		toggleAnsw(answTasks[4]);
		arrow[4].classList.toggle('arrow-up');
	}
	btnTasks[5].onclick = function () {
		toggleAnsw(answTasks[5]);
		arrow[5].classList.toggle('arrow-up');
	}
}

//ADVERTASING
function showAdvertising() {
	let advertasing = document.querySelector('.advertise');
	
	setTimeout( () => advertasing.classList.add('show-advertising'), 10000);
	document.querySelector('.advertise__btn').onclick = () => advertasing.style.display = 'none';
}


changeTabs();
openCloseBurger();
showHideAnsw();
showAdvertising();