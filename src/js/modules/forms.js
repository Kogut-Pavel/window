import {checkNumInputs} from "../services/services";
import {closeModals} from "../services/services";
import {clearState} from "../services/services";
import {clearInputs} from "../services/services";

const forms = (state) => {
    const form = document.querySelectorAll('form');

    checkNumInputs('input[name="user_phone"]');

    const message = { // Объект со статусами
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => { // Отправка запроса
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data,
        });

        return await res.text();
    };

    form.forEach(item => { // Перебираем формы и навешиваем обработчик события
        item.addEventListener('submit', (event) => {
            event.preventDefault();

            // Создаем блок для оповещения пользователя о статусе
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item); // Собираем данные из формы
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            // Отправляем запрос на сервер с данными из formData
            postData('assets/server.php', formData)
                .then(() => {
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    clearState(state);
                    setTimeout(() => {
                        closeModals();
                        statusMessage.remove();
                    }, 6000);
                })
        });
    });
};

export default forms;