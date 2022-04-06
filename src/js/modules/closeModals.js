const closeModals = () => {
    // Скрываем все модальные окна и возвращаем скролл
    const windows = document.querySelectorAll('[data-modal]');
    windows.forEach(item => {
        item.style.display = 'none';
        document.body.style.overflow = "";
    });

};

export default closeModals;

