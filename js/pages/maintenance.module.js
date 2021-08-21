import '../components/main-menu.module.js';
import '../components/layout-tabs.module.js';
import '../components/collapsible.module.js';
import '../components/control-panel-tabs.module.js';
import '../components/change-view.module.js';


// Hide the preloader when the page fully loaded
const pageLoader = document.querySelector('.page-preloader');
function closePageLoader() {
    pageLoader.classList.add('page-loaded');
}
window.addEventListener('load', closePageLoader);


// Receive device side panel
const receiveDeviceBtn = document.querySelector('.receive-device--btn');
const controlPanel = document.querySelector('.page__layout > .control-panel');
const closeBtn = controlPanel.querySelector('.control-panel__close-btn');
receiveDeviceBtn.addEventListener('click', (e) => {
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


// Prevent the previousDevices dropdown menu from closing while clicking the labels
document.querySelectorAll('.previous-devices--dropdown .form-check-label').forEach(label => {
    label.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});


// Show and hide the second view in the control panel
const selectItemBtns = document.querySelectorAll('.select-item__btn');
const viewBackBtns = document.querySelectorAll('.items-search__back-btn');
selectItemBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const btnDataAttr = btn.getAttribute('data-view-target');
        const viewHasSameDataAttr = document.querySelector('[data-view="' + btnDataAttr + '"]');
        viewHasSameDataAttr.classList.add('view--shown');
    });
});
viewBackBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.closest('[data-view]').classList.remove('view--shown');
    });
});


// Select client from the list
const viewListItem = document.querySelectorAll('.control-panel__list-item');
viewListItem.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let itemImg = item.querySelector('.control-panel__list-item__icon').innerHTML;
        let itemData = item.querySelector('.control-panel__list-item__data').innerHTML;

        document.querySelector('.item__selected__icon').innerHTML = itemImg;
        document.querySelector('.item__selected__data').innerHTML = itemData;
        item.closest('[data-view]').classList.remove('view--shown');
        document.querySelector('.item__selected').style.display = 'flex';
        document.querySelector('.select-item__btn').style.display = 'none';
    });
});

// Remove the selected client
const removeSelectedItem = document.querySelector('.remove__selected-item');
removeSelectedItem.addEventListener('click', (e) => {
    e.preventDefault();
    removeSelectedItem.closest('.item__selected').querySelector('.item__selected__icon').innerHTML = "";
    removeSelectedItem.closest('.item__selected').querySelector('.item__selected__data').innerHTML = "";

    document.querySelector('.item__selected').style.display = 'none';
    document.querySelector('.select-item__btn').style.display = 'flex';
});


const products = document.querySelectorAll('.product');
products.forEach(product => {
    let quantity = 1;
    product.addEventListener('click', (e) => {
        e.stopPropagation();
        product.classList.add('product--selected');
        product.querySelector('.product__quantity').textContent = quantity;
        quantity++
    });
});


// Prevent the dropdown from sending event to it's parent
document.querySelectorAll('.product__dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});


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


// Control panel modals

const controlPanelBtns = document.querySelectorAll('[data-target-modal]');
const controlPanelModalCloseBtns = document.querySelectorAll('.control-panel__modal .close--btn');
controlPanelBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        let btnDataAttr = btn.getAttribute('data-target-modal');

        btn.closest('.control-panel').classList.add('modal--open');
        btn.closest('.control-panel').querySelector('[data-modal="' + btnDataAttr + '"]').classList.add('modal--shown');
    });
});
controlPanelModalCloseBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        btn.closest('.control-panel').classList.remove('modal--open');
        btn.closest('.control-panel__modal').classList.remove('modal--shown');
    });
});