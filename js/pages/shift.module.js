import '../components/layout-nav.module.js';
import './../components/main-menu.module.js';

const endShiftBtn = document.querySelector('.end-shift');
const controlPanels = document.querySelector('.control-panel');
const closeBtn = controlPanels.querySelector('.control-panel__close-btn');

endShiftBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.has__slidable__cp').classList.add('control-panel--shown');
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.has__slidable__cp').classList.remove('control-panel--shown');
});


window.addEventListener('load', () => {
    document.querySelector('#amount_difference').value = document.querySelector('.closed-shift .daily-total-amount').textContent;
});

document.querySelector('#cash_amount').addEventListener('input', () => {
    document.querySelector('#amount_difference').value = parseInt(document.querySelector('.closed-shift .daily-total-amount').textContent - document.querySelector('#cash_amount').value).toFixed(2);
});