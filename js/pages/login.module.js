const passcodeInputs = document.querySelectorAll('.login-passcode__inputs input[type="password"]');

passcodeInputs.forEach(input => {
    let maxLengthAttr = input.getAttribute('maxlength');
    input.addEventListener('keyup', () => {
        if (input.nextElementSibling) {
            if (input.value.length == maxLengthAttr) {
                input.nextElementSibling.focus();
            }
        }
    });
});