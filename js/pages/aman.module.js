import '../components/main-menu.module.js';
import '../components/collapsible.module.js';

const servicesItem = document.querySelectorAll('.services__group__item a');
const controlPanels = document.querySelectorAll('.control-panel');

servicesItem.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.has__slidable__cp').classList.add('control-panel--shown');
    });
});

controlPanels.forEach(panel => {
    const closeBtn = panel.querySelector('.control-panel__close-btn');
    const keyBtns = panel.querySelectorAll('.key__btn:not(.backspace--btn)');
    const backspaceBtn = panel.querySelector('.backspace--btn');
    const rechargeValueInput = panel.querySelector('#recharge_value');
    const confirmCreditBtn = panel.querySelector('#confirm__credit');
    const confirmReceiptBtn = panel.querySelector('#confirm__receipt');
    const printBtn = panel.querySelector('#print__btn');
    const spinner = panel.querySelector('.spinner');
    const successMessage = panel.querySelector('.success__message');

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('main').classList.remove('control-panel--shown');
    });

    keyBtns.forEach(keyBtn => {
        keyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            rechargeValueInput.value = parseInt(keyBtn.value).toFixed(2);
        });
    });

    backspaceBtn.addEventListener('click', (e) => {
        e.preventDefault();
        rechargeValueInput.value = rechargeValueInput.value.substring(0, rechargeValueInput.value.length - 1);
    });

    confirmCreditBtn.addEventListener('click', (e) => {
        e.preventDefault();

        confirmCreditBtn.style.display = 'none';
        panel.querySelectorAll('.row').forEach(label => {
            label.style.display = 'none';
        });
        // panel.querySelectorAll('.form-label').forEach(label => {
        //     label.style.display = 'none';
        // });
        // panel.querySelectorAll('.form-control').forEach(input => {
        //     input.style.display = 'none';
        // });
        panel.querySelector('.key__buttons').style.display = 'none';
        panel.querySelector('.receipt').style.display = 'block';
        confirmReceiptBtn.style.display = 'block';
    });

    confirmReceiptBtn.addEventListener('click', (e) => {
        e.preventDefault();
        spinner.style.display = 'flex';
        confirmReceiptBtn.style.display = 'none';
        setTimeout(function () {
            spinner.style.display = 'none';
            successMessage.style.display = 'block'
            printBtn.style.display = 'block';
        }, 3500);
    });

    printBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.control-panel--shown').classList.remove('control-panel--shown');
        setTimeout(function () {
            confirmCreditBtn.style.display = 'block';
            panel.querySelectorAll('.row').forEach(label => {
                label.style.display = 'block';
            });
            // panel.querySelectorAll('.form-label').forEach(label => {
            //     label.style.display = 'block';
            // });
            // panel.querySelectorAll('.form-control').forEach(input => {
            //     input.style.display = 'block';
            // });
            panel.querySelector('.key__buttons').style.display = 'flex';
            panel.querySelector('.receipt').style.display = 'none';
            successMessage.style.display = 'none'
            printBtn.style.display = 'none';
        }, 350);
    });
});