const loginInput = document.querySelectorAll('.login-input'); 
const errorMessage = document.querySelectorAll('.error-message');
const loginBtn = document.querySelector('.login_btn');

let errorCodeLogin = window.location.href.substr(-3);

if (errorCodeLogin != '401') {
	errorMessage.forEach(element => {
		element.style.display = 'none';
	})
}
else {
	loginInput.forEach((element,arr) => {
		element.addEventListener('input', () => {
			if (element.value != '' && errorMessage[arr]) errorMessage[arr].style.display = 'none';
		});	
	});
	errorMessage.forEach(element => {
		loginInput[0].addEventListener('input', () => {
			if(element.innerText == 'Этот email не зарегистрирован') element.style.display = 'none';
		});
		loginInput[1].addEventListener('input', () => {
			if(element.innerText == 'Неверный пароль') element.style.display = 'none';
		});	
	})
}