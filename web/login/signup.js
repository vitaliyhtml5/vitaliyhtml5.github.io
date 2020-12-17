const inputNecessary = document.querySelectorAll('.signup-necessary-input'); 
const errorMessage = document.querySelectorAll('.error-message');
const signupBtn = document.querySelector('.signup-form__btn');

let errorCodeSignup = window.location.href.substr(-3);

if (errorCodeSignup != '422') {
	errorMessage.forEach(element => {
		element.style.display = 'none';
	})
}
else {
	inputNecessary.forEach((element,arr) => {
		element.addEventListener('input', () => {
			if (element.value != '' && errorMessage[arr]) errorMessage[arr].style.display = 'none';
		});	
	});
	errorMessage.forEach(element => {
		inputNecessary[2].addEventListener('input', () => {
		if(element.innerText == 'Этот email уже занят') element.style.display = 'none';
	});
	inputNecessary[4].addEventListener('input', () => {
		if(element.innerText == 'Код регистрации неверный') element.style.display = 'none';
	});	

	})
}
