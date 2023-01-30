let query = 0;
let counter = new Date().getDay();
checkQuery();

function checkQuery() {
    if (!localStorage.getItem('lightQuery')) {
        createModal(0);
    } else {
        query = localStorage.getItem('lightQuery');
    }
    document.querySelector('h2').textContent = queryArr[query];
    showData();
    changeDates();
    document.querySelector('main>button').onclick = () => createModal();
}

function showData() {
    document.querySelector('.info b').textContent = data[counter].day;
    document.querySelectorAll('.info li')[0].textContent = data[counter].time[query][0];
    document.querySelectorAll('.info li')[1].textContent = data[counter].time[query][1];
    setIconLight();
}

function changeDates() {
    document.querySelectorAll('.info button').forEach((el, index) => {
        el.onclick = () => {
            (index === 0) ? counter-- : counter++;

            if (counter === data.length && index === 1) {
                counter = 0;
            } else if (counter < 0 && index === 0) {
                counter = 6;
            }

            showData();
        }
    });
}

function setIconLight() {
    const time = document.querySelectorAll('.info li');
    const img = document.querySelector('header>img');
    const curHour = new Date().getHours();
    let result = true;
    checkLight(time[0]);
    checkLight(time[1]);

    function checkLight(el) {
        const hour = +el.textContent.slice(0,2);
        for (let i = 0; i < 4; i++) {
            if (curHour === hour+i) {
                result = false;
                break;
            }
        }
        
        if (counter !== new Date().getDay()) {
            img.style.visibility = 'hidden';
        }
        else if (result) {
            img.style.visibility = 'visible';
            img.src = 'img/light.svg';
            img.title = 'Світло є';
        } else {
            img.style.visibility = 'visible';
            img.src = 'img/no_light.svg';
            img.title = 'Світла немає';
        }
    }
}

function createModal() {
    const overlay = document.createElement('div');
    document.body.appendChild(overlay);
    overlay.classList.add('overlay');

    overlay.innerHTML = `
    <div class="modal">
        <p>Будь ласка, оберіть чергу:</p>
        <ul>
            <li>I черга</li>
            <li>II черга</li>
            <li>III черга</li>
        </ul>
        <button>Підтвердити</button>
    </div>`;
    setRadio(document.querySelectorAll('.modal li'), query);

    document.querySelector('.modal').onclick = e => e.stopPropagation();
    document.querySelector('.overlay').onclick = () => closeOverlay(overlay);
    document.body.addEventListener('keydown', e => {
		if (e.key === 'Escape') closeOverlay(overlay);
	});
    document.querySelector('.modal button').onclick = () => {
        const checkedQuery = document.querySelector('.btn-checked');
        const index = Array.from(checkedQuery.parentNode.children).indexOf(checkedQuery);
        localStorage.setItem('lightQuery', index);
        query = index;
        document.querySelector('h2').textContent = queryArr[query];
        showData(query);
        closeOverlay(overlay);
    }
}

function setRadio(item, query) {
    item[query].classList.add('btn-checked');
    item.forEach(el => {
        el.onclick = () => {
            document.querySelector('.btn-checked').classList.remove('btn-checked');
            el.classList.add('btn-checked');
        }
    });
}

function closeOverlay(overlay) {
    overlay.remove();
}