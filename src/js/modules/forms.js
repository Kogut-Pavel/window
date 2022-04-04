const forms = () => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    // Всем инпутам с вводом телефона разрешаем только цифры
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

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

    const clearInputs = () => { // Очищаем инпуты
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => { // Перебираем формы и навешиваем обработчик события
        item.addEventListener('submit', (event) => {
            event.preventDefault();

            // Создаем блок для оповещения пользователя о статусе
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item); // Собираем данные из формы

            // Отправляем запрос на сервер с данными из formData
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                })
        });
    });
};

export default forms;