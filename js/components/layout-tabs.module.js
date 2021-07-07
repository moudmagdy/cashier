const LayoutTabs = document.querySelectorAll('.layout__tabs a');

LayoutTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const tabDataAttr = tab.dataset.tab;

        tab.closest('.layout__tabs').querySelector('.active-tab').classList.remove('active-tab');
        tab.classList.add('active-tab');


        // console.log(document.querySelector('.layout__tab__content[data-tab="' + tabDataAttr + '"]'));

        document.querySelector('.layout__tab__content[data-tab="' + tabDataAttr + '"]').parentNode.querySelector('.layout__tab__content.active-tab').classList.remove('active-tab');
        document.querySelector('.layout__tab__content[data-tab="' + tabDataAttr + '"]').classList.add('active-tab');
    });
});