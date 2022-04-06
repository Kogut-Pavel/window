const clearInputs = () => { // Очищаем инпуты
    const inputs = document.querySelectorAll('input');
    inputs.forEach(item => {
        item.value = '';
    });
};

export default clearInputs;
