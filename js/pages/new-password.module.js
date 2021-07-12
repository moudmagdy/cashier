import './login.module.js';

const confirmPasswordBtn = document.querySelector('.confirm-password--btn');

confirmPasswordBtn.addEventListener('click', (e) => {
    e.preventDefault();
    confirmPasswordBtn.closest('.form__step').classList.add('d-none');
    confirmPasswordBtn.closest('.form__step').nextElementSibling.classList.remove('d-none');
    setTimeout(function () {
        location.replace('login.html');
    }, 3000);
});