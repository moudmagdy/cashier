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
const paymentMethods = document.querySelector('.payment-methods');
const paymentMethodsBackBtn = document.querySelector('.payment-methods .back-btn');

receivePaymentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!paymentMethods.classList.contains('shown')) {
        paymentMethods.classList.add('shown');
    }
});

paymentMethodsBackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (paymentMethods.classList.contains('shown')) {
        paymentMethods.classList.remove('shown');
    }
});