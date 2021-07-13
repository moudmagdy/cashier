import './login.module.js';

const forgotPasscodeBtn = document.querySelector('.forgot-passcode--btn');

forgotPasscodeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    forgotPasscodeBtn.closest('.form__step').classList.add('d-none');
    forgotPasscodeBtn.closest('.form__step').nextElementSibling.classList.remove('d-none');
});