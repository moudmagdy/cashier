import '../components/main-menu.module.js';
import '../components/layout-tabs.module.js';


let products = document.querySelectorAll('.products__list .product');
products.forEach(product => {
    let quantity = 1;
    product.addEventListener('click', (e) => {
        e.stopPropagation();
        product.classList.add('product--selected');
        product.querySelector('.product__quantity').textContent = quantity;
        quantity++
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