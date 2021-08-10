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
        document.querySelector('[data-content].content--shown').classList.remove('content--shown');
        document.querySelector('[data-content="' + tabViewTarget + '"]').classList.add('content--shown');

        if (tabViewTarget == 'spare-parts') {
            document.querySelector('main').classList.add('spare-parts--shown');
        } else {
            document.querySelector('main').classList.remove('spare-parts--shown');
        }

        const tabLeftPosition = tab.offsetLeft;
        const tabWidth = tab.offsetWidth;
        selectedIndicator.style.left = tabLeftPosition + 'px';
        selectedIndicator.style.width = tabWidth + 'px';
        selectedIndicator.style.transition = 'left 0.3s ease-in-out';

        tab.closest('.control-panel__tabs').querySelector('.selected--tab').classList.remove('selected--tab');
        tab.classList.add('selected--tab');
    });
});

const sparePartsCloseBtn = document.querySelector('.spare-parts__close-btn');
sparePartsCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('main').classList.remove('spare-parts--shown');
    document.querySelector('.control-panel__tabs .selected--tab').classList.remove('selected--tab');
    document.querySelector('.control-panel__content.content--shown').classList.remove('content--shown');
    document.querySelector('.control-panel__content').classList.add('content--shown');
    document.querySelector('.control-panel__tabs a').classList.add('selected--tab');
    loadIndicator();
});