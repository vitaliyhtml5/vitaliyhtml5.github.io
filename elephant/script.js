//OVERLAY
let overlay = document.querySelector('.overlay');
let overlayBtn = document.querySelector('.modal__btn');
let modalForm = document.querySelector('.modal__text');

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

window.addEventListener('keyup', function (e) {
	overlay.classList.remove('modal-overlay-in');
  	if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) {
    	e.preventDefault();
   		overlay.classList.add('modal-overlay-out');
  	}
});

// FORM VALIDATION

let btnForm = document.querySelector('.contacts-btn');
btnForm.onclick = function() {
	let form = {
		name: document.querySelector('.contacts-text'),
		message: document.querySelector('.contacts-comment'),
	}
	if (form.name.value == "" || form.message.value == "") {
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

//SHADOW AND BLUR BUTTON
function showShadow() {
	let shadow = {
		btn: document.querySelector('.fixed-btn'),
		increaseShadow () {
			shadow.btn.classList.add('shadow-btn');
			return; 
		},
	};
	setTimeout(shadow.increaseShadow, 500);
	shadow.btn.classList.remove('shadow-btn');
	btn_blink.remove();
}
setInterval(showShadow, 8000);

let btn_blink = document.createElement('div');
function showBlur() {
	let btn = document.querySelector('.price__btn');
	btn_blink.className = '.price__btn_blink';
	btn.append(btn_blink);
	btn_blink.classList.add('price__btn_blink');
	btn_blink.classList.add('btn-blink');
}
setInterval(showBlur, 5000);
