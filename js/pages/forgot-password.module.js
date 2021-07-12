import './login.module.js';

const sendPasswordBtn = document.querySelector('.send-password');
const timer = document.querySelector('.timer');
const resendBtn = document.querySelector('.resend--btn');

function countdown(minutes, seconds) {
    let timeoutHandle;
    function tick() {
        timer.innerHTML = '0' + minutes.toString() + ':' + (seconds < 10 ? '0' : '') + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                setTimeout(function () {
                    countdown(minutes - 1, 59);
                }, 1000);
            }
        }
        if (seconds == '00' && minutes == '00') {
            timer.closest('.resend__code__countdown').classList.add('d-none');
            timer.closest('.resend__code').querySelector('.resend--btn').classList.remove('d-none');
        }
    }
    tick();
}

sendPasswordBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendPasswordBtn.closest('.form__step').classList.add('d-none');
    sendPasswordBtn.closest('.form__step').nextElementSibling.classList.remove('d-none');

    countdown(1, 0);
});

resendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.resend__code__countdown').classList.remove('d-none');
    resendBtn.classList.add('d-none');
    countdown(1, 0);
});