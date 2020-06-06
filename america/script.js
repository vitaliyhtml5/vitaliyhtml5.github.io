let overlay = document.querySelector('.overlay');

function openOverlay() {
	let modalUpdate = document.querySelectorAll('.modal-update');

	for(let i = 0; i < modalUpdate.length; i++) {
		modalUpdate[i].onclick = () => {
			overlay.style.display = 'block';
		}
	}
}

document.querySelector('.modal__btn').onclick = () => {
	overlay.style.display = 'none';
}

openOverlay();
