const startBtn = document.querySelector('.start--btn');

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    startBtn.closest('.form__step').classList.add('d-none');
    startBtn.closest('.form__step').nextElementSibling.classList.remove('d-none');
    setTimeout(function () {
        location.replace('branch.html');
    }, 3000);
});