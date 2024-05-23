createContent();

function createContent(query = 0) {
    const today = new Date().getDay();
    if (!localStorage.getItem('light')) showModal(query);
    else query = localStorage.getItem('light');

    document.querySelector('h2').textContent = `${queryArr[query]} очередь`;
    createDay(today, query);
    changeDay(today, query);

    document.querySelector('main > button').onclick = () => showModal(query);
}

// Create day
function createDay(day, query) {
    document.querySelector('b').textContent = data[day].day;

    const list = document.querySelector('ul');
    list.innerHTML = '';
    for (let el of data[day].time[query]) {
        list.insertAdjacentHTML('beforeend', `<li>${el}</li>`);
    }

    if (day === new Date().getDay()) {
        setIconLight(data[day].time[query]);
    } else  {
        document.querySelector('header>img').src = '';
    }
}

// Change day
function changeDay(day, query) {
    document.querySelectorAll('.info>button').forEach((el, index) => {
        el.onclick = () => {
            (index === 0) ? day-- : day++;

            if (day === -1) day = 6;
            else if (day === 7) day = 0;

            createDay(day, query);
        }
    });
}

// Other
function setIconLight(arr) {
    const now = new Date().getHours();
    let status = true;

    for (let el of arr) {
        if (now >= el.slice(0, 2)
            && now <= el.slice(-5, -3) - 1) {
            status = false;
            break;
        }
    }

    document.querySelector('header>img').src = `
    ${status ? 'img/lamp.svg' : 'img/candle.svg'}`;
}

//Modal
function showModal(query) {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="overlay">
        <div class="modal">
            <p>Пожалуйста, выберите очередь:</p>
            <ul></ul>
            <button>Подтвердить</button>
        </div>
    </div>`);
    const list = document.querySelector('.modal ul');

    for (let i = 0; i < queryArr.length; i++) {
        list.insertAdjacentHTML('beforeend', 
        `<li ${(i == query) ? 'class="radio-checked"' : ''}>
        ${queryArr[i]} очередь</li>`);
    }
    manageModal(list);
}

function manageModal(list) {
    const overlay = document.querySelector('.overlay');
    overlay.children[0].onclick = e => e.stopPropagation();
    overlay.onclick = () => overlay.remove();
    document.onkeyup = e => (e.key === 'Escape') ? overlay.remove() : false;

    list.onclick = e => {
        if (e.target !== list || !document.querySelector('.radio-checked')) {
            document.querySelector('.radio-checked').className = '';
            e.target.className = 'radio-checked';
        }
    };

    document.querySelector('.modal button').onclick = () => {
        const query = Array.from(list.children)
        .indexOf(document.querySelector('.radio-checked'));
        
        localStorage.setItem('light', query);
        overlay.remove();
        createContent(query);
    }
}