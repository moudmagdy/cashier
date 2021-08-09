const cpTabs = document.querySelectorAll('.control-panel__tabs a');
const selectedIndicator = document.querySelector('.selected__indicator');


function loadIndicator() {
    let selectedTab = document.querySelector('.selected--tab');
    let selectedTabLeftPosition = selectedTab.offsetLeft;
    let selectedTabWidth = selectedTab.offsetWidth;
    selectedIndicator.style.left = selectedTabLeftPosition + 'px';
    selectedIndicator.style.width = selectedTabWidth + 'px';
}
window.addEventListener('load', loadIndicator);

window.addEventListener('resize', () => {
    let selectedTab = document.querySelector('.selected--tab');
    let selectedTabLeftPosition = selectedTab.offsetLeft;
    let selectedTabWidth = selectedTab.offsetWidth;
    selectedIndicator.style.left = selectedTabLeftPosition + 'px';
    selectedIndicator.style.width = selectedTabWidth + 'px';
    selectedIndicator.style.transition = 'none';
});

cpTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();


        const tabViewTarget = tab.getAttribute('data-tab');
        if (tabViewTarget == 'spare-parts') {
            document.querySelector('[data-view="spare-parts"]').classList.add('view--shown');
        } else {
            document.querySelector('[data-view="spare-parts"]').classList.remove('view--shown');
        }

        // const viewBackBtn = document.querySelector('.items-search__back-btn');
        // viewBackBtn.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     viewBackBtn.closest('[data-view]').classList.remove('view--shown');
        // });

        const tabLeftPosition = tab.offsetLeft;
        const tabWidth = tab.offsetWidth;
        selectedIndicator.style.left = tabLeftPosition + 'px';
        selectedIndicator.style.width = tabWidth + 'px';
        selectedIndicator.style.transition = 'left 0.3s ease-in-out';

        tab.closest('.control-panel__tabs').querySelector('.selected--tab').classList.remove('selected--tab');
        tab.classList.add('selected--tab');
    });
});