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