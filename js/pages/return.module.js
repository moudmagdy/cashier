import '../components/main-menu.module.js';
import '../components/layout-tabs.module.js';
import '../components/change-view.module.js';

const productsList = document.querySelector('.products__list');
const products = document.querySelectorAll('.products__list .product');
const selectAllProducts = document.querySelector('.select-all');

let bodyElement = document.querySelector('body');
let direction;

if (window.getComputedStyle) {
    // all browsers
    direction = window.getComputedStyle(bodyElement, null).getPropertyValue('direction');
} else {
    // IE5-8
    direction = bodyElement.currentStyle.direction;
}

products.forEach(product => {
    let quantity = 0;
    product.addEventListener('click', (e) => {
        e.stopPropagation();
        if (product.classList.contains('product--selected')) {
            quantity++;
            product.querySelector('.product__quantity').textContent = quantity;
        } else {
            quantity = 1;
            product.classList.add('product--selected');
            product.querySelector('.product__quantity').textContent = quantity;
        }

        if (product.parentNode.querySelectorAll('.product--selected').length === product.parentNode.children.length) {
            selectAllProducts.textContent = direction == 'rtl' ? 'الغاء تحديد الكل' : 'Deselect All';
            selectAllProducts.classList.add('active');
        }
    });
});

selectAllProducts.addEventListener('click', (e) => {
    e.preventDefault();
    if (productsList.querySelectorAll('.product--selected').length === productsList.children.length) {
        selectAllProducts.textContent = direction == 'rtl' ? 'تحديد الكل' : 'Select All';
        selectAllProducts.classList.remove('active');
        productsList.querySelectorAll('.product--selected').forEach(selected => {
            selected.classList.remove('product--selected');
        });
    }
    else {
        products.forEach(product => {
            if (!product.classList.contains('product--selected')) {
                let quantity = 1;
                selectAllProducts.textContent = direction == 'rtl' ? 'الغاء تحديد الكل' : 'Deselect All';
                selectAllProducts.classList.add('active');
                product.classList.add('product--selected');
                product.querySelector('.product__quantity').textContent = quantity;
                console.log(quantity);
            }
        });
    }
});

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
    }
});

paymentMethodsBackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('main').classList.contains('payment-methods--shown')) {
        document.querySelector('main').classList.remove('payment-methods--shown');
    }
});