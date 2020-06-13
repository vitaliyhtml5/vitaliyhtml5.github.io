let overlay = document.querySelector('.overlay');

function openOverlay() {
	let modalUpdate = document.querySelectorAll('.modal-update');

	for(let i = 0; i < modalUpdate.length; i++) {
		modalUpdate[i].onclick = () => {
			event.preventDefault();
			overlay.style.display = 'block';
		}
	}
}

document.querySelector('.modal__btn').onclick = () => {
	overlay.style.display = 'none';
}

openOverlay();


let dateTour = document.querySelectorAll('.table-date');
document.querySelector('.pagination-btn_first').onclick = changePaginationFirst;
document.querySelector('.pagination-btn_second').onclick = changePaginationSecond;

function changePaginationFirst() {
	dateTour[0].innerText = '15 октября';
	dateTour[1].innerText = '20 ноября';
	dateTour[2].innerText = '24 декабря';
}

function changePaginationSecond() {
	dateTour[0].innerText = '30 января';
	dateTour[1].innerText = '12 февраля';
	dateTour[2].innerText = '7 марта';
}






