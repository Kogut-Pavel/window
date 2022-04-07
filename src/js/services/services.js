const calcScroll = () => {
    let div = document.createElement('div');
    div.style.cssText = `
            width: 50px;
            height: 50px;
            overflow-y: scroll;
            visibility: hidden;
        `;
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
};

function modifyBody(flow, scroll) {
    document.body.style.overflow = flow;
    document.body.style.marginRight = `${scroll}px`;
}

const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

// Всем инпутам с вводом телефона разрешаем только цифры
    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

const clearInputs = () => { // Очищаем инпуты
    const inputs = document.querySelectorAll('input');
    inputs.forEach(item => {
        item.value = '';
    });
};

const closeModals = () => {
    // Скрываем все модальные окна и возвращаем скролл
    const windows = document.querySelectorAll('[data-modal]');
    windows.forEach(item => {
        item.style.display = 'none';
        document.body.style.overflow = "";
    });
};

const clearState = (state) => {  // Очищаем объект state
    for (let key in state) {
        delete state[key];
    }
}





export {calcScroll};
export {modifyBody};
export {checkNumInputs};
export {clearInputs};
export {closeModals};
export {clearState};