//OVERLAY
let overlay = document.querySelector('.overlay');
let overlayBtn = document.querySelector('.modal__btn');

function showModal() {
	overlay.classList.remove('modal-overlay-out');
	overlay.style.display = 'block';
	modalForm.innerHTML = 'Сайт на реконструкции<br>попробуйте позже';
	if (overlay) {
		overlay.classList.add('modal-overlay-in');
	}
}


// OVERLAY CLOSE
overlay.onclick = function() {
	overlay.classList.remove('modal-overlay-in');
	if (overlay) {
		overlay.classList.add('modal-overlay-out');
	}
}

window.addEventListener('keydown', function (event) {
	overlay.classList.remove('modal-overlay-in');
  if (event.key === 'Escape') {
    overlay.classList.add('modal-overlay-out');
  }
})


// FORM VALIDATION
let nameForm = document.querySelector('.contacts-text');
let messageForm = document.querySelector('.contacts-comment');
let btnForm = document.querySelector('.contacts-btn');
let modalForm = document.querySelector('.modal__text');

btnForm.onclick = function() {
	if (nameForm.value == "" || messageForm.value == "") {
		showModal();
		modalForm.innerHTML = 'You are the best';
	}
	else {
		showModal();
		modalForm.innerHTML = 'Сайт на реконструкции<br>попробуйте позже';
	}
}