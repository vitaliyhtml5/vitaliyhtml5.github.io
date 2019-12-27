//OVERLAY
let overlay = document.querySelector('.overlay');
let overlayBtn = document.querySelector('.modal__btn');

let btnFeatures = document.querySelector('.features__btn').onclick = showModal;
let btnPrice = document.querySelector('.price__btn').onclick = showModal;
let btnContacts= document.querySelector('.contacts-btn').onclick = showModal;

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
		modalForm.innerHTML = 'Пожалуйста, заполните все поля формы';
	}
	else {
		showModal();
		modalForm.innerHTML = 'Сайт на реконструкции<br>попробуйте позже';
	}
}


// ELEPHANT SOUND
let roarElephant = document.querySelector('.contacts__img').onclick = soundElephant;
function soundElephant() {
	let audio = new Audio();
	audio.src = 'elephant.mp3';
	audio.autoplay = true;
}


//SHADOW BUTTON
let button = document.querySelector('.fixed-btn');
function shadowBtn() {
	button.classList.add('shadow-btn');
}
function stopShadowBtn() {
	button.classList.remove('shadow-btn');
}
setInterval(shadowBtn, 2000);
setInterval(stopShadowBtn, 4000);