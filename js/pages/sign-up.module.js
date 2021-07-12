const passcodeInputs = document.querySelectorAll('.code__inputs .form-control');
const showPasswordBtn = document.querySelectorAll('.show__password');
const timer = document.querySelector('.timer');
const resendBtn = document.querySelector('.resend--btn');
const createAccountBtn = document.querySelector('.create-account--btn');


passcodeInputs.forEach(input => {
    let maxLengthAttr = input.getAttribute('maxlength');

    input.addEventListener('keyup', (e) => {
        if (input.value != input.value.replace(/[^0-9\.]/g, '')) {
            input.value = input.value.replace(/[^0-9\.]/g, '');
        }

        if (input.nextElementSibling) {
            if (input.value.length == maxLengthAttr) {
                input.nextElementSibling.focus();
            }
        }

        if (input.previousElementSibling) {
            if (e.keyCode == 8) {
                if (input.value.length == 0) {
                    input.previousElementSibling.focus();
                }
            }
        }

        if (input.value.length == maxLengthAttr) {
            input.closest('.form__step').classList.add('d-none');
            input.closest('.form__step').nextElementSibling.classList.remove('d-none');
            setTimeout(function () {
                location.replace('store.html');
            }, 3000);
        }
    });
});

showPasswordBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.closest('.password__field').classList.toggle('password--shown');
        if (btn.closest('.password__field').classList.contains('password--shown')) {
            btn.closest('.password__field').querySelector('.form-control').setAttribute('type', 'text');
        } else {
            btn.closest('.password__field').querySelector('.form-control').setAttribute('type', 'password');
        }
    });
});

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

createAccountBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createAccountBtn.closest('.form__step').classList.add('d-none');
    createAccountBtn.closest('.form__step').nextElementSibling.classList.remove('d-none');
    countdown(1, 0);
});

resendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.resend__code__countdown').classList.remove('d-none');
    resendBtn.classList.add('d-none');
    countdown(1, 0);
});