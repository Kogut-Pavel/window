const popupEngineer = document.querySelector('.popup_engineer');
const popupClose = document.querySelector('.popup_close');
const popupEngineerBtn = document.querySelector('.popup_engineer_btn');

popupEngineerBtn.addEventListener('click', () => {
    popupEngineer.style.display = 'block';
});

popupClose.addEventListener('click', () => {
    popupEngineer.style.display = 'none';
});