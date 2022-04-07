import {calcScroll} from "../services/services";
import {modifyBody} from "../services/services";

const images = () => {
    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');
    const scroll = calcScroll();

    imgPopup.classList.add('popup');
    imgPopup.classList.add('animated', 'fadeIn');
    workSection.appendChild(imgPopup);

    imgPopup.style.cssText = `
        display: none;
        justify-content: center;
        align-items: center;
    `;

    bigImage.style.cssText = `
        max-height: 600px;
    `;

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            modifyBody('hidden', scroll);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            modifyBody('', 0);
        }
    });

};

export default images;