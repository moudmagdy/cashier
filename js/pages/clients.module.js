import '../components/main-menu.module.js';
import '../components/layout-tabs.module.js';
import '../components/collapsible.module.js';

document.querySelector('.operations-and-invoices__toggle').addEventListener('click', (e) => {
    e.preventDefault();

    let bodyElement = document.querySelector('body');
    let direction;

    if (window.getComputedStyle) {
        // all browsers
        direction = window.getComputedStyle(bodyElement, null).getPropertyValue('direction');
    } else {
        // IE5-8
        direction = bodyElement.currentStyle.direction;
    }

    document.querySelector('main').classList.toggle('operations-and-invoices--shown');
    if (document.querySelector('main').classList.contains('operations-and-invoices--shown')) {
        document.querySelector('.operations-and-invoices__toggle').textContent = direction == 'rtl' ? 'اخفاء العمليات والفواتير' : 'Hide operations and invoices';
    } else {
        document.querySelector('.operations-and-invoices__toggle').textContent = direction == 'rtl' ? 'عرض العمليات والفواتير' : 'Show operations and invoices';
    }
});

const searchBarDropdownItems = document.querySelectorAll('.search__bar__dropdown .dropdown-item');
searchBarDropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.closest('.search__bar__dropdown').querySelector('.dropdown__selected-value').textContent = item.textContent;
    });
});


const cashOperationBtn = document.querySelector('.cash-operation');
const controlPanel = document.querySelector('.page__layout > .control-panel');
const closeBtn = controlPanel.querySelector('.control-panel__close-btn');

cashOperationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.add('control-panel--shown');
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.remove('control-panel--shown');
});