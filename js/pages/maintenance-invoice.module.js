import '../components/main-menu.module.js';
import '../components/layout-tabs.module.js';
import '../components/change-view.module.js';


// Hide the preloader when the page fully loaded
const pageLoader = document.querySelector('.page-preloader');
function closePageLoader() {
    pageLoader.classList.add('page-loaded');
}
window.addEventListener('load', closePageLoader);


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


const receivePaymentBtn = document.querySelector('.receive__payment__btn');
const paymentMethodsBackBtn = document.querySelector('.payment-methods .back-btn');

receivePaymentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!document.querySelector('main').classList.contains('payment-methods--shown')) {
        document.querySelector('main').classList.add('payment-methods--shown');
        document.querySelector('.control-panel__bottom-bar').classList.add('d-none');
        document.querySelector('.invoice__list__container').classList.add('d-none');
        document.querySelector('.control-panel__content .checkout').classList.remove('d-none');
    }
});

paymentMethodsBackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('main').classList.contains('payment-methods--shown')) {
        document.querySelector('main').classList.remove('payment-methods--shown');
        document.querySelector('.control-panel__bottom-bar').classList.remove('d-none');
        document.querySelector('.invoice__list__container').classList.remove('d-none');
        document.querySelector('.control-panel__content .checkout').classList.add('d-none');
    }
});