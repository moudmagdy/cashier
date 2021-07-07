import '../components/main-menu.module.js';
import '../components/layout-tabs.module.js';
import '../components/collapsible.module.js';

const checkoutToggle = document.querySelector('.checkout__slide__toggle');
const filterBtns = document.querySelectorAll('.filters__buttons .filter__btn');

checkoutToggle.addEventListener('click', (e) => {
    e.preventDefault();
    checkoutToggle.closest('.checkout').classList.toggle('slide');
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let siblings = btn.parentElement.children;
        for (let sibling of siblings) {
            sibling.classList.remove('selected');
        }
        btn.classList.add('selected');
        const btnTarget = btn.getAttribute('data-filter');
        if (btnTarget == 'saved') {
            document.querySelector('.checkout__list').style.display = 'none';
            document.querySelector('.checkout__slide__toggle').style.display = 'none';
            document.querySelector('.checkout__cta__container').style.display = 'flex';
        }
    });
});