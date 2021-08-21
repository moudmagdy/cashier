import '../components/main-menu.module.js';
import '../components/layout-tabs.module.js';
import '../components/collapsible.module.js';
import '../components/control-panel-tabs.module.js';

// Hide the preloader when the page fully loaded
const pageLoader = document.querySelector('.page-preloader');
function closePageLoader() {
    pageLoader.classList.add('page-loaded');
}
window.addEventListener('load', closePageLoader);


// Control panel filters
const contentFilter = document.querySelectorAll('.content__filter__item');
const invoiceList = document.querySelector('.invoice__list');
function loadFilteredContent() {
    let selectedFilterDataAttr = document.querySelector('.selected--filter').getAttribute('data-filter');

    invoiceList.querySelectorAll('.invoice__item[data-filter="' + selectedFilterDataAttr + '"]').forEach(item => {
        item.style.display = 'flex';
    });
}
function filterContent(e) {
    e.preventDefault();

    let filterDataAttr = this.getAttribute('data-filter');

    document.querySelector('.content__filter__item.selected--filter').classList.remove('selected--filter');
    this.classList.add('selected--filter');

    invoiceList.querySelectorAll('.invoice__item').forEach(item => {
        item.removeAttribute('style');
    });

    invoiceList.querySelectorAll('.invoice__item[data-filter="' + filterDataAttr + '"]').forEach(item => {
        item.style.display = 'flex';
    });
}
window.addEventListener('load', loadFilteredContent);
contentFilter.forEach(filter => filter.addEventListener('click', filterContent));


// Checkout slide button
const checkoutToggle = document.querySelector('.checkout__slide__toggle');
checkoutToggle.addEventListener('click', (e) => {
    e.preventDefault();
    checkoutToggle.closest('.checkout').classList.toggle('slide');
});


// Receive device side panel
const returnForMaintenance = document.querySelector('.return-for-maintenance');
const controlPanel = document.querySelector('.page__layout > .control-panel');
const closeBtn = controlPanel.querySelector('.control-panel__close-btn');
returnForMaintenance.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.add('control-panel--shown');
});
closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.remove('control-panel--shown');
    if (closeBtn.closest('.control-panel').getElementsByClassName('view--shown').length > 0) {
        closeBtn.closest('.control-panel').querySelector('.control-panel__view.view--shown').classList.remove('view--shown');
    }
});