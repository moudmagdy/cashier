import '../components/layout-nav.module.js';
import './../components/main-menu.module.js';
import './../components/collapsible.module.js';

const groupHeaders = document.querySelectorAll('.operations__group__header a');
const searchBarDropdownItems = document.querySelectorAll('.search__bar__dropdown .dropdown-item');

groupHeaders.forEach(groupHeader => {
    groupHeader.addEventListener('click', () => {
        const grandParent = groupHeader.closest('.page__layout__scrollable-content');
        const parent = groupHeader.closest('.operations__group');
        const parentScrollPos = parent.scrollTop;
        if (!parent.classList.contains('collapsed')) {
            grandParent.scrollTo({ top: parentScrollPos, behavior: 'smooth' });
        }
    });
});

searchBarDropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.closest('.search__bar__dropdown').querySelector('.dropdown__selected-value').textContent = item.textContent;
    });
});