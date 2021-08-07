import '../components/main-menu.module.js';
import '../components/layout-tabs.module.js';
import '../components/collapsible.module.js';
import '../components/change-view.module.js';

const pageLoader = document.querySelector('.page-preloader');

function closePageLoader() {
    pageLoader.classList.add('page-loaded');
}

window.addEventListener('load', closePageLoader);

document.getElementById('save_invoice').addEventListener('click', (e) => {
    e.preventDefault()
    iziToast.show({
        title: 'تم بنجاح',
        message: 'تم حفظ الفاتورة بنجاح',
        color: 'green',
        transitionIn: 'fadeInUp',
    });
});

// document.getElementById('print_price').addEventListener('click', (e) => {
//     e.preventDefault()
//     iziToast.show({
//         title: 'تمت الطباعه ',
//         message: 'تم طباعة عرض السعر بنجاح',
//         color: 'green',
//         transitionIn: 'fadeInUp',
//     });
// });

document.querySelector('.delete__invoice').addEventListener('click', (e) => {
    e.preventDefault()
    tl3.play()
    iziToast.show({
        title: 'تم بنجاح',
        message: 'تم مسح الفاتورة بنجاح',
        color: 'red',
        transitionIn: 'fadeInUp',
    });
});
document.querySelector('.receive__cash__btn').addEventListener('click', (e) => {
    e.preventDefault()
    // tl3.play()
    iziToast.show({
        title: 'تم بنجاح',
        message: 'تم استلام المبلغ بنجاح',
        color: 'green',
        transitionIn: 'fadeInUp',
    });
});


let cards = document.querySelectorAll('.product');

cards.forEach(card => {
    let quantity = 1;
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.add('product--selected');
        card.querySelector('.product__quantity').textContent = quantity;
        quantity++
    });
});


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


const controlPanelContent = document.querySelector('.control-panel__content');
const controlPanelHeaderHeight = document.querySelector('.control-panel__header').offsetHeight;
const addItemHeight = document.querySelector('.select-item').offsetHeight;
const checkoutHeight = document.querySelector('.control-panel__bottom-bar').offsetHeight;

controlPanelContent.style.maxHeight = `calc(100vh - ${controlPanelHeaderHeight}px - ${addItemHeight}px - ${checkoutHeight}px)`;

document.querySelectorAll('.product__dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

document.querySelectorAll('.invoice__item--discount').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('#product_discount_modal .modal-dialog').style.position = 'fixed';
        document.querySelector('#product_discount_modal .modal-dialog').style.top = item.offsetTop + 60 + 'px';
        document.querySelector('#product_discount_modal .modal-dialog').style.left = item.offsetLeft + 'px';
    });
});

document.querySelectorAll('.address__container').forEach(address => {
    address.addEventListener('click', (e) => {
        e.preventDefault();
        address.closest('.addresses__list').querySelector('.selected').classList.remove('selected');
        address.classList.add('selected');
    });
});

const receivePaymentBtn = document.querySelector('.receive__payment__btn');
const paymentMethodsBackBtn = document.querySelector('.payment-methods .back-btn');

receivePaymentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!document.querySelector('main').classList.contains('payment-methods--shown')) {
        document.querySelector('main').classList.add('payment-methods--shown');
    }
});

paymentMethodsBackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('main').classList.contains('payment-methods--shown')) {
        document.querySelector('main').classList.remove('payment-methods--shown');
    }
});