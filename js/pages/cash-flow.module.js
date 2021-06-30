import './../components/main-menu.module.js';
import '../components/layout-nav.module.js';
import '../components/collapsible.module.js';


// Show and hide the second view in the control panel
const selectItemBtn = document.querySelector('.select-item__btn');
selectItemBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let btnDataAttr = selectItemBtn.getAttribute('data-view-target');
    document.querySelector('[data-view="' + btnDataAttr + '"]').classList.add('view--shown');
});

const viewBackBtn = document.querySelector('.items-search__back-btn');
viewBackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    viewBackBtn.closest('[data-view]').classList.remove('view--shown');
});

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

const removeSelectedItem = document.querySelector('.remove__selected-item');
removeSelectedItem.addEventListener('click', (e) => {
    e.preventDefault();
    removeSelectedItem.closest('.item__selected').querySelector('.item__selected__icon').innerHTML = "";
    removeSelectedItem.closest('.item__selected').querySelector('.item__selected__data').innerHTML = "";

    document.querySelector('.item__selected').style.display = 'none';
    document.querySelector('.select-item__btn').style.display = 'flex';
});