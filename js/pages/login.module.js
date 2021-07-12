const passcodeInputs = document.querySelectorAll('.code__inputs .form-control');
const showPasswordBtn = document.querySelectorAll('.show__password');

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