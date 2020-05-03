function showError() {
  const messageName = document.querySelector('.contacts__name');
  let messageTextName = document.querySelector('.error-message_name');

  const messageComment = document.querySelector('.contacts__comment');
  let messageTextComment = document.querySelector('.error-message_comment');

  const formBtn = document.querySelector('.contacts__btn');

   const overlay = document.querySelector('.overlay');
   const modal = document.querySelector('.modal');
   const modalText = document.querySelector('.modal__text');
   const modalBtn = document.querySelector('.modal__btn');

  function RegEx(regex,input,helpText,helpMessage) {
    if(!regex.test(input)) {
      if (helpText != null) {
          helpText.innerHTML = helpMessage;
          return false;
      }  
    }
    else {
      if (helpText !=null) {
        helpText.innerHTML = "";
        return true;
      }
    }
  }

  messageName.onblur = () => {
    RegEx(/.+/,messageName.value,messageTextName,"Пожалуйста, введите имя");
  }

  messageComment.onblur = () => {
    RegEx(/.+/,messageComment.value,messageTextComment,"Пожалуйста, добавьте комментарий");
  }

  formBtn.onclick = (event) => {
    event.preventDefault();
    if (messageComment.value == '' && messageName.value == '') {
      openOverlay(event);
      modalText.innerText = 'Пожалуйста, введите имя и комментарий';
      RegEx(/.+/,messageName.value,messageTextName,"Пожалуйста, введите имя");
      RegEx(/.+/,messageComment.value,messageTextComment,"Пожалуйста, добавьте комментарий");
    }
    else if (messageComment.value == '') {
      openOverlay(event);
      modalText.innerText = 'Пожалуйста, добавьте комментарий';
      RegEx(/.+/,messageComment.value,messageTextComment,"Пожалуйста, добавьте комментарий");
    }
    
    else if(messageName.value == '') {
      openOverlay(event);
      modalText.innerText = 'Пожалуйста, введите имя';
      RegEx(/.+/,messageName.value,messageTextName,"Пожалуйста, введите имя");
    }
    else {
      openOverlay(event);
      modalText.innerText = 'Ваше сообщение отправлено';
      messageName.value = '';
      messageComment.value = '';
    }
  }

  function openOverlay(event) {
    event.preventDefault();
    overlay.classList.remove('none-transition');
    overlay.style.display = 'block';
      if (overlay) {
        overlay.classList.add('block-transition');
      }
  }

  function closeOverlay() {
    modal.onclick = (e) => e.stopPropagation();
    overlay.classList.remove('block-transition');

    if (overlay) {
      overlay.classList.add('none-transition');
    }
  }

  window.addEventListener('keyup', function (e) {
    e.preventDefault();
    overlay.classList.remove('block-transition');
      if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 32) {
        overlay.classList.add('none-transition');
      }
  });

  overlay.onclick = closeOverlay;
  modalBtn.onclick = closeOverlay;

}

showError();
