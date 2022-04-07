import {closeModals} from "../services/services";
import {clearState} from "../services/services";
import {clearInputs} from "../services/services";
import {calcScroll} from "../services/services";
import {modifyBody} from "../services/services";

const modals = (state) => {

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const scroll = calcScroll();

        trigger.forEach(item => {
           item.addEventListener('click', (event) => {
               if (event.target) {
                   event.preventDefault();
               }
               closeModals();
               modal.style.display = "block";
               modifyBody('hidden', scroll);
           });
        });

        close.addEventListener('click', () => {
            closeModals();
            clearState(state);
            clearInputs();
            modifyBody('', 0);
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal && closeClickOverlay) {
                closeModals();
                clearState(state);
                clearInputs();
                modifyBody('', 0);
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }



    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export default modals;
