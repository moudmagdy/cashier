import './../components/main-menu.module.js';

const collapseToggles = document.querySelectorAll('.collapse__toggle');
const collapseContainers = document.querySelectorAll('.collapse__container');

collapseContainers.forEach(container => {
    window.addEventListener('load', (e) => {
        container.style.maxHeight = container.scrollHeight + 'px';
    });
});

collapseToggles.forEach(collapseToggle => {
    collapseToggle.addEventListener('click', (e) => {
        e.preventDefault();

        const collapsible = collapseToggle.closest('.collapsible');
        const collapseContainer = collapseToggle.parentNode.nextElementSibling;

        collapsible.classList.toggle('collapsed');

        if (collapsible.classList.contains('collapsed')) {
            collapseContainer.style.maxHeight = 0;
            collapseToggle.setAttribute('aria-expanded', 'false');
        } else {
            collapseContainer.style.maxHeight = collapseContainer.scrollHeight + 'px';
            collapseToggle.setAttribute('aria-expanded', 'true');
        }
    });
});